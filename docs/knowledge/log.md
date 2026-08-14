# Furgenics — operations log

> Chronological timeline of every operation the system has performed or recorded. Append-only. Most recent first. Uses the Karpathy greppable format: `## [ISO_DATETIME] type | title`.
>
> Parse: `grep "^## \[" log.md | tail -20`
>
> Types: `ingest` · `audit` · `citation-run` · `lint` · `query` · `fix` · `ship` · `infra`

<!-- AUTO-APPEND:timeline:START -->

## [2026-08-14T19:00:00Z] ship | Phase 2 theme files pushed to unpublished duplicate #152547065995

- `shopify theme push --nodelete --only` of `snippets/description-accordion.liquid`, `snippets/product-at-a-glance.liquid`, `snippets/furgenics-product-faqs.liquid`, `sections/main-product.liquid` to **Copy of Copy of scg9xy-xt** (`#152547065995`). Live `#150922428555` remained `[live]`; nothing published.
- Preview `https://furgenics.com/products/deshedding-shampoo?preview_theme_id=152547065995`: 2×2 chip-strip, comparison card below accordion, FAQ `page-width` gutter, original testimonial layout. v4 body + faqs v2 still pending MCP.

## [2026-08-14T18:45:00Z] ship | PDP Phase 2 built repo-side: 4-section accordion + comparison card + chip strip + display titles

- Filed `analyses/2026-08-14-pdp-phase2-build.md`. Dandylion reference adoptions per Stephen's go-ahead: accordion snippet v2 (INCI merge + comparison extraction, simulation-verified against v4/v3/no-H2 bodies), v4 deshedding exemplar draft, curated custom.faqs v2 (12→9 with FUR20 manual-entry + CA 2–5 / US 3–5 shipping fixes), at-a-glance chip strip, custom.display_title + eyebrow theme support (inert until metafield created), proposed short titles for 9 SKUs in products.md (Class B, awaiting approval).
- Nothing pushed to Shopify from this session (VM predates the theme token); deploy + MCP content-push sequence in the brief. Prerequisite flagged: August competitor price refresh (captures are 2026-05 vintage).

## [2026-08-14T17:40:00Z] ship | buy-buttons.liquid alignment fix pushed to unpublished duplicate #152547065995

- `shopify theme push --nodelete --only snippets/buy-buttons.liquid` to **Copy of Copy of scg9xy-xt** (`#152547065995`). Live `#150922428555` remained `[live]`; nothing published. Remote file matches repo.
- Rendered preview `https://furgenics.com/products/deshedding-shampoo?preview_theme_id=152547065995` at 1440px and 390px: Add to cart full-width solid teal `rgb(1, 69, 102)` with arrow `calc(100% - 20px)`; Apply for salon pricing outlined secondary stacked below; edges aligned.

## [2026-08-14T18:00:00Z] ship | PDP Phase 1 pushed to unpublished duplicate theme #152547065995

- `shopify theme push --nodelete --only` of `sections/main-product.liquid`, `templates/product.json`, `snippets/description-accordion.liquid`, `snippets/furgenics-product-faqs.liquid`, `snippets/product-at-a-glance.liquid`, `snippets/sticky-atc.liquid` to **Copy of Copy of scg9xy-xt** (`#152547065995`). Live theme `#150922428555` was not pushed or published.
- Pulled and versioned `snippets/buy-buttons.liquid`; restyled Add to cart to `button--primary` full-width; wholesale button → outlined secondary link **Apply for salon pricing** (Klaviyo `.wholesale-product` hook preserved).
- Preview: `https://scg9xy-xt.myshopify.com/products/deshedding-shampoo?preview_theme_id=152547065995` — verified deshedding + deshedding conditioner, CA/US. Search & Discovery complementary pairings still pending (admin).

## [2026-08-14T17:15:00Z] fix | Sulfate question resolved: formulas ARE sulfate-free, published INCI lists are wrong

- R&D confirmation via Stephen 2026-08-14. Reverses the assumed fix direction: the `sulfate-free` claim (removed brand-wide 2026-05-27) was correct; the Sodium Laureth Sulfate entries in `custom.full_ingredients` (FUR-013, FUR-005 at minimum) are ingredient-list errors.
- Fix sequence documented in products.md catalog issue 9: corrected INCI from R&D → metafield push via Claude MCP → live verification → claim reinstatement across all surfaces → AGENTS.md guardrail update. Claim must NOT return before the metafields are fixed.
- Blocking input: corrected ingredient lists from R&D (and confirmation of which of the 9 SKUs are affected).

