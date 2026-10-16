// EN-007 close-out verify — contract tests for scripts/compliance-pr-verify.mjs.
//
// Port of the PLX_MC fleet tests (tests/compliance-pr-verify.test.ts) to
// node:test, so this repo runs them with no package.json or dependencies:
//   node --test tests/compliance-pr-verify.test.mjs
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const scriptPath = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "../scripts/compliance-pr-verify.mjs"
);
const { verify } = await import(pathToFileURL(scriptPath).href);

// The newest-check pick from PLX_MC@64ecc2a. The drift workflow pins the
// script bytes; this pins the behavior the bytes must keep.
const NEWEST_CHECK_JQ =
  '[.statusCheckRollup[] | select(.name=="compliance")] | sort_by(.completedAt // .startedAt // "") | last | [.status,(.conclusion//"")] | @tsv';

function recorder(handler) {
  const calls = [];
  const fetch = async (input) => {
    const url = String(input);
    calls.push({ url });
    const r = handler(url);
    return {
      ok: r.ok,
      status: r.status ?? (r.ok ? 200 : 500),
      json: async () => r.json,
    };
  };
  return { fetch, calls };
}

const baseEnv = {
  MC_BASE_URL: "http://mc",
  MC_REPO: "petralabx/furgenics",
  MC_MCP_API_KEY: "test-key",
  MC_OPERATOR_EMAIL: "cos@petrasoap.com",
  MC_PR_NUMBER: "11",
};

const selfCheckOk = {
  ok: true,
  json: { data: { ok: true }, meta: { actor: { repo: "petralabx/furgenics" } } },
};

function ghStub(body, rollup, seen = []) {
  return (args) => {
    seen.push(args);
    const joined = args.join(" ");
    if (joined.includes("statusCheckRollup")) {
      return { status: 0, stdout: rollup + "\n", stderr: "" };
    }
    if (joined.includes("body") || joined.includes(".body")) {
      return { status: 0, stdout: body, stderr: "" };
    }
    return { status: 0, stdout: "", stderr: "" };
  };
}

function evidenceFetch(stage) {
  return recorder((url) => {
    if (url.includes("/self-check")) return selfCheckOk;
    if (url.includes("/context")) {
      return {
        ok: true,
        json: {
          data: {
            tasks: [
              { id: "TASK-883", stage, evidence: { summary: "s", rollback: "r" } },
            ],
          },
        },
      };
    }
    return { ok: true, json: {} };
  });
}

describe("compliance-pr-verify", () => {
  it("fails when actor.repo does not match MC_REPO (decision 3 root cause)", async () => {
    const { fetch } = recorder((url) => {
      if (url.includes("/self-check")) {
        return {
          ok: true,
          json: {
            data: { ok: true },
            meta: { actor: { repo: "petralabx/plx-customer-portal" } },
          },
        };
      }
      return { ok: true, json: {} };
    });
    const logs = [];
    const r = await verify({
      env: baseEnv,
      fetch,
      gh: ghStub("MC-Checkout: dsp_x\nTASK-1", "COMPLETED\tSUCCESS"),
      log: (m) => logs.push(m),
      argv: [],
    });
    assert.equal(r.ok, false);
    assert.ok(logs.some((l) => l.includes("FAIL") && l.includes("actor.repo")));
  });

  it("rejects a PR with no MC-Checkout stamp", async () => {
    const { fetch } = recorder((url) =>
      url.includes("/self-check") ? selfCheckOk : { ok: true, json: { data: { tasks: [] } } }
    );
    const r = await verify({
      env: baseEnv,
      fetch,
      gh: ghStub("## Summary\nnothing", "COMPLETED\tSUCCESS"),
      log: () => {},
      argv: [],
    });
    assert.equal(r.ok, false);
    assert.ok(r.reasons.some((x) => x.includes("no 'MC-Checkout")));
  });

  it("rejects a failing compliance conclusion even when evidence looks fine", async () => {
    const { fetch } = evidenceFetch("review");
    const r = await verify({
      env: baseEnv,
      fetch,
      gh: ghStub("- Task: TASK-883\n- MC-Checkout: dsp_ok", "COMPLETED\tFAILURE"),
      log: () => {},
      argv: [],
    });
    assert.equal(r.ok, false);
    assert.ok(r.reasons.some((x) => x.includes("compliance = FAILURE")));
  });

  it("accepts correct scope + stamp + evidence + green gate", async () => {
    const { fetch } = evidenceFetch("merged");
    const r = await verify({
      env: baseEnv,
      fetch,
      gh: ghStub("- Task: TASK-883\n- MC-Checkout: dsp_ok", "COMPLETED\tSUCCESS"),
      log: () => {},
      argv: [],
    });
    assert.equal(r.ok, true);
  });

  it("defers stamp/gate checks when no PR exists yet", async () => {
    const { fetch } = recorder(() => selfCheckOk);
    const r = await verify({
      env: { ...baseEnv, MC_PR_NUMBER: "" },
      fetch,
      gh: () => ({ status: 0, stdout: "", stderr: "" }),
      log: () => {},
      argv: [],
    });
    assert.equal(r.ok, true);
    assert.equal(r.deferred, true);
  });
});

describe("compliance-pr-verify newest-check pick", () => {
  it("asks gh for the newest compliance check, not the first", async () => {
    const { fetch } = evidenceFetch("review");
    const seen = [];
    await verify({
      env: baseEnv,
      fetch,
      gh: ghStub("- Task: TASK-883\n- MC-Checkout: dsp_ok", "COMPLETED\tSUCCESS", seen),
      log: () => {},
      argv: [],
    });
    const rollupCall = seen.find((args) => args.includes("statusCheckRollup"));
    assert.ok(rollupCall, "verify never queried statusCheckRollup");
    assert.equal(rollupCall[rollupCall.indexOf("--jq") + 1], NEWEST_CHECK_JQ);
  });

  // gh evaluates --jq with gojq. Local jq runs the same expression, so this
  // proves a stale FAILURE no longer hides a later SUCCESS. Skips without jq.
  const hasJq = spawnSync("jq", ["--version"], { encoding: "utf8" }).status === 0;
  it(
    "the jq expression picks the later SUCCESS over a stale FAILURE",
    { skip: hasJq ? false : "jq not on PATH" },
    () => {
      const rollup = {
        statusCheckRollup: [
          {
            name: "compliance",
            status: "COMPLETED",
            conclusion: "FAILURE",
            startedAt: "2026-07-31T20:00:00Z",
            completedAt: "2026-07-31T20:01:00Z",
          },
          { name: "drift", status: "COMPLETED", conclusion: "SUCCESS" },
          {
            name: "compliance",
            status: "COMPLETED",
            conclusion: "SUCCESS",
            startedAt: "2026-07-31T21:00:00Z",
            completedAt: "2026-07-31T21:01:00Z",
          },
        ],
      };
      // The stale FAILURE comes first, which fooled the old first-line select.
      // Run both orders to prove the pick ignores rollup order.
      for (const order of [rollup.statusCheckRollup, [...rollup.statusCheckRollup].reverse()]) {
        const r = spawnSync("jq", ["-r", NEWEST_CHECK_JQ], {
          input: JSON.stringify({ statusCheckRollup: order }),
          encoding: "utf8",
        });
        assert.equal(r.status, 0, r.stderr);
        assert.equal(r.stdout.trim(), "COMPLETED\tSUCCESS");
      }
    }
  );
});
