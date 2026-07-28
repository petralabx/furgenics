# Furgenics — Market Map

> **Class B (agent proposes, human approves).** The search-intent landscape mapping queries → owning URL → gap. Three lenses on one canonical query data set: cluster-keyed (strategic), URL-keyed (page-tuning), query-keyed (keyword tracking).
>
> _Created 2026-05-08 during v2.0 brand-market-context layer kickoff. See `docs/roadmap-seo-v2.md` §2.3._

## How to use this page

- **Content prioritization (lens 1):** Read the **Open gaps** table. Highest-priority `GAP` queries are the next pillar / PDP / blog candidates.
- **Per-page audit (lens 2):** Read the **Page coverage** table to see what queries each existing URL is targeting and whether intent matches the page type.
- **Keyword tracking (lens 3):** The **canonical query data** below (organized by cluster) is the source of truth. AEO tracker prompt IDs match the `id` column.

**Maintenance.** Canonical data lives in the per-cluster sections at the bottom — that is where Stephen edits. The three summary tables at the top are derived. Today they are hand-maintained; a future Class A `regenMarketMap()` writer (TBD task) will auto-update the marker-bounded blocks below from the canonical sections, the same way `target-queries.md` citation metrics are auto-updated.

## Schema (per query)

| Field | Values |
|---|---|
| `id` | matches existing AEO prompt id (`breed-01`, `coat-01`, etc.); new ids `<cluster>-<n>` for non-tracked queries |
| `text` | the actual query text |
| `intent` | `informational` · `commercial` · `transactional` |
| `funnel` | `TOFU` (awareness) · `MOFU` (consideration) · `BOFU` (decision) |
| `target_url` | URL that should own this query, or `GAP` if no page exists |
| `current_winner` | URL that currently ranks #1 on Google for this query (when known) |
| `priority` | `P1` (ship next) · `P2` (next quarter) · `P3` (someday/maybe) |
| `paid_overlap` | `none` (organic only) · `paid-only` (we run ads but no organic page) · `both` (both lanes active) |
| `geo` | `CA` (Canada-specific intent) · `US` (US-specific intent) · `both` (geo-agnostic). Important for offers that vary by geo (e.g. Groomer Program: free samples in CA, first-order discount in US). |
| `notes` | free-form |

---

## Cluster summary (lens 1: strategic)

<!-- AUTO-UPDATED:cluster-summary:START -->
_Hand-curated until `regenMarketMap` writer ships. Update when adding new clusters or shipping pillars._

| Cluster | Pillar page | Queries tracked | Coverage |
|---|---|---|---|
| breed-doodle | `/pages/best-shampoo-goldendoodle` | 5 | 1/5 owned, 4 gaps |
| breed-double-coat | `/pages/deshedding-shampoo-huskies-german-shepherds` | _TBD_ | _TBD_ |
| breed-other | _none_ | _TBD_ | _TBD_ |
| coat-sensitive | `/pages/oatmeal-aloe-sensitive-skin-dog-shampoo` | _TBD_ | _TBD_ |
| economics-how-to | `/pages/how-to-dilute-dog-shampoo-16-to-1` | 3 | 2/3 owned, 1 gap |
| comparison | `/pages/furgenics-vs-bio-groom` | 5 | 1/5 owned, 4 gaps |
| high-intent-supply | CA: `/pages/bulk-dog-shampoo-for-canadian-mobile-groomers` ✓ · US: GAP | 7 | 1/7 owned, 1 partial, 5 gaps (incl. P2 US sibling pillar) |
| business | CA: GAP (free-samples program) · US: GAP (first-order-discount program) | 6 | 0/6 owned, 2 P1 gaps (geo-split) |
| brand-direct | _none_ — `/about` is implicit | 7 | 0/7 owned dedicated, 1 P1 (`brand-check-01`) |
<!-- AUTO-UPDATED:cluster-summary:END -->

## Page coverage (lens 2: per-URL)

<!-- AUTO-UPDATED:page-coverage:START -->
_Hand-curated until `regenMarketMap` writer ships._

