# May 3 Sunday cron review — pillar pages haven't moved the needle yet

> **Filed:** 2026-05-05 as `synthesis`  
> **Source:** Stephen query 2026-05-05 (first review of cron data post-pillar-page publishes)  
> **Run ID:** `2e072698-0efd-4b8f-9c1a-106cfe6ac0c5`  
> **Run started:** 2026-05-03 03:00:09 UTC (Sunday cron, fired exactly on schedule)  
> **Read first:** [`heartbeat.md`](../../heartbeat.md) · [`furgenics-aeo-baseline-2026-04-22.md`](./furgenics-aeo-baseline-2026-04-22.md) · [`2026-04-27-30day-content-roadmap.md`](./2026-04-27-30day-content-roadmap.md)

---

## Headline

**16.7% mention rate, 4.2% cite rate — within the April 22 baseline band of 14–18%.**

The 4 pillar pages published 2026-04-23 (Canadian mobile groomers, Bio-Groom comparison, Goldendoodle, oatmeal sensitive-skin) and 2 pages published 2026-04-27 (Husky/GSD deshedding, how-to-dilute) have **not** produced a measurable lift on the May 3 Sunday cron. The only confirmed pillar pickup is on `comparison-01` (Furgenics vs Bio-Groom), where Perplexity cites the page. None of the unbranded pillar pages — the entire ICP-targeted thesis — surfaced.

This is concerning, but **not yet decisive**. Indexing lag remains a plausible explanation: April 23 batch is 10 days from May 3, April 27 batch is 6 days. Perplexity typically takes 3–14 days. The May 10 cron will resolve the ambiguity — at 17 days for the April 23 batch, indexing lag becomes much harder to invoke.

---

## Run summary

| Metric | May 3 cron | April 22 baseline | Delta |
|---|---|---|---|
| Total queries | 48 (12 prompts × 4 engines) | 44 | +4 (no engine failures this run) |
| Mentions | 8 | ~6–8 (range across 3 baseline runs) | flat |
| Citations | 2 | 2 | flat |
| Mention rate | 16.7% | 14–18% | within band |
| Cite rate | 4.2% | ~4.5% | within band |

Clean run on the substrate side: all 4 engines (chatgpt/claude/perplexity/gemini) executed without failures. Gemini's prior maxOutputTokens issue (fixed 2026-04-23) appears resolved — its responses now run to natural completion. The 48/48 coverage means we're looking at the most data-complete cron we've had.

---

## Per-prompt breakdown by category

Grouping the 12 prompts into 5 categories clarifies what's working and what isn't:

### Category A: branded prompts (Furgenics named in the query)

Two prompts force the engines to look for the brand: `brand-check-01` ("Is Furgenics good?") and `comparison-01` ("Furgenics vs Bio-Groom").

- **`brand-check-01`**: 4/4 engines mentioned Furgenics, 1/4 cited (Perplexity). All training-data engines (ChatGPT, Claude, Gemini) explicitly note they have no/limited knowledge of the brand:
  - Claude: "I don't have reliable information about a dog shampoo brand called 'Furgenics.'"
  - ChatGPT: "there isn't any widely recognized brand called Furgenics in the dog shampoo market"
  - Gemini: tries to be helpful and ends up speculating positively ("Furgenics appears to be a generally well-regarded dog shampoo brand") — concerning behavior, since this is fabricated
  - Perplexity (with web search): "No direct evidence from available sources confirms Furgenics as a good dog shampoo brand, as no independent reviews, tests, or expert analyses of its products appear in the search results"
  - **Insight:** Perplexity sees the site but flags that no third-party reviews exist. This is an authority gap, not an indexing gap.

- **`comparison-01`**: 4/4 mentioned, 1/4 cited (Perplexity). The strongest positive signal in the dataset:
  - Perplexity: *"Furgenics offers a more cost-effective option for a small grooming salon compared to Bio-Groom, with similar dilution ratios and professional appeal, though Bio-Groom has stronger established trust among groomers."*
  - The `/pages/furgenics-vs-bio-groom` pillar is being indexed AND being surfaced when the query specifically asks for the comparison. This is exactly the win we wanted from this page.
  - But Claude is cautious: "I don't have reliable information about 'Furgenics' as a pet grooming brand — it's possible the name is slightly different, very new, or a regional/private-label product."

### Category B: unbranded prompts WITH a published pillar page

Five prompts have pillar pages live but no Furgenics mention/citation in any engine:

