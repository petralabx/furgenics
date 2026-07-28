---
type: knowledge-analysis
subject: AEO baseline — Furgenics
created: 2026-04-22
updated: 2026-04-22
source-runs:
  - brands/furgenics/sources/citation-runs/2026-04-22-d166ac2c.json
  - brands/furgenics/sources/citation-runs/2026-04-22-ac51c1b1.json
  - brands/furgenics/sources/citation-runs/2026-04-22-7a51d781.json
prompt-set-version: tracked.json @ 6b4bf4d
scope: 12 prompts × 4 engines (ChatGPT-4o, Perplexity sonar-pro, Claude Opus 4.7, Gemini 2.5 Flash)
---

# Furgenics AEO baseline — April 22, 2026

## TL;DR

- **Mention rate:** 6/44 (14%) in the most complete run; 8/45 (18%) in the prior run. Stable 14–18% band across three runs of the same 12-prompt set.
- **Citation rate:** 2 of 44 — both Perplexity, both on prompts that name "Furgenics" in the question itself.
- **Unaided recall: 0%.** Zero engines mentioned Furgenics on any of the 10 prompts that do not seed the brand name.
- **Aided recall: effectively 100%.** Every engine that successfully responded to "Compare Furgenics to Bio-Groom..." or "Is Furgenics a good brand?" acknowledged the name — but what they said about it varied wildly (see §2).
- **What the engines actually say when asked directly:** Perplexity produces a real comparison with accurate pricing ($24.99 CAD vs Bio-Groom $49.94) and cites furgenics.com. ChatGPT calls it "not widely recognized." Claude explicitly says "I don't have reliable information about 'Furgenics'" and suggests the user may mean Furminator or Fur-Genetics.

The structural read: Furgenics occupies the textbook cold-start AEO position. Static-LLM training cutoffs (ChatGPT, Claude, Gemini) haven't seen enough public mentions of the brand to retrieve it unaided. Perplexity is the only engine finding Furgenics today, and it does so through real-time web search on the brand's own domain.

## 1. The aided vs unaided gap

| Prompt | Seeds brand name? | Engines mentioning | Notes |
|---|---|---|---|
| high-intent-01 | No | 0/4 | "Best professional dog shampoo for a salon in 2026" |
| high-intent-02 | No | 0/4 | "Bulk dog shampoo for a mobile groomer in Canada" |
| high-intent-03 | No | 0/4 | "Alternatives to Bio-Groom" |
| breed-01 | No | 0/4 | "Best shampoo for Goldendoodles" |
| breed-02 | No | 0/3 | "Deshedding shampoo for Huskies + GSDs" (Gemini failed) |
| breed-03 | No | 0/4 | "Shampoo for French Bulldogs with sensitive skin" |
| coat-01 | No | 0/3 | "Oatmeal shampoo for dry itchy skin" (Gemini failed) |
| economics-01 | No | 0/4 | "How does 16:1 concentrate save money" |
| how-to-01 | No | 0/4 | "How to dilute at 16:1" |
| **comparison-01** | **Yes** | **3/3 mentioned, 1 cited** | "Compare Furgenics to Bio-Groom" — Gemini failed this run, mentioned in prior |
| **brand-check-01** | **Yes** | **3/3 mentioned, 1 cited** | "Is Furgenics a good dog shampoo brand?" (Gemini failed) |
| business-01 | No | 0/3 | "Brands offering free samples to groomers" (Gemini failed) |

All 6 mentions are concentrated in the two brand-seeded prompts. Every prompt that tests natural discovery returned zero.

## 2. How each engine responds to Furgenics today

### Perplexity — the only engine that truly sees Furgenics
Perplexity does real-time web search, which means it actually reads furgenics.com and surfaces it when the question names the brand.

