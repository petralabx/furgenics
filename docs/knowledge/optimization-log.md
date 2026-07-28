# Furgenics — Optimization Log

> Append-only record of every change made to Furgenics' live state (Shopify, theme, content). Auto-fixes are logged by the audit orchestrator (agent-written). Content ships — PDP rewrites, new pages, blog posts, schema updates — are logged by Stephen (human-written).
>
> **Why this file exists.** We want to answer: "did shipping the `/furgenics-vs-bio-groom` page move `comparison-01` mention rate from 0% → 40%?" The answer requires a diffable log of what changed when, correlated with the citation-runs table in Supabase. This file is half of that (the what + when); the Supabase `seo_steward.citation_runs` table is the other half (the did-it-work signal), and `sources/citation-runs/` holds the raw JSON snapshots.

## How this file is maintained

**Auto-fix log (below)** is agent-written, append-only, most-recent-first. Everything between the `<!-- AUTO-APPEND:autofix-log:START/END -->` markers is mutated by `src/knowledge/writer.ts` on each audit run. Do not edit inside the markers — manual edits will be overwritten. See `docs/wiki-wiring-plan.md` for the Class A / B / C model.

**Content ship log (further below)** is human-written. When you (or an agent via approved PR) ship content, add a dated entry with:
- **Date** (ISO)
- **Change type:** `pdp-rewrite` | `new-page` | `blog-post` | `schema-update` | `theme-change` | `metafield-update` | `config-change` | `infra`
- **Affected resources:** product IDs, page handles, snippet paths, etc.
- **Target prompts:** which tracked prompt IDs (from `prompts/tracked.json`) or target queries (from `target-queries.md`) this aims to move
- **Expected impact:** 1-2 sentences on what you think will happen
- **Observed impact:** filled in 2-4 weeks later after citation-runs data is in Supabase. Leave as `TBD` initially.

## Auto-fix log (agent-written, append-only)

<!-- The block between the markers below is managed by src/knowledge/writer.ts. Most recent entry first. Do not edit inside the markers. -->

<!-- AUTO-APPEND:autofix-log:START -->

### 2026-06-28 — Audit run `6989d956`

- Findings: **50** total (10 high, 36 medium, 2 low, 2 info)
- Auto-fixes applied: **0**
  - No auto-fixes applied this run.

### 2026-06-21 — Audit run `a0333e93`

- Findings: **50** total (12 high, 34 medium, 2 low, 2 info)
- Auto-fixes applied: **0**
  - No auto-fixes applied this run.

### 2026-06-14 — Audit run `06e21ab0`

- Findings: **51** total (12 high, 35 medium, 2 low, 2 info)
- Auto-fixes applied: **0**
  - No auto-fixes applied this run.

### 2026-06-07 — Audit run `f679e1e8`

- Findings: **52** total (12 high, 36 medium, 2 low, 2 info)
- Auto-fixes applied: **0**
  - No auto-fixes applied this run.

### 2026-05-24 — Audit run `518c85ec`

- Findings: **50** total (12 high, 35 medium, 1 low, 2 info)
- Auto-fixes applied: **0**
  - No auto-fixes applied this run.

### 2026-05-17 — Audit run `e7a01442`

- Findings: **55** total (9 high, 44 medium, 0 low, 2 info)
- Auto-fixes applied: **0**
  - No auto-fixes applied this run.

### 2026-05-10 — Audit run `c6127ba7`

- Findings: **53** total (12 high, 39 medium, 0 low, 2 info)
- Auto-fixes applied: **0**
  - No auto-fixes applied this run.

### 2026-05-08 — Audit run `78c8ef56`

- Findings: **55** total (9 high, 44 medium, 0 low, 2 info)
- Auto-fixes applied: **0**
  - No auto-fixes applied this run.

### 2026-05-08 — Audit run `154d4ed3`

- Findings: **55** total (10 high, 43 medium, 0 low, 2 info)
- Auto-fixes applied: **0**
  - No auto-fixes applied this run.

_No audit runs have landed since this file was created. The first run will populate this section._

<!-- AUTO-APPEND:autofix-log:END -->

## Content ship log (human-written)

Add entries below as content ships. Most recent first.

---

