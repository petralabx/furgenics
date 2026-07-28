# Furgenics Oatmeal & Aloe Conditioner Gallon — PDP rewrite (token-driven + universal both-markets)

> **Product description draft for `oatmeal-aloe-conditioner-gallon`.** Sixth of 9 PDP token-conversion rewrites — third and final PDP of Session 2.
>
> _Drafted 2026-05-21 as the sixth Markets-aware token-driven PDP rewrite. Replaces the pre-token description (hardcoded "16:1" and "17 working gallons", hardcoded "FUR50" discount callout, generic "Made in Canada, serving groomers across the US and Canada" line, no competitor benchmarks, no pillar link). This is the back-half of the dry-skin system anchored by FUR-011._

## Meta + technical

- **Product handle:** `oatmeal-aloe-conditioner-gallon`
- **Product GID:** `gid://shopify/Product/8104367259787`
- **SKU (internal, not in customer copy):** FUR-010
- **Product title (unchanged):** `Oatmeal & Aloe Dog Conditioner Gallon For Grooming Professionals`
- **SEO title (UPDATE):** `Professional Oatmeal Aloe Dog Conditioner Gallon | Furgenics` (59 chars)
- **Meta description (UPDATE, ≤155 chars):** `16:1 colloidal oatmeal & aloe conditioner with argan and shea. Soothes dry, itchy skin and detangles long and double salon coats.` (130 chars)
- **Status (unchanged):** ACTIVE
- **Pricing (unchanged, managed by Shopify Markets):** $24.99 CAD / $19 USD per gallon
- **Tags, vendor, collections, variants, images (all unchanged):** out of scope per PDP rewrite prompt
- **Featured pillar:** `/pages/oatmeal-aloe-sensitive-skin-dog-shampoo` (shared with FUR-011; the PDP cross-references it as the broader sensitive-skin context guide)
- **Category note:** this is a CONDITIONER — body structure adapted as in FUR-014 (chemistry section explains second-contact-period role; how-to section is the conditioner step; compare section uses qualitative framing for Earthbath + Nature's Specialties since the available competitor token slugs capture their shampoos rather than conditioners)

## Token usage table

| Token | Where used | Resolves to |
|---|---|---|
| `[[VALUE:dilution-ratio]]` | Opener; "How to use" step 2 | `16:1 concentrate` |
| `[[VALUE:working-gallons-per-bottle]]` | Opener | `up to 17 working gallons per bottle at professional dilution` |
| `[[VALUE:per-working-gallon-cost-narrative]]` | Opener | `roughly the cost of a cup of coffee per working gallon at pro dilution` |
| `[[VALUE:made-in-canada]]` | Shipping + sourcing section | `Made in Canada` |
| `[[COMPETITOR:coat-handler-15-in-1]]` | "How it compares" — salon-pro conditioner-category benchmark | Per-market price for Coat Handler 15-in-1 Anti-Static Conditioner |
| `[[PRICE:oatmeal-aloe-shampoo-gallon]]` | "How it compares" — matching shampoo, system anchor | Markets-aware Furgenics price |
| `[[PRICE:deep-moisturizing-conditioner-gallon]]` | "How it compares" — intensive-rebuild escalation | Markets-aware Furgenics price |
| `[[PRICE:deshedding-conditioner]]` | "How it compares" — active-shedding alternative | Markets-aware Furgenics price |
| `[[DISCOUNT]]` | End of description | Active discount campaign banner from theme settings |

Earthbath Oatmeal & Aloe Conditioner and Nature's Specialties oatmeal-aloe conditioner mentioned qualitatively (no `[[COMPETITOR:...]]` token) because the available `earthbath-oatmeal-aloe` and `natures-specialties-colloidal-oatmeal` slugs in main-page-pillar.liquid capture each brand's shampoo, not their conditioner. Per-market price benchmarking on the wrong product would be misleading. Same conditioner-category token coverage gap noted in FUR-014's .md sister doc.

## Key changes from current Shopify description

| Pre-token (current live) | Token-driven (this rewrite) |
|---|---|
| Hardcoded "16:1" + "17 working gallons" | `[[VALUE:dilution-ratio]]` + `[[VALUE:working-gallons-per-bottle]]` |
| "Made in Canada, serving groomers across the US and Canada" | `[[VALUE:made-in-canada]]` + explicit dual-market fulfillment paragraph |
| No competitor benchmarks | Coat Handler 15-in-1 per-market benchmark + qualitative Earthbath/Nature's Specialties positioning |
| No cross-referenced product pricing | `[[PRICE]]` tokens on oatmeal-aloe-shampoo-gallon, deep-moisturizing-conditioner-gallon, deshedding-conditioner |
| Hardcoded "First order? Save 50%... Use code FUR50" | `[[DISCOUNT]]` snippet driven by theme settings |
| Generic 4-line conditioner instructions | 6-step conditioner-step protocol with rationale (confirm-shampoo-rinsed, dilute, apply-with-irritation-zones, leave-in-fullest, rinse-fully, towel + HV-dry + damp-brush) |
| No pillar cross-reference | Links to `/pages/oatmeal-aloe-sensitive-skin-dog-shampoo` for the broader sensitive-skin guide |
| Chemistry stated as marketing list ("oatmeal and aloe... argan and shea... behentrimonium methosulfate") | Same ingredients framed by mechanism: oatmeal as ongoing beta-glucan/avenanthramide release during leave-in, aloe as humectant against dry-out, argan/shea as detangling slip without coat-weighting, behentrimonium methosulfate as low-concentration cationic conditioner with clean rinse |
| "Pairs well with: Matching shampoo... For damaged/brittle... For shedding breeds" (3 bullets) | Same three cross-refs woven into the compare section with priced links via `[[PRICE]]` tokens |

## Body HTML

See sibling file `oatmeal-aloe-conditioner-gallon.html` for the full token-driven HTML body.

Structure (matches FUR-014 conditioner pattern; chemistry adapted to dry-skin protocol):

1. Answer-first opener (~70 words, no heading) — product + role in the dry-skin system + chemistry headline + dilution economics
2. **Why a dry-skin conditioner is the back-half of the protocol** — conditioner mechanism explained (~165 words; second-contact-period framing + behentrimonium methosulfate context)
3. **When to use Furgenics Oatmeal & Aloe Conditioner** — coat types, breed list, salon scenarios with pillar link (~155 words)
4. **How it compares to alternatives** — Coat Handler 15-in-1 token, qualitative Earthbath + Nature's Specialties, two Furgenics conditioner cross-refs (~210 words)
5. **How to dilute and use** — 6-step conditioner-step protocol with intro line explicitly framing this as the back-half of the bath (~180 words)
6. **Shipping, sourcing, and the Groomer Program** — made-in-canada + dual-market fulfillment + Path B program + `[[DISCOUNT]]` + email contact (~80 words)

Total body: ~860 words (matches the sensitive-skin SKU depth pattern from FUR-011; chemistry-by-mechanism framing warrants the additional words).

## Pre-publish checklist

- [x] POC confirmed (token rendering on live PDPs both /en-ca/ and /en-us/) — verified via PDP #1
- [x] Draft committed to `brands/furgenics/content-drafts/products/oatmeal-aloe-conditioner-gallon.{html,md}`
- [ ] `update-product` MCP call pushes new `descriptionHtml` + `seo.title` + `seo.description` to Shopify
- [ ] Live URLs `/en-ca/products/oatmeal-aloe-conditioner-gallon` and `/en-us/products/oatmeal-aloe-conditioner-gallon` visually verify token rendering
- [ ] Ship entry appended to `brands/furgenics/knowledge/log.md`

## Open questions for Stephen

None for this PDP — chemistry claims grounded in the live description's named ingredients (which match the FUR-014 pattern), token coverage clean, status remains ACTIVE.

## Cross-references

- `knowledge/content-style-guide.md` — token API + maintenance rules
- `knowledge/products.md` — canonical product roster (FUR-010 entry)
- `knowledge/brand-voice.md` — voice rules
- `knowledge/competitor-intel.md` — Coat Handler 15-in-1 per-market captures (2026-05); Earthbath + Nature's Specialties narrative positioning carried from FUR-011
- `knowledge/business-identity.md` — Vaughan ON address, info@furgenics.com, dual-market fulfillment
- `content-drafts/groomer-program.md` — Path B canonical wording (CA samples / US first-order discount)
- `content-drafts/oatmeal-aloe-sensitive-skin-dog-shampoo.{html,md}` — the coat-01 / breed-03 pillar (shared with FUR-011); PDP body cross-references it as the broader sensitive-skin context
- `content-drafts/products/oatmeal-aloe-shampoo-gallon.{html,md}` — PDP #4 (matching shampoo, system front-half)
- `content-drafts/products/deshedding-conditioner.{html,md}` — PDP #5 (conditioner-category pattern reference)
- `docs/shopify-theme/sections/main-page-pillar.liquid` — token pipeline reference; conditioner-category token coverage gap noted for future extension

## Change log

- **2026-05-21** — v2 drafted (this file). Sixth PDP token-conversion rewrite, third and final of Session 2. Token-driven prices, value-math snippets, Coat Handler 15-in-1 per-market benchmark, qualitative Earthbath + Nature's Specialties positioning, universal both-markets framing, Path B Groomer Program wording, theme-driven discount banner. Conditioner-specific body structure (second-contact-period framing + dry-skin protocol). Replaces v1 prose-only description shipped pre-token-architecture.