## [2026-08-14T16:30:00Z] query | PDP Phase 1 built repo-side + external feedback decisions recorded

- Filed `analyses/2026-08-14-pdp-phase1-buybox.md`: external design-review assessment, Stephen's five decisions (canonical shipping CA 2–5 / US 3–5 business days; FUR20 manual entry — FAQ "works automatically" wording is wrong, sweep pending; claims substantiated via 60+ groomer testing; sulfate claim held pending formulation truth; review app choice pending).
- Phase 1 theme changes committed to `site/theme/` on PR #5: buy-box reorder, at-a-glance spec panel with computed $/working gallon, mobile sticky ATC, quantity controls restored, duplicate H2 title + static rating image + hidden legacy accordion removed, testimonial compacted, complementary bundle block, accordion focus-visible/reduced-motion fixes. Deploy to duplicate theme #152547065995 pending (needs token-equipped run + buy-buttons.liquid pull).

## [2026-07-28T19:26:00Z] query | PDP accordion implementation reviewed and end-of-session handoff filed

- Filed `analyses/2026-07-28-pdp-accordion-implementation-review.md`, documenting every duplicate-theme/repo change, preview + branch + PR state, SEO/AEO parity assessment, launch blockers, and prioritized next-session decisions.
- Unpublished duplicate `Copy of Copy of scg9xy-xt` (`#152547065995`) remains the only Shopify theme changed; live theme was not pushed or published. Current preview is linked in the analysis.
- Recommendation: do not publish yet. P0s are inventory/market availability, inverted compare-at pricing, cross-surface sulfate-free and medical-adjacent claims, catalog-wide purchase-order rollout, buy-box order, Product JSON-LD safety, and FAQ keyboard focus.
- This is a review/handoff entry, not a live `ship`; `optimization-log.md` remains unchanged until an approved theme reaches production.

## [2026-07-28T17:45:00Z] query | PDP accordion-template proposal filed + live PDP review defects

- Filed `analyses/2026-07-28-pdp-accordion-template-proposal.md` (Stephen request, PDP UX task 1 of 2): restructure PDP descriptions into one unified purchase-decision-ordered accordion via new `site/theme/snippets/description-accordion.liquid`; deshedding-shampoo drafts reordered as v3 exemplar.
- Defects observed on live PDPs during the review (not yet fixed): (1) raw unsubstituted `[[PRICE:oatmeal-aloe-shampoo-gallon]]` token rendering on `/products/hypoallergenic-shampoo-gallon` "How it compares" section; (2) compare-at price ($18.04 USD) strikes through BELOW the sale price ($34.99 USD) on both PDPs checked — stale `compare_at_price` in Shopify admin; (3) FUR-013 live description still carries the retired "sulfate-free" claim (fixed in the v3 draft, live push pending).
- Wiki divergence flagged, not overwritten: products.md $24.99 CAD baseline vs live $34.99 USD.

## [2026-06-28T03:07:45.585Z] audit | Full audit: 50 findings (10H/36M/2L/2I), 0 auto-fixed

- Auditors run: schema-deployment, alt-text, freshness, answer-block, citation-tracker
- Duration: 404s
- Report: sources/audit-reports/2026-06-28-6989d956.json

## [2026-06-28T03:01:03.780Z] citation-run | 46 queries across 12 prompts: 8 mentioned, 1 cited

- Engines run: chatgpt, perplexity, claude, gemini
- No engines skipped
- Archive: sources/citation-runs/2026-06-28-4d0c7fd8.json

## [2026-06-21T03:07:01.848Z] audit | Full audit: 50 findings (12H/34M/2L/2I), 0 auto-fixed

- Auditors run: schema-deployment, alt-text, freshness, answer-block, citation-tracker
- Duration: 401s
- Report: sources/audit-reports/2026-06-21-a0333e93.json

## [2026-06-21T03:00:23.831Z] citation-run | 48 queries across 12 prompts: 8 mentioned, 1 cited

- Engines run: chatgpt, perplexity, claude, gemini
- No engines skipped
- Archive: sources/citation-runs/2026-06-21-7d09588c.json

## [2026-06-14T03:08:07.001Z] audit | Full audit: 51 findings (12H/35M/2L/2I), 0 auto-fixed

