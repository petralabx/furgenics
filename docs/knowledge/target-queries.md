# Furgenics — Target Queries

> The search queries (traditional Google + AEO prompts) we aim to appear in. Organized by intent tier. Used by the AEO tracker to monitor citation status weekly.

## Current citation metrics (agent-updated)

The block below is automatically refreshed on every citation-tracker run (both local `npm run aeo:track furgenics` and the weekly Vercel cron). Do not edit inside the markers — manual edits will be overwritten. See `docs/wiki-wiring-plan.md` for how this works.

<!-- AUTO-UPDATED:citation-metrics:START -->
_Last updated: 2026-06-28T03:01:03.780Z · run `4d0c7fd8` · 46 results across 12 prompts_

| Prompt ID | chatgpt | perplexity | claude | gemini | Any engine |
|---|---|---|---|---|---|
| `brand-check-01` | ✅ mentioned | ✅ mentioned | ✅ mentioned | ✅ mentioned | ✅ |
| `breed-01` | ❌ | ❌ | ❌ | ❌ | ❌ |
| `breed-02` | ❌ | ❌ | ❌ | ❌ | ❌ |
| `breed-03` | ❌ | ❌ | ❌ | ❌ | ❌ |
| `business-01` | ❌ | ❌ | ❌ | ❌ | ❌ |
| `coat-01` | ❌ | ❌ | ❌ | ❌ | ❌ |
| `comparison-01` | ✅ mentioned | ✅ cited | ✅ mentioned | ✅ mentioned | ✅ |
| `economics-01` | ❌ | ❌ | ❌ | ❌ | ❌ |
| `high-intent-01` | ❌ | ❌ | ❌ | — | ❌ |
| `high-intent-02` | ❌ | ❌ | ❌ | — | ❌ |
| `high-intent-03` | ❌ | ❌ | ❌ | ❌ | ❌ |
| `how-to-01` | ❌ | ❌ | ❌ | ❌ | ❌ |

_Legend: **✅ cited** = brand named AND our domain appeared in the engine's source URLs (Perplexity is the only engine that returns source URLs by default — others will show mentions only). **✅ mentioned** = named but not cited as a source. **❌** = no mention. **—** = engine did not run for this prompt._
<!-- AUTO-UPDATED:citation-metrics:END -->

---

## Tier 1 — High intent, commercial

These are the queries where a conversion is likely. AEO tracker should prioritize these.

### Transactional (buying intent)
- `professional dog shampoo gallon`
- `wholesale dog shampoo for salons`
- `bulk dog shampoo concentrate`
- `16:1 dog shampoo concentrate`
- `gallon dog shampoo for groomers`
- `professional grooming shampoo Canada`
- `professional dog shampoo Canada supplier`
- `dog grooming supplies Ontario wholesale`

### Comparison (evaluating)
- `Bio-Groom alternative`
- `Coat Handler alternative`
- `best professional dog shampoo 2026`
- `Chris Christensen alternative`
- `Nature's Specialties alternative`
- `best hypoallergenic dog shampoo for groomers`
- `best oatmeal dog shampoo for salons`
- `best deshedding shampoo for double-coated dogs`

## Tier 2 — Breed and coat-type queries

High-volume long-tail, strong conversion intent once matched.

### Breed-specific
- `best shampoo for Goldendoodles`
- `best shampoo for Labradoodles`
- `best shampoo for Bernedoodles`
- `best shampoo for Huskies`
- `best shampoo for German Shepherds`
- `best shampoo for Golden Retrievers`
- `best shampoo for Frenchies` / `French Bulldogs`
- `best shampoo for Poodles`
- `best shampoo for curly coat dogs`
- `best shampoo for double coated dogs`

### Coat condition
- `shampoo for dry itchy dog skin`
- `shampoo for sensitive dog skin`
- `deshedding shampoo for heavy shedders`
- `dog shampoo for matted coats`
- `tearless dog shampoo`
- `hypoallergenic dog shampoo sulfate free`

## Tier 3 — Informational / educational