| URL | Queries targeted | Primary intent | Status |
|---|---|---|---|
| `/pages/best-shampoo-goldendoodle` | `breed-01` | commercial / MOFU | Live; pillar |
| `/pages/deshedding-shampoo-huskies-german-shepherds` | `breed-02` | commercial / MOFU | Live; pillar |
| `/pages/oatmeal-aloe-sensitive-skin-dog-shampoo` | `coat-01`, partial `breed-03` | commercial / MOFU | Live; pillar |
| `/pages/how-to-dilute-dog-shampoo-16-to-1` | `how-to-01`, `economics-01` | informational / TOFU + MOFU | Live; pillar; cross-cluster |
| `/pages/furgenics-vs-bio-groom` | `comparison-01`, `high-intent-03` | commercial / BOFU | Live; pillar |
| `/pages/bulk-dog-shampoo-for-canadian-mobile-groomers` | `high-intent-02` | transactional / BOFU | Live; pillar |
| _various PDPs (FUR-001, FUR-011, FUR-013, etc.)_ | _per-product queries_ | commercial / MOFU+BOFU | Live; tune separately |
| `/pages/groomer-program` | `business-01` | commercial / BOFU | Live but noindex; not capturing organic |
<!-- AUTO-UPDATED:page-coverage:END -->

## Open gaps (lens 3: prioritized GAP queries)

<!-- AUTO-UPDATED:open-gaps:START -->
_Hand-curated until `regenMarketMap` writer ships. Re-ranked 2026-05-08 by competitive difficulty (easy-steal first, hard-steal last). Geo-split items in business cluster ship as a pair to capture both markets._

| Rank | Query (id) | Cluster | Geo | Recommended page | Current winner | Difficulty |
|---|---|---|---|---|---|---|
| 1 | `free samples to groomers` (`business-01`) | business | CA | New/repurposed `/pages/groomer-program-canada` (indexable; free-samples offer) | Blog roundup / no dominant pro-brand owner (inferred) | **Easy** |
| 2 | `dog shampoo discount for new grooming salon` (`business-02`) | business | US | New `/pages/groomer-program-usa` (first-order discount offer) | ? (NEW query, SERP not inferred) | Likely-easy |
| 3 | `Is Furgenics a good dog shampoo brand?` (`brand-check-01`) | brand-direct | both | Strengthened `/about` with reviews/testimonials/certifications | `furgenics.com` or third-party review (inferred) | **Easy-mid** (authority play; not content-volume battle) |
| 4 | `bulk dog grooming concentrate USA` + `wholesale dog shampoo for groomers USA` (`hi-supply-05`, `hi-supply-06`) | high-intent-supply | US | New `/pages/bulk-dog-shampoo-for-us-groomers` (mirror of CA pillar) | ? | **Mid** (proven pattern from CA pillar, US-specific signals) |
| 5 | `What's the best professional dog shampoo brand for a grooming salon in 2026?` (`high-intent-01`) | high-intent-supply | both | Broad generic-pro pillar OR strengthened CA pillar | Bio-Groom or industry blog (inferred) | **Hard** — months-long content investment |
| 6 | `best shampoo for labradoodles` (`breed-doodle-02`) | breed-doodle | both | Extend Goldendoodle pillar to "doodle hybrids" or sibling page | ? | Mid |
| 7 | `best shampoo for bernedoodles` (`breed-doodle-03`) | breed-doodle | both | Sibling or expanded pillar | ? | Mid |
| 8 | `What's a good alternative to Coat Handler for a grooming salon?` (`comparison-coat-handler`) | comparison | both | New `/pages/furgenics-vs-coat-handler` | ? | Mid |
| 9 | `best dog shampoo for Poodles` | breed-other | both | New pillar | ? | Mid |
| _later_ | _various Tier-3 informational + breed-other_ | how-to / breed-other / coat-* | _various_ | Blog posts (not yet a published surface) | ? | Varies |
<!-- AUTO-UPDATED:open-gaps:END -->

---

## Canonical query data

