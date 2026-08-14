# Furgenics — Products (Canonical Knowledge)

> **Source of truth** for all Furgenics product data. Any audit or content generation should reference this file. The Karpathy loop updates this file as products change; the LLM-linter flags drift from Shopify reality.

## Business context

Furgenics is a dog grooming shampoo and conditioner brand targeting **professional groomers** (grooming salons, single-location through 25+ location groups, across US + Canada) — see `icp.md` for full segmentation. Products are sold as **1-gallon concentrates** (dilute 16:1 for up to 17 working gallons) at wholesale pricing.

- **Manufacturing:** Petra Lab-X (Vaughan, Ontario) — contract manufacturer. **NEVER reference Petra Lab-X in public-facing Furgenics content.** This is a brand-privacy rule.
- **Markets:** Primary CA (direct from Vaughan, **2-5 business day** shipping). Secondary US (via Amazon, **3-5 business day** shipping). _Canonical shipping promises per Stephen 2026-08-14 (US tightened from the earlier 3-7 wording); every surface (descriptions, FAQs, at-a-glance panel, schema) should state these and only these._
- **Returns:** 30-day refund-only policy (no return shipping required).
- **Dilution standard:** 16:1 with warm water. Can also use ready-to-use for heavier soiling.

---

## Active gallon PDPs (9)

### FUR-001 — Hypoallergenic Dog Shampoo Gallon
- **GID:** `gid://shopify/Product/8104403304587`
- **Handle:** `hypoallergenic-shampoo-gallon`
- **Shopify title:** `Hypoallergenic Dog Shampoo Gallon for Professional Groomers`
- **Formula ID:** `F-26-0653`  · **UPC:** `990312501688`
- **Price:** $24.99 CAD / Markets-managed USD
- **Status:** ACTIVE
- **Coat types:** sensitive skin, short, smooth, thin, fine
- **Breeds:** French Bulldogs, Bulldogs, Boxers, Pitbulls, Chihuahuas, Greyhounds, Dalmatians, Whippets
- **Key features:** Tearless, sulfate-free, paraben-free, hypoallergenic
- **Pairs with:** FUR-010 (Oatmeal & Aloe Conditioner), FUR-005 (2-in-1 Hypoallergenic), FUR-013 (Deshedding)
- **Ingredients metafield:** ⚠️ TEST (still awaiting — confirmed missing from GTM Amazon workbook Shopify Listing Info sheet as of 2026-01-22)
- **Namespace quirk:** carries `furgenics.dilution_ratio` + `furgenics.working_gallons_per_bottle` (in the `furgenics.*` namespace) in addition to the standard `custom.*` metafields on other SKUs. Both namespaces are now dormant (token-driven); FUR-001 has duplicate dead data to clean up.

### FUR-011 — Oatmeal & Aloe Shampoo Gallon
- **GID:** `gid://shopify/Product/8104367161483`
- **Handle:** `oatmeal-aloe-shampoo-gallon`
- **Shopify title:** `Oatmeal & Aloe Professional Dog Grooming Shampoo Gallon`
- **Formula ID:** `F-26-0100`  · **UPC:** `990312501800`
- **Price:** $24.99 CAD / Markets-managed USD
- **Status:** ACTIVE
- **Coat types:** dry, itchy, double, medium, long
- **Breeds:** Golden Retrievers, Labs, German Shepherds, Huskies, Bernese Mountain Dogs, Collies, Aussies
- **Key features:** Colloidal oatmeal + aloe vera for dry/itchy skin
- **Pairs with:** FUR-010 (matching conditioner), FUR-013 (double-coat alternative), FUR-001 (sensitive-skin alternative)
- **Ingredients metafield:** ⚠️ TEST (still awaiting — confirmed missing from GTM Amazon workbook as of 2026-01-22)

### FUR-050 — Lavender Spa Shampoo Gallon
- **GID:** `gid://shopify/Product/8104408121483`
- **Handle:** `lavender-spa-shampoo`
- **Shopify title:** `Lavender Spa Professional Dog Grooming Shampoo Gallon`
- **Formula ID:** `F-26-0691`  · **UPC:** `990312501770`
- **Price:** $24.99 CAD / Markets-managed USD
- **Status:** DRAFT _(as of 2026-05-21 confirmation)_
- **Coat types:** all, especially medium, long, curly
- **Breeds:** Poodles, Cavapoos, Cockapoos, Malteses, Shih Tzus, Bichon Frises, Yorkies
- **Key features:** Real lavender essential oil, spa-grade scent _(INCI placeholder — `custom.full_ingredients` shows "Fragrance/Parfum" only, no Lavandula INCI entry. Pending formulation team finalization.)_
- **Pairs with:** FUR-021 (Deep Moisturizing), FUR-020 (2-in-1 Doodle), FUR-001 (Hypoallergenic)
- **Ingredients:** Full list present in metafield (lavender INCI placeholder pending)

