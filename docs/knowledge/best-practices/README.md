# Furgenics — channel best practices (per-brand overrides)

> Furgenics-specific overrides + extensions to the cross-brand baseline at `knowledge/best-practices/` at the repo root. **Always read both** — cross-brand baseline for the channel fundamentals, this folder for Furgenics-specific tactics.

## Why per-brand overrides exist

The cross-brand `knowledge/best-practices/` directory has the channel-agnostic baseline — what's true for any consumer brand. But Furgenics is a **professional-grade dog grooming brand selling concentrated salon-quality shampoos to North American groomers and discerning pet owners**. That changes which channels matter most, which tactics win in those channels, and which competitors matter.

This folder overrides the baseline for those Furgenics-specific differences. The base file at `knowledge/best-practices/<channel>.md` covers the general tactic; the file here at `brands/furgenics/knowledge/best-practices/<channel>.md` covers the dog-grooming + professional-grooming-channel specifics.

## Furgenics' channel priorities (as of 2026-05)

In rough order of revenue contribution and growth potential:

1. **Google Search (organic)** — high; pro-groomer queries have well-defined commercial intent. See `google-search.md` here.
2. **AEO engines (ChatGPT, Claude, Perplexity, Gemini)** — emerging high priority. AI-engine citations for "best dog shampoo" type queries are an asymmetric upside opportunity. See base doc + tracked queries in `prompts/tracked.json`.
3. **Amazon** — meaningful channel for retail buyers; less so for pro-groomers (they buy direct or through distribution). Worth investing in, not the #1 priority. See `amazon.md` when fleshed out.
4. **Email** — high-leverage for groomer-program nurture (the Path B dual-offer Groomer Program is built around this). See cross-channel-strategy.md base doc.
5. **Meta** (Instagram primarily) — relevant for the consumer side, less for pro-groomer side. Pro-groomers are more on Facebook groups (e.g., grooming-industry private groups) than Instagram. See `meta.md` here for nuance.
6. **Google Shopping** — relevant for consumer-side conversion. See `google-shopping.md` when fleshed out.

## Furgenics-specific competitive context

Cited in nearly every channel doc:

- **Bio-Groom** — the legacy pro-groomer brand. Furgenics' "vs Bio-Groom" pillar is already the highest-impression GSC page per recent audits.
- **Coat Handler** — a recent competitor; comparison pillar planned (handed off to Claude Desktop)
- **FURminator** — a major brand in the broader pet category; comparison pillar planned (handed off to Claude Desktop)
- **Iv San Bernard** — premium-tier competitor
- **#1 All Systems** — boutique pro-groomer competitor

For each channel, identify how these competitors play it — and where Furgenics can differentiate.

## Furgenics-specific audience context

Two distinct ICPs (per `brands/furgenics/knowledge/icp.md`):

- **Pro-groomers** — buy concentrated formulas in larger sizes, care about per-wash cost, dilution ratios, salon-specific use cases
- **Discerning pet owners** — buy smaller retail sizes, care about ingredient quality + dog-coat-type matching

Most tactics in the base docs assume a single audience. Furgenics' channel strategy needs to handle both — sometimes same content serves both, sometimes channel-by-channel split.

## Files in this folder

- [`google-search.md`](./google-search.md) — Furgenics-specific Google Search tactics (the only filled-in doc to start; other channels follow when the research agent specializes them)
- `meta.md` *(future)* — Furgenics-specific Meta tactics (Facebook groomer groups, Instagram pro-groomer creators)
- `amazon.md` *(future)* — Furgenics-specific Amazon tactics (pet-care category specifics, retail-vs-pro size pricing)
- `aeo-engines.md` *(future)* — Furgenics-specific AEO tactics (per-engine wins on tracked prompts, comparison pillar leverage)

When a new specialization doc is added, link it here.

## Refresh cadence

The cross-brand base docs have their own refresh cadences (30–120 days depending on channel). Furgenics-specific overrides should be refreshed when:

- A material change in Furgenics' channel mix (e.g., we onboard a major distributor that shifts revenue away from Amazon)
- A new competitor emerges in the pro-groomer space
- Furgenics' ICP shifts (e.g., we double down on pro-only or pivot more retail)
- The base doc gets a substantive refresh that affects the override

## Sister references

- `brands/furgenics/knowledge/index.md` — overall Furgenics wiki catalog
- `brands/furgenics/knowledge/target-queries.md` — the actual queries Furgenics is competing for
- `brands/furgenics/knowledge/competitor-intel.md` — Furgenics-specific competitor intel
- `brands/furgenics/knowledge/icp.md` — the two-ICP segmentation that drives channel choice
- `knowledge/best-practices/` (repo root) — cross-brand baseline that this folder extends
