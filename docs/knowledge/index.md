# Furgenics — knowledge index

> Catalog of every page in this wiki.  
> **Core pages** and **Outside this directory** sections are hand-maintained.  
> **Analyses** is agent-maintained via `upsertIndexEntry` — do not edit between the `AUTO-APPEND:analyses` markers, it gets mutated.
>
> _Last hand-touched: 2026-04-23 (v1 content-ship session — content-drafts directory + Shopify theme docs added)_

## Core pages

| Page | Summary | Owner |
|---|---|---|
| [backlinks.md](./backlinks.md) | Incoming-link profile + competitor backlink gaps + outreach pipeline. Scaffold (2026-06-08, v2.0); summary auto-populated from v2.3. Provider: Semrush. | Class B (agent proposes, human approves) |
| [brand-voice.md](./brand-voice.md) | Voice rules, forbidden terms, tone guardrails. | **Class C (human-only)** |
| [business-identity.md](./business-identity.md) | Canonical business identity (name, address 90 Moyal Ct Concord ON, email info@furgenics.com, no phone). Every draft that references the business must pull from here. Structured-data JSON-LD shape captured. | **Class C (human-owned)** |
| [competitor-intel.md](./competitor-intel.md) | Tracked competitors across professional salon + Amazon retail channels. 20 brands as of 2026-04-23 (expanded from 12): Bio-Groom, Coat Handler, Chris Christensen, South Bark, Nature's Specialties, Tropiclean Pro, iGroom, Warren London, Bubble Bros, Bark2Basics, PetAg, We Love Doodles, Earthbath, Isle of Dogs, #1 All Systems, Iv San Bernard, FURminator, Les Poochs, Wahl Professional Animal, Show Season. | Mostly LLM |
| [content-style-guide.md](./content-style-guide.md) | Pricing / competitor / value-math snippet API + rules for treating pricing in content (C + Markets path, 2026-05-20). Every page draft must follow these conventions. | **Class C (human-owned)** |
| [faq-corpus.md](./faq-corpus.md) | Canonical Q&A pool. Source for FAQPage schema on PDPs. | LLM (tone-tuned by humans) |
| [icp.md](./icp.md) | Ideal Customer Profile. Target segments across geography, channel, sub-type, size, persona. US+CA grooming salons, all sizes. | **Class C (human-only)** |
| [keyword-universe.md](./keyword-universe.md) | Canonical keyword list (volume, difficulty, position, priority, target URL). Scaffold (2026-06-08, v2.0) awaiting hybrid seed; ranks block auto-populated from v2.2. Provider: DataForSEO + Semrush. | Class B (agent proposes, human approves) |
| [market-map.md](./market-map.md) | Search-intent landscape — queries → owning URL → gap. 10 clusters, three lenses (cluster / URL / query). Source for content prioritization, per-page audits, future keyword tracking. | Class B (agent proposes, human approves) |
| [optimization-log.md](./optimization-log.md) | Ship log + auto-fix log. Auto-fix block agent-written; content-ship entries human-written. | Mixed |
| [products.md](./products.md) | Canonical product roster (9 active gallons + 8 samples). SKUs, ingredients, positioning, active/draft state. | Mostly LLM; semantic changes are Class B |
| [schema-state.md](./schema-state.md) | What structured data is actually deployed in the Shopify theme right now. v3 deployed. | LLM keeps in sync with `config.json` |
| [target-queries.md](./target-queries.md) | 12 tracked AEO prompts across 6 tiers + auto-updated citation-metrics block. | Strategy human; metrics LLM |

## Operational files

| Page | Purpose |
|---|---|
| [log.md](./log.md) | Greppable chronological timeline. `grep "^## \[" log.md \| tail -20` for recent events. |
| [README.md](./README.md) | Human navigation guide for this knowledge base. |
| [index.md](./index.md) | This file. |
| [analyses/README.md](./analyses/README.md) | Filing rules for query answers. |

## Analyses

> _Filed query answers. Newest first. Managed by `upsertIndexEntry`._

<!-- AUTO-APPEND:analyses:START -->

- [PDP accordion implementation review and session handoff](./analyses/2026-07-28-pdp-accordion-implementation-review.md) — filed 2026-07-28 as `synthesis` · End-of-session review of the unpublished duplicate-theme rollout: accordion restructure and style unification, redundant metafield-row retirement, token/schema changes, economics + market-aware Groomer Program CTA, and related-products enablement are documented with preview/branch/PR state; SEO parity judged likely but not guaranteed; launch held for inventory/compare-at-price defects, sulfate-free and medical-adjacent claims still present across Shopify surfaces, incomplete catalog-wide section ordering, brittle post-serialization Product JSON-LD substitution, missing FAQ focus state, hidden legacy accordion markup, generic recommendations, and policy/schema divergence; prioritized P0/P1/P2 next-session decision list included