- Auditors run: schema-deployment, alt-text, freshness, answer-block, citation-tracker
- Duration: 486s
- Report: sources/audit-reports/2026-06-14-06e21ab0.json

## [2026-06-14T03:00:03.660Z] citation-run | 48 queries across 12 prompts: 8 mentioned, 1 cited

- Engines run: chatgpt, perplexity, claude, gemini
- No engines skipped
- Archive: sources/citation-runs/2026-06-14-6c9587f1.json

## [2026-06-08T21:00:00Z] infra | v2.0 scaffold: keyword-universe.md + backlinks.md created (Class B)

- v2 (SEO) kickoff. Added the two remaining v2.0 brand-market-context pages (icp.md + market-map.md already existed): `keyword-universe.md` (canonical keyword list + AUTO-UPDATED:keyword-ranks block awaiting v2.2) and `backlinks.md` (outreach pipeline + AUTO-UPDATED:backlink-summary + AUTO-APPEND:outreach-log blocks awaiting v2.3).
- Decisions locked this session: vendor stack = DataForSEO + Semrush (Ahrefs deferred on budget); keyword seeding = hybrid (Semrush auto-seed → human curate to 200–500). Recorded in both page headers.
- No external APIs touched (v2.0 is scaffold-only). Next: hybrid seed of the keyword list as a Class B PR, then v2.2 keyword rank tracker. See `docs/roadmap-seo-v2.md`.

## [2026-06-07T03:07:25.980Z] audit | Full audit: 52 findings (12H/36M/2L/2I), 0 auto-fixed

- Auditors run: schema-deployment, alt-text, freshness, answer-block, citation-tracker
- Duration: 397s
- Report: sources/audit-reports/2026-06-07-f679e1e8.json

## [2026-06-07T03:00:51.304Z] citation-run | 48 queries across 12 prompts: 8 mentioned, 1 cited

- Engines run: chatgpt, perplexity, claude, gemini
- No engines skipped
- Archive: sources/citation-runs/2026-06-07-ab6b290b.json

## [2026-05-28T18:53:19.389Z] infra | Phase 2a Task 3 acceptance — brand-scoped routing regression check

- R
- o
- u
- t
- i
- n
- e
-  
- l
- o
- g
-  
- e
- n
- t
- r
- y
-  
- t
- o
-  
- v
- a
- l
- i
- d
- a
- t
- e
-  
- t
- h
- a
- t
-  
- t
- h
- e
-  
- b
- r
- a
- n
- d
- -
- s
- c
- o
- p
- e
- d
-  
- r
- e
- v
- i
- e
- w
- e
- r
-  
- p
- a
- t
- h
-  
- s
- t
- i
- l
- l
-  
- w
- o
- r
- k
- s
-  
- a
- f
- t
- e
- r
-  
- t
- h
- e
-  
- P
- h
- a
- s
- e
-  
- 2
- a
-  
- r
- o
- u
- t
- i
- n
- g
-  
- c
- h
- a
- n
- g
- e
- .
- 

- 

- E
- x
- p
- e
- c
- t
- e
- d
-  
- r
- e
- v
- i
- e
- w
- e
- r
-  
- b
- e
- h
- a
- v
- i
- o
- r
- :
-  
- w
- o
- r
- k
- f
- l
- o
- w
-  
- i
- d
- e
- n
- t
- i
- f
- i
- e
- s
-  
- b
- r
- a
- n
- d
- =
- f
- u
- r
- g
- e
- n
- i
- c
- s
-  
- f
- r
- o
- m
-  
- t
- h
- e
-  
- d
- i
- f
- f
- ,
-  
- l
- o
- a
- d
- s
-  
- b
- r
- a
- n
- d
- s
- /
- f
- u
- r
- g
- e
- n
- i
- c
- s
- /
- r
- e
- v
- i
- e
- w
- -
- c
- o
- n
- f
- i
- g
- .
- m
- d
- ,
-  
- l
- a
- b
- e
- l
- s
-  
- a
- g
- e
- n
- t
- -
- r
- e
- v
- i
- e
- w
- e
- d
-  
- (
- m
- a
- t
- c
- h
- e
- s
-  
- F
- u
- r
- g
- e
- n
- i
- c
- s
- '
-  
- a
- u
- t
- o
- -
- a
- p
- p
- r
- o
- v
- e
-  
- c
- r
- i
- t
- e
- r
- i
- o
- n
-  
- #
- 1
- :
-  
- l
- o
- g
-  
- a
- p
- p
- e
- n
- d
-  
- i
- n
-  
- K
- a
- r
- p
- a
- t
- h
- y
-  
- f
- o
- r
- m
- a
- t
- )
- .
- 