### FUR-013 — Deshedding Shampoo Gallon
- **GID:** `gid://shopify/Product/8104408088715`
- **Handle:** `deshedding-shampoo`
- **Shopify title:** `Deshedding Dog Shampoo Gallon for Professional Groomers`
- **Formula ID:** `F-26-0652`  · **UPC:** `990312501671`
- **Price:** $24.99 CAD / Markets-managed USD
- **Status:** ACTIVE
- **Coat types:** double, thick, heavy shedders, undercoat-heavy
- **Breeds:** German Shepherds, Huskies, Golden Retrievers, Labs, Akitas, Malamutes, Chow Chows
- **Key features:** Hydrolyzed keratin + safflower oil, loosens undercoat
- **Pairs with:** FUR-014 (matching conditioner), FUR-011 (soothing alternative), FUR-001 (sensitive-skin alternative)
- **Ingredients:** Full list present in metafield. ⚠️ **Sulfate-free claim mismatch** — INCI lists Sodium Laureth Sulfate as primary surfactant despite `sulfate-free` tag. Pending INCI cleanup with formulation team. The 2026-05-27 FAQ rewrite drops "sulfates" from the puppy answer's irritant list to reflect actual chemistry.
- **Competitive note:** Coat Handler's Deshedding Shampoo (B00OAC5FYU, 32:1) is the Amazon category leader at $49,652/mo. Bark2Basics Deshedding (B0BFTGKWZC, 32:1) at $26,863/mo. See `competitor-intel.md`.

### FUR-010 — Oatmeal & Aloe Conditioner Gallon
- **GID:** `gid://shopify/Product/8104367259787`
- **Handle:** `oatmeal-aloe-conditioner-gallon`
- **Shopify title:** `Oatmeal & Aloe Dog Conditioner Gallon For Grooming Professionals`
- **Formula ID:** `F-24-0273`  · **UPC:** `990312501657`
- **Price:** $24.99 CAD / Markets-managed USD
- **Status:** ACTIVE
- **Coat types:** dry, itchy, medium-long, double
- **Breeds:** Golden Retrievers, Labs, Border Collies, Aussies, Huskies
- **Key features:** Oatmeal + aloe + argan + shea for dry skin + detangling
- **Pairs with:** FUR-011 (matching shampoo), FUR-021 (deeper hydration), FUR-014 (deshedding alt)
- **Ingredients:** Full list present in metafield

### FUR-021 — Deep Moisturizing Conditioner Gallon
- **GID:** `gid://shopify/Product/8104367325323`
- **Handle:** `deep-moisturizing-conditioner-gallon`
- **Shopify title:** `Deep Moisturizing Dog Conditioner Gallon For Professional Groomers`
- **Formula ID:** `F-26-0654`  · **UPC:** `990312501848`
- **Price:** $24.99 CAD / Markets-managed USD
- **Status:** ACTIVE
- **Coat types:** dry, brittle, long, curly, damaged, mat-prone
- **Breeds:** Poodles, Goldendoodles, Labradoodles, Afghan Hounds, Shih Tzus, Malteses, Yorkies
- **Key features:** Argan oil + shea butter + hydrolyzed oats, intense hydration
- **Pairs with:** FUR-020 (2-in-1 Doodle), FUR-050 (Lavender Spa), FUR-010 (lighter alternative)
- **Ingredients:** Full list present in metafield

### FUR-014 — Deshedding Conditioner Gallon
- **GID:** `gid://shopify/Product/8104408187019`
- **Handle:** `deshedding-conditioner`
- **Shopify title:** `Deshedding Dog Conditioner Gallon For Professional Groomers`
- **Formula ID:** `F-26-0651`  · **UPC:** `990312501664`
- **Price:** **$29.99 CAD** / Markets-managed USD _(CAD diverged from $24.99 baseline; confirmed via MCP read 2026-05-27)_
- **Status:** ACTIVE
- **Coat types:** double, thick, undercoat-heavy, heavy shedders
- **Breeds:** Huskies, German Shepherds, Golden Retrievers, Labs, Akitas, Samoyeds
- **Key features:** Hydrolyzed keratin + argan oil, completes deshedding system
- **Pairs with:** FUR-013 (matching shampoo), FUR-010 (maintenance alt), FUR-021 (deeper hydration)
- **Ingredients:** Full list present in metafield