- [PDP accordion template — one unified, purchase-decision-ordered accordion](./analyses/2026-07-28-pdp-accordion-template-proposal.md) — filed 2026-07-28 as `brief` · Stephen request 2026-07-28 (PDP UX task 1 of 2) — live review of two PDPs found ~700 words of open description text stacked above a partially-duplicative six-row metafield accordion; proposal: split the token-substituted description at `<h2>` boundaries server-side via new `site/theme/snippets/description-accordion.liquid` (opener stays visible for AEO; each H2 section becomes a `<details>` row; INCI row injected from `custom.full_ingredients` so bands merge into ONE accordion; five redundant collapsible-tab rows retired), rows ordered by the groomer purchase-decision sequence (coat/breed fit → competitor comparison → dilution/directions → INCI → chemistry → shipping/program); SEO maintained because all content stays server-rendered in the DOM with unchanged H2 outline and untouched FAQPage JSON-LD + token pipeline; deshedding-shampoo drafts reordered as the v3 exemplar (with FUR-013 "sulfate-free" claim removed per brand-wide compliance rule); live-review defects filed: raw unsubstituted `[[PRICE:oatmeal-aloe-shampoo-gallon]]` on FUR-001 PDP, compare-at price ($18.04) rendering below sale price ($34.99) on both PDPs checked, products.md price staleness flagged

- [Token-substitution extraction + FAQ-metafield architecture — 4 surfaces unified, 9 SKUs tokenized](./analyses/2026-05-27-token-substitution-extraction-and-faq-architecture.md) — filed 2026-05-27 as `synthesis` · Claude Code extracted the inline token-substitution pipeline (previously duplicated across `main-product.liquid` + `main-page-pillar.liquid`) into a single shared snippet `snippets/token-substitution.liquid` and wired two new call sites — visible FAQ accordion + FAQPage JSON-LD schema (with `strip_html` before `json` so Google reads clean text); all 9 active gallon products' `custom.faqs` metafields rewritten via Shopify MCP to use the same `[[PRICE]]` / `[[VALUE]]` / `[[COMPETITOR]]` / `[[DISCOUNT]]` token vocabulary as page bodies; FAQ metafield type confirmed as `json` accepting array of `{q,a}`; US Markets $19 USD override bug confirmed not theme-side (zero `retail_price_*` references in live theme) and resolved by Stephen outside the theme post-handoff; FUR-014 price divergence to $29.99 CAD surfaced from MCP response; FUR-001 `furgenics.*` namespace duplicate metafields flagged for cleanup; pillar template's `product` variable shadowing fixed as side effect (`tprod` namespacing); schema OnlineStore "free of sulfates" claim removed brand-wide pending INCI cleanup; token surface area now four files driven by one source of truth

- [PDP token-conversion project — 9 PDPs shipped, INCI findings, staleness items](./analyses/2026-05-21-pdp-token-conversion.md) — filed 2026-05-21 as `synthesis` · 3-session PDP rewrite project converting 9 Furgenics gallon PDP descriptions from hardcoded prose to bracket-token syntax; all 9 pushed live (7 ACTIVE, 2 DRAFT); 12 of 13 available competitor token slugs used; surfaced 2 sulfate-free claim mismatches (FUR-013 + FUR-005), 1 lavender INCI placeholder (FUR-050), 2 wiki status-field staleness items (FUR-020 + FUR-050), 5 bonus-actives polish candidates; conditioner-category token coverage gap captured for optional future theme work

- [Content quick wins shipped — 7 fixes across 6 pages (email bug + ToS + About + FAQs template)](./analyses/2026-05-20-content-quick-wins-shipped.md) — filed 2026-05-20 as `analysis` · Stephen confirmation 2026-05-20 that fixes #1-7 from the live-pillar-content-audit recommendation were all shipped via Shopify admin

- [Live pillar content audit — 6 pillars pulled, email bug + pricing inventory + Markets-ready assessment](./analyses/2026-05-20-live-pillar-content-audit.md) — filed 2026-05-20 as `analysis` · Stephen query 2026-05-20 — kicking off the snippet-driven mass rewrite of all content pages; pulled live content via MCP read-shopify-page

- [Email cleanup audit — the wrong email is in your structured data](./analyses/2026-05-05-email-cleanup-audit.md) — filed 2026-05-05 as `analysis` · Phase A read-tool audit found 2 theme assets and 6 pillar pages need updating; the schema.liquid finding (Organization JSON-LD has wrong email) is the highest-leverage fix because it's in structured data AI engines read; coverage gaps documented (policies scope missing, REST rate limiting capped theme scan at 20%)

