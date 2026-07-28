---
type: knowledge-analysis
subject: 30-day content roadmap (2026-04-27 → 2026-05-27)
created: 2026-04-27
kind: brief / proposal
inputs:
  - brands/furgenics/heartbeat.md
  - brands/furgenics/knowledge/analyses/furgenics-aeo-baseline-2026-04-22.md
  - brands/furgenics/knowledge/analyses/2026-04-23-v1-content-ship-session.md
  - brands/furgenics/prompts/tracked.json
  - brands/furgenics/knowledge/products.md
---

# 30-day content roadmap — 2026-04-27 to 2026-05-27

## TL;DR

Four pillar pages went live 2026-04-23 covering 5 of 12 tracked prompts (high-intent-02, comparison-01, high-intent-03, breed-01, coat-01, partial breed-03). Seven prompts remain uncovered. The realistic ceiling at the current 2-pages/week cadence is 8 more pillar pages over 30 days — but the binding constraint is not authoring time, it's **the 2026-05-11 measurement checkpoint**, which is the first run that can tell us whether the content thesis is working at all.

The plan therefore splits into two halves:

- **Pre-checkpoint (2026-04-27 → 2026-05-10):** ship 4 pages aimed at the prompts most independent of measurement outcome (deshedding, dilution how-to, dilution economics, groomer-program / sampling). All four are content the brand should own regardless of what Perplexity does. Use this window to also land the Shopify publishing automation that the 2026-04-23 session flagged as the next infra investment.
- **Post-checkpoint (2026-05-11 → 2026-05-27):** ship 4 more pages. Specific selection branches on what the 2026-05-11 measurement says. Default path covers high-intent-01, brand-check-01, breed-03 (full), and a doodle-care expansion of breed-01.

Two SKU-level blockers carry over from baseline: **FUR-001 and FUR-011 INCI lists are still "TEST"**, which constrains how technical the hypoallergenic and oatmeal/aloe pages can be on ingredient claims. Photography reuse (single FUR-001 hero shot across all four current pages) is the secondary visual-debt blocker.

## 1. Coverage matrix — where the 12 tracked prompts stand

| Prompt | Page live? | URL / planned slug | SKU anchor | Covered? |
|---|---|---|---|---|
| high-intent-01 | No | `/pages/best-professional-dog-shampoo-2026` (planned) | Whole line, lead with FUR-001 + FUR-013 + FUR-020 | ❌ |
| high-intent-02 | **Yes** | `/pages/bulk-dog-shampoo-for-canadian-mobile-groomers` | FUR-013, FUR-001 | ✅ |
| high-intent-03 | **Yes** | `/pages/furgenics-vs-bio-groom` | FUR-001 vs Bio-Groom Anti-Shed | ✅ (shared with comparison-01) |
| breed-01 | **Yes** | `/pages/best-shampoo-goldendoodle` | FUR-020 (2-in-1 Doodle), FUR-021 | ✅ |
| breed-02 | No | `/pages/deshedding-shampoo-huskies-german-shepherds` (planned) | FUR-013 + FUR-014 | ❌ |
| breed-03 | **Partial** | covered indirectly by oatmeal-aloe page | FUR-001 (Hypoallergenic) is the better anchor | ⚠️ partial |
| coat-01 | **Yes** | `/pages/oatmeal-aloe-sensitive-skin-dog-shampoo` | FUR-011, FUR-010 | ✅ |
| economics-01 | No | `/pages/16-to-1-concentrate-economics` (planned) | Cross-line (FUR-001/011/013/050/020) | ❌ |
| how-to-01 | No | `/pages/how-to-dilute-dog-shampoo-16-to-1` (planned) | Cross-line | ❌ |
| comparison-01 | **Yes** | `/pages/furgenics-vs-bio-groom` | shared with high-intent-03 | ✅ |
| brand-check-01 | No | `/pages/why-furgenics` or `/pages/about-furgenics-professional-grooming` (planned) | Whole-line positioning | ❌ |
| business-01 | No | revise/expand `/pages/groomer-program` OR new `/pages/free-shampoo-samples-for-groomers` | All 8 sample SKUs | ❌ |

