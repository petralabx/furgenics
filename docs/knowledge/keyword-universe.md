# Furgenics — Keyword Universe

> **Class B (agent proposes, human approves).** The canonical per-brand keyword list: every term we want to rank for, with search volume, difficulty, our current Google position, priority tier, and the URL that should own it. The strategic list (which keywords matter) is human-curated; the current-ranks snapshot is agent-populated.
>
> _Created 2026-06-08 during v2.0 brand-market-context scaffold. See `docs/roadmap-seo-v2.md` §2.1 (keyword rank tracking) + §2.3 (brand-market-context layer). **Status 2026-06-10:** the v2.2 rank tracker is built offline (fixture-tested, no live calls yet) — the canonical-list seed tool (`npm run keyword:seed`) and the `AUTO-UPDATED:keyword-ranks` auto-populate path are ready. **Awaiting go-live** (DataForSEO + Semrush provisioning + live smoke-test): see `docs/runbooks/keyword-rank-go-live.md`. Seeding is hybrid (auto-seed → human curate to 200–500) and lands as a non-auto-merging Class B PR._

## How to use this page

- **Content + audit prioritization:** Read the canonical keyword table. Highest-priority (`P1`) keywords where our position is weak (or `GAP` — no page) are the next page/PDP/optimization candidates.
- **Keyword tracking (v2.2+):** The `AUTO-UPDATED:keyword-ranks` block below holds the latest weekly SERP-position snapshot. The auditor (`src/auditors/keyword-rank.ts`, v2.2) writes it; do not hand-edit inside the markers.
- **Cross-references:** This is the *broad* keyword list (hundreds of terms). [`market-map.md`](./market-map.md) is the *intent landscape* (query → owning URL → gap) and [`target-queries.md`](./target-queries.md) is the 12 tracked **AEO** prompts. Where a keyword maps to a market-map cluster, reference its `id` in the `cluster` column so the three pages stay linked.

**Maintenance.** Stephen edits the canonical table (the strategic list). The ranks block is cron-managed. Adding/removing keywords or changing a priority tier is a Class B change — propose via PR.

## Provider + seeding decisions (locked 2026-06-08)

- **Vendor stack:** **DataForSEO** (SERP rank volume, pay-as-you-go) + **Semrush** (keyword research, difficulty, backlinks — see [`backlinks.md`](./backlinks.md)). The roadmap's "cheapest defensible" best-of-breed pairing. Ahrefs considered but deferred on budget (`docs/roadmap-seo-v2.md` §"External API landscape").
- **Seeding approach:** **Hybrid** — auto-seed from Semrush's "best keywords for this domain" as a starting set, then human-curate down to the **200–500** terms that actually matter for Furgenics' ICP (US+CA professional grooming salons; see [`icp.md`](./icp.md)). Auto-noise (irrelevant/low-value terms) gets trimmed, not tracked.

## Schema (per keyword)

| Field | Values |
|---|---|
| `keyword` | the search term |
| `search_volume` | monthly searches (Semrush; note geo) |
| `difficulty` | keyword difficulty 0–100 (Semrush KD%) |
| `intent` | `informational` · `commercial` · `transactional` |
| `priority` | `P1` (track + optimize now) · `P2` (track) · `P3` (watchlist) |
| `target_url` | URL that should own this keyword, or `GAP` if no page exists |
| `current_position` | latest Google rank (auto-populated, v2.2; `—` until then) |
| `cluster` | matching `market-map.md` query `id` when applicable, else `—` |
| `geo` | `US` · `CA` · `both` |
| `notes` | free-form (e.g. "competitor owns slot 1", "PDP intent mismatch") |

## Priority tiers

- **P1 — track + optimize now.** Commercial/transactional intent, on-strategy for the salon ICP, and either close to a rankable position (top 30, not top 10) or a high-value GAP. These drive v2.4 market-contextualized audits.
- **P2 — track.** On-strategy but lower immediate leverage; monitor position deltas for opportunity.
- **P3 — watchlist.** Informational/long-tail or speculative; tracked thinly, revisited as the content pipeline matures.

## Canonical keyword list

> _Empty pending v2.0 hybrid seed (Semrush auto-seed → human curate). Each row is one keyword per the schema above. Seeding will be proposed as a Class B PR for Stephen's review._

| keyword | search_volume | difficulty | intent | priority | target_url | cluster | geo | notes |
|---|---|---|---|---|---|---|---|---|
| _(awaiting seed)_ | | | | | | | | |

## Current ranks snapshot

> _Auto-populated by the v2.2 keyword-rank auditor on each weekly run. Most recent snapshot only; longitudinal history lives in Supabase `seo_steward.keyword_rankings` + `sources/keyword-runs/`. Do not edit inside the markers._

<!-- AUTO-UPDATED:keyword-ranks:START -->
_No keyword-rank run yet. First snapshot lands when v2.2 (keyword rank tracker) ships and the DataForSEO integration runs._
<!-- AUTO-UPDATED:keyword-ranks:END -->
