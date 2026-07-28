# Furgenics — Backlinks

> **Class B (agent proposes, human approves).** Tracks Furgenics' incoming-link profile (earning? losing? who?), competitor backlink gaps (domains linking to them but not us), and the outreach pipeline for PR/partnership link acquisition. The current-state summary is agent-populated; the outreach pipeline + relationship judgments are human-owned.
>
> _Created 2026-06-08 during v2.0 brand-market-context scaffold. See `docs/roadmap-seo-v2.md` §2.2 (backlink tracking + acquisition workflow). **Awaiting data** — the summary block is auto-populated starting v2.3; the prospect list + outreach log are human-maintained and can begin anytime._

## How to use this page

- **Profile health (v2.3+):** Read the `AUTO-UPDATED:backlink-summary` block for the current referring-domain count, new/lost links since last run, and top referring domains by authority. The auditor (`src/auditors/backlinks.ts`, v2.3) writes it weekly; do not hand-edit inside the markers.
- **Acquisition pipeline:** Read the **Outreach targets** table for prospect domains, their value, and outreach status. This is where PR/partnership work is planned and tracked.
- **Competitive gaps:** The summary block's competitive mode surfaces domains linking to tracked competitors (see [`competitor-intel.md`](./competitor-intel.md)) but not to us — those become outreach targets.

**Maintenance.** Stephen owns the **Outreach targets** table and relationship-value calls. The summary block is cron-managed. Adding a prospect or changing outreach status is a Class B change — propose via PR. High-value targets may also generate Class B outreach-email draft proposals (v2.2 §2.2 optional path).

## Provider decision (locked 2026-06-08)

- **Backlink data:** **Semrush** (part of the chosen DataForSEO + Semrush stack — see [`keyword-universe.md`](./keyword-universe.md)). Second-largest backlink index, sufficient for our scale; avoids the standalone Ahrefs subscription cost. Majestic considered as a cheaper-per-query specialist but not selected.

## Schema (per outreach target)

| Field | Values |
|---|---|
| `domain` | the prospect's root domain |
| `authority` | domain authority / rating (Semrush AS, 0–100) |
| `relevance` | `high` · `med` · `low` — fit to the grooming-salon ICP |
| `link_type` | `editorial` · `directory` · `partnership` · `guest-post` · `pr` |
| `status` | `prospect` · `contacted` · `negotiating` · `won` · `lost` · `passive` |
| `value` | free-form relationship/value note |
| `source` | how we found it (`competitor-gap` · `manual` · `inbound`) |

## Outreach targets

> _Empty pending human curation. Competitive-gap rows auto-suggested by v2.3; editorial/partnership targets added by Stephen. Each row is one prospect per the schema above._

| domain | authority | relevance | link_type | status | value | source |
|---|---|---|---|---|---|---|
| _(none yet)_ | | | | | | |

## Backlink profile summary

> _Auto-populated by the v2.3 backlink auditor on each weekly run. Current state only; longitudinal history lives in Supabase + `sources/` archives. Do not edit inside the markers._

<!-- AUTO-UPDATED:backlink-summary:START -->
_No backlink run yet. First summary lands when v2.3 (backlink tracker) ships and the Semrush integration runs._
<!-- AUTO-UPDATED:backlink-summary:END -->

## Outreach log

> _Append-only, most-recent-first. One entry per outreach action (sent, replied, won, lost). Agent-appended when outreach proposals are actioned; hand-appended for manual outreach. Do not edit prior entries inside the markers._

<!-- AUTO-APPEND:outreach-log:START -->
_No outreach actions logged yet._
<!-- AUTO-APPEND:outreach-log:END -->