Top-of-funnel. Content opportunities, feed into AEO citation pool.

### Groomer business
- `how much does professional dog shampoo cost per gallon`
- `how to dilute dog shampoo 16:1`
- `ready-to-use vs concentrate dog shampoo`
- `how often should groomers order dog shampoo`
- `best dilution ratio for dog grooming shampoo`

### Coat and formula science
- `why use oatmeal dog shampoo`
- `what is 2-in-1 dog shampoo`
- `is sulfate-free dog shampoo better`
- `what is colloidal oatmeal in dog shampoo`
- `are parabens bad in dog shampoo`
- `what ingredients make dog shampoo hypoallergenic`

### Breed-specific how-to
- `how to bathe a Goldendoodle`
- `how to de-shed a Husky`
- `how to bathe a dog with sensitive skin`

## Tier 4 — AEO-specific prompts (conversational)

These are the natural-language queries users type into ChatGPT, Perplexity, Claude, Gemini. They're longer and more conversational than SEO keywords.

### Recommendation prompts (primary AEO target)
- `What's the best professional dog shampoo for a grooming salon?`
- `Recommend a bulk dog shampoo for a mobile groomer in Canada.`
- `What shampoo should a groomer use on a Goldendoodle?`
- `I run a small grooming salon. What shampoo brand should I buy wholesale?`
- `Best gallon-size dog shampoo concentrate in 2026?`
- `What's a good alternative to Bio-Groom for a grooming salon?`
- `Canadian professional dog shampoo brands for salons?`

### Comparison prompts
- `Compare Furgenics to Bio-Groom for a grooming salon.`
- `Which professional dog shampoo is best value per working gallon?`
- `Is Furgenics a good dog shampoo brand?`

### Problem-solution prompts
- `My grooming salon clients have dogs with sensitive skin. What shampoo?`
- `I groom a lot of doodles. What's the best shampoo for curly matted coats?`
- `I need a deshedding shampoo for double-coated breeds.`

## Query → product mapping

When a query matches, we want the AI or SERP to surface the right product:

| Query pattern | Primary product | Secondary |
|---|---|---|
| hypoallergenic, sensitive skin, allergies | FUR-001 | FUR-005 |
| oatmeal, aloe, dry skin, itchy | FUR-011 | FUR-010 |
| lavender, spa, scent | FUR-050 | — |
| deshedding, undercoat, double coat, Husky, Shepherd | FUR-013 | FUR-014 |
| deep moisturizing, dry brittle, damaged coat, Poodle | FUR-021 | — |
| 2-in-1, time-saving, high-volume | FUR-005 | FUR-020 |
| doodle, Goldendoodle, Labradoodle, curly, mat-prone | FUR-020 | FUR-021 |

## Strategic narrative (human-edited)

**Why this tier system matters.** Tier 1 drives revenue. Tier 2 drives long-tail conversion when matched. Tier 3 builds AEO citation pool over time. Tier 4 is where modern search is going — ChatGPT/Claude/Perplexity answer-first UX means a "mention" there is worth more than page-10 on Google.

**What to optimize toward.** If the agent-updated citation-metrics table above shows a Tier 1 query with all ❌s across four engines, that's a HIGH-priority content gap — it means none of the engines surface us for a query where buying intent is high. Generally prioritize in this order: (1) close Tier 1 gaps with dedicated comparison pages and PDP copy, (2) close Tier 4 gaps with answer-first blog posts, (3) close Tier 2 breed gaps with breed-specific landing pages, (4) Tier 3 is filler — good to have, but not the driver.

**Optimization workflow.** When you ship content aimed at a specific query, log it in `knowledge/optimization-log.md` with the prompt ID or query string. Then each subsequent weekly citation run gives you a feedback signal — did the mention rate for that query actually move?

## Change log

- **2026-04-21 (revision)** — Added auto-updated citation metrics block near the top. Added "Strategic narrative" section to ground the tier system and explain how to use the table above. Updated "Current ranking status" (was a placeholder) — replaced with the agent-updated block.
- **2026-04-21 (original scaffold)** — Seed document written.