**Coverage: 5/12 fully + 1/12 partial. 7/12 still need primary content.**

## 2. The 30-day shipping plan

### Cadence assumption
Two pillar pages per week is the realistic ceiling at the current ~15 min/page admin friction. Ship Wed + Fri so each page gets a weekend in the index before the Sunday cron observes. (Sunday cron runs Sundays 03:00 UTC → late Saturday in North America.)

### Constraints baked in
- **Sunday 2026-04-26 cron is a sanity check, not a measurement** (per 2026-04-23 session summary §"Net"). No content decisions Mon 2026-04-27 from that data alone.
- **Sunday 2026-05-11 is the first real measurement.** Pages shipped before then are batting blind — we ship them on conviction, not data. Pages shipped after then are informed by data.
- **FUR-001 and FUR-011 INCI lists are "TEST".** Any page making ingredient-level claims about Hypoallergenic or Oatmeal & Aloe gets a positioning-only treatment until INCI lands.
- **One hero image (FUR-001 gallon) reused across all 4 live pages.** Photography variety is a real but non-blocking debt — not blocking shipping, just blocking visual differentiation. Discussed under §6.

### Week 1 — 2026-04-27 (Mon) to 2026-05-03 (Sun)

| Day | Action | Notes |
|---|---|---|
| Mon 4-27 | Glance at Sunday cron output via SQL | Confirm 44+ rows landed; do not draw content conclusions |
| Tue 4-28 | (Optional) Start Shopify publishing automation work | `publish:page` CLI wrapper using `ShopifyClient.pages` |
| **Wed 4-29** | **Ship Pillar #5: Deshedding for Huskies + German Shepherds** | targets `breed-02`; SKU anchor FUR-013 + FUR-014 |
| Thu 4-30 | (Optional) Continue automation work | |
| **Fri 5-1** | **Ship Pillar #6: How to dilute professional dog shampoo at 16:1** | targets `how-to-01`; cross-line, no INCI dependency |