- [May 3 Sunday cron review — pillar pages haven't moved the needle yet](./analyses/2026-05-05-may3-cron-review.md) — filed 2026-05-05 as `synthesis` · First review of cron output post-pillar-page publishes; 16.7% mention rate within April 22 baseline band, only the Bio-Groom comparison page picked up by Perplexity, indexing lag still plausible but tightening; May 10 cron is the gating data point

- [30-day content roadmap 2026-04-27 to 2026-05-27](./analyses/2026-04-27-30day-content-roadmap.md) — filed 2026-04-27 as `brief` · Stephen request 2026-04-27 — strategic synthesis off 2026-04-22 baseline, 2026-04-23 session summary, tracked.json, products.md, heartbeat.md

- [2026-04-23 v1 content-ship session summary](./analyses/2026-04-23-v1-content-ship-session.md) — filed 2026-04-23 as `synthesis` · End-of-session handoff covering Vercel/Supabase debugging closure, Shopify theme template deployment, four tier-1 pillar pages shipped, and how to read Sunday 2026-04-26's first autonomous cron output

- [Furgenics AEO baseline (2026-04-22)](./analyses/furgenics-aeo-baseline-2026-04-22.md) — filed 2026-04-22 as `synthesis` · First Phase D baseline from three citation runs; 14-18% mention rate, 0% unaided recall, Perplexity the only engine finding the brand

- [Furgenics Amazon retail competitive landscape (Jan 2026 snapshot)](./analyses/furgenics-amazon-retail-landscape.md) — filed 2026-04-22 as `synthesis` · Synthesized from GTM Amazon workbook ingest

- [Karpathy's LLM-wiki pattern, applied to plx-aeo-steward](./analyses/karpathy-wiki-pattern-applied.md) — filed 2026-04-21 as `synthesis` · Ingested Karpathy's llm-wiki.md during Phase G

<!-- AUTO-APPEND:analyses:END -->

## Outside this directory

| Path | What |
|---|---|
| [`../heartbeat.md`](../heartbeat.md) | Always-current context anchor. Read this first in any session. |
| [`../config.json`](../config.json) | Machine-readable brand config. Includes `schemaDeployment` block and `aeo.competitorBrands` (20 tracked as of 2026-04-23). |
| [`../prompts/tracked.json`](../prompts/tracked.json) | The 12 tracked AEO prompts. |
| [`../content-drafts/`](../content-drafts/) | Pillar page drafts (markdown canonical + HTML Shopify-paste versions). Contains `_template.md` / `_template.html` scaffolds and a README documenting the workflow. As of 2026-04-23: canadian-mobile-groomers, furgenics-vs-bio-groom, best-shampoo-goldendoodle, oatmeal-aloe-sensitive-skin-dog-shampoo. **(Note: index entry is stale — also contains deshedding-shampoo-huskies-german-shepherds and how-to-dilute-dog-shampoo-16-to-1 pillars from April 27 ships, plus the full `content-drafts/products/` directory with 9 PDP rewrites from May 21.)** |
| [`../sources/`](../sources/) | Immutable raw layer — audit reports, citation runs, external research. |
| [`../sources/external-research/articles/2026-04-21-karpathy-llm-wiki.md`](../sources/external-research/articles/2026-04-21-karpathy-llm-wiki.md) | The founding reference for this whole architecture. |
| [`../sources/external-research/spreadsheets/2026-04-22-furgenics-target-segments.md`](../sources/external-research/spreadsheets/2026-04-22-furgenics-target-segments.md) | Target segments matrix (archived from Furgenic_Target_Segments.xlsx). |
| [`../sources/external-research/spreadsheets/2026-04-22-furgenics-gtm-amazon.md`](../sources/external-research/spreadsheets/2026-04-22-furgenics-gtm-amazon.md) | GTM Amazon competitive + product data (archived from Furgenics_-_GTM_Amazon__01-22-26_.xlsx). |

## Outside the brand directory (repo-level)

| Path | What |
|---|---|
| [`/docs/shopify-theme/`](../../../docs/shopify-theme/) | Source-of-truth copies of custom Shopify theme files deployed to `scg9xy-xt.myshopify.com`. Includes `templates/page.content-pillar.json` and `sections/main-page-pillar.liquid`. README covers install + maintenance workflow. Live on Shopify as of 2026-04-23. |
| [`/docs/architecture-decisions.md`](../../../docs/architecture-decisions.md) | ADRs for the whole steward. Most recently revised: ADR-005 (separate Supabase projects), ADR-014 (structural linter accepted). |
| [`/docs/roadmap-seo-v2.md`](../../../docs/roadmap-seo-v2.md) | Deferred SEO scope for v2. Starting context for when v2 kicks off — don't start the v2 scoping conversation from zero. |
| [`/CLAUDE.md`](../../../CLAUDE.md) | Schema-layer doc for agents working in this repo. Class A/B/C file taxonomy, daily workflows, writer surface. |

## How to use this index

- Glance at **Core pages** when you need to find where a fact lives.
- Glance at **Analyses** when you suspect the question has already been answered.
- If you notice this index disagrees with `knowledge/` on-disk, run `npm run knowledge:lint furgenics` — structural lint surfaces drift first (ADR-014), semantic LLM-lint catches contradictions second.
- Self-heal index drift with `npm run wiki:rebuild-index furgenics` or the `rebuild-index` MCP tool.