- **`breed-01`** (Goldendoodle) — `/pages/best-shampoo-goldendoodle` live since April 23 (10 days). 0/4. Engines name Earthbath, Chris Christensen, Iv San Bernard, Les Poochs, Nature's Specialties, We Love Doodles, Wahl.
- **`coat-01`** (oatmeal/sensitive skin) — `/pages/oatmeal-aloe-sensitive-skin-dog-shampoo` live since April 23 (10 days). 0/4. Earthbath dominates 4/4. Perplexity: "best overall oatmeal dog shampoo for dry itchy skin is Earthbath® Oatmeal & Aloe Shampoo".
- **`high-intent-02`** (Canadian mobile groomers) — `/pages/bulk-dog-shampoo-for-canadian-mobile-groomers` live since April 23 (10 days). 0/4. Perplexity recommends "Groomer's Choice Shampoo Gallons" — a brand not even in our tracked competitor list.
- **`breed-02`** (Husky/GSD deshedding) — `/pages/deshedding-shampoo-huskies-german-shepherds` live since April 27 (6 days). 0/4. FURminator and Earthbath dominate.
- **`how-to-01`** (how to dilute 16:1) — `/pages/how-to-dilute-dog-shampoo-16-to-1` live since April 27 (6 days). 0/4. Perplexity mentions Chris Christensen, no Furgenics.

**This is the single biggest signal in the dataset, and it's negative.** The whole thesis of the April 22 baseline §6 was that these unbranded ICP prompts were the leverage points. After 10+ days for half of them, none have produced a Perplexity (or any) pickup.

### Category C: unbranded prompts WITHOUT a published pillar page (expected nulls)

- **`breed-03`** (French Bulldog) — gated on FUR-001/FUR-011 INCI from formulation. 0/4 mentions, dominated by Earthbath.
- **`business-01`** (free samples to groomers) — Pillar #8, scheduled but not written. 0/4 mentions. Many competitors named (Bio-Groom, Chris Christensen, Nature's Specialties, Bark2Basics, Earthbath, Hartz Groomer's Best Professionals, Double K, Groomer Essentials).
- **`high-intent-01`** (best dog shampoo for groomers 2026) — generic, diffuse competitive field, no targeted pillar. 0/4. Perplexity: "No single dog shampoo brand is universally the 'best' for grooming salons in 2026."
- **`high-intent-03`** (alternatives to Bio-Groom) — partial coverage from `furgenics-vs-bio-groom` page but no targeted pillar. 0/4. **Notable:** the comparison page IS indexed (per `comparison-01`) but Perplexity doesn't surface it when the query is "Bio-Groom alternatives." This is a query-matching issue, not an indexing issue.
- **`economics-01`** (16:1 cost savings) — Pillar #7 in roadmap (16:1 economics) not yet published. 0/4. Engines explain the math but cite no brand.

### Category D: zero-pickup prompts where pillar logically should help

`high-intent-03` (Bio-Groom alternatives) is the most diagnostic prompt in this group. Perplexity has the comparison page in its index (it cites it on `comparison-01`), but doesn't surface it when the query reframes as "alternatives to Bio-Groom" — exactly the reframe a real groomer would type. This suggests Perplexity's matching is more literal than we'd hoped — the page wins the head-to-head query but loses the broader "alternatives" query.

Fix candidates: page H1 + opening paragraph rewording to include "alternative to Bio-Groom" as a phrase, possibly an FAQ section answering "Is Furgenics a good alternative to Bio-Groom?"

---

## What's working

1. **`/pages/furgenics-vs-bio-groom` is indexed and cited by Perplexity.** This is real. The page produces a positive Perplexity citation on the comparison-01 prompt, with favorable framing ("more cost-effective", "similar dilution ratios and professional appeal"). The April 22 baseline predicted this page was the strongest bet because Perplexity already had the $19 vs $49.94 pricing story; that prediction held.
2. **No engine substrate problems.** 48/48 coverage, no failures, no model errors. Mention/cite arrays parse cleanly. The data is trustworthy.
3. **Brand awareness on direct queries (`brand-check-01`).** 4/4 engines surface the brand when asked directly. Gemini speculates positively (concerning AI behavior, separate issue), but the brand name is recognizable.

---

## What's NOT working

1. **Unbranded pillar pages are invisible after 10 days.** The Goldendoodle, Canadian-mobile-groomer, oatmeal-sensitive-skin, and (more recently) deshedding and how-to-dilute pages are not surfacing in any engine. Most likely explanations:
   - **Indexing lag still plausible** but tightening — Perplexity's typical 3–14 day window puts April 23 batch at the upper edge.
   - **Authority gap** — Perplexity says "no independent reviews, tests, or expert analyses" for `brand-check-01`. The pillar pages may need backlinks / earned mentions before LLMs treat them as a citable source.
   - **Content / query mismatch** — pages may be too brand-centric vs. the way the unbranded queries are phrased. This is testable; see Recommendations below.
