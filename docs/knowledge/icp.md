# Furgenics — Ideal Customer Profile (ICP)

> **Class C — human-owned.** This file defines Furgenics' target market and buyer personas. Agents read it to contextualize audits, citation tracking, and content decisions. Agents do not rewrite it without explicit human approval — ICP shifts are strategic, not operational.
>
> **Scope decision (v1).** This page is introduced during v1 (AEO phase) because Stephen explicitly requested captured target segments. The fuller market-map + keyword-universe + positioning matrix extensions are v2 work (see `docs/roadmap-seo-v2.md`); this page captures what's actionable today.

## One-line ICP

_"Professional grooming salons across the US and Canada — all sizes, from single-location independents to 25+ location groups."_

Source: Stephen Alton, 2026-04-22 session. Primary channel is direct-to-salon through furgenics.com. Amazon is a secondary retail channel reaching the same ICP plus a long tail of home-pro and prosumer buyers.

## Segmentation matrix

Furgenics segments its addressable market across five dimensions. Source: `sources/external-research/spreadsheets/2026-04-22-furgenics-target-segments.md`.

### 1. Geography

- **Region:** North America
- **Countries:** United States, Canada
- **Provinces/States:** all; Ontario and California explicitly called out as seed markets
- **Cities:** all; Toronto and New York explicitly called out
- **Naming convention (Clay):** `Region-Country-State-City`
- **Clay fields:** `Company HQ Country`, `Company HQ State`, `Company HQ City`

**Implication for wiki agents.** AEO prompt variants and content should not assume a single region; "best professional dog shampoo" queries should be tested across US + CA contexts.

### 2. Account channel (primary axis)

1. **Grooming Salon** — **primary ICP channel**, all further analysis defaults here unless noted
2. **Pet Retailer** — secondary channel, shares personas but different purchase drivers (resale inventory vs. internal supply)

### 3. Business sub-type

1. Independent Grooming Salon
2. Mobile Groomer
3. Multi-Location Grooming Group
4. Independent Pet Retailer

All four sub-types are in-ICP. No sub-type is de-prioritized.

### 4. Location count (size tier)

1. Single Location
2. 2-3 Locations
3. 4-10 Locations
4. 11-25 Locations
5. 25+ Locations

**All tiers are in-ICP.** Furgenics does not currently discount-for-volume publicly, but size-tiered content ("for multi-location groups: here's how the concentrate math pencils") could be worth testing in content strategy.

### 5. Contact persona

1. Owner/Founder
2. Store Manager
3. Operations Manager
4. Procurement Manager
5. Buyer
6. Head Groomer
7. Groomer
8. Assistant Groomer

**Persona query behavior (inferred, not yet measured).** Owners/Founders and Procurement tend toward commercial/transactional queries ("bulk dog shampoo supplier", "wholesale grooming shampoo"). Head Groomers and Groomers lean informational/commercial ("best shampoo for double coats", "hypoallergenic shampoo vs deshedding"). Assistant Groomers are often end-users but rarely buyers — they influence brand stickiness via daily-use experience. Content should serve both the economic buyer (TCO, dilution math, supply reliability) and the daily-user (coat-specific efficacy, scent, feel).

## Primary buying jobs-to-be-done (hypothesized)

1. **"Find a gallon concentrate that works for most of my dogs at a cost I can justify."** Pushes toward multi-purpose SKUs (2-in-1 Hypoallergenic, Oatmeal & Aloe). Price-per-working-gallon math is the winning argument.
2. **"Find the right product for a specific coat type or problem."** Pushes toward specialty SKUs (Deshedding, 2-in-1 Doodle, Lavender Spa). Breed-targeted content wins.
3. **"Replace a brand I'm losing access to or unhappy with."** Switching triggers: price increase at current supplier, inventory reliability issues, ingredient controversy. Content angle: drop-in substitutes, dilution-parity tables.
4. **"Stock a professional line for our retail shelves"** (pet retailer sub-type). Different decision frame — velocity, margin, brand recognition matter more than concentrate economics.

**These are inferences.** Confirming these JTBDs is part of v2 market-map work. Today they're working hypotheses that inform content and tracked-query selection.

## Disqualifications (not in ICP)

- **Retail dog owners** (consumers buying single bottles for their own pets). Different channel, different price point, different query behavior. Don't optimize for "best dog shampoo for my Lab at home."
- **Vet clinics** ordering medicated shampoos. Different category (medicated/prescription). See Non-competitors section of `competitor-intel.md`.
- **Show-ring professionals** at the top end. We don't compete on specialty show-coat products; that's Chris Christensen / South Bark territory.
- **Outside North America.** No current logistics for EU/APAC.

## Competitive landscape context

Two competitor sets serve this ICP, and the wiki tracks both:

- **Professional salon / distributor-channel brands:** Bio-Groom, The Coat Handler, Chris Christensen, Nature's Specialties, South Bark, Tropiclean Pro, iGroom. Reach salons via distributors (PetEdge, Ryan's Pet Supplies) and direct. See `competitor-intel.md`.
- **Amazon retail-channel brands:** Warren London, Bubble Bros, Bark2Basics, PetAg, We Love Doodles — plus Bio-Groom and Coat Handler, which cross both channels. Reach salons + prosumers + home users via Amazon search. See `sources/external-research/spreadsheets/2026-04-22-furgenics-gtm-amazon.md` and `analyses/furgenics-amazon-retail-landscape.md`.

Furgenics' current channel mix: primarily direct-to-salon via furgenics.com (Shopify); Amazon GTM in planning (per source workbook, January 2026 dated).

## What's deliberately NOT in this file yet

These extensions land in v2 (see `docs/roadmap-seo-v2.md`):

- **Psychographics / motivations matrix** (what does each persona value beyond price?)
- **Objection landscape** (common switching objections and rebuttals)
- **Price sensitivity by tier** (single-location vs 25+ location buying behavior)
- **Content-to-persona map** (which pages serve which persona)
- **Jobs-to-be-done validation** (from real customer interviews, not inference)

## References

- `sources/external-research/spreadsheets/2026-04-22-furgenics-target-segments.md` — raw target-segments archive
- `sources/external-research/spreadsheets/2026-04-22-furgenics-gtm-amazon.md` — Amazon GTM competitive + product data
- `competitor-intel.md` — competitor profiles (both professional + Amazon channels)
- `target-queries.md` — the 12 tracked AEO prompts
- `products.md` — canonical SKU roster
- `analyses/furgenics-amazon-retail-landscape.md` — Amazon competitive synthesis
- `docs/roadmap-seo-v2.md` — v2 extensions to this layer

## Change log

- **2026-04-22** — Document created from ingest of `Furgenic_Target_Segments.xlsx` + Stephen's chat clarification ("We target all grooming salons. Single and multi-location in Canada and the USA."). Class C, human-owned. Evolves as the ICP is refined.
