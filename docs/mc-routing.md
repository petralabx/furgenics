# Mission Control routing metadata

This repo sends pull request metadata to PLX Mission Control (MC) for routing. It runs in routing-only shadow mode. MC records a proposal and an audit event. GitHub shows no candidates and no deep link, and fuzzy auto-link stays off.

## Files

| Path | What it is |
|---|---|
| `.github/workflows/mc-routing-metadata.yml` | Generated workflow. It posts PR metadata to MC over GitHub OIDC. It does no checkout and runs no PR code. Do not hand-edit it. |
| `.github/plx-mc-routing-manifest.json` | Fleet manifest, copied from the PLX_MC template. |
| `.plx/mc-routing.json` | Local manifest: repo slug, `policy_version` `routing.v1`, `fuzzy_auto_link_enabled: false`, default bucket `BKT-INFRA`. |

The PLX_MC scaffold (`scripts/scaffold-tracked-repo.sh --routing-only`) writes all three files. Re-run the scaffold to change them.

## Switches

- **On/off:** the repo variable `PLX_MC_ROUTING_METADATA_ENABLED`. The job runs only when it equals `1`. Any other value, or no value, skips the job.
- **Destination:** the variable or secret `PLX_MC_BASE_URL`. The workflow accepts only `https://mc.plxcustomer.io`.
- **Shadow mode:** the central MC pilot descriptor sets it, not this repo. In shadow, MC returns no candidates and no deep link.
- **Fuzzy auto-link:** off. The local manifest sets `fuzzy_auto_link_enabled: false`, and MC forces it off centrally.

The repo holds no secrets. It names the variables only.

## Rollback

Set the repo variable `PLX_MC_ROUTING_METADATA_ENABLED` to `0`, or delete it. A repo value of `0` overrides an org value. The next PR event skips the job. To remove the files, revert the PR that added them.

## Operator verification

Run these after merge, in order:

1. Confirm `PLX_MC_BASE_URL` resolves to `https://mc.plxcustomer.io` for this repo.
2. Confirm MC trusts GitHub OIDC tokens from `petralabx/furgenics` (audience `plx-mc-compliance-verify`).
3. Set `PLX_MC_ROUTING_METADATA_ENABLED` to `1` on the repo.
4. Open a test PR. Check that the **MC Routing Metadata** job runs and that its summary says "Pull request metadata was recorded by Mission Control." The summary must show no link.
5. In MC, confirm a shadow proposal and an audit event exist for that PR, with no visible candidates and no deep link.
6. Set the variable to `0`. Push to the test PR and confirm the job is skipped. Then close the test PR.
7. Confirm fuzzy auto-link is still off in MC.