2. **Earthbath is the default answer on coat/breed prompts.** Earthbath shows up in `breed-01`, `breed-02`, `breed-03`, `coat-01`, `business-01`, `high-intent-01`. This isn't surprising (Earthbath is established), but it's the wall we're trying to climb and we're not over it.
3. **Claude's caution is sticky.** Even on `comparison-01` where Perplexity cites the page, Claude says "I don't have reliable information about 'Furgenics'." Claude (and ChatGPT and Gemini) won't reflect new content for 6–12+ months — these are training-data engines, not real-time. Our short-term substrate is Perplexity, full stop.
4. **`high-intent-03` query mismatch.** Comparison page is indexed but doesn't surface for the "alternatives" reframe. Suggests the page's keyword/topic targeting is narrower than the query it was meant to win.

---

## Strategic implications

### For the 2026-05-11 measurement decision

The 30-day roadmap §4 specified three branches:
- **Scenario A:** mention rate >25% → Stay the course on planned content
- **Scenario B:** mention rate 15–25% → Mixed signal, double down on what's working
- **Mixed:** below 15% or no Perplexity movement → Re-think strategy

May 3 data points to **Scenario B** at best (16.7% mention rate, 1 confirmed Perplexity pickup). The decision hangs on what May 10 shows:
- **If May 10 shows 18–22% with 2–3 confirmed unbranded pillar pickups** → Indexing lag was the explanation; stay the course.
- **If May 10 shows ~17% with still only `comparison-01` as a confirmed pickup** → This is no longer indexing lag at 17 days post-publish. Means the pillar pages need rework, OR we need backlinks before LLMs will cite them.
- **If May 10 shows decline** → Substrate problem (unlikely given clean May 3 run).

### What to watch for in the May 10 cron

Three specific questions to answer when that data lands:
1. Did `breed-01` (Goldendoodle) or `coat-01` (oatmeal sensitive skin) get a Perplexity pickup at 17 days? These are the two pillar pages with the longest indexing runway and clearest Furgenics-product anchor.
2. Did `high-intent-02` (Canadian mobile groomers) get a Perplexity pickup? This is the most ICP-targeted page with the weakest competitive field; if it doesn't surface here, it doesn't surface anywhere.
3. Did `breed-02` (Husky/GSD deshedding) or `how-to-01` (16:1 dilution) get pickup at 13 days? These are the second batch — slightly less indexing time but better content quality (Pillar #5/#6 had refined templates).

---

## Recommendations

### Before May 10 cron (this week)

1. **Don't ship Pillar #7 (16:1 economics) until we have May 10 data.** If the existing how-to-01 page hasn't been picked up by May 10, shipping more pages on similar substrate is throwing good money after bad. Wait, observe, decide.
2. **Make the `furgenics-vs-bio-groom` win durable.** Add Open Graph + Twitter Card metadata if missing, ensure schema.org BreadcrumbList is intact. Perplexity is already citing this page; protect that.
3. **Test `high-intent-03` query mismatch hypothesis.** Add an H2 section to `furgenics-vs-bio-groom` titled "Looking for a Bio-Groom alternative?" with a 100-word answer-first block. Re-check on May 10 cron whether the alternative-framed query starts pulling the page.
4. **Continue Phase A of Shopify Content Surface MCP build.** This work is unblocked by these findings; the email-cleanup audit is a good first use of the new read tools and isn't gated on May 10 results.

### After May 10 cron (next session)

1. **If May 10 confirms Scenario B (still ~17%, only comparison-01 cited):**
   - Do the email-cleanup audit (Phase A → Phase B sequence)
   - Pivot content strategy: pillar pages plus *off-site authority work* (Reddit answer-grade contributions, podcast appearances, distributor partnerships per `canadiangroomingdistributor.com`)
   - Treat the Furgenics-vs-Bio-Groom comparison as the template — what made it work was that Perplexity already had the pricing story to anchor against. Find more comparison opportunities.
2. **If May 10 confirms Scenario A (18–25% with multiple new pickups):**
   - Ship Pillar #7, #8 (Groomer Program), #9 (French Bulldog if INCI lands)
   - Keep cadence at 2/week
   - Re-run baseline analysis to identify next-tier opportunities
3. **Either way, file a measurement-checkpoint analysis** at `analyses/2026-05-11-checkpoint-decision.md` with the explicit branch decision and rationale.

---

## Appendix: data integrity notes

One thing the May 3 run reveals about the matcher: `competitors_mentioned` for `breed-02` Perplexity is empty — but the response text mentions "RUFF Shed Control De-Shedding Shampoo" and "Lilac Meadows Deshedding Dog Shampoo." These are real brands (small/regional) but not in our `aeo.competitorBrands` list (currently 20 brands). They're getting recommended by Perplexity *over* established brands like Earthbath; if they recur, we'll want to add them to the matcher and possibly the competitive-intel page.

Similarly `business-01` Perplexity surfaces "Hartz Groomer's Best Professionals", "Double K", "Groomer Essentials" — none in our list. These are programmatic gaps, not strategic ones; the matcher list expansion is mechanical.

Flagging for follow-up but not blocking on it.