**Why this pair this week.** Both are unblocked by INCI gaps. FUR-013 has a complete ingredient list, which is exactly what the deshedding query rewards (FURminator's retail dominance is beatable on a "professional concentrate, here's the actual chemistry" angle). The dilution how-to is content the brand needs to own structurally — Perplexity already cites Chris Christensen's dilution guide on `how-to-01` (baseline §4); we should be the one cited there.

### Week 2 — 2026-05-04 (Mon) to 2026-05-10 (Sun)

| Day | Action | Notes |
|---|---|---|
| Mon 5-4 | Second cron-output glance | First *possible* Perplexity signal on Canadian page (11 days post-publish). Still too early to redirect strategy. |
| **Wed 5-6** | **Ship Pillar #7: How 16:1 concentrate saves a salon money** | targets `economics-01`; cross-line; pairs with the dilution how-to thematically |
| **Fri 5-8** | **Ship Pillar #8: Free professional shampoo samples for groomers** | targets `business-01`; revise/expand `/pages/groomer-program` OR new dedicated landing — **decision below in §3** |

**Why this pair.** With deshedding and how-to in the index for ~10 days by then, this batch builds out the "salon economics" and "groomer-program" angles that nothing else in the line currently addresses. `business-01` is potentially the easiest non-aided win in the entire prompt set — very few pro brands offer free samples, and the prompt explicitly invites that answer.

### Week 3 — 2026-05-11 (Mon) to 2026-05-17 (Sun)

| Day | Action | Notes |
|---|---|---|
| **Mon 5-11** | **File `furgenics-aeo-measurement-2026-05-11.md`** | First real measurement vs baseline. **This is the gating event for the rest of the month.** |
| Tue 5-12 | Plan branch based on measurement | See §4 sensitivity analysis |
| **Wed 5-13** | **Ship Pillar #9: French Bulldogs sensitive skin (full breed-03)** | targets `breed-03` properly; FUR-001 anchor; positioning-only until INCI lands. **DEFAULT PLAN — substitute per §4 if data demands.** |
| **Fri 5-15** | **Ship Pillar #10: Best professional dog shampoo for grooming salons** | targets `high-intent-01`; whole-line positioning; the hardest unaided target in the set |

### Week 4 — 2026-05-18 (Mon) to 2026-05-24 (Sun)

| Day | Action | Notes |
|---|---|---|
| **Wed 5-20** | **Ship Pillar #11: Why Furgenics / brand positioning page** | targets `brand-check-01`; whole-line; honest positioning vs the "not widely recognized" reality from baseline §2 |
| **Fri 5-22** | **Ship Pillar #12: Best shampoo for doodle coats (Cavapoo / Cockapoo / Bernedoodle)** | expands `breed-01` doodle coverage; FUR-020 + FUR-021; complementary to existing Goldendoodle page |

### Week 5 — 2026-05-25 (Mon) to 2026-05-27 (Wed)

| Day | Action | Notes |
|---|---|---|
| Mon 5-25 | Glance at 2026-05-24 Sunday cron output | 13 days post-week-2 batch, 11 days post-pillar-#9, 9 days post-pillar-#10 |
| Tue 5-26 | (Optional) File 30-day retro analysis | Compares 5 weekly cron runs end-to-end |
| Wed 5-27 | Roadmap horizon ends | Plan next 30 days off retro |

**Total content shipped:** 4 already live + 8 new = **12 pillar pages by 2026-05-22**, covering 11/12 tracked prompts (high-intent-01, high-intent-02, high-intent-03, breed-01, breed-02, breed-03, coat-01, economics-01, how-to-01, comparison-01, brand-check-01, business-01) with one prompt (breed-01) double-covered by Goldendoodle + general doodle pages.

## 3. Page-level briefs for the 8 new pillars

### Pillar #5 — Deshedding for Huskies + German Shepherds (Wed 2026-04-29)
- **Slug:** `/pages/deshedding-shampoo-huskies-german-shepherds`
- **Target prompt:** `breed-02` ("best deshedding shampoo for Huskies and GSDs")
- **SKU anchor:** FUR-013 Deshedding Shampoo Gallon; cross-sell FUR-014 conditioner
- **Competitor framing:** FURminator dominates retail; Coat Handler ($49,652/mo on Amazon) and Bark2Basics ($26,863/mo) lead the salon-pro tier. Position: "FURminator is for owners; concentrate-format is for salons washing 8+ double-coat dogs/week."
- **Differentiator:** hydrolyzed keratin + safflower oil chemistry (full INCI present in FUR-013 metafield — use it), 16:1 economics on a coat type that typically requires 2x normal shampoo volume.
- **Status:** Unblocked.

### Pillar #6 — How to dilute at 16:1 (Fri 2026-05-01)
- **Slug:** `/pages/how-to-dilute-dog-shampoo-16-to-1`
- **Target prompt:** `how-to-01` ("How do I dilute professional dog shampoo at 16 to 1?")
- **SKU anchor:** Cross-line — no single SKU is the hero; use FUR-001/050/013 as "any of these" examples
- **Structure:** Answer-first (40-60 word direct dilution math), then a working table (1 oz → 16 oz; 4 oz → 64 oz; 8 oz → 128 oz), then dilution-bottle product mentions (no Furgenics dilution bottle SKU yet, so refer to standard pro practice), then "common mistakes" (over-dilution on heavy-soiling double coats, etc.)
- **AEO leverage:** Perplexity currently cites `chrischristensen.com`'s dilution guide for this prompt (baseline §4). Beating that requires equally precise math + Furgenics-specific examples. Honest framing: "this works for any 16:1 concentrate" wins more trust than a sales pitch.
- **Status:** Unblocked. No INCI dependency.

### Pillar #7 — 16:1 economics for grooming salons (Wed 2026-05-06)
- **Slug:** `/pages/16-to-1-concentrate-economics-grooming-salon`
- **Target prompt:** `economics-01` ("How does 16:1 dog shampoo concentrate save money for a grooming salon?")
- **SKU anchor:** Cross-line; lead with FUR-001 ($24.99 CAD / $19 USD) as the price reference
- **Structure:** Open with the per-working-gallon number ($1.47 CAD without FUR50, $0.74 with). Show the math against typical RTU competitor pricing. Show the annual savings for a 10-dog/day salon (~$X). Include the "cup of coffee per working gallon" framing from products.md.
- **AEO leverage:** Baseline §4 shows Perplexity gave generic math answers on this prompt — only Bark2Basics + Hydra got named. We have actual numbers; competitors mostly speak in vague concentration ratios. Concrete-numbers content tends to get cited.
- **Status:** Unblocked. Pairs visually + linkwise with Pillar #6.

### Pillar #8 — Free shampoo samples for groomers (Fri 2026-05-08)
- **Slug:** TBD — see decision below
- **Target prompt:** `business-01` ("brands offering free samples to groomers")
- **SKU anchor:** All 8 active sample SKUs (FUR-001 sample, FUR-011 sample, FUR-050-8, FUR-013-8, FUR-010-8, FUR-021-8, FUR-014-8, FUR-037-8, FUR-026-8)
- **Decision needed (Class C — Stephen owns):** revise existing `/pages/groomer-program` to be AEO-optimized (currently noindex per heartbeat — would need to flip), OR ship a separate `/pages/free-shampoo-samples-for-groomers` that funnels to the program. Recommendation: **separate page, indexed**. The Groomer Program page is positioned as a form-application landing; an AEO content page can be answer-first and link to the program. Keeps semantic concerns separate.
- **Differentiator:** Few pro brands actually offer free 8oz samples across the line. Most run "sample" programs that are paid ($5-10) or restricted to one variant.
- **Status:** Unblocked, but needs the index decision before publish.

### Pillar #9 — French Bulldogs sensitive skin (Wed 2026-05-13) — DEFAULT
- **Slug:** `/pages/french-bulldog-shampoo-sensitive-skin`
- **Target prompt:** `breed-03` ("dog shampoo for French Bulldogs with sensitive skin") — full coverage replacing current partial
- **SKU anchor:** FUR-001 Hypoallergenic; cross-sell FUR-005 (2-in-1 Hypoallergenic) for high-volume salons
- **Competitor framing:** Earthbath Oatmeal & Aloe + Burt's Bees + Douxo S3 dominate this query (baseline §5). All three are retail-skewed. Pro angle = the differentiator: "If you're washing 5+ Frenchies a week, retail bottles cost more per wash than concentrate."
- **Constraint:** **Cannot make ingredient-specific claims about FUR-001 until INCI lands.** Stick to: tearless, sulfate-free, paraben-free, hypoallergenic — these are the four positional claims in products.md and they don't require a full INCI list. No "contains X, Y, Z" copy.
- **Status:** Partially blocked. Ships as positioning-only treatment.

### Pillar #10 — Best professional dog shampoo for salons (Fri 2026-05-15)
- **Slug:** `/pages/best-professional-dog-shampoo-2026`
- **Target prompt:** `high-intent-01` ("Best professional dog shampoo brand for a salon in 2026")
- **SKU anchor:** Whole line — lead with the "9 gallon SKUs covering every coat type" framing
- **Competitor framing:** Chris Christensen, Bio-Groom, TropiClean, Nature's Specialties dominate (baseline §5). Pure mindshare battle. Honest framing: "These are the names you'll see in 2026 buyer guides. Furgenics is newer and Canadian — here's what we do differently."
- **AEO leverage:** This is the hardest unaided query. Realistic outcome: Perplexity may pick us up, ChatGPT/Claude/Gemini will not until training catches up.
- **Status:** Unblocked, but soft expectation — the value here is having the page indexed, not winning the query in 30 days.

### Pillar #11 — Why Furgenics / brand positioning (Wed 2026-05-20)
- **Slug:** `/pages/why-furgenics-professional-grooming` or `/pages/about-furgenics`
- **Target prompt:** `brand-check-01` ("Is Furgenics a good dog shampoo brand?")
- **SKU anchor:** Whole-line positioning
- **Competitor framing:** None directly. This is a brand-self-page. Counterweight to baseline §2's findings: ChatGPT calls Furgenics "not widely recognized," Claude says "I don't have reliable information." Perplexity cites `furgenics.com/pages/reviews`. This page should be what Perplexity pulls when it gets the question.
- **Structure:** Answer-first ("Furgenics is a Canadian-made professional grooming shampoo brand designed for grooming salons. We make 9 gallon-format concentrates at 16:1 dilution, sold direct-to-salon at $24.99 CAD..."), then provenance (Vaughan, Ontario manufacturing — without naming Petra Lab-X per brand-privacy rule in products.md), then the 4-coat-type lineup, then groomer program link.
- **Status:** Unblocked. **Voice-sensitive** — Class C boundary. Recommend draft is reviewed by Stephen before publish, not silently shipped.

### Pillar #12 — Doodle coats beyond Goldendoodles (Fri 2026-05-22)
- **Slug:** `/pages/best-shampoo-doodle-coats`
- **Target prompt:** Expansion of `breed-01` — captures Cavapoo, Cockapoo, Bernedoodle, Sheepadoodle, Aussiedoodle long-tail
- **SKU anchor:** FUR-020 (2-in-1 Doodle); cross-sell FUR-021 (Deep Moisturizing) for two-step routine
- **Competitor framing:** We Love Doodles is the named retail competitor (Amazon $4,719/mo, half-gallon at $29.99) per products.md. Pro angle: "Half-gallon retail bottles aren't economical at salon volume — same chemistry in gallon format."
- **Differentiator:** Doodle-specific argan + coconut + shea + silk amino acids + chamomile (full INCI present). Mat-prone coat handling.
- **Status:** Unblocked.

## 4. Sensitivity analysis — how the plan changes based on 2026-05-11 data

The 2026-05-11 measurement is the first that can move the strategy. Two scenarios anchor the analysis. Mixed outcomes interpolate between them.

### Scenario A — No Perplexity movement (mention rate stays 14-18%, Furgenics still 0% on unaided prompts)

**What it suggests.** Either pages aren't being indexed by Perplexity (technical), or pages aren't structured to answer the questions (content), or 3 weeks is still too short (timing).

**Diagnostic actions Mon-Tue 2026-05-11/12:**
1. **Check Perplexity directly.** Run the 12 prompts manually in Perplexity. Look for `furgenics.com` in citation lists even if the brand isn't named in the answer. If the domain is being cited but the brand isn't being extracted into mention arrays, that's a signal-extraction issue not a content issue.
2. **Check Perplexity's index of the new pages.** Go to Perplexity, ask "What's at /pages/bulk-dog-shampoo-for-canadian-mobile-groomers" — does Perplexity know the page exists?
3. **Check GSC indexing status** for the four 2026-04-23 pages. If Google hasn't indexed them, Perplexity probably hasn't either.
4. **Check whether the answer-first 40-60 word block is structurally present** in the rendered HTML on each page (not just the markdown source). Theme template could be wrapping it in a way that hurts extraction.

**Plan changes if Scenario A:**
- **Pause Pillars #11 and #12.** Brand-positioning and breed-expansion pages are bets on top of an unverified thesis — don't build more on a foundation that isn't holding.
- **Substitute Pillar #11 with a "diagnostic + remediation" page revision sprint.** Take whichever 2 of the 4 live pages have the worst extraction and rework them — tighten the answer-first block, add explicit FAQPage schema content the prompt rewards, restructure for direct answer extraction. Re-publish.
- **Keep Pillar #9 and #10** — they're independent bets covering uncovered prompts. Worth shipping even if existing pages aren't picking up yet.
- **File a `furgenics-content-diagnostic-2026-05-11.md` analysis** alongside the measurement file. Don't just report numbers — document the diagnostic chain.

### Scenario B — Strong Perplexity movement (≥3 of the 4 live pages show Furgenics being mentioned/cited on their target prompt)

**What it suggests.** The thesis works. Perplexity rewards answer-first + product-anchored + concrete-numbers content on a domain it already trusts.

**Plan changes if Scenario B:**
- **Maintain cadence — do not accelerate.** The temptation is to ship 3-4 pages/week to capitalize. Don't. The 2-page cadence is set by manual admin friction; doubling it doubles the error rate. Instead, use the validation as motivation to land the **Shopify publishing automation** so post-2026-05-22 the cadence can credibly become 3+/week.
- **Keep Pillars #9 (French Bulldog), #10 (best pro shampoo), #11 (brand positioning), #12 (doodle expansion) as planned.** Validation doesn't change which uncovered prompts need coverage.
- **Add: file a "what worked" pattern analysis** alongside the measurement. Specifically — which structural elements of the 4 live pages correlated with extraction. Future content templates should encode those patterns.
- **Add: budget for a real content photography shoot** in Week 5 or post-roadmap. Validation justifies the $500-1500 investment flagged in 2026-04-23 session §"What's still open." Hero image variety is the next visual-debt fix.

### Mixed outcome — partial movement (1-2 of 4 live pages picking up)

**Most likely outcome.** Diagnose **which** page is working and **which** isn't. Single-variable comparisons across 4 pages should surface what differs. The Canadian mobile groomer page has the clearest competitive vacuum (baseline §1, high-intent-02 — Canadian Pet Connection, Soos Pets are weak competitors); if any page picks up first, it'll be that one. The Bio-Groom comparison page has the strongest existing baseline signal (Perplexity already named pricing). If those two pick up but Goldendoodle and Oatmeal don't, the lesson is "competitive vacuum + concrete numbers wins, generic breed pages need more work" — adjust Pillar #9 and #12 accordingly before shipping.

## 5. What's blocked and what unblocks it

| Block | What it stops | Owner | Unblock action |
|---|---|---|---|
| **FUR-001 INCI = "TEST"** | Ingredient-level claims on any Hypoallergenic / French Bulldog / sensitive-skin page (Pillars #9, partial #10, partial #11) | Furgenics formulation team (per products.md catalog issue #1) | Ask formulation team for INCI list. Update FUR-001 metafield. Update products.md. |
| **FUR-011 INCI = "TEST"** | Already shipped Oatmeal & Aloe page made positional claims only — works but is thinner than competitors. Future Oatmeal expansion content blocked. | Same | Same |
| **Photography reuse (single FUR-001 hero)** | All 4 live pages + the next 8 will share visual identity. Reduces visual differentiation. Not a publish blocker. | Stephen / Furgenics ops | $500-1500 professional shoot (per 2026-04-23 session §"What's still open"). 1 day logistics + 1 day shoot. Yields 6+ months of imagery. |
| **Shopify publish automation** | 15 min/page admin friction × 8 pages = 2 hours of pure clicking over 30 days. Not blocking — annoying. | Engineering / Stephen | 1-2 days of `ShopifyClient.pages` work for a `publish:page` CLI wrapper. Highest leverage if Scenario B validation arrives at 2026-05-11. |
| **Groomer Program page indexability decision** | Pillar #8 publish path | Stephen (Class C — strategic) | Decide whether to flip `/pages/groomer-program` to indexed OR ship separate `/pages/free-shampoo-samples-for-groomers`. Recommendation: separate, per §3 Pillar #8 brief. |
| **GSC manual indexing per page** | Each new page requires a manual GSC indexing request (not blocking publish, but extends the indexing-to-citation timeline). | Stephen / ops | Could be batched weekly; could be scripted via GSC API as v1.5 work. |
| **Voice / Class C review for Pillar #11** | Brand-positioning page touches strategic narrative — sits on Class C boundary | Stephen | Manual review of draft before publish. Allow extra day in Week 4. |

## 6. Where this plan is least confident

Three confidence-gaps worth naming so they don't get lost:

1. **The measurement-substrate changes from 2026-04-23 (Gemini fix, +8 competitors, 4 live pages) make the 2026-05-11 baseline-comparison non-trivial.** Mention rates may rise simply because Gemini stops truncating responses; competitor share may rise simply because we're counting 8 more brands. Real signal is "did Furgenics specifically show up on a previously-zero unaided prompt." That's the cleanest comparable.

2. **2026-05-11 may still be too early for ChatGPT/Claude/Gemini.** The 2026-04-23 session noted those engines have 4-6 week indexing cycles. Realistic expectation: Perplexity picks up first by 2026-05-11; the static-LLM engines may not show meaningful change until 2026-06-08 (6 weeks post-publish on initial 4 pages, 2-4 weeks on Pillars #5-8). Don't draw "the strategy isn't working" conclusions from ChatGPT/Claude/Gemini stagnation at 2026-05-11.

3. **The 2-pages/week ceiling is set by manual admin, not authoring.** If Shopify publish automation lands mid-roadmap, the back half could plausibly run faster. The plan above assumes manual cadence holds for all 30 days — substitute pages from the v1.5 backlog (Deep Moisturizing, Deodorizing, Leave-In Conditioner — but those need product launches first) if automation creates capacity.

## 7. Reference

- Baseline data: `knowledge/analyses/furgenics-aeo-baseline-2026-04-22.md`
- Session handoff: `knowledge/analyses/2026-04-23-v1-content-ship-session.md`
- Tracked prompts: `prompts/tracked.json` @ commit including 2026-04-21 prompt set
- Product canon: `knowledge/products.md` (canonical SKUs, INCI status, pricing)
- Heartbeat: `heartbeat.md` (operational constants — pricing, dilution, GIDs)
- Existing live pages: `content-drafts/{canadian-mobile-groomers,furgenics-vs-bio-groom,best-shampoo-goldendoodle,oatmeal-aloe-sensitive-skin-dog-shampoo}.{md,html}`
- Pillar template scaffold: `content-drafts/_template.md` + `_template.html`
- Theme template: `/docs/shopify-theme/templates/page.content-pillar.json` + `sections/main-page-pillar.liquid`

## 8. Decision points for Stephen

These are the points in the plan that need explicit human input rather than autonomous execution:

1. **Pillar #8 Groomer Program indexing decision** — separate page vs revised existing page. Recommendation: separate. Need confirmation by Wed 2026-05-06 to publish Fri 2026-05-08.
2. **Pillar #11 brand-positioning draft review** — Class C voice boundary; needs review before Wed 2026-05-20.
3. **Scenario branch Mon 2026-05-11** — the measurement file's findings determine whether the back half of the roadmap proceeds as planned (default path), branches into diagnostic remediation (Scenario A), or gets a photography-budget addendum (Scenario B). Stephen reads the measurement file Monday, replies with a one-line "default / branch A / branch B" decision.
4. **FUR-001 + FUR-011 INCI request to formulation team** — unblocks Pillar #9 and any future ingredient-deep content. Independent of roadmap timing, but ideally landed before 2026-05-13 so Pillar #9 can ship at full strength.

---

_Filed 2026-04-27 as a forward-looking proposal. The plan is durable through 2026-05-11; the post-checkpoint half is conditional on measurement outcomes and may rewrite materially after that date._