> The source-of-truth section. Stephen edits here; the three summary tables above are derived. Each cluster has a header (pillar, scope, coverage), the canonical query table, and notes. Empty cells (`?`) mean we don't yet know — fill in collaboratively.

### Cluster: breed-doodle

- **Pillar page:** `/pages/best-shampoo-goldendoodle` (live since 2026-04-23)
- **Scope:** Goldendoodle, Labradoodle, Bernedoodle, Cavapoo, Cockapoo, and other doodle hybrids. Curly + wavy coats. Often crosses with coat-sensitive (doodle owners are price-sensitive but skin-quality-sensitive).
- **Coverage:** 1/5 owned (`breed-01`); 4 gaps for sibling doodle breeds.

| id | text | intent | funnel | target_url | current_winner | priority | paid_overlap | geo | notes |
|---|---|---|---|---|---|---|---|---|---|
| `breed-01` | What shampoo should a professional groomer use on a Goldendoodle? | commercial | MOFU | `/pages/best-shampoo-goldendoodle` | Furgenics ✓ (per recent run) | P1 | none | both | Tracked AEO prompt; pillar live |
| `breed-doodle-02` | best shampoo for labradoodles | commercial | MOFU | GAP | ? | P2 | none | both | Extend pillar OR sibling page |
| `breed-doodle-03` | best shampoo for bernedoodles | commercial | MOFU | GAP | ? | P2 | none | both | Extend pillar OR sibling page |
| `breed-doodle-04` | how to bathe a goldendoodle | informational | TOFU | GAP | ? | P3 | none | both | Top-of-funnel education; could be blog post |
| `breed-doodle-05` | best dog shampoo for curly coats | commercial | MOFU | partial `/pages/best-shampoo-goldendoodle` | ? | P2 | none | both | Not breed-specific but adjacent; consider weaving into pillar |

### Cluster: breed-double-coat

- **Pillar page:** `/pages/deshedding-shampoo-huskies-german-shepherds` (live since 2026-04-27)
- **Scope:** Huskies, German Shepherds, Golden Retrievers, Australian Shepherds, Border Collies, other heavy-shedding double-coated breeds. Strong overlap with the deshedding-shampoo coat-condition cluster — kept here because owners search by breed.
- **Coverage:** _TBD — fill in collaboratively._

| id | text | intent | funnel | target_url | current_winner | priority | paid_overlap | geo | notes |
|---|---|---|---|---|---|---|---|---|---|
| `breed-02` | What's the best deshedding shampoo for Huskies and German Shepherds? | commercial | MOFU | `/pages/deshedding-shampoo-huskies-german-shepherds` | ? (FURminator dominates this query type) | P1 | none | both | Tracked AEO prompt; pillar live |

_Additional queries to define collaboratively:_
- `best shampoo for Golden Retrievers`
- `best shampoo for Australian Shepherds`
- `deshedding shampoo for double coated dogs` (broader, may belong in coat-deshedding cluster instead)
- _(more)_

### Cluster: breed-other

- **Pillar page:** _none yet_
- **Scope:** Single-breed queries that don't fit doodle or double-coat: Frenchies, Poodles, Labs, Pit Bulls, etc. Often crosses with coat-sensitive (Frenchies' skin issues) or coat-deshedding (Labs).
- **Coverage:** _TBD — fill in collaboratively._

| id | text | intent | funnel | target_url | current_winner | priority | paid_overlap | geo | notes |
|---|---|---|---|---|---|---|---|---|---|
| `breed-03` | Best dog shampoo for French Bulldogs with sensitive skin? | commercial | MOFU | partial `/pages/oatmeal-aloe-sensitive-skin-dog-shampoo` | ? | P2 | none | both | Tracked AEO prompt; could justify own pillar if Frenchie volume is high |

_Additional queries to define collaboratively (Poodles, Labs, Pit Bulls, etc.)._

### Cluster: coat-sensitive

- **Pillar page:** `/pages/oatmeal-aloe-sensitive-skin-dog-shampoo` (live since 2026-04-23)
- **Scope:** Sensitive skin, dry/itchy coat, hypoallergenic, oatmeal/aloe, sulfate-free. Coat-keyed not breed-keyed but cross-references breed-other heavily.
- **Coverage:** _TBD — fill in collaboratively._