- 

- G
- e
- n
- e
- r
- a
- t
- e
- d
-  
- b
- y
-  
- s
- c
- r
- i
- p
- t
- s
- /
- t
- m
- p
- -
- t
- a
- s
- k
- 3
- -
- a
- c
- c
- e
- p
- t
- a
- n
- c
- e
- .
- t
- s
- .

## [2026-05-05T16:00:00Z] query | Filed analysis: May 3 Sunday cron review — pillar pages haven't moved the needle yet

- Path: knowledge/analyses/2026-05-05-may3-cron-review.md
- Kind: synthesis
- Source: Stephen query 2026-05-05 (first review of cron data post-pillar-page publishes)
- Retroactive log entry filed 2026-05-28 via Class B to resolve a long-standing filed-not-logged finding from the structural linter (ADR-014). Analysis itself was filed on 2026-05-05 and is unchanged; this entry only adds the log reference.

## [2026-05-20T18:33:44Z] query | Filed analysis: Live pillar content audit — 6 pillars pulled, email bug + pricing inventory + Markets-ready assessment

- Path: knowledge/analyses/2026-05-20-live-pillar-content-audit.md
- Kind: analysis
- Source: Stephen query 2026-05-20 (C+Markets rewrite kickoff)
- Retroactive log entry filed 2026-05-28 via Class B to resolve a long-standing filed-not-logged finding from the structural linter (ADR-014). Analysis itself was filed on 2026-05-20 and is unchanged; this entry only adds the log reference.

## [2026-05-20T18:47:52Z] query | Filed analysis: Content quick wins shipped — 7 fixes across 6 pages (email bug + ToS + About + FAQs template)

- Path: knowledge/analyses/2026-05-20-content-quick-wins-shipped.md
- Kind: analysis
- Source: Stephen query 2026-05-20 (post-quick-wins ship)
- Retroactive log entry filed 2026-05-28 via Class B to resolve a long-standing filed-not-logged finding from the structural linter (ADR-014). Analysis itself was filed on 2026-05-20 and is unchanged; this entry only adds the log reference.

## [2026-05-28T13:23:06.021Z] query | Filed analysis: Class B Phase 1 end-to-end validation marker (Task 8 routine path)

