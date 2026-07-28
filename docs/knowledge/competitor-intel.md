# Furgenics — Competitor Intelligence

> Tracked competitor brands across two channel sets: **professional salon / distributor channel** (primary) and **Amazon retail channel** (secondary + some crossover). Used by the AEO tracker to measure citation share-of-voice and surface competitive gaps. This file evolves as we learn what AI engines are saying about each brand and as new competitive data arrives.
>
> **Cross-reference.** The Amazon retail channel set and monthly-sales data comes from the 2026-01-22 GTM Amazon workbook ingest — see `sources/external-research/spreadsheets/2026-04-22-furgenics-gtm-amazon.md` for raw data and `analyses/furgenics-amazon-retail-landscape.md` for synthesis.

## Channel map (which competitors appear where)

| Competitor | Professional / distributor | Amazon retail | Direct-to-salon DTC |
|---|---|---|---|
| Bio-Groom | ✓ primary | ✓ (~$46k/mo) | ✓ |
| The Coat Handler | ✓ primary | ✓ (~$85k/mo) | partial |
| Chris Christensen | ✓ primary (premium) | minimal | ✓ |
| Nature's Specialties | ✓ primary | partial | partial |
| South Bark | ✓ (specialty/whitening) | minimal | minimal |
| Tropiclean Pro | ✓ (retail crossover) | ✓ | ✓ |
| iGroom | ✓ (modern premium) | limited | ✓ |
| Warren London | minimal | ✓ ($385k/mo outlier) | limited |
| Bubble Bros | minimal | ✓ (~$20k/mo) | minimal |
| Bark2Basics | ✓ partial | ✓ ($138k/mo leader) | ✓ |
| PetAg (Fresh 'n Clean) | legacy | ✓ (~$38k/mo) | partial |
| We Love Doodles | — | ✓ niche ($5k/mo) | — |

## Competitor scorecard

> **Standardized quick-reference** (added 2026-06-08 — v2.0 structural upgrade per `docs/roadmap-seo-v2.md` §2.3). One normalized row per tracked competitor; the narrative sections below remain the source of detail. This table is the at-a-glance index and the anchor for v2-populated data (share-of-voice, recent observed changes). Field schema:
>
> - **Tier:** `direct` · `indirect` · `premium specialty` · `indirect niche`
> - **Primary channel:** `pro/distributor` · `Amazon` · `DTC-to-salon` (or a crossover)
> - **Signature claim:** the one thing they're known for
> - **Price band (gal):** representative US gallon price; exact per-market CA/US values live in the "Per-market price capture history" table below

| Competitor | Tier | Primary channel | Signature claim | Price band (gal) |
|---|---|---|---|---|
| Bio-Groom | direct | pro/distributor + Amazon | Legacy hypoallergenic category leader | $45–89 US |
| The Coat Handler | direct | pro/distributor + Amazon | Highest-dilution concentrate (up to 32:1) | $47–54 US |
| Chris Christensen | premium specialty | show circuit / specialty | Show-coat premium standard | $62+ US |
| Nature's Specialties | direct | pro/distributor | Deep natural-ingredient SKU range | ~$90 US |
| South Bark | premium specialty | specialty | Whitening specialist | n/a |
| Tropiclean Pro | direct | retail + pro crossover | Consumer-brand pro extension | $59–80 US |
| iGroom | premium salon | DTC-to-salon | Modern salon-first branding | $66–75 US |
| Warren London | indirect | Amazon retail | Breakout leave-in conditioner | $40–60 US |
| Bubble Bros | indirect | Amazon-only | Value 12:1 concentrate | $36–40 US |
| Bark2Basics | indirect→direct | Amazon (volume leader) | Broadest Amazon line, USA-made | $47–55 US |
| PetAg (Fresh 'n Clean) | indirect | Amazon (legacy) | Heritage consumer brand | $47–51 US |
| We Love Doodles | indirect niche | Amazon-only | Doodle-breed-specific (64oz) | $30 US / 64oz |

### Share-of-voice (tracked keywords) — v2-populated

> Auto-populated once keyword-rank tracking (`docs/roadmap-seo-v2.md` §2.1 / phase v2.2) and AEO citation share are joined per competitor. Do not hand-edit inside the markers.

<!-- AUTO-UPDATED:competitor-sov:START -->
_No share-of-voice data yet. Populated when v2.2 keyword-rank tracking comes online and is joined with AEO citation share._
<!-- AUTO-UPDATED:competitor-sov:END -->

### Recent observed changes — v2-populated

> Auto-populated by the competitor-monitoring agent (`docs/roadmap-seo-v2.md` §2.6 / phase v2.5) as it diffs competitor snapshots from `sources/competitor-snapshots/`. Do not hand-edit inside the markers.

<!-- AUTO-UPDATED:competitor-recent-changes:START -->
_No monitoring data yet. Populated when the v2.5 competitor-monitoring cron ships._
<!-- AUTO-UPDATED:competitor-recent-changes:END -->

## Professional salon / distributor-channel competitors

### Bio-Groom
- **Tier:** Direct (same category: professional dog grooming shampoos for salons)
- **Positioning:** Established legacy brand. Broad line. Sold through distributors.
- **Strengths:** Brand recognition, decades of salon relationships, wide SKU variety. Amazon Hypoallergenic is a clear category leader ($36,092/mo on B0002ASSO8, 4.6 stars across 342 reviews).
- **Weaknesses:** Less clear single-brand positioning, retail pricing often unclear for pro buyers. Wide dilution variation across line (2:1 to 12:1) adds complexity.
- **Where they appear:** Amazon, Petco Pro, Ryan's Pet Supplies, PetEdge
- **Amazon line economics:** $44.99–$89.01 USD range; the $89.01 Anti-Shed Deshedding Conditioner (B0BMB8QLKJ) is the priciest tracked SKU in the competitive set.
- **AEO signal:** Frequently cited in ChatGPT/Perplexity responses for "professional dog shampoo" queries

### The Coat Handler
- **Tier:** Direct
- **Positioning:** Concentrate-focused, known for dilution economics. Highest dilution ratios in the tracked set (up to 32:1).
- **Strengths:** Strong groomer word-of-mouth, clear concentrate value prop (similar to ours). **Amazon Deshedding Shampoo is a category leader** at $49,652/mo (B00OAC5FYU, 4.6 stars across 2,279 reviews — largest review count in the set).
- **Weaknesses:** Website conversion flow is dated, limited brand content. Hypoallergenic SKU underperforms relative to Bio-Groom's.
- **Where they appear:** Specialty grooming distributors, Amazon
- **Amazon line economics:** $46.97–$53.96 USD; Deshedding line drives most of the revenue.
- **AEO signal:** Mentioned in budget-conscious groomer queries and deshedding-specific queries

### Chris Christensen
- **Tier:** Direct, premium
- **Positioning:** Show-coat / high-end specialty. Poodle, Bichon, and show-dog community.
- **Strengths:** Show groomer endorsements, premium positioning, distinct product family
- **Weaknesses:** Higher per-unit price, not focused on volume salon use. Minimal Amazon presence (not in the January 2026 tracked set).
- **Where they appear:** Show grooming circuits, specialty retailers
- **AEO signal:** Cited for "best show dog shampoo" and high-end queries

### Nature's Specialties
- **Tier:** Direct
- **Positioning:** Wide professional line, natural ingredient story
- **Strengths:** Long history, extensive SKU depth (shampoos, conditioners, coat treatments)
- **Weaknesses:** Brand can feel dated visually, natural positioning crowded
- **Where they appear:** PetEdge, Ryan's Pet Supplies, Amazon (partial presence; not in the January 2026 tracked Amazon set)
- **AEO signal:** Cited in natural/plant-based dog shampoo queries

### South Bark
- **Tier:** Direct, premium specialty
- **Positioning:** Whitening and specialty treatments
- **Strengths:** Strong in whitening category for show groomers
- **Weaknesses:** Narrower line, higher price point. Minimal Amazon presence.
- **AEO signal:** Cited specifically for whitening queries

### Tropiclean Pro
- **Tier:** Direct
- **Positioning:** Professional extension of consumer Tropiclean brand
- **Strengths:** Parent brand recognition, retail visibility. Crossover channel strategy (retail + pro).
- **Weaknesses:** Blur between retail and pro positioning may reduce groomer loyalty
- **AEO signal:** Mixed — appears in both retail and pro queries

### iGroom
- **Tier:** Direct, premium salon
- **Positioning:** Salon-first, clean ingredient story, modern branding
- **Strengths:** Modern brand presentation, strong Instagram presence, groomer influencer relationships
- **Weaknesses:** Higher price point, smaller SKU depth. Limited Amazon presence.
- **AEO signal:** Cited in "modern professional dog shampoo" queries

## Amazon retail-channel competitors

> These appear in the January 2026 GTM Amazon competitive analysis. Figures are estimates (Jungle Scout / similar tools) for monthly units and sales. Raw data: `sources/external-research/spreadsheets/2026-04-22-furgenics-gtm-amazon.md`.

### Warren London
- **Tier:** Indirect (retail-first; not typically present in pro-distributor channels)
- **Positioning:** Multi-scent grooming line with a standout leave-in conditioner. Coconut, lavender, cherry, unscented scent ladder.
- **Strengths:** **Hydrating Butter Leave-In Conditioner is an Amazon outlier — $385,915/mo estimated, 6,433 monthly units, 4.5 stars across 16,223 reviews** (B0C7HKYR92). 10-30× the revenue of any other tracked SKU. Either a breakout product or a data estimation inflation; either way, worth confirming.
- **Weaknesses:** Rest of line is modest (Calming Lavender ~$3,239/mo; Shed Control ~$540/mo). Limited dilution/concentrate story — ready-to-use positioning. Not known in professional distributor channel.
- **Amazon line economics:** $39.99–$59.99 USD
- **Gap for Furgenics:** **Leave-in conditioner is a product category Furgenics doesn't offer.** Flagged for consideration.
- **AEO signal:** TBD — not currently tracked; consider adding to AEO prompt set.

### Bubble Bros
- **Tier:** Indirect (Amazon-only)
- **Positioning:** 12:1 concentrate line, value-priced ($35.99-$39.99). Naturally-derived-ingredients story.
- **Strengths:** Consistent dilution ratio across full line. Vanilla/fresh scent profile is differentiated.
- **Weaknesses:** Low Amazon sales volume (~$20k/mo total line). Low brand awareness. Lower review counts (105-332 per SKU).
- **Amazon line economics:** $35.99-$39.99 USD
- **AEO signal:** TBD

### Bark2Basics
- **Tier:** Indirect to direct (has some professional presence but primarily Amazon-driven)
- **Positioning:** Broadest Amazon line in the tracked set. 16:1 to 32:1 dilutions. USA-made, coconut scent forward.
- **Strengths:** **Amazon volume leader** at ~$138,000/mo total line. Oatmeal Shampoo (B01GGLVQZO) alone at $48,113/mo with 1,880 reviews. Covers Furgenics' full product equivalent set (Oatmeal, Hypoallergenic, Deshedding, Deep Moisturizing, matching conditioners).
- **Weaknesses:** Hypoallergenic has aggressive CAD pricing ($84.70 CAD vs $54.96 USD — sharper markup than peers). Brand positioning is utility-forward, not premium.
- **Amazon line economics:** $46.97–$54.96 USD (USD); $47.97–$84.70 CAD
- **AEO signal:** TBD — likely cited on "best oatmeal dog shampoo" and "bulk dog shampoo" queries.

### PetAg (Fresh 'n Clean)
- **Tier:** Indirect (legacy consumer brand with Amazon pro SKUs)
- **Positioning:** "Fresh 'n Clean" line on Amazon; 10:1 to 15:1 concentrates. Classic Fresh and Tropical scents.
- **Strengths:** Long heritage brand. Moisturizing Shampoo at $17,489/mo (B008HTXLJI, 4.8 stars across 349 reviews).
- **Weaknesses:** Limited pro-specific line; mostly a legacy consumer brand on professional channels.
- **Amazon line economics:** $46.74–$50.99 USD
- **AEO signal:** TBD

### We Love Doodles
- **Tier:** Indirect niche (doodle-specific, half-gallon format only)
- **Positioning:** Doodle-breed-specific, three scents (Ocean Breeze, Lavender, Mango), half-gallon 64oz format at $29.99.
- **Strengths:** Clear category positioning. Matches rising doodle-breed demand. Mango SKU has 4.9 star rating.
- **Weaknesses:** Small total revenue ($4,719/mo across three SKUs). Half-gallon format is under-sized for active salons. No concentrate/dilution story.
- **Amazon line economics:** $29.99 USD / 64oz
- **Gap for Furgenics:** Furgenics has 2-in-1 Doodle (FUR-037); competing head-on in this category is viable.
- **AEO signal:** TBD — likely cited on "best doodle shampoo" queries.

## Competitive positioning summary

Furgenics' unique positioning vs. the combined field:

1. **Canadian + cross-border manufacturing** — one of the few professional brands with Canadian manufacturing and direct-to-salon shipping in Canada. Competitors mostly ship from US warehouses.
2. **Transparent concentrate math** — 16:1, 17 working gallons, "cup of coffee per working gallon" messaging. Rare in the competitive set (Coat Handler is the only other brand making dilution math a lead argument).
3. **Groomer Program sampling** — 8oz free samples to qualified groomers is not standard industry practice; most require purchase to trial.
4. **50% off first order** — aggressive first-order discount (FUR50). No tracked competitor matches this publicly.
5. **Modern schema/AEO-ready content** — most competitors have dated Shopify or legacy-distributor web presence. We have v3 schema (see `schema-state.md`), FAQ structure, OpenGraph, Twitter Cards.
6. **Pricing anomaly** — Furgenics direct price ($24.99 CAD / $19 USD per gallon, per `products.md`) is **materially lower** than Amazon market ($35.99–$89.01 USD). This is deliberate for direct-to-salon relationships but will need a separate Amazon pricing decision when that channel goes live. Flagged for Stephen's strategic input.

## Known competitor gaps we can exploit

- **Bio-Groom, Nature's Specialties:** Thin blog content. Few how-to guides. Weak AEO presence.
- **Coat Handler:** Limited brand content, could out-publish them on dilution math education. Direct overlap with our concentrate positioning.
- **iGroom:** Strong on Instagram but weak on owned-domain SEO content.
- **Warren London:** Built a winner on leave-in conditioner — a category Furgenics doesn't serve. Could be a product line addition; could also be a content opportunity ("when to use a leave-in vs a rinse-out conditioner").
- **Bark2Basics:** Largest Amazon competitor by volume, but utility-forward positioning. Opportunity to compete on brand story + Canadian manufacturing narrative.
- **All:** Limited breed-specific landing pages. "Best shampoo for Goldendoodles" etc. are uncontested in owned-brand content (third-party listicles dominate).

## Monitoring process

The AEO tracker runs each Tier 1 and Tier 4 prompt (from `target-queries.md`) against ChatGPT, Perplexity, Claude, Gemini weekly. The citation tracker:

1. Parses responses for brand mentions (word-boundary match on `Furgenics` + each competitor name)
2. Parses responses for source-URL citations (currently only Perplexity returns source URLs by default)
3. Logs each `prompt × engine` result to Supabase `seo_steward.citation_runs` with the raw response preserved
4. Writes the per-prompt summary table back to `knowledge/target-queries.md` (agent-updated block) so the wiki reflects latest state
5. Surfaces "we're NOT in this query where competitors are" gaps as HIGH or MEDIUM priority findings in the heartbeat

Monthly, this file's "AEO signal" lines should be updated based on observed patterns in the raw responses. That's currently a human task; may become Class B (agent-proposed, human-approved) in v2 work — see `docs/roadmap-seo-v2.md` area 2.6 (self-improving competitor/market intel).

## Non-competitors (clarifying non-threats)

- **Consumer brands (Burt's Bees for dogs, Wahl Pet, Vetericyn retail):** Different channel, different audience. Don't track unless they expand to pro-gallon lines.
- **Vet-only brands (Douxo, Virbac, Zymox):** Medicated-shampoo category, different use case. Not competitive for non-medicated pro grooming.

## Per-market price capture history (live source for the [[COMPETITOR]] section template)

The `[[COMPETITOR:slug]]` tokens in pillar pages render per-market values pulled from `docs/shopify-theme/sections/main-page-pillar.liquid`. The substitution data is captured here; the section file is updated when this table is.

**Most recent capture cycle: 2026-05-21 (Stephen, manual Amazon CA + Amazon US browser capture).** Next refresh target: 2026-08 (quarterly cadence).

| Slug (used in tokens) | Brand / product | CA price | US price | Notes |
|---|---|---|---|---|
| `bio-groom-hypo-groom` | Bio-Groom So-Gentle Hypoallergenic 1 gal | $110.41 CAD (Amazon CA 2026-05) | $49.99 USD (Amazon US 2026-05) | Significant CA import markup (~2.2× US in CAD-equivalent terms) |
| `coat-handler-15-in-1` | Coat Handler 15-in-1 All-Purpose Conditioner 1 gal | $66.02 CAD (Amazon CA 2026-05) | $47.97 USD (Amazon US 2026-05) | Strong like-for-like match across markets |
| `coat-handler-anti-shed` | Coat Handler Anti-Shed (Undercoat Control) Shampoo 1 gal | $78.95 CAD (Amazon CA 2026-05) | $54.97 USD (Amazon US 2026-05) | CA conditioner: $78.73 CAD; US conditioner: $48.97–51.97 USD |
| `furminator-deshedding` | FURminator deShedding Ultra Premium Shampoo | $86.01 CAD (Amazon CA 2026-05) | $62.47 USD (Amazon US 2026-05) | US conditioner: $48.90 USD. Stephen's capture significantly higher than original $14-18 USD estimate — may be larger size or 3-pack; verify on next refresh |
| `chris-christensen-day-to-day` | Chris Christensen Day to Day Shampoo 1 gal | $151.72 CAD (Amazon CA 2026-05) | $62.48 USD (Amazon US 2026-05) | Both markets now have real Day-to-Day 1-gal captures. CA is ~$87 CAD higher than US-converted-at-FX (US × 1.38 = ~$86 CAD), reflecting the brand's typical CA premium |
| `igroom-silk` | iGroom Shampoo Gallon (Silk variant not directly captured; closest equivalents used) | $63.99 CAD (Amazon CA 2026-05, Deshedding & Detangling) | $66.07 USD (Amazon US 2026-05, Squeaky Clean) | All-in-One US: $69.02; Deshedding US: $74.50. Silk Shampoo 1 gal not captured in either market |
| `isle-of-dogs-evening-primrose` | Isle of Dogs Shampoo Gallon | ~$90.96 CAD (FX-converted from US at 1.38 — no 1-gal listing on Amazon CA as of 2026-05) | $65.91 USD (Amazon US 2026-05) | US refresh from prior $63.06 Tearless Puppy proxy. No Canadian gallon channel — CA visitors get FX-converted estimate with explicit annotation |
| `earthbath-oatmeal-aloe` | Earthbath Oatmeal & Aloe Gallon (RTU) | $114.30 CAD (Amazon CA 2026-05) | $73.90 USD (Amazon US 2026-05, hypoallergenic 1 gal as proxy) | Stephen captured Oatmeal & Aloe specifically on CA; US proxy is hypoallergenic gallon (same brand, gallon size) |
| `burts-bees-oatmeal` | Burt's Bees Shampoo 16oz | $9.99 CAD (Amazon CA 2026-05, Puppy 2-in-1) | $7.98 USD (Amazon US 2026-05, Oatmeal) | CA Oatmeal-specific pending; US S&S $6.78. Original CA estimate of $14 was high |
| `tropiclean-pro-hypoallergenic-oatmeal` | TropiClean Pro Gallon | $83.97 CAD (Amazon CA 2026-05) | $59.38 USD (Amazon US 2026-05, Aloe & Coconut as proxy) | US Deodorizing 1 gal: $60.99 (S&S $54.89); US 42:1 high-concentrate 1 gal: $79.99 |
| `natures-specialties-colloidal-oatmeal` | Nature's Specialties Colloidal Oatmeal 1 gal | ~$124.19 CAD (FX-converted from US at 1.38 — no 1-gal listing on Amazon CA as of 2026-05; prior Plum Silky 1 gal at $186.89 CAD no longer available) | $89.99 USD (Amazon US 2026-05) | US refresh from prior $80 distributor proxy. Prior CA Plum Silky listing delisted; CA visitors get FX-converted estimate |
| `all-systems-botanical-oatmeal` | #1 All Systems Gallon | $68.01 CAD (Amazon CA 2026-05) | $49.40 USD (Amazon US 2026-05, Super Cleaning & Conditioning as proxy) | Original $75+ USD estimate was high |
| `bark2basics-de-shedding` | Bark2Basics De-Shedding Gallon | $71.35 CAD (Amazon CA 2026-05, de-shedding conditioner as proxy) | $48.97 USD (Amazon US 2026-05, DeShedding shampoo) | CA shampoo-specific pending. Other Bark2Basics CA gallon variants captured: Waterless $52.95, Honey & Almond $68.91, Econo Bath $54.95 |

**Capture method note (2026-05-21).** Manual browser capture by Stephen on Amazon.ca and Amazon.com. Programmatic capture via WebFetch failed on Amazon (bot blocking on both sides). Future quarterly refreshes should follow this manual path until a different data source is wired in.

**FX convention (added 2026-05-22).** When a competitor is only sold in one market (e.g., no Canadian gallon listing for Isle of Dogs or Nature's Specialties), the missing-market value is FX-converted from the available capture at **1.38 USD→CAD**. The rendered token includes an explicit annotation: `~$90.96 CAD (converted from $65.91 USD at 1.38 FX — no 1-gal listing on Amazon Canada as of 2026-05)`. This is more honest than leaving the cell blank or showing a USD price to a CAD visitor, and the annotation gives the reader the source. FX rate should be reviewed each quarterly refresh; if the CAD weakens or strengthens materially, update the constant in the section template.

**Refresh workflow.** When prices need updating: (a) update the table above; (b) update the matching `{% capture %}` block in `docs/shopify-theme/sections/main-page-pillar.liquid` AND `docs/shopify-theme/sections/main-product.liquid` AND `docs/shopify-theme/snippets/product-description-token-pipeline.liquid` (three files now — PDPs also use the pipeline as of 2026-05-22); (c) deploy both section files to the live theme; (d) note the refresh in the change log below. All four artifacts must stay in sync — the table is the source of truth for what data we have, the section files render that data on the live site.

## Change log

- **2026-06-08** — v2.0 structural upgrade (option A, additive). Added a standardized **Competitor scorecard** table (one normalized row per competitor: tier, primary channel, signature claim, price band) after the channel map, plus two marker-bounded auto-update blocks (`AUTO-UPDATED:competitor-sov` for keyword/citation share-of-voice, `AUTO-UPDATED:competitor-recent-changes` for the v2.5 competitor-monitoring agent). All existing narrative sections preserved unchanged — this is an at-a-glance index + a hook for v2-populated data, not a rewrite. Per `docs/roadmap-seo-v2.md` §2.3.
- **2026-05-22** — Per-market refresh of 3 competitors that were missing one market's capture in the prior cycle. `chris-christensen-day-to-day` now has both markets real-captured (CA $151.72, US $62.48 — US refreshed from prior $57.99). `isle-of-dogs-evening-primrose` US refreshed to $65.91 (from prior $63.06 Tearless Puppy proxy); CA has no 1-gal listing — FX-converted to ~$90.96 CAD at 1.38. `natures-specialties-colloidal-oatmeal` US refreshed to $89.99 (from prior $80 distributor proxy); CA Plum Silky 1-gal previously at $186.89 CAD no longer listed — FX-converted to ~$124.19 CAD. Added FX-convention note (1.38 USD→CAD) above the change log. Updated all three theme files in lockstep: `main-page-pillar.liquid`, `main-product.liquid`, `snippets/product-description-token-pipeline.liquid`.
- **2026-05-21** — Per-market price capture cycle. Stephen captured Amazon CA + Amazon US prices for 13 tracked competitors via manual browser. Section template `docs/shopify-theme/sections/main-page-pillar.liquid` updated with per-market `{% if active_market %}` blocks. New "Per-market price capture history" table added above. 4 competitors with one-market-only captures noted (`chris-christensen-day-to-day` CA, `isle-of-dogs-evening-primrose` CA, `natures-specialties-colloidal-oatmeal` US, `burts-bees-oatmeal` CA Oatmeal-specific) — captured value used as proxy for the pending market with explicit annotation.
- **2026-04-22** — Added Amazon retail-channel competitor set (Warren London, Bubble Bros, Bark2Basics, PetAg, We Love Doodles). Added channel-map overview table. Annotated Bio-Groom and Coat Handler with Amazon sales data. Flagged pricing anomaly (Furgenics direct vs Amazon market) for strategic review. Source: `sources/external-research/spreadsheets/2026-04-22-furgenics-gtm-amazon.md`.
- **2026-04-21 (revision)** — Updated "Modern schema/AEO-ready content" line from "v4 schema" to "v3 schema (v4 planned)" to match actual deployed state. Rewrote "Monitoring process" section to describe the citation tracker's actual behavior (previously described a v2 aspiration).
- **2026-04-21 (original scaffold)** — Seed document written. AEO signal notes are preliminary; will be verified by tracker once sufficient citation-run history accumulates.