| id | text | intent | funnel | target_url | current_winner | priority | paid_overlap | geo | notes |
|---|---|---|---|---|---|---|---|---|---|
| `coat-01` | What's the best oatmeal dog shampoo for dry itchy skin? | commercial | MOFU | `/pages/oatmeal-aloe-sensitive-skin-dog-shampoo` | ? (high-volume; retail dominates) | P1 | none | both | Tracked AEO prompt; pillar live |

_Additional queries to define collaboratively (`hypoallergenic dog shampoo sulfate free`, `shampoo for dry itchy dog skin`, `tearless dog shampoo`, etc.)._

### Cluster: economics-how-to

- **Pillar page:** `/pages/how-to-dilute-dog-shampoo-16-to-1` (live since 2026-04-27)
- **Scope:** Per-bath economics + operational how-to queries. Merged because they share a pillar and reinforce the same sales narrative ("concentrate is cheaper than retail; here's how to use it"). Covers dilution math, gallon math, per-bath cost, application, bathing technique, frequency.
- **Coverage:** 2/3 owned (`how-to-01`, `economics-01` — both via the same pillar); 1 gap.

| id | text | intent | funnel | target_url | current_winner | priority | paid_overlap | geo | notes |
|---|---|---|---|---|---|---|---|---|---|
| `how-to-01` | How do I dilute professional dog shampoo at 16 to 1? | informational | TOFU | `/pages/how-to-dilute-dog-shampoo-16-to-1` | ? | P1 | none | both | Tracked AEO prompt; pillar live |
| `economics-01` | How does a 16:1 dog shampoo concentrate actually save money for a grooming salon? | informational | MOFU | `/pages/how-to-dilute-dog-shampoo-16-to-1` | ? | P1 | none | both | Tracked AEO prompt; pillar covers this but a dedicated economics page is a P3 candidate |
| `economics-how-to-03` | per-bath cost professional dog shampoo | informational | MOFU | GAP | ? | P2 | none | both | Could be its own page or a stronger section in the how-to-dilute pillar |

_Additional queries to define collaboratively (`how often should I bathe a dog`, `how to apply concentrated dog shampoo`, `how much shampoo per bath dog grooming`, etc.)._

### Cluster: comparison

- **Pillar page:** `/pages/furgenics-vs-bio-groom` (live since 2026-04-23)
- **Scope:** Direct competitor comparisons + alternative-to queries. Highest-intent traffic — buyer is in active evaluation.
- **Coverage:** 1/5 owned; 4 gaps for other competitors.

| id | text | intent | funnel | target_url | current_winner | priority | paid_overlap | geo | notes |
|---|---|---|---|---|---|---|---|---|---|
| `comparison-01` | Compare Furgenics to Bio-Groom for a small grooming salon. | commercial | BOFU | `/pages/furgenics-vs-bio-groom` | Furgenics ✓ (per recent run) | P1 | none | both | Tracked AEO prompt; pillar live |
| `high-intent-03` | What's a good alternative to Bio-Groom for a professional grooming salon? | commercial | BOFU | `/pages/furgenics-vs-bio-groom` (partial) | ? | P1 | none | both | Tracked AEO prompt; mostly served by the same pillar |
| `comparison-coat-handler` | What's a good alternative to Coat Handler for a grooming salon? | commercial | BOFU | GAP | ? | P2 | none | both | Coat Handler is the next-most-cited competitor; warrants its own pillar |
| `comparison-chris-christensen` | Chris Christensen alternative for working salon | commercial | BOFU | GAP | ? | P3 | none | both | Chris Christensen is premium/show-coat; smaller TAM but high intent |
| `comparison-natures-specialties` | Nature's Specialties alternative | commercial | BOFU | GAP | ? | P3 | none | both | Long-tail but tracked competitor |

### Cluster: high-intent-supply

