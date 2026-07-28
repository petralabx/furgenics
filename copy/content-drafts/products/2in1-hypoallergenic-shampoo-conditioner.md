# Furgenics 2-in-1 Hypoallergenic Shampoo & Conditioner — PDP rewrite (token-driven + universal both-markets)

> **Product description draft for `2in1-hypoallergenic-shampoo-conditioner`.** Ninth and final PDP token-conversion rewrite — closing PDP of Session 3 and the project.
>
> _Drafted 2026-05-21 as the ninth and final Markets-aware token-driven PDP rewrite. Replaces the pre-token description (hardcoded "16:1" and "17 working gallons", hardcoded "FUR50" discount callout, generic "Made in Canada, serving groomers across the US and Canada" line, no competitor benchmarks, no pillar link, plus a stray orphan `[[VALUE:dilution-ratio]]` token appended at the very end of the live description — cleanup happens automatically with the descriptionHtml replacement)._

## Meta + technical

- **Product handle:** `2in1-hypoallergenic-shampoo-conditioner`
- **Product GID:** `gid://shopify/Product/8104408219787`
- **SKU (internal, not in customer copy):** FUR-005 (note: products.md flags potential reconciliation with GTM Amazon workbook's FUR-026 SKU — see knowledge/products.md known catalog issues #5)
- **Product title (unchanged):** `2-in-1 Hypoallergenic Shampoo and Conditioner Gallon For Grooming Professionals`
- **SEO title (UPDATE):** `2-in-1 Hypoallergenic Dog Shampoo & Conditioner | Furgenics` (59 chars)
- **Meta description (UPDATE, ≤155 chars):** `16:1 2-in-1 hypoallergenic shampoo + conditioner with aloe and oat. Built for high-volume sensitive-skin work in production salons.` (133 chars)
- **Status (unchanged):** ACTIVE
- **Pricing (unchanged, managed by Shopify Markets):** $24.99 CAD / $19 USD per gallon
- **Tags, vendor, collections, variants, images (all unchanged):** out of scope per PDP rewrite prompt
- **Featured pillar:** `/pages/oatmeal-aloe-sensitive-skin-dog-shampoo` (cross-reference — the sensitive-skin pillar context, where the dedicated two-step protocol is the standard alternative to this 2-in-1)
- **Live-description orphan token cleanup:** The current live `description` field ends with a stray `[[VALUE:dilution-ratio]]` token with no surrounding context (likely leftover from POC testing per the product's `updatedAt: 2026-05-21T14:30:50Z`). The full descriptionHtml replacement in this push cleans it up automatically.

## Token usage table

| Token | Where used | Resolves to |
|---|---|---|
| `[[VALUE:dilution-ratio]]` | Opener; "How to use" step 3 | `16:1 concentrate` |
| `[[VALUE:working-gallons-per-bottle]]` | Opener | `up to 17 working gallons per bottle at professional dilution` |
| `[[VALUE:per-working-gallon-cost-narrative]]` | Opener | `roughly the cost of a cup of coffee per working gallon at pro dilution` |
| `[[VALUE:made-in-canada]]` | Shipping + sourcing section | `Made in Canada` |
| `[[COMPETITOR:bio-groom-hypo-groom]]` | "How it compares" — canonical hypoallergenic competitor (REPEAT from FUR-001) | Per-market price for Bio-Groom Hypo-Groom Hypoallergenic Shampoo |
| `[[COMPETITOR:tropiclean-pro-hypoallergenic-oatmeal]]` | "How it compares" — second hypoallergenic anchor (REPEAT from FUR-001) | Per-market price for TropiClean Pro Hypoallergenic Oatmeal Shampoo |
| `[[PRICE:hypoallergenic-shampoo-gallon]]` | Chemistry section — "same base" cross-ref; "How to use" — escalation pair-up to dedicated two-step | Markets-aware Furgenics price |
| `[[PRICE:2in1-doodle-shampoo-conditioner]]` | "How it compares" — doodle 2-in-1 alternative | Markets-aware Furgenics price |
| `[[PRICE:deshedding-shampoo]]` | "How it compares" — shedding-primary alternative | Markets-aware Furgenics price |
| `[[PRICE:oatmeal-aloe-conditioner-gallon]]` | "How to use" — escalation pair-up partner with hypoallergenic shampoo | Markets-aware Furgenics price |
| `[[DISCOUNT]]` | End of description | Active discount campaign banner from theme settings |

Both competitor tokens are REPEATS from FUR-001 (PDP #1). This is unavoidable: the hypoallergenic-category competitive set in the available token slugs is small (only `bio-groom-hypo-groom` and `tropiclean-pro-hypoallergenic-oatmeal` carry the hypoallergenic positioning), and FUR-001 + FUR-005 are the two SKUs that compete in that exact category. Repetition here is honest — the chemistry framing differentiates the 2-in-1-vs-dedicated-shampoo angle without forcing a fake competitor for variety.

**Project-wide competitor token coverage (final):** 12 of 13 available slugs used across the 9 PDPs. Only `bark2basics-de-shedding` was not used (no fit; FUR-013 used `furminator-deshedding` and `coat-handler-anti-shed` for the deshedding category). Reasonable coverage.

## Key changes from current Shopify description

| Pre-token (current live) | Token-driven (this rewrite) |
|---|---|
| Hardcoded "16:1" + "17 working gallons" | `[[VALUE:dilution-ratio]]` + `[[VALUE:working-gallons-per-bottle]]` |
| Orphan `[[VALUE:dilution-ratio]]` token at end of description | Removed by full descriptionHtml replacement |
| "Made in Canada, serving groomers across the US and Canada" | `[[VALUE:made-in-canada]]` + explicit dual-market fulfillment paragraph |
| No competitor benchmarks | Bio-Groom + TropiClean per-market benchmarks (carried from FUR-001 since hypoallergenic category competitive set is small) |
| No cross-referenced product pricing | `[[PRICE]]` tokens on hypoallergenic-shampoo-gallon (×2), 2in1-doodle-shampoo-conditioner, deshedding-shampoo, oatmeal-aloe-conditioner-gallon |
| Hardcoded "First order? Save 50%... Use code FUR50" | `[[DISCOUNT]]` snippet driven by theme settings |
| Generic 5-line instructions | 7-step protocol with rationale per step (brush-out, warm-water saturation, dilute-or-RTU, apply-with-2-in-1-context, massage time tuned to severity, rinse-fully-tearless-safety, no-separate-conditioner-needed) + escalation pair-up to dedicated two-step for severe cases |
| No pillar cross-reference | Links to `/pages/oatmeal-aloe-sensitive-skin-dog-shampoo` for the sensitive-skin pillar context |
| Chemistry stated as marketing list ("2-in-1 time saver... Hypoallergenic formula... Aloe and oat") | Same positioning now framed by mechanism: why a hypoallergenic 2-in-1 exists as a category (time math at high-volume salons), how the conditioning agents are calibrated to deliver slip in a single pass without sacrificing the hypoallergenic base, where the 2-in-1 falls short (severe allergies / active reactions → dedicated two-step) |
| "Pairs well with: For dedicated two-step sensitive care... For doodle coats... For shedding breeds with sensitivity" (3 bullets) | Same three cross-refs woven into the body with priced links via `[[PRICE]]` tokens; FUR-001 + FUR-010 escalation pair-up explicitly captured in the how-to section |

## Body HTML

See sibling file `2in1-hypoallergenic-shampoo-conditioner.html` for the full token-driven HTML body.

Structure (matches FUR-020 2-in-1 pattern; adapted for sensitive-skin instead of doodle coats):

1. Answer-first opener (~60 words, no heading) — product + 2-in-1 angle + tearless/sensitive-skin chemistry + dilution economics
2. **Why a hypoallergenic 2-in-1 exists as a category** — time-math framing for high-volume salons + relationship to FUR-001 dedicated two-step + honest limit (severe allergies still go two-step) (~175 words)
3. **When to use Furgenics 2-in-1 Hypoallergenic** — coat types, breed list, salon scenarios with pillar link (~150 words)
4. **How it compares to alternatives** — Bio-Groom + TropiClean tokens (REPEATS from FUR-001), 2-in-1-Doodle + Deshedding cross-refs (~195 words)
5. **How to dilute and use** — 7-step 2-in-1 protocol + escalation pair-up to dedicated two-step (~190 words)
6. **Shipping, sourcing, and the Groomer Program** — made-in-canada + dual-market fulfillment + Path B program + `[[DISCOUNT]]` + email contact (~80 words)

Total body: ~850 words.

## Pre-publish checklist

- [x] POC confirmed (token rendering on live PDPs both /en-ca/ and /en-us/) — verified by Stephen across Sessions 1 + 2
- [x] Draft committed to `brands/furgenics/content-drafts/products/2in1-hypoallergenic-shampoo-conditioner.{html,md}`
- [ ] `update-product` MCP call pushes new `descriptionHtml` + `seo.title` + `seo.description` to Shopify
- [ ] Live URLs `/en-ca/products/2in1-hypoallergenic-shampoo-conditioner` and `/en-us/products/2in1-hypoallergenic-shampoo-conditioner` visually verify token rendering
- [ ] Ship entry appended to `brands/furgenics/knowledge/log.md` (batched at end of Session 3)
- [ ] Summary analysis filed at `brands/furgenics/knowledge/analyses/2026-05-21-pdp-token-conversion.md`

## Open questions for Stephen

None unique to this PDP. Carried-forward open items from prior sessions are consolidated in the summary analysis.

## Cross-references

- `knowledge/content-style-guide.md` — token API + maintenance rules
- `knowledge/products.md` — canonical product roster (FUR-005 entry, FUR-026 reconciliation note)
- `knowledge/brand-voice.md` — voice rules
- `knowledge/competitor-intel.md` — Bio-Groom + TropiClean per-market captures (2026-05)
- `knowledge/business-identity.md` — Vaughan ON address, info@furgenics.com, dual-market fulfillment
- `content-drafts/groomer-program.md` — Path B canonical wording (CA samples / US first-order discount)
- `content-drafts/oatmeal-aloe-sensitive-skin-dog-shampoo.{html,md}` — the coat-01 / breed-03 pillar; cross-referenced for the sensitive-skin context
- `content-drafts/products/hypoallergenic-shampoo-gallon.{html,md}` — PDP #1 (the dedicated two-step counterpart; same hypoallergenic base)
- `content-drafts/products/2in1-doodle-shampoo-conditioner.{html,md}` — PDP #3 (sibling 2-in-1 product, doodle-specific)
- `content-drafts/products/oatmeal-aloe-conditioner-gallon.{html,md}` — PDP #6 (escalation conditioner pair-up partner)
- `docs/shopify-theme/sections/main-page-pillar.liquid` — token pipeline reference

## Change log

- **2026-05-21** — v2 drafted (this file). Ninth and final PDP token-conversion rewrite. Token-driven prices, value-math snippets, Bio-Groom + TropiClean per-market benchmarks (carried from FUR-001 — small hypoallergenic competitor set in available slugs), universal both-markets framing, Path B Groomer Program wording, theme-driven discount banner. 2-in-1-specific body structure (vs FUR-020's doodle-2-in-1 pattern): time-math framing for the category's existence + relationship to FUR-001 dedicated two-step + honest limit acknowledgment for severe cases. Sulfate-free claim deliberately omitted pending INCI verification per FUR-011 + FUR-050 precedent (current live desc doesn't claim sulfate-free either; sulfate-free is only in the tag set). Replaces v1 prose-only description shipped pre-token-architecture, including the orphan `[[VALUE:dilution-ratio]]` token at the end of the live description.