- Path: knowledge/analyses/2026-05-28-class-b-phase-1-e2e-validation.md (synthetic)
- Kind: validation
- Source: Task 8 of docs/plans/2026-05-22-class-b-writeback-phase-1.md (routine-path test)
- Expected reviewer outcome: agent-reviewed (routine log append matching auto-approve criterion #1).

## [2026-05-27T18:30:00Z] ship | FAQ metafield tokenization complete (9 SKUs)

- All 9 active Furgenics gallon products' `custom.faqs` metafields rewritten via Shopify MCP `update-product` to use the shared token vocabulary (`[[PRICE:handle]]` / `[[VALUE:key]]` / `[[COMPETITOR:slug]]` / `[[DISCOUNT]]`). Pilot FUR-001 verified clean on both `/en-ca/` and `/en-us/` (accordion substituted values + JSON-LD schema clean text via `strip_html`). Batch FUR-005, FUR-010, FUR-011, FUR-013, FUR-014, FUR-020 (DRAFT), FUR-021, FUR-050 (DRAFT) all pushed in this session, each on first attempt.
- Render surfaces the FAQ metafield now drives via token substitution: (a) visible FAQ accordion in `snippets/furgenics-product-faqs.liquid`, (b) FAQPage JSON-LD schema in `snippets/furgenics-schema.liquid` (with `strip_html | json` so `acceptedAnswer.text` is clean for Google). Both paths read from the same `custom.faqs` metafield and both pipe `faq.q` / `faq.a` through the shared `snippets/token-substitution.liquid` snippet before emitting. Per-product FAQ shape: ~11–13 questions = 3–5 product-specific opening Qs + 5-question universal tail (discount, made-in-NA, shipping, return, wholesale); emails standardized to `info@furgenics.com`.
- Metafield type used: `json` accepting JSON-stringified array of `{q,a}` objects. Shopify upserts by namespace+key (no explicit `id` field required). MCP `get-product-by-id` does NOT return `custom.faqs` in its metafield payload — verification has to be done on the live PDP, not via API round-trip.
- Sidebar findings: FUR-014 variant CAD price diverged to $29.99 (corrected in `products.md`; `[[PRICE:deshedding-conditioner]]` token absorbed the change automatically); FUR-001 has duplicate `furgenics.dilution_ratio` + `furgenics.working_gallons_per_bottle` metafields in the `furgenics.*` namespace alongside `custom.*` versions on other SKUs — all dormant post-tokenization, batch-delete candidates.
- US Markets $19 USD override bug confirmed NOT theme-side per Claude Code's exhaustive grep (zero `retail_price_*` / `cost_per_working_gallon` / `public_offer` / `gated_offer` references anywhere in live theme); Stephen resolved outside the theme in this session. The unstructured pricing metafields (`custom.retail_price_*` etc.) are confirmed dormant dead data, not actively overriding. Catalogued in `products.md` "Dormant unstructured metafields" section for the future metafield batch-delete pass.
- Full after-action analysis filed at `analyses/2026-05-27-token-substitution-extraction-and-faq-architecture.md`. `content-style-guide.md` and `products.md` were pre-staged with 2026-05-27 entries describing the 4-surface architecture and dormant-metafield catalog; this commit closes the loop by filing the analysis both other docs reference.

## [2026-05-24T03:06:49.973Z] audit | Full audit: 50 findings (12H/35M/1L/2I), 0 auto-fixed

- Auditors run: schema-deployment, alt-text, freshness, answer-block, citation-tracker
- Duration: 404s
- Report: sources/audit-reports/2026-05-24-518c85ec.json

## [2026-05-24T03:00:07.417Z] citation-run | 48 queries across 12 prompts: 8 mentioned, 2 cited

- Engines run: chatgpt, perplexity, claude, gemini
- No engines skipped
- Archive: sources/citation-runs/2026-05-24-b3cd66b1.json

## [2026-05-22T17:05:00Z] infra | Retroactive log entries for 2 filed-not-logged analyses (lint cleanup)

- Resolves the 2 LOW filed-not-logged findings from the 2026-05-22 orchestrated structural lint run.
- Naming the files so the structural linter's substring match (analyses/<filename> per src/knowledge/structural-linter.ts:248–249) is satisfied: knowledge/analyses/karpathy-wiki-pattern-applied.md (synthesis filed 2026-04-21 during Phase G) and knowledge/analyses/2026-05-05-email-cleanup-audit.md (analysis filed 2026-05-05).
- Both analyses themselves are unchanged; this entry only adds the log reference. ADR-014 structural linter end-to-end validated on real drift.
- Post-fix lint: 0 findings.

## [2026-05-21T19:30:00Z] query | Filed analysis: PDP token-conversion project — 9 PDPs shipped, INCI findings, staleness items

- Path: knowledge/analyses/2026-05-21-pdp-token-conversion.md
- Kind: synthesis
- Source: 3-session PDP rewrite project converting 9 Furgenics gallon PDP descriptions from hardcoded prose to bracket-token syntax. Drafted across Sessions 1, 2, 3 on 2026-05-21.
- Headline: all 9 PDPs pushed live (7 ACTIVE, 2 DRAFT). 12 of 13 available competitor token slugs used across the project. INCI verification surfaced 2 sulfate-free claim mismatches (FUR-013 known from Session 1, FUR-005 newly discovered Session 3), 1 lavender-essential-oil INCI placeholder (FUR-050), confirmation that 2 "TEST" INCI flags in products.md are stale (FUR-001 + FUR-011 both have real INCI). 2 status-field staleness items (FUR-020 + FUR-050 both DRAFT in Shopify but ACTIVE in products.md). 5 bonus-actives polish candidates carried forward. Conditioner-category competitor token coverage gap captured for future theme work.

<!-- AUTO-APPEND:timeline:END -->

## Conventions

When appending to this log, keep to the format above:

1. Heading line exactly `## [ISO_DATETIME] type | one-line-title` — no trailing colons, no extra punctuation before the `|`.
2. Body: 0–5 lines of bullets describing what happened. Link to sources/ artifacts where applicable.
3. Blank line before the next entry.

Agent writes to this file happen via `appendWikiLog(brand, entry)` in `src/knowledge/writer.ts`. Don't hand-edit inside the marker block — the writer prepends there.