### 2026-05-20 — Content quick wins sweep (7 fixes shipped)
- **Change type:** mix of `pdp-rewrite` (email bug fixes), `legal-update` (ToS), `content-edit` (About Us), `theme-change` (FAQs template)
- **Affected resources:**
  - **3 pillar pages** — `/pages/furgenics-vs-bio-groom`, `/pages/best-shampoo-goldendoodle`, `/pages/oatmeal-aloe-sensitive-skin-dog-shampoo`. Broken `mailto:hello@furgenics.com` link replaced with `mailto:info@furgenics.com`. Displayed text was already correct (per 2026-05-05 email cleanup); only the link target was wrong on these 3 pages.
  - **`/pages/terms-and-conditions` Section 24** — completed mailing address to `Furgenics, 90 Moyal Ct, Concord, Ontario L4K 4R8, Canada` (was vague `Vaughan, Ontario, Canada`).
  - **`/pages/terms-and-conditions` Section 6** — generalized away from hardcoded `FUR50 (50% off your first order, maximum four gallons, one use per customer)` framing. New opener says "The specific code, discount percentage, eligibility, maximum order quantity, and other limits are displayed at the time of offer and at checkout." Bullet-pointed rules below the opener kept verbatim. Lets campaign codes rotate (FUR50 → FUR20 → SUMMER25) without requiring legal-doc revisions.
  - **`/pages/about-us`** — removed hardcoded `at $40–60 per gallon equivalent` from the "Why we exist" paragraph. Surrounding "ultra-premium imports" framing kept.
  - **`/pages/faqs`** — template switched from `Default page` to `page.content-pillar` so future Liquid snippet additions render. Content unchanged.
