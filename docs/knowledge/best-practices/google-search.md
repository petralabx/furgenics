# Google Search — Furgenics specialization

> Furgenics-specific Google Search tactics. **Read the cross-brand baseline at `knowledge/best-practices/google-search.md` first** — this doc covers Furgenics-specific overrides and dog-grooming-specific tactics that extend (not replace) the baseline.

## Furgenics' Google Search reality

As of 2026-05, Furgenics' best-performing organic search page per GSC is the "Furgenics vs Bio-Groom" comparison pillar. This is the strategic anchor — comparison pillars work, and the next phase is to expand the comparison-pillar cluster ("vs Coat Handler," "vs FURminator") which is already in flight via the Claude Desktop handoff.

The audience splits two ways and both matter for Google Search:

1. **Pro-groomers** — Google queries like:
   - "best concentrated dog shampoo for salons"
   - "dilution ratio dog shampoo gallon"
   - "professional dog shampoo brands"
   - "[competitor name] vs [other competitor]" — pro-groomers research extensively
2. **Discerning pet owners** — Google queries like:
   - "best dog shampoo for [coat type]"
   - "salon quality dog shampoo at home"
   - "is professional dog shampoo safe for home use"

Most "best dog shampoo" SERP results are dominated by affiliate-roundup sites (Wirecutter, NYMag, etc.) — those are not winnable head-on. Furgenics' Google opportunity is to win the **comparison + technical-detail queries** that affiliate sites cover shallowly.

## What overrides the baseline

### 1. Comparison pillars are the highest-leverage content

The baseline `google-search.md` mentions comparison pages as a growth tactic. For Furgenics, they're **the** growth tactic, not one of several. Reasoning:

- Pro-groomers research comparatively (it's a considered purchase with real per-wash cost implications)
- Comparison queries have unambiguous commercial intent (vs roundup queries which often go to affiliate sites)
- Comparison content is heavily cited by AEO engines (see the AEO doc) — reinforces both channels
- The "vs Bio-Groom" pillar already proved the pattern works for Furgenics specifically

**Furgenics override:** Plan comparison content **before** general informational content. The roadmap: vs Bio-Groom (done) → vs Coat Handler (in flight) → vs FURminator (in flight) → vs Iv San Bernard → vs #1 All Systems → vs [next emerging competitor].

### 2. Technical-detail content (dilution math, per-wash cost) is high-leverage

The baseline mentions "original data" as a growth tactic. For Furgenics, the highest-leverage proprietary data is:

- **Per-wash cost math** — Furgenics' concentrated formula yields N washes per gallon; competitor's formula yields M. Per-wash cost is a hard number that ranks well, gets cited by AEO engines, and ends up in groomer-facing buying conversations.
- **Dilution ratio + use case mapping** — "for X coat type at Y wash frequency, use dilution Z."
- **Formulation distinctives** — what's actually in the shampoo and why it matters for specific coat types.

**Furgenics override:** Build a "Per-wash cost calculator" tool/page. Build a "Dilution chart by coat type" reference. These are linkable assets + featured-snippet candidates + AEO citation candidates.

### 3. Coat-type segmentation matters for Google more than for some categories

Pet owners often Google by coat type ("best shampoo for double-coated breeds," "shampoo for poodle coats," "shedding shampoo for labs"). Each coat type is a sub-cluster of queries.

**Furgenics override:** Plan a coat-type content cluster — one anchor page per common coat type, each linking to the relevant Furgenics product + cross-linking to other coat-type pages. This is a per-brand specialization the baseline doesn't address.

### 4. Local SEO is **not** a priority

The baseline mentions Google Business Profile. For Furgenics, there's no physical retail location relevant to consumer searches, and pro-groomer buyers don't search locally for shampoo. Skip the local SEO investments unless that changes.

### 5. Schema priorities differ

The baseline lists schema types broadly. Furgenics' priority order:

1. **Product schema with `aggregateRating`** on every PDP — high-leverage, gets review stars in SERP
2. **FAQPage schema** on every comparison pillar — captures long-tail variations of comparison queries
3. **Article + Author schema** on the blog — establishes E-E-A-T via grooming professional bylines
4. **Organization schema** with sameAs to Furgenics' Instagram + Amazon storefront — connects entity graph
5. **BreadcrumbList** — already handled by Shopify theme

Schema types that are lower priority for Furgenics: HowTo (could be added for grooming-procedure content but isn't urgent), Recipe (irrelevant), Event (irrelevant).

## Furgenics-specific competitors to track in SERP

Per `brands/furgenics/knowledge/competitor-intel.md`:

- Bio-Groom (legacy leader; Furgenics already winning the head-to-head pillar)
- Coat Handler
- FURminator
- Iv San Bernard
- #1 All Systems
- TropiClean (broader pet category but appears for some queries)
- Earthbath (consumer-side overlap)

When evaluating any new Google Search opportunity, check which of these competitors currently ranks for the target query. The pattern that works: Furgenics ranks #2 or #3 behind an affiliate-roundup site on a target query → write the comparison pillar against the brand actually ranking #1 of the brands → climb past them via better-formatted comparison content.

## Furgenics-specific watchouts (common mistakes)

In addition to the baseline mistakes:

1. **Targeting "best dog shampoo" head-on.** Affiliate roundups dominate; not winnable. Target comparison + technical queries instead.
2. **Writing for pet owners only.** Pro-groomers convert at higher AOV; their queries are more specific and more winnable. Don't skew all content to the consumer audience.
3. **Generic ingredient marketing.** "All-natural" and "no harsh chemicals" copy is undifferentiated; specific molecular claims with specific use cases convert better and rank better.
4. **Ignoring branded search defense.** As Furgenics' brand grows, branded queries ("Furgenics shampoo reviews," "where to buy Furgenics") become competitive — Amazon listings, retailer sites, and review aggregators will outrank Furgenics' own site on its own brand name if not actively defended.

## Furgenics-specific metrics (in addition to baseline)

In addition to the baseline metrics, track:

- **Comparison-pillar performance per pillar** — impressions, average position, clicks for the comparison-keyword set associated with each competitor
- **Coat-type cluster performance** (once built) — impressions for the coat-type query cluster
- **Pro-groomer query share** — track a specific subset of pro-groomer-intent queries and measure share of impressions
- **Branded-search defense** — track whether Furgenics' own site ranks #1 for "Furgenics" + variations

## Refresh cadence for this Furgenics-specific doc

Refresh quarterly OR when:
- A new comparison pillar ships (update the strategic-anchor section)
- A new competitor emerges in the pro-groomer space
- A material change in Furgenics' product line affects the relevant query cluster
- GSC data shows a substantial new query opportunity (e.g., a coat-type query starts trending)

## Sister references

- `knowledge/best-practices/google-search.md` (repo root) — the cross-brand baseline
- `brands/furgenics/knowledge/target-queries.md` — the actual query roadmap
- `brands/furgenics/knowledge/competitor-intel.md` — Furgenics-specific competitor intel
- `brands/furgenics/knowledge/icp.md` — the two-ICP segmentation
- `brands/furgenics/knowledge/optimization-log.md` — running log of optimizations applied
- `docs/prompts/claude-desktop-comparison-pillars.md` — the comparison-pillar handoff prompts