### FUR-005 — 2-in-1 Hypoallergenic Shampoo & Conditioner Gallon
- **GID:** `gid://shopify/Product/8104408219787`
- **Handle:** `2in1-hypoallergenic-shampoo-conditioner`
- **Shopify title:** `2-in-1 Hypoallergenic Shampoo & Conditioner Gallon For Grooming Professionals`
- **Formula ID:** `F-25-0154`  · **UPC:** `990312501916`  · _Note: FUR-026 is the newer SKU in GTM Amazon workbook; confirm catalog consolidation._
- **Price:** $24.99 CAD / Markets-managed USD
- **Status:** ACTIVE
- **Coat types:** sensitive skin, short to medium, fine, low-maintenance
- **Breeds:** French Bulldogs, Boxers, Beagles, Dachshunds, Chihuahuas, Boston Terriers
- **Key features:** One-step shampoo + conditioner, time-saver for high-volume salons
- **Pairs with:** FUR-001 (dedicated two-step alt), FUR-020 (doodle 2-in-1), FUR-013 (deshedding alt)
- **Ingredients:** Full list present in metafield. ⚠️ **Sulfate-free claim mismatch** — primary surfactant is Sodium C14-16 Olefin Sulfonate (sulfate-free convention) BUT INCI also contains Sodium Laureth Sulfate. Pending INCI cleanup with formulation team. FAQ retains brand-wide "sulfate-free" phrasing per Stephen's accepted gap.

### FUR-020 — 2-in-1 Doodle Shampoo & Conditioner Gallon
- **GID:** `gid://shopify/Product/8104408252555`
- **Handle:** `2in1-doodle-shampoo-conditioner`
- **Shopify title:** `2-in-1 Doodle Shampoo & Conditioner Gallon For Grooming Professionals`
- **Formula ID:** `F-26-0690`  · **UPC:** `627949188073`  · _Note: FUR-037 is the newer SKU in GTM Amazon workbook; confirm catalog consolidation._
- **Price:** $24.99 CAD / Markets-managed USD
- **Status:** DRAFT _(as of 2026-05-21 confirmation)_
- **Coat types:** curly, wavy, thick, mat-prone
- **Breeds:** Goldendoodles, Labradoodles, Bernedoodles, Aussiedoodles, Sheepadoodles
- **Key features:** Argan + coconut + shea + silk amino acids + chamomile, purpose-built for doodle coats
- **Pairs with:** FUR-021 (deeper hydration follow-up), FUR-050 (Lavender Spa), FUR-005 (hypoallergenic alt)
- **Ingredients:** Full list present in metafield
- **Competitive note:** We Love Doodles is the tracked Amazon niche competitor in this category ($4,719/mo across 3 scent variants at $29.99 / half-gallon).

---

## TBD products (in roadmap, not yet launched)

From `Finalized Line Up` sheet of the GTM Amazon workbook (January 2026):

- **Deep Moisturizing Shampoo** (`FUR-007`) — gallon UPC `990312501947`, labels created, no Shopify listing yet. Competitive slot: PetAg Moisturizing Shampoo occupies this on Amazon at $17,489/mo.
- **Deodorizing Shampoo** (`FUR-004?`) — gallon UPC `990312501831`, no labels. Competitive slot: Bubble Bros Deodorizing at $12,226/mo.
- **Leave-In Conditioner** (`FUR-006?`) — gallon UPC `990312501718`, no labels. **Warren London Hydrating Butter Leave-In is the Amazon outlier ($385,915/mo estimated)**; this is potentially the highest-value gap to close in the product line.

---

## Active 8oz sample PDPs (8)

All samples are **gated to the Groomer Program**, $0 price, distributed free to invited professional groomers. Each has:
- Tags: `8oz`, `groomer-sample`, `gated-sample`, `groomer-program`, `professional-groomer`
- SEO title format: `[Product] 8oz Sample | Furgenics Groomer Program`
- Description points to `/pages/groomer-program` and the paired gallon
- Cross-link to matching gallon PDP