- **Target prompts:** none directly — defect fixes + Markets-readiness prep, not new positioning.
- **Expected impact:**
  1. Email bug fix recovers any conversions previously dropped by the broken `mailto:` (the `hello@furgenics.com` mailbox doesn't exist; clicks were silent failures across the 3 affected pillars).
  2. ToS legal completeness — full postal address reduces risk in class-action / indemnification scenarios (Section 17 limits liability to $100 CAD or 12 months of purchases; Section 18 includes animal-harm indemnification).
  3. ToS Section 6 generalization unblocks campaign rotations (the C+Markets `discount-banner` snippet pulls active code/percent from theme settings — no legal-doc edit needed when the campaign changes).
  4. About Us hardcoded `$40-60` removal aligns with `content-style-guide.md` rule: no hardcoded competitor benchmarks without explicit `as_of` annotation.
  5. FAQs template change is a prerequisite for adding `value-math` snippets ("16:1", "17 working gallons") in a future edit.
- **Observed impact:** TBD — defect fixes don't have a measurable citation/conversion lift; these unblock the subsequent C+Markets snippet rewrites.
- **Filed analyses:** `analyses/2026-05-20-live-pillar-content-audit.md` (initial findings), `analyses/2026-05-20-content-quick-wins-shipped.md` (this sweep).
- **Surfaced by:** Live MCP `read-shopify-page` audit kicked off 2026-05-20 to prepare for snippet-driven rewrites of all content pages.

---

### 2026-04-22 — Phase H: Karpathy completeness — structural linter + MCP v0.2.0 + ADR-014
- **Change type:** `infra`
- **Affected resources:**
  - `src/knowledge/structural-linter.ts` (new, ~15KB, commit `e663b3a`) — six deterministic checks: `marker-integrity`, `broken-link`, `orphan-page`, `index-drift-missing-entry`, `index-drift-stale-entry`, `filed-not-logged`. Severity-graded HIGH / MEDIUM / LOW. Stack-based marker parser, stat-checked link resolution, inbound-link graph for orphan detection, index ↔ disk reconciliation.
  - `src/knowledge/writer.ts` — added `rebuildIndex(brand)` Class A recovery writer (commit `e663b3a`). Scans `knowledge/analyses/` on disk and reconciles with the `AUTO-APPEND:analyses` block in `index.md`; derives entry metadata from H1 + mtime; prunes stale bullets. One-shot fix for `index-drift-*` findings. Returns `RebuildIndexOutcome { ok, added, removed, kept }`.
  - `src/knowledge/reader.ts` + `src/brands.ts` (commit `e663b3a`) — `loadBrandKnowledge` now defaults to `{ excludeMeta: true, includeSubdirs: true }`, matching the long-standing CLI comment and unblocking the structural linter's `analyses/` scan. `loadAllKnowledge` exposes the same opts. Backward-compatible via optional params; existing callers unchanged.
  - `src/cli/knowledge-lint.ts` — this was the file already importing `structural-linter.ts` on main; the import now resolves. Orchestrated two-stage (structural first, semantic only on clean) with `--structural-only` flag. HIGH-severity structural findings skip the semantic stage.
  - `src/mcp/server.ts` — bumped 0.1.0 → 0.2.0 in commit `c8b10e8`. **Six new tools:** `file-analysis`, `archive-external-source`, `read-wiki-index`, `read-wiki-log`, `rebuild-index`, `lint-structural`. Existing `lint-knowledge` tool upgraded to orchestrated two-stage with `structuralOnly` param. Total MCP surface: **13 tools**.
  - `docs/architecture-decisions.md` — ADR-014 flipped from planned → **ACCEPTED**, with full context / decision / consequences / references / status block.
  - `docs/ingest-workflow.md` (new) — canonical six-step runbook for integrating external sources into a brand's wiki. Referenced from `CLAUDE.md` and ADR-010.
  - `CLAUDE.md` — new "Daily workflows" section covering ingest / query / lint / recovery flows. Class A writer list updated to include `fileAnalysis` + `rebuildIndex`. Reference list gains `docs/ingest-workflow.md`. Footer version bumped to 1.1.
- **Target prompts:** none directly — infrastructure.
- **Expected impact:**
  (a) Lint is now deterministic-first, API-based-second — cheaper, reproducible, runs in CI without an Anthropic key.
  (b) Index drift detection and recovery ship together: `lint-structural` finds it, `rebuild-index` fixes it in one MCP call.
  (c) MCP surface at v0.2.0 gives Claude Desktop sessions direct wiki read / write / lint tools — the "ask Stephen to run a CLI" step is removed for the common operations (file-analysis ingest, read-wiki-index, read-wiki-log, lint-structural, rebuild-index).
  (d) `docs/ingest-workflow.md` gives any LLM session (including this one) a single canonical reference for "how do I integrate this thing" — previously the knowledge was spread across ADR-010, `wiki-wiring-plan.md`, and `CLAUDE.md`. Closes the largest remaining gap vs Karpathy's pattern.
  (e) Main branch was broken before Phase H.1 (`knowledge-lint.ts` imported a file that didn't exist on disk). H.1 fixed it. `npm run knowledge:lint furgenics` now resolves end-to-end.
- **Observed impact:** TBD after `git pull origin main --rebase`, `npm run build`, `npx vitest run`, and `npm run knowledge:lint furgenics`. Expected: structural stage reports clean (or flags real drift); if clean, semantic stage runs. Verify the six new MCP tools show up in Claude Desktop after Phase F config (or after restarting Claude Desktop if Phase F already done).

### 2026-04-21 — Phase G.1: upsertIndexEntry + Karpathy doc ingest
- **Change type:** `infra` (code) + first real ingest of external research
- **Affected resources:**
  - `src/knowledge/writer.ts` — added `upsertIndexEntry` (Class A: appends bullet to index.md analyses block) and `fileAnalysis` convenience wrapper (filePage + upsertIndexEntry + appendWikiLog in one call).
  - `brands/furgenics/knowledge/index.md` — restructured to separate hand-maintained Core/Outside sections from agent-maintained AUTO-APPEND:analyses block.
  - `brands/furgenics/sources/external-research/articles/2026-04-21-karpathy-llm-wiki.md` (new) — verbatim Karpathy source, the founding reference this whole architecture is based on.
  - `brands/furgenics/knowledge/analyses/karpathy-wiki-pattern-applied.md` (new) — synthesis page mapping Karpathy's pattern to what we adopted, adapted, and skipped.
  - `brands/furgenics/knowledge/log.md` — two new entries (ingest + query) inside the timeline marker block.
- **Target prompts:** none directly. Infrastructure.
- **Expected impact:** (a) Demonstrates the full Karpathy loop end-to-end (ingest → synthesis → index + log) working on real content. (b) `fileAnalysis` is now the canonical "query answer becomes wiki page" entry point for MCP tools and future chat flows. (c) The Karpathy source doc is now in the brand's memory where future sessions can find it without re-reading the chat.
- **Observed impact:** TBD. Next session that asks "why is the repo shaped this way?" should find the synthesis page via index.md and read it instead of rediscovering.

### 2026-04-21 — Karpathy alignment (Phase G)
- **Change type:** `infra`
- **Affected resources:**
  - `CLAUDE.md` (new) — root-level schema entry point for any LLM session
  - `docs/wiki-schema.md` (new) — formal spec of the three-layer architecture
  - `docs/architecture-decisions.md` — ADR-010 added (Karpathy alignment)
  - `docs/wiki-wiring-plan.md` — updated to reflect ingest/query/lint triad + sources layer
  - `brands/furgenics/knowledge/index.md` (new) — LLM-maintained page catalog
  - `brands/furgenics/knowledge/log.md` (new) — greppable chronological timeline
  - `brands/furgenics/knowledge/README.md` (new) — human navigation guide
  - `brands/furgenics/knowledge/analyses/README.md` (new) — filing rules for query answers
  - `brands/furgenics/sources/README.md` (new) + 3 subdir READMEs — raw immutable layer
  - `src/knowledge/archiver.ts` (new) — `archiveAuditReport` + `archiveCitationRun`
  - `src/knowledge/writer.ts` — added `appendWikiLog` + `filePage` (Class A)
  - `src/auditors/index.ts` — now archives reports + appends to log.md
  - `src/aeo/citation-tracker.ts` — now archives runs + appends to log.md
- **Target prompts:** none directly — infrastructure. Indirectly: every future run compounds into the wiki + raw layer.
- **Expected impact:** (a) Every audit and citation run now leaves a durable trail in git (not just Supabase). (b) Fresh Claude sessions start with CLAUDE.md orientation — cheaper context ramp. (c) When Supabase schema changes (ADR-008 revision), old data in `sources/citation-runs/` can be re-loaded. (d) Query answers can be filed as durable wiki pages via `filePage`, letting explorations compound.
- **Observed impact:** TBD — verify on next `npm run audit furgenics` that `sources/audit-reports/<date>-<runId>.json` is created and `knowledge/log.md` gets an `audit` entry appended inside the timeline marker block.

### 2026-04-21 — Wiki-wiring foundation (Phase 5, ADR-009)
- **Change type:** `infra` + `config-change`
- **Affected resources:**
  - `brands/furgenics/config.json` — added `schemaDeployment` block with `expectedVersionMarker: "v3"`
  - `brands/furgenics/knowledge/schema-state.md` — rewrote to reflect v3 deployed reality + v4 planned candidates
  - `brands/furgenics/knowledge/competitor-intel.md` — updated stale v4 reference → v3
  - `brands/furgenics/knowledge/target-queries.md` — added marker-bounded auto-metrics block + strategic narrative section
  - `brands/furgenics/knowledge/optimization-log.md` — this file (created)
  - `src/knowledge/writer.ts` — new module with Class A writers (`appendAutoFixLog`, `updateCitationMetricsTable`)
  - `src/auditors/schema-deployment.ts` — now reads `schemaDeployment` from brand config instead of a hardcoded map
  - `src/auditors/index.ts` — calls `appendAutoFixLog` after each audit
  - `src/aeo/citation-tracker.ts` — calls `updateCitationMetricsTable` after each run
  - `docs/wiki-wiring-plan.md` (new) — design doc (Class A/B/C model)
  - `docs/architecture-decisions.md` — ADR-009 added
- **Target prompts:** none directly — infrastructure. Indirectly: every tracked prompt gets accurate longitudinal tracking starting next run.
- **Expected impact:** (a) the HIGH-severity `schema-version-mismatch` finding on Furgenics should clear on next audit (auditor now expects v3, matches deployed reality). (b) Every future audit + citation run updates the wiki, making "what's currently true" answerable from git history instead of Supabase queries. (c) Sets up Class B (propose-not-commit) as the next natural architectural step.
- **Observed impact:** TBD — verify on next audit run after commit lands.

### 2026-04-21 — Initial alt-text auto-fix pass (22 images)
- **Change type:** `metafield-update` (alt text is a media attribute)
- **Affected resources:** 22 images across gallon PDPs — "Oatmeal & Aloe Professional Dog Grooming Shampoo Gallon", "Hypoallergenic Dog Shampoo Gallon", "Deep Moisturizing Dog Conditioner Gallon", and others (full list in `audits/2026-04-21-audit.json`)
- **Target prompts:** indirectly — alt text contributes to image SEO which affects image-search citations and accessibility signals. No single tracked prompt is expected to move from alt text alone.
- **Expected impact:** Modest image-search visibility lift over 30-60 days as Google re-crawls. Not a driver of AEO citation change.
- **Observed impact:** TBD.

### 2026-04-21 — v3 schema deployment
- **Change type:** `schema-update`
- **Affected resources:** `snippets/furgenics-schema.liquid` in Shopify main theme
- **Target prompts:** all — schema changes are foundational
- **Expected impact:** Fixes Google Merchant "Invalid country code" rejection (was: `"Canada"`, now: `"CA"`). Correctly represents refund-only return policy. Removes Petra Lab-X from structured data (brand privacy rule). Accurate fulfillment reality in shippingDetails improves Merchant Center acceptance.
- **Observed impact:** GSC Merchant Center acceptance — TBD over 24-48h crawl cycle.

---

## Change log

- **2026-04-21 (Phase 5)** — Document created alongside the Class A wiki-writer implementation. Seeded with three historical entries (v3 schema, alt-text auto-fix, wiki-wiring commit) so the log has useful baseline context.
- **2026-04-21 (Phase G)** — Added Karpathy alignment entry. Updated header note to reference `sources/citation-runs/` for raw JSON snapshots.
- **2026-04-21 (Phase G.1)** — Added entry for upsertIndexEntry + first real ingest (Karpathy doc as external research).
- **2026-04-22 (Phase H)** — Added Karpathy-completeness entry covering structural linter (H.1, `e663b3a`), MCP v0.2.0 (H.2, `c8b10e8`), and doc closeout (H.3, this commit).