- **Pillar pages:**
  - **Canadian:** `/pages/bulk-dog-shampoo-for-canadian-mobile-groomers` (live since 2026-04-23)
  - **US:** _GAP_ — no US-specific bulk-supply pillar yet. P1 candidate to mirror the Canadian pillar with US geo signals.
- **Scope:** Supply / wholesale / bulk / gallon / professional-buy queries. Strong geo dimension — Canadian and US groomers search with different geo modifiers and care about different supply realities (shipping origin, customs, currency, distributor). The Canadian pillar is live and proven; the US sibling is a P1 gap.
- **Coverage:** 1/7 owned (Canadian-specific); 1 broad query partial; 5 gaps.

| id | text | intent | funnel | target_url | current_winner | priority | paid_overlap | geo | notes |
|---|---|---|---|---|---|---|---|---|---|
| `high-intent-01` | What's the best professional dog shampoo brand for a grooming salon in 2026? | commercial | MOFU | partial various | _Likely_ Bio-Groom or industry roundup blog (inferred — Bio-Groom is most-cited per `competitor-intel.md`; verify before ship) | P1 | none | both | Tracked AEO prompt; broad query. **Hard steal** per current_winner inference — needs differentiator (Canadian + 16:1 economics) and content depth. Lower than `business-01` in re-ranked priority. |
| `high-intent-02` | Recommend a bulk dog shampoo for a mobile groomer in Canada. | transactional | BOFU | `/pages/bulk-dog-shampoo-for-canadian-mobile-groomers` | ? | P1 | none | CA | Tracked AEO prompt; pillar live |
| `hi-supply-03` | gallon dog shampoo wholesale | transactional | BOFU | partial `/pages/bulk-dog-shampoo-for-canadian-mobile-groomers` | ? | P2 | none | both | Generic gallon-wholesale; mostly served by the Canadian pillar but US visitors are a leak — argues for US sibling page |
| `hi-supply-04` | professional dog shampoo Canada supplier | commercial | BOFU | `/pages/bulk-dog-shampoo-for-canadian-mobile-groomers` | ? | P2 | none | CA | Long-tail Canadian; pillar serves it |
| `hi-supply-05` | bulk dog grooming concentrate USA | transactional | BOFU | GAP | ? | P2 | none | US | **US sibling pillar gap.** Mirror the Canadian page with US-specific shipping/currency/Groomer-Program-discount messaging. |
| `hi-supply-06` | wholesale dog shampoo for groomers USA | commercial | BOFU | GAP | ? | P2 | none | US | Same US-pillar gap as `hi-supply-05` — likely served by the same page |
| `hi-supply-07` | dog grooming supplies bulk Ontario | transactional | BOFU | partial `/pages/bulk-dog-shampoo-for-canadian-mobile-groomers` | ? | P3 | none | CA | Province-level long-tail; current pillar is broad-Canadian, could add Ontario-specific section if data shows volume |

### Cluster: business