| SKU | Paired Gallon | Product | GID |
|---|---|---|---|
| FUR-001 sample | FUR-001 | Hypoallergenic 8oz | `gid://shopify/Product/8107368218763` |
| FUR-011 sample | FUR-011 | Oatmeal & Aloe Shampoo 8oz | `gid://shopify/Product/8107362484363` |
| FUR-050-8 | FUR-050 | Lavender Spa 8oz | `gid://shopify/Product/8107366023307` |
| FUR-013-8 | FUR-013 | Deshedding Shampoo 8oz | `gid://shopify/Product/8107378835595` |
| FUR-010-8 | FUR-010 | Oatmeal & Aloe Conditioner 8oz | `gid://shopify/Product/8111112519819` |
| FUR-021-8 | FUR-021 | Deep Moisturizing Conditioner 8oz | `gid://shopify/Product/8111113699467` |
| FUR-014-8 | FUR-014 | Deshedding Conditioner 8oz | `gid://shopify/Product/8111114682507` |
| FUR-037-8 | FUR-020 | 2-in-1 Doodle 8oz | `gid://shopify/Product/8111214559371` |
| FUR-026-8 | FUR-005 | 2-in-1 Hypoallergenic 8oz | `gid://shopify/Product/8111217311883` |

**Inactive sample:** FUR-006-8 (Puppy Shampoo 8oz) — DRAFT status, not public.

**Unpublished from US market (2026-05-27):** all 9 sample SKUs above were unpublished from the US market per the Path B Groomer Program decision (CA = free samples, US = first-order discount). Samples remain ACTIVE on the Canadian market only.

---

## Pricing and economics

- **One gallon = 17 working gallons** at professional dilution
- **Per-working-gallon cost:** ~$1.47 CAD (without FUR50), ~$0.74 CAD (with FUR50 first order)
- **Industry comparison messaging:** "Roughly the cost of a cup of coffee per working gallon at pro dilution"
- **Amazon market comparison:** Competitor gallon pricing ranges $29.99 (We Love Doodles half-gallon) to $89.01 (Bio-Groom Anti-Shed). Median ~$47 USD. Furgenics direct-to-salon price is materially below this band — a deliberate DTC positioning. **Amazon channel pricing is an open strategic decision** and should not default to DTC pricing.

## Metafields in use

All gallon PDPs carry these custom metafields:

- `custom.faqs` — **token-driven** FAQ JSON array as of 2026-05-27 (feeds both visible accordion AND FAQPage JSON-LD schema). Same `[[PRICE]]` / `[[VALUE]]` / `[[COMPETITOR]]` / `[[DISCOUNT]]` token vocabulary as page bodies. See `content-style-guide.md` "Special surface: the `custom.faqs` metafield" section.
- `custom.directions` — usage instructions
- `custom.coat_type` — target coat types and breeds
- `custom.ideal_for_grooming_salons` — salon positioning
- `custom.full_ingredients` — INCI list (⚠️ "TEST" for FUR-001 and FUR-011, confirmed still-pending per Jan 2026 GTM Amazon workbook; lavender INCI placeholder for FUR-050)
- `custom.professional_groomer_size` — 128oz context
- `custom.ready_to_use_or_dilutable_16_1` — dilution messaging
- `custom.features_benefits` — primary benefit callout

**Dormant unstructured metafields** (now token-driven; candidates for batch delete in a future cleanup session):
- `custom.dilution_ratio` — "16:1" (now `[[VALUE:dilution-ratio]]`)
- `custom.working_gallons_per_bottle` — "17" (now `[[VALUE:working-gallons-per-bottle]]`)
- `custom.size_oz` — likely dormant; verify
- `custom.retail_price_cad` / `custom.retail_price_usd` — pricing override fields, confirmed not in use by theme post-2026-05-27 refactor
- `custom.cost_per_working_gallon_cad` / `custom.cost_per_working_gallon_usd` — economics override fields, dormant
- `custom.public_offer` / `custom.gated_offer` — offer override fields, dormant
- **FUR-001 specifically:** duplicate `furgenics.dilution_ratio` and `furgenics.working_gallons_per_bottle` in the `furgenics.*` namespace, alongside the standard `custom.*` versions

---

## Known catalog issues (for future cleanup)

