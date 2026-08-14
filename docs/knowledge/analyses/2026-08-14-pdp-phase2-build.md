# PDP Phase 2 — four-section accordion, comparison block, chip strip, display titles

> Filed: 2026-08-14  ·  Kind: brief
> Source: Stephen approved "take what you want from Dandylion and move to Phase 2" after reviewing dandylionworld.com as a reference PDP
> Related: [2026-08-14-pdp-phase1-buybox.md](./2026-08-14-pdp-phase1-buybox.md), [products.md](../products.md), [content-style-guide.md](../content-style-guide.md)

## Dandylion adoptions (and rejections)

Adopted: four-row product accordion (theirs: Details / Key Ingredients / How to use / Full Ingredient List — validates our plan), persuasive cross-sell placed after the accordion ("Buy It With" ≈ our comparison block + bundle block), trust-chip strip near the buy box (tuned to pro facts, not consumer badges), small curated FAQ, short display title. Noted for later: Okendo-style attribute reviews (their review section is the strongest thing on the page — groomer attributes: role, salon size, coat types, dogs/week), Subscribe & Save as a future "recurring salon order" experiment. Not adopted: consumer tone; hardcoded prices anywhere.

## Shipped this session (repo-side, PR #5)

1. **`snippets/description-accordion.liquid` v2** — two new behaviors, both backwards-compatible with un-migrated v2/v3 bodies and no-H2 samples (verified by simulation against all three body generations):
   - A section whose handleized heading contains `ingredients` gets the `custom.full_ingredients` INCI appended into its body (standalone INCI row suppressed). Placeholder value "TEST" suppressed on both paths.
   - A section whose handleized heading starts with `how-it-compares` is extracted from the accordion and rendered below it as a visible compact card (`furgenics-comparison`) — persuasive content after reference content, ahead of the bundle block. H2 + anchor id preserved (heading outline unchanged).
2. **v4 exemplar description** — `copy/content-drafts/products/deshedding-shampoo.{md,html}`: opener + Best for and expected results (bullets, row 1 default-open) / Dilution and professional protocol / Ingredients and safety (chemistry folded in, no copy deleted) / How it compares on cost (extracted) / Shipping, samples, and the Groomer Program (canonical CA 2–5 / US 3–5 windows + 30-day refund). Sulfate claim still held pending the INCI metafield correction.
3. **Curated `custom.faqs` v2** (in the draft .md, ready for MCP push) — 12 → 9: dropped dilution-ratio, breeds, and FURminator questions as duplicative of new page surfaces; fixed FUR20 wording (must be entered at checkout) and US shipping window (3–5, was 3–7).
4. **`snippets/product-at-a-glance.liquid` v2** — chip-strip restyle (2×2 grid: dilution/yield, computed $/working gallon, 1 gal/128 oz, Made in Canada + market shipping/refund) + "Best for" line below.
5. **`sections/main-product.liquid` title block** — renders `custom.display_title` as the visible H1 with a gallon-gated eyebrow ("PROFESSIONAL · 1 GALLON · 16:1 CONCENTRATE") when the metafield exists; inert until then. `product.title` untouched for cart/feeds/SEO.
6. **`products.md`** — proposed `custom.display_title` values for all 9 SKUs (Class B, awaiting approval); `custom.contact_time` deferred.

## Deploy + content push sequence

1. Theme push (token-equipped run) to `#152547065995`: `snippets/description-accordion.liquid`, `snippets/product-at-a-glance.liquid`, `sections/main-product.liquid` — plus the still-pending 2c files from Phase 1 (`snippets/furgenics-product-faqs.liquid` FAQ gutter fix, `sections/main-product.liquid` testimonial revert — same file, one push covers both).
   - Note: pushing the v2 snippet immediately extracts "How it compares…" below the accordion on ALL gallons (current bodies included) — intended.
2. Content push (Claude MCP), FUR-013 first: v4 `descriptionHtml` from the draft (strip the HTML comment header) + `custom.faqs` v2 JSON. Verify both markets: 4 accordion rows, INCI standalone row gone / merged into Ingredients and safety, comparison card below accordion, FAQPage JSON-LD parses with 9 questions.
3. After Stephen approves display titles: create `custom.display_title` metafield + push values (MCP); verify eyebrow + H1 on gallons and unchanged H1 on samples.
4. Remaining 8 SKUs: v4 body rewrites follow the FUR-013 pattern (per-SKU sections already exist; mostly mechanical restructure + per-SKU FAQ curation) — batch after FUR-013 verifies live.
5. Prerequisite for comparison accuracy: **August competitor price refresh** (manual Amazon capture by Stephen, per style guide cadence — captures are 2026-05 vintage).

## Open decisions / inputs

- Display titles table in products.md (Class B approval).
- Corrected INCI lists from R&D (blocks sulfate-claim reinstatement).
- Review app choice (Okendo recommended after the Dandylion reference; Judge.me free fallback).
- Search & Discovery complementary pairings (admin clicks, still pending).
- Photography upload (gallery + swap the testimonial's foreign-CDN portrait).

## Sources & references

- dandylionworld.com Nourish Hydrating Dog Conditioner PDP (Stephen-provided screenshots, 2026-08-14)
- `analyses/2026-08-14-pdp-phase1-buybox.md` — Phase 1 + decisions + deploy state
- `content-style-guide.md` — token API; competitor-capture cadence
- Simulation: snippet v2 logic vs v4 draft, v3-era body, and no-H2 sample (this session)