- **Pillar pages:**
  - **Canadian Groomer Program (free samples):** _GAP_ — `/pages/groomer-program` exists but is `noindex`. Decision pending: make existing page indexable as Canadian-specific, OR new `/pages/groomer-program-canada` (or similar). The Canadian program offer is **free samples**.
  - **US Groomer Program (first-order discount):** _GAP_ — needs new page (e.g. `/pages/groomer-program-usa`). The US program offer is **discount on first order**, not samples (per Stephen's strategic segmentation, 2026-05-08).
- **Scope:** Groomer Program (geo-segmented offers), free samples (CA-only), first-order discount (US-only), multi-location accounts, distributor / wholesale, B2B onboarding. Geo segmentation is real and structural — same brand offers different value in different countries.
- **Coverage:** 0 owned (Groomer Program is noindex; geo-split landing pages don't exist yet). Strategic decision pending: how to structure the geo-split (one page geo-routing, two separate pages with cross-links, or three pages — parent + two geo-leaves).

| id | text | intent | funnel | target_url | current_winner | priority | paid_overlap | geo | notes |
|---|---|---|---|---|---|---|---|---|---|
| `business-01` | What professional dog shampoo brands offer free samples to groomers? | commercial | TOFU+MOFU | GAP — Canadian Groomer Program landing page | _Likely_ blog roundup / no dominant pro-brand owner (inferred — "Few pro brands offer free samples" per prompt notes; verify before ship). **Easy steal.** | P1 | none | CA | Tracked AEO prompt. **Now Canada-specific** per geo segmentation (free samples is CA-only). Page strategy: indexable `/pages/groomer-program-canada` linking to product samples + signup form. |
| `business-02` | dog shampoo discount for new grooming salon | commercial | BOFU | GAP — US Groomer Program landing page | ? | P1 | none | US | **NEW** — added during 2026-05-08 geo-segmentation. US offer is first-order discount. Page: `/pages/groomer-program-usa`. Query phrasing is best-guess — "discount" is a value prop, not always a search term; the search-ranking page should target US-supply queries (`hi-supply-05`, `hi-supply-06`) and convert via the discount on-page. |
| `business-03` | wholesale dog shampoo distributor | commercial | MOFU | GAP | ? | P2 | none | both | B2B-distributor query, geo-agnostic at search-intent level. Could be served by a /distributors or /wholesale page. |
| `business-04` | professional dog shampoo for multi-location salon group | commercial | MOFU | GAP | ? | P2 | none | both | Underserved query type; multi-location buyers think differently from single-shop owners (volume-tier pricing, account management). Possible /pages/multi-location-accounts page. |
| `business-05` | best dog shampoo for new grooming salon startup | commercial | MOFU | GAP | ? | P2 | none | both | New-salon onboarding query; bridges to Groomer Program. Could be served by either geo's program page with a "starting your salon?" angle. |
| `business-06` | how to get free dog grooming samples | informational | TOFU | GAP — Canadian Groomer Program | ? | P3 | none | CA | TOFU info-seeking variant of `business-01`. Same target page; the program page should have an FAQ section answering this directly. |

### Cluster: brand-direct

- **Pillar page:** _none_ — root domain + `/about` (existing) implicitly serve this
- **Scope:** Branded queries — when someone already knows "Furgenics" and is verifying, comparing internally, or looking for the story. **Will become more important once retail offering launches** (per Stephen's note 2026-05-08); retail buyers will branded-search before purchase, and the brand page is the conversion surface.
- **Coverage:** 0 dedicated pages; `/about` is implicit catch-all.

| id | text | intent | funnel | target_url | current_winner | priority | paid_overlap | geo | notes |
|---|---|---|---|---|---|---|---|---|---|
| `brand-check-01` | Is Furgenics a good dog shampoo brand? | informational | MOFU | GAP — `/about` (existing) is the closest fit | _Likely_ `furgenics.com` homepage or third-party review site (inferred — branded query, no other-brand competitor; verify before ship). **Authority play.** | P1 | none | both | Tracked AEO prompt. **Strategy: not a content-volume battle** — wins by accumulating review signals, testimonials, certifications, and trust badges on `/about` or a strengthened landing page. Low-effort relative to other P1s. |
| `brand-direct-02` | Furgenics reviews | commercial | MOFU | GAP — could be `/about` or new `/reviews` | ? | P2 | none | both | Direct review-seeking query; conversion-adjacent. If a reviews page exists, schema should mark it as Review/AggregateRating. Otherwise embedded reviews on `/about` fight for ranking. |
| `brand-direct-03` | Furgenics shampoo ingredients | informational | MOFU | partial PDPs (each PDP has ingredients) | ? | P2 | none | both | High-trust query; ingredient-conscious buyer. PDP ingredient sections should be schema-tagged. Could be a parent /ingredients overview page surfacing all SKU-level INCI lists. |
| `brand-direct-04` | Is Furgenics safe for puppies? | informational | MOFU | GAP | ? | P3 | none | both | Safety query; potential trust-builder. Answer depends on SKU (FUR-006-8 puppy sample is in DRAFT per heartbeat). Could be FAQ entry on `/about` or PDP. |
| `brand-direct-05` | where to buy Furgenics | transactional | BOFU | partial root + PDPs | ? | P2 | none | both | **Becomes high-priority when retail launches** — retail-channel buyers will look for buy-points (Amazon, in-store retailers, direct). Today furgenics.com is the only buy-point so root + PDPs serve this; needs a dedicated /where-to-buy when retail expands. |
| `brand-direct-06` | Furgenics shipping to USA | informational | BOFU | partial — covered in shipping policy | ? | P3 | none | US | US-specific operational query; relevant given Amazon FBA fulfillment. Currently a /policies/shipping-policy entry; could surface in main nav. |
| `brand-direct-07` | Furgenics groomer program | commercial | MOFU | partial `/pages/groomer-program` (noindex) | ? | P2 | none | both | Direct branded variant of `business-01`/`business-02`. **Crosses with business cluster** — once geo-split program pages exist, this query routes to a geo-detection landing page or to the parent program page. |

---

## Resolved decisions (2026-05-08)

1. **Cluster cut — 9 clusters confirmed.**
   - `breed-double-coat` absorbs deshedding context (no separate `coat-deshedding` cluster).
   - `economics` + `how-to` merged into `economics-how-to` (share a pillar).
   - `brand-direct` kept — Furgenics has a planned retail offering, so brand-keyed queries will matter.
2. **P1 priorities locked.** `business-01` (Groomer Program indexable), `brand-check-01` (about-page strengthening), `high-intent-01` (broad pro-shampoo pillar). Confirmed by Stephen.
3. **`current_winner` strategy.** Manual fill ONLY for the 3 P1 GAPs (`business-01`, `brand-check-01`, `high-intent-01`) — drives ship-order based on real competitive context. Broader universe waits for v2.2 (DataForSEO/Semrush integration). Initial fill marked `(inferred from competitor-intel.md)` — verify before each ship.
4. **`paid_overlap` is a stub today.** All `none`. Populated when Google Ads campaigns launch and v3 channel-execution layer comes online.

## References

- `target-queries.md` — the 12 tracked AEO prompts (overlaps with this map's `id` column where intent matches)
- `competitor-intel.md` — what competitors own which queries today (informs `current_winner`)
- `icp.md` — segment + persona context for query intent classification
- `products.md` — which SKUs back which clusters (FUR-020 → breed-doodle, FUR-013 → breed-double-coat, etc.)
- `optimization-log.md` — pillar-page ship history; cross-references the `target_url` column
- `docs/roadmap-seo-v2.md` §2.3 — original spec for this page
- `docs/roadmap-seo-v2.md` v3 sketch — channel execution layer that reads `paid_overlap`

## Change log

- **2026-05-08** — Document created during v2.0 brand-market-context layer kickoff. 3 clusters fully populated as exemplars (breed-doodle, comparison, economics-how-to); 6 clusters scaffolded with at least the tracked AEO prompt as anchor and `_TBD — fill collaboratively_` markers for the rest. v3 `paid_overlap` field included per Stephen's flag that the system should grow toward channel-execution. Class B per `docs/roadmap-seo-v2.md` §2.3 — agent proposes updates from research; human approves.
- **2026-05-08** (same session) — Stephen's structural answers applied: merged `economics`+`how-to` clusters; kept `brand-direct` (retail offering planned); P1 priorities locked (`business-01`, `brand-check-01`, `high-intent-01`); `current_winner` strategy = manual fill for P1 GAPs only, broader universe waits for v2.2.
- **2026-05-08** (same session) — Geo-segmentation captured: Groomer Program splits by country (CA = free samples, US = first-order discount). New `geo` field added to schema (`CA`/`US`/`both`). Three P1 clusters fully populated: `business` (with new `business-02` for US program + 4 supporting B2B queries), `brand-direct` (7 queries; retail-launch P2s flagged), `high-intent-supply` (CA pillar live, US sibling pillar identified as P2 GAP). Open gaps table re-ranked by competitive difficulty: ship-order is now `business-01` (easy) → `business-02` (mirror US) → `brand-check-01` (authority play) → US bulk pillar (mid) → `high-intent-01` (hard, deprioritized).