On `comparison-01`, Perplexity produced a structured comparison including real pricing ($24.99 CAD / $19.00 USD vs Bio-Groom's ~$49.94 on Amazon), dilution ratio (16:1), and positioning ("tailored for salons prioritizing cost and simplicity"). Citations: `furgenics.com`, `furgenics.com/products/hypoallergenic-shampoo-gallon`. This is high-quality, persuasive output — the kind of answer that could move a mobile groomer toward a purchase.

On `brand-check-01`, Perplexity was honest in the other direction: "Furgenics is not listed among the top recommended dog shampoos by veterinary experts." It still cited `furgenics.com/pages/reviews` though — meaning the domain has some signal, just not third-party endorsement.

### ChatGPT — generic template, no retrieval
When Furgenics is named in the prompt, ChatGPT produces a comparison shaped like "If Furgenics is known for X, they might..." — clearly reasoning from pattern, not knowledge. Verdict: "there is no widely recognized brand called Furgenics in the dog shampoo market." ChatGPT won't surface Furgenics unaided until the brand name appears in enough public content to be represented in future training snapshots.

### Claude — explicit unfamiliarity signal
"I don't have reliable information about 'Furgenics'" (both comparison-01 and brand-check-01). Claude even suggested the user might mean "Furminator" or "Fur-Genetics" — direct evidence the brand is absent from Claude's training.

This is actually useful calibration data: Claude refuses to fabricate. When Claude starts answering comparison-01 substantively instead of asking for clarification, that's a leading indicator that training data has caught up. Treat it as a weathervane.

### Gemini Flash — severely truncated responses
Gemini's responses were consistently cut off mid-sentence at ~50–150 words across almost every prompt:
- "It's impossible to definitively name the 'best' professional dog shampoo brand..."
- "For a mobile groomer in Canada, choosing a bulk dog shampoo involves balancing several factors: **concentration (for cost-effectiveness and less frequent reordering),"

This is not a quota issue (429s were separate). It looks like a `maxOutputTokens` setting in `src/aeo/engines/google-ai.ts` that's capping generation too low. **Gemini data in this baseline should be treated as partial** until the adapter is fixed. This is the only engine-adapter bug surfaced by Phase D and is worth filing as a ticket.

## 3. Who dominates instead of Furgenics

Across all three runs, these competitors repeatedly surface as unaided recommendations (ranked by approximate appearance count across prompts × engines):

| Competitor | Tracked? | Appears in | Notes |
|---|---|---|---|
| Chris Christensen | ✓ | ~10 prompts | Universally cited; clear leader in salon/pro mindshare |
| Earthbath | ✗ | ~10 prompts | Consumer-oriented but ranks in nearly every unaided answer |
| TropiClean / Tropiclean Pro | ✓ | ~8 prompts | Mid-tier, broad variety |
| Nature's Specialties | ✓ | ~7 prompts | Salon favorite, 32:1 concentration emphasis |
| Bio-Groom | ✓ | ~5 unaided prompts | Appears even when not named in prompt |
| Isle of Dogs | ✗ | ~5 prompts | Premium positioning, co-cited with Chris Christensen |
| #1 All Systems | ✗ | ~4 prompts | Claude-heavy; professional-grade |
| Iv San Bernard | ✗ | ~4 prompts | Italian brand, premium |
| FURminator | ✗ | 3 prompts | Deshedding-specific default |
| iGroom | ✓ | 3 prompts | Perplexity-heavy |
| South Bark | ✓ | 3 prompts | Claude-heavy (Blueberry Facial) |
| Les Poochs | ✗ | 3 prompts | Premium French |
| Wahl Professional Animal | ✗ | 2 prompts | Broad tools brand |
| Show Season | ✗ | 2 prompts | Claude flagged as Canadian-made (ICP match) |
| Bark2Basics | ✓ | 1 prompt | Claude recommended for Canadian mobile groomer (on-ICP) |
| We Love Doodles | ✓ | 1 prompt | Perplexity cited on Goldendoodle prompt |
| Warren London | ✓ | 1 prompt | ChatGPT mentioned for sampling programs |
| Coat Handler | ✓ | 0 prompts | Tracked but never surfaced |
| Bubble Bros | ✓ | 0 prompts | Tracked but never surfaced |
| PetAg | ✓ | 0 prompts | Tracked; Perplexity falsely tagged once via source URL confusion |

**Config gap:** Earthbath, Isle of Dogs, #1 All Systems, Iv San Bernard, FURminator, Les Poochs, Wahl Professional Animal, and Show Season are not in `competitorBrands` but clearly dominate unaided recall. Suggest adding them to `brands/furgenics/config.json` so the tracker captures competitive share over time.

## 4. Perplexity citation landscape

Perplexity cites 6–9 sources per answer. Domains appearing repeatedly across the 12 prompts:

| Source domain | Appearances | Relevance |
|---|---|---|
| petmd.com | 4 prompts | High — vet authority, possible PR target |
| chewy.com | 3 prompts | High — retail directory |
| groomerschoice.com | 3 prompts | High — pro channel |
| pdga.online | 3 prompts | Professional grooming blog |
| lillianruff.com | 3 prompts | Competitor brand blog — worth studying |
| youtube.com | 4 prompts | Varies by video |
| petedge.com | 2 prompts | Distributor blog |
| **canadiangroomingdistributor.com** | 1 prompt | **Canadian distributor — concrete business lead** |
| fawnriverdoodles.com | 1 prompt | Breeder blog |
| businessinsider.com | 1 prompt | Mainstream consumer |
| tractorsupply.com | 1 prompt | Retail |
| revelationpets.com | 1 prompt | Groomer software blog |
| animalo.com | 1 prompt | B2B grooming blog |
| chrischristensen.com | 1 prompt | Competitor's own domain (dilution-guide content) |
| **furgenics.com** | 2 prompts | **Brand's own site — Perplexity can reach it** |

Two practical takeaways:
1. **furgenics.com is already indexable and citable by Perplexity.** That's the cheapest-to-affect channel — content added to the site can start appearing in Perplexity answers within weeks.
2. **canadiangroomingdistributor.com** surfaced as a cited source on the Canadian bulk prompt. Worth reaching out about distribution.

## 5. Prompt-by-prompt quick reference

| Prompt | Mention rate | Dominant recommendations |
|---|---|---|
| high-intent-01 | 0/4 | Chris Christensen, Bio-Groom, TropiClean, Nature's Specialties. Gemini truncated. |
| high-intent-02 | 0/4 | Canadian Pet Connection, Soos Pets, Canadian Grooming Distributor, Show Season (Canadian), Ren's Pets. ICP-aligned prompt — high leverage to own. |
| high-intent-03 | 0/4 | Bio-Groom alternatives: Chris Christensen, Nature's Specialties, TropiClean, Isle of Dogs, Earthbath dominate. |
| breed-01 | 0/4 | Chris Christensen Ice on Ice, We Love Doodles (cited), Tropiclean Perfect Fur, BioSilk lead. |
| breed-02 | 0/3 | FURminator dominates. RUFF Shed Control, EZ Out mentioned. |
| breed-03 | 0/4 | Earthbath Oatmeal & Aloe, Douxo S3, Burt's Bees lead. Strong retail-brand bias. |
| coat-01 | 0/3 | Earthbath Oatmeal & Aloe is the default answer across all three engines. |
| economics-01 | 0/4 | Generic math answers; only Perplexity named brands (Bark2Basics, Hydra). |
| how-to-01 | 0/4 | Math-heavy answers; Perplexity cited Chris Christensen's own dilution guide. |
| comparison-01 | 3/3 mentioned, 1 cited | Perplexity produced real $24.99 CAD vs $49.94 comparison with furgenics.com citation. Claude flagged unfamiliarity. ChatGPT hypothetical. |
| brand-check-01 | 3/3 mentioned, 1 cited | Perplexity cited furgenics.com/pages/reviews but still concluded "not listed among top." ChatGPT and Claude explicitly unfamiliar. |
| business-01 | 0/3 | Hartz, Double K, Bio-Groom, Chris Christensen, Warren London mentioned. |

## 6. What moves the needle from here

**Tier 1 — Cheapest paths to first citations**

1. **Publish Canadian bulk/mobile groomer content on furgenics.com.** The high-intent-02 prompt is on-ICP (mobile groomers in Canada, Class C salons), the competitive field is weak (Canadian Pet Connection, Soos Pets — not household names), and Perplexity already indexes furgenics.com. A well-structured page answering "bulk dog shampoo for Canadian mobile groomers" could start showing up in Perplexity answers within weeks.

2. **Publish a Bio-Groom comparison page on furgenics.com.** high-intent-03 ("alternatives to Bio-Groom") is asked by exactly the buyer we want. Perplexity's current comparison-01 answer already surfaces Furgenics at $19 USD vs Bio-Groom $49.94 — that's a story worth telling properly, with per-wash cost math, dilution rates, and INCI side-by-side.

3. **Distributor outreach to canadiangroomingdistributor.com.** They surfaced once as a cited source. A distribution relationship both monetizes Canadian demand and adds third-party mentions to the web graph — feeding future Perplexity indexing and, over time, static-LLM training.

**Tier 2 — Breed-specific content targeting the doodle market**

4. **Goldendoodle shampoo page.** breed-01. We Love Doodles is already competing here with a USDA-formulated-for-doodles pitch; Furgenics has FUR-020/FUR-037 (2-in-1 Doodle) — the product exists but has no answer-grade content.

5. **Oatmeal & Aloe positioning for sensitive-skin breeds.** breed-03 and coat-01 both default to Earthbath. Furgenics has FUR-011 (Oatmeal & Aloe Shampoo) and FUR-010 (conditioner) — but the missing INCI lists are the current blocker. Filling those in unlocks the content.

**Tier 3 — Long-horizon brand-recognition work**

6. **Third-party mentions on groomer-community sites.** For ChatGPT and Claude (static training) to eventually mention Furgenics unaided, the brand needs to appear in their training data — which means public mentions on groomer blogs, forums, YouTube, distributor sites. 6–18 month play.

## 7. Known limitations of this baseline

- **Gemini Flash responses are truncated.** The Gemini adapter in `src/aeo/engines/google-ai.ts` appears to cap `maxOutputTokens` too low. Gemini data is partial and not fully comparable to the other three engines until this is fixed. Worth filing as a v1.5 ticket.
- **Supabase persistence was not working during these runs.** Data is in git (JSON archives per ADR-010) but not yet queryable via SQL. Permissions fixed late on 2026-04-22 via schema exposure + `service_role` grants + `NOTIFY pgrst, 'reload schema'`. Next run should succeed end-to-end.
- **Gemini free tier is 20 requests/day.** At 12 prompts per run, ~2 full runs per day is the free-tier ceiling. Phase E cron (1 run/week) is well under limits; hand-iteration hits it fast.
- **Three tracked competitors (Coat Handler, Bubble Bros, PetAg) never surfaced.** Either the prompts don't trigger them or they're genuinely low-mindshare in this category.
- **Several high-mindshare competitors are not tracked** (Earthbath, Isle of Dogs, #1 All Systems, Iv San Bernard, FURminator, Les Poochs, Wahl Professional Animal, Show Season). Adding them to `competitorBrands` will produce better future comparisons.

## 8. Reference

- **Archived runs:** `brands/furgenics/sources/citation-runs/2026-04-22-{d166ac2c,ac51c1b1,7a51d781}.json`
- **Prompt set:** `brands/furgenics/prompts/tracked.json` at commit `6b4bf4d`
- **Brand config:** `brands/furgenics/config.json` — 12 competitors currently tracked
- **Canonical JSON format:** see ADR-010

## Next baseline

Recommended: re-run weekly once Phase E Vercel cron is live. The first cron-produced run becomes the t+1 reference. Month-over-month trend is where the 14–18% baseline either moves or doesn't — and where the content work in §6 gets judged.
