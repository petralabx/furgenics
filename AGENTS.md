# AGENTS.md — Furgenics brand repo

Entry point for any agent or collaborator working in this repo. Read this before generating anything.

## What this repo is

Versioned brand home for **Furgenics** (furgenics.com) — professional dog grooming shampoos for salons and mobile groomers. Primary market CA, secondary US. Live surfaces: **Shopify storefront** (`scg9xy-xt.myshopify.com`) and Amazon (planned/expanding).

- `docs/knowledge/` is the brand knowledge wiki (voice, ICP, products, competitors, FAQ corpus, keyword universe, market map, schema state, filed analyses).
- `copy/` behaves like an archive (append; don't rewrite history casually).
- `site/theme/` holds Shopify theme snippets/config that the theme editor versions poorly.
- `data/config.json` is the brand's steward config snapshot (Shopify domains, SEO/AEO targets, competitor list).

`docs/design-system/` is **out of scope for brand-ops work** — leave it alone unless a dedicated design-system task says otherwise.

## Upstream: the AEO steward

**The `plx-aeo-steward` repo (`brands/furgenics/`) is the operational upstream for the knowledge wiki.** Its crons maintain audits, citation runs, and heartbeat there — those artifacts intentionally do NOT live here. `docs/knowledge/` in this repo is a **snapshot migrated 2026-07-28**; until the steward is repointed at this repo, treat the steward's copy as canonical for machine-maintained pages (keyword ranks, citation metrics, auto-appended analyses) and this repo as canonical for human-owned brand pages going forward. Flag divergence rather than silently overwriting either side.

## Source-of-truth rules

- `docs/knowledge/products.md` is the canonical product roster (9 gallon SKUs + samples, active/draft state). Shopify PDPs and generated copy sync **from** it. If surfaces disagree, verify against live Shopify and fix `products.md` first.
- `docs/knowledge/business-identity.md` is canonical for name/address/email — every draft referencing the business pulls from here.
- Ownership classes in the wiki are load-bearing: **Class C pages are human-only** (brand-voice, ICP, business-identity, content-style-guide); Class B pages need human approval for semantic changes. Respect the class noted on each page.
- Pricing in content goes through the token snippet system (`[[PRICE]]` / `[[VALUE]]` / `[[COMPETITOR]]` / `[[DISCOUNT]]`) — see `docs/knowledge/content-style-guide.md`. Never hardcode prices in drafts.

## Hard guardrails

1. **Never put COGS, fees, margins, or any internal financial figures in this repo** or in content generated from it. Retail prices are fine.
2. **Claims compliance:** no drug/veterinary claims (treats, cures, heals). The "free of sulfates" claim was removed brand-wide pending INCI cleanup — do not reintroduce it in new copy.
3. Competitor comparisons (e.g. vs Bio-Groom) follow the style guide's pricing/comparison rules — factual, token-driven, no disparagement.
4. **API keys and secrets never enter this repo** — env var names in `data/config.json` are references only; values live in the steward's environment / GitHub Actions Secrets.
5. Do not invent Shopify theme/metafield structures — use `site/theme/` and the schema/token conventions in the wiki; fetch live theme state when in doubt.
6. Import MC task discipline: agent PRs stamp `MC-Checkout: <task-id>` when driven from an MC task (repo is currently soft-gated).

## Workflow discipline

- **Start of session:** `git checkout main && git pull`, then read the latest entries in `docs/sessions.md` (and skim `docs/knowledge/log.md` / relevant `analyses/` when the work touches SEO/AEO).
- Copy changes to live surfaces (Shopify pages, PDPs, theme) go through PR review — never direct to `main`.
- New approved copy lands in `copy/`; experiments and defects get logged in the wiki's `optimization-log.md` / `log.md`.
- Catalog changes: update `docs/knowledge/products.md` first, then PDP/theme files.
- **End of session / before merge:** append a short entry to `docs/sessions.md` in the same PR (who, PR, done, next, watch). Deep write-ups still go in `docs/knowledge/analyses/`.

## Repo map

| Path | What lives there |
|---|---|
| `docs/sessions.md` | Append-only session handoff (read first, write last) |
| `docs/knowledge/` | Brand knowledge wiki (see `index.md` for the full catalog + ownership classes) |
| `docs/knowledge/analyses/` | Filed analysis/session write-ups (append via index conventions) |
| `docs/design-system/` | Separate — do not modify for brand-ops tasks |
| `copy/content-drafts/` | Shopify page + PDP drafts (md + rendered html per page) |
| `site/theme/` | Shopify theme snippets (liquid) + settings schema |
| `data/config.json` | Brand steward config snapshot (domains, SEO/AEO, competitors) |