1. **FUR-001 and FUR-011** have `custom.full_ingredients = "TEST"` — confirmed missing from the Jan 2026 GTM Amazon workbook Shopify Listing Info sheet. Data gap is real, not a metafield sync issue. Get INCI lists from formulation team. (Note: 2026-05-21 PDP rewrites confirmed FUR-001 and FUR-011 both have real INCI in `custom.full_ingredients` — the "TEST" flag in this wiki may itself be stale. Verify on next admin sweep.)
2. **~15 legacy DRAFT products** with placeholder or outdated data — kept in DRAFT so they don't affect sitemap, but need cleanup.
3. **2 Lorem ipsum products** (`example-hat`, `example-pants`) — decision: leave alone (DRAFT, no SEO impact).
4. **Legacy sample SKUs** FUR-004-8, FUR-005-8 exist alongside newer FUR-026-8 — needs reconciliation.
5. **SKU mapping drift between Shopify and GTM workbook:** Shopify uses `FUR-005` and `FUR-020` for 2-in-1 Hypoallergenic and 2-in-1 Doodle respectively; the Jan 2026 GTM Amazon workbook uses `FUR-026` and `FUR-037`. Confirm which are the canonical active SKUs and reconcile if dual-maintained.
6. ~~**US Markets override** for $19 USD fixed price display — still pending team implementation.~~ **RESOLVED 2026-05-27.** Stephen confirmed resolution outside the theme (Claude Code's grep proved the override was not theme-side; the unstructured pricing metafields are now dormant dead data, not actively overriding). Per-market pricing now Markets-managed.
7. **Product line gaps vs Amazon market:** Leave-In Conditioner category (Warren London's outlier), Deep Moisturizing Shampoo, Deodorizing Shampoo are all in the Jan 2026 TBD list but not yet launched.
8. **Dormant unstructured metafields** (item-level cleanup): see "Dormant unstructured metafields" list above. Batch delete candidate for a separate session — ~50+ metafield deletes across 9 products. Includes FUR-001's duplicate `furgenics.*` namespace entries.
9. **Sulfate-free claim mismatch** on FUR-013 and FUR-005 (SLES present in INCI despite `sulfate-free` tag). Pending INCI cleanup with formulation team. Per-product FAQ content already adapted on FUR-013 (drops "sulfates" from puppy-safety answer); FUR-005 retains brand-wide phrasing per accepted gap.
10. **FUR-050 lavender INCI placeholder** — `custom.full_ingredients` has no `Lavandula angustifolia` entry despite product positioning. Pending formulation team finalization.

---

## Change log

- **2026-08-14** — Canonical shipping promises set by Stephen: CA 2-5 business days, US 3-5 business days (US previously written as 3-7 in FAQs). Related decisions recorded the same day (see `analyses/2026-08-14-pdp-phase1-buybox.md`): FUR20 must be manually entered at checkout (FAQ tail claiming it "works automatically" is wrong and needs a metafield sweep); performance/safety claims substantiated via the 60+ groomer testing program; sulfate-free claim stays as-is pending formulation confirmation (no sweep yet).

- **2026-05-27** — `custom.faqs` metafield on all 9 active gallon products rewritten to use the shared token vocabulary (`[[PRICE]]` / `[[VALUE]]` / `[[COMPETITOR]]` / `[[DISCOUNT]]`). Same render path as PDP descriptions and pillar bodies — see updated metafields section. FUR-014 CAD price corrected to $29.99 (diverged from $24.99 baseline per MCP read). US Markets override marked resolved in known catalog issues #6 (Stephen confirmed out-of-theme resolution). Dormant unstructured metafields catalogued under "Dormant unstructured metafields" — batch delete candidate for a separate session. FUR-001 namespace quirk flagged (`furgenics.*` duplicates of `custom.*` entries). Full session details in `analyses/2026-05-27-token-substitution-extraction-and-faq-architecture.md`.
- **2026-04-22** — Added Formula IDs, UPCs, and canonical Shopify titles from `sources/external-research/spreadsheets/2026-04-22-furgenics-gtm-amazon.md` (Shopify Listing Info + Finalized Line Up sheets). Added TBD products section (Deep Moisturizing Shampoo, Deodorizing Shampoo, Leave-In Conditioner) from the same source. Added Amazon market pricing context. Added SKU mapping drift to catalog issues. Added competitive notes on two SKUs where Amazon category leaders are relevant.
- **2026-04-21** — Seed document written during v0 scaffold. Captures state at end of April 21 session.
