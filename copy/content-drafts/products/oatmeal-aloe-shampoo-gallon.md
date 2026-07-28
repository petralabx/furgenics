# Furgenics Oatmeal & Aloe Shampoo Gallon — PDP rewrite (token-driven + universal both-markets)

> **Product description draft for `oatmeal-aloe-shampoo-gallon`.** Fourth of 9 PDP token-conversion rewrites — first PDP of Session 2 per the prompt's 3-product cadence.
>
> _Drafted 2026-05-21 as the fourth Markets-aware token-driven PDP rewrite. Replaces the pre-token description (hardcoded "16:1" and "17 working gallons", hardcoded "FUR50" discount callout, generic "Made in Canada, serving groomers across the US and Canada" line, no competitor benchmarks, no pillar link). This is the anchor SKU for the breed-03 / coat-01 pillar at `/pages/oatmeal-aloe-sensitive-skin-dog-shampoo`._

## Meta + technical

- **Product handle:** `oatmeal-aloe-shampoo-gallon`
- **Product GID:** `gid://shopify/Product/8104367161483`
- **SKU (internal, not in customer copy):** FUR-011
- **Product title (unchanged):** `Oatmeal & Aloe Professional Dog Grooming Shampoo Gallon`
- **SEO title (UPDATE):** `Professional Oatmeal Aloe Dog Shampoo Gallon | Furgenics` (56 chars)
- **Meta description (UPDATE, ≤155 chars):** `Colloidal oatmeal & aloe 16:1 concentrate for dogs with dry, itchy, or flaky skin. Built for daily salon-volume sensitive-skin work.` (132 chars)
- **Status (unchanged):** ACTIVE
- **Pricing (unchanged, managed by Shopify Markets):** $24.99 CAD / $19 USD per gallon
- **Tags, vendor, collections, variants, images (all unchanged):** out of scope per PDP rewrite prompt
- **Featured pillar:** `/pages/oatmeal-aloe-sensitive-skin-dog-shampoo` (anchor SKU for the breed-03 / coat-01 pillar; the PDP cross-references it as the broader sensitive-skin context guide)

## Token usage table

| Token | Where used | Resolves to |
|---|---|---|
| `[[VALUE:dilution-ratio]]` | Opener; step 3 of "How to use"; step 7 (conditioner pair-up); Earthbath compare line | `16:1 concentrate` |
| `[[VALUE:working-gallons-per-bottle]]` | Opener | `up to 17 working gallons per bottle at professional dilution` |
| `[[VALUE:per-working-gallon-cost-narrative]]` | Opener | `roughly the cost of a cup of coffee per working gallon at pro dilution` |
| `[[VALUE:made-in-canada]]` | Shipping + sourcing section | `Made in Canada` |
| `[[COMPETITOR:earthbath-oatmeal-aloe]]` | "How it compares" — consumer-recognition anchor | Per-market price for Earthbath Oatmeal & Aloe Pet Shampoo |
| `[[COMPETITOR:natures-specialties-colloidal-oatmeal]]` | "How it compares" — salon-grade colloidal benchmark | Per-market price for Nature's Specialties Colloidal Oatmeal Shampoo |
| `[[PRICE:oatmeal-aloe-conditioner-gallon]]` | "How it compares" — matching conditioner cross-sell; "How to use" step 7 — standard two-step protocol pair-up | Markets-aware Furgenics price |
| `[[PRICE:hypoallergenic-shampoo-gallon]]` | "How it compares" — sensitive-allergy fallback | Markets-aware Furgenics price |
| `[[PRICE:deshedding-shampoo]]` | "How it compares" — shedding-primary fallback | Markets-aware Furgenics price |
| `[[DISCOUNT]]` | End of description | Active discount campaign banner from theme settings |

TropiClean Pro Hypoallergenic Oatmeal (used in FUR-001's compare section) deliberately not duplicated here — diversified to Nature's Specialties for the salon-grade benchmark slot.

## Key changes from current Shopify description

| Pre-token (current live) | Token-driven (this rewrite) |
|---|---|
| Hardcoded "16:1" + "17 working gallons" | `[[VALUE:dilution-ratio]]` + `[[VALUE:working-gallons-per-bottle]]` |
| "Made in Canada, serving groomers across the US and Canada" | `[[VALUE:made-in-canada]]` + explicit dual-market fulfillment paragraph |
| No competitor benchmarks | Earthbath + Nature's Specialties per-market benchmarks |
| No cross-referenced product pricing | `[[PRICE]]` tokens on oatmeal-aloe-conditioner-gallon (×2), hypoallergenic-shampoo-gallon, deshedding-shampoo |
| Hardcoded "First order? Save 50%... Use code FUR50" | `[[DISCOUNT]]` snippet driven by theme settings |
| "Free of sulfates, parabens, and synthetic dyes" | Removed pending INCI verification (FUR-013 cautionary tale); chemistry framed by mechanism instead (beta-glucans + avenanthramides + aloe humectant action) |
| Generic 5-line instructions | 7-step protocol with rationale per step (brush-out, saturation timing, dilution, application zones, contact time for oatmeal work, rinse fully to avoid worsening itch, conditioner pair-up) |
| No pillar cross-reference | Links to `/pages/oatmeal-aloe-sensitive-skin-dog-shampoo` for the broader sensitive-skin guide |
| Chemistry stated as marketing list ("oatmeal and aloe vera calm irritation") | Same ingredients now framed by mechanism: beta-glucans + avenanthramides for soothing, aloe as humectant + polysaccharide film former |

## Body HTML

See sibling file `oatmeal-aloe-shampoo-gallon.html` for the full token-driven HTML body.

Structure (matches the FUR-001 / FUR-013 / FUR-020 pattern; adapted for sensitive-skin chemistry):

1. Answer-first opener (~60 words, no heading) — product + audience + chemistry headline + dilution economics
2. **Why colloidal oatmeal and aloe matter for dry skin** — chemistry rationale framed by mechanism (~165 words)
3. **When to use Furgenics Oatmeal & Aloe Shampoo** — coat types, breed list, salon scenarios with pillar link (~140 words)
4. **How it compares to alternatives** — Earthbath + Nature's Specialties tokens, hypoallergenic-shampoo + deshedding-shampoo cross-refs (~200 words)
5. **How to dilute and use** — 7-step sensitive-skin bath protocol + matching-conditioner pair-up (~165 words)
6. **Shipping, sourcing, and the Groomer Program** — made-in-canada + dual-market fulfillment + Path B program + `[[DISCOUNT]]` + email contact (~80 words)

Total body: ~810 words (slightly above PDP #1-3 average; the chemistry-by-mechanism section is denser because sensitive-skin SKUs warrant deeper chemistry explanation — the audience is buying on the chemistry promise).

## Pre-publish checklist

- [x] POC confirmed (token rendering on live PDPs both /en-ca/ and /en-us/) — verified via PDP #1
- [x] Draft committed to `brands/furgenics/content-drafts/products/oatmeal-aloe-shampoo-gallon.{html,md}`
- [ ] `update-product` MCP call pushes new `descriptionHtml` + `seo.title` + `seo.description` to Shopify
- [ ] Live URLs `/en-ca/products/oatmeal-aloe-shampoo-gallon` and `/en-us/products/oatmeal-aloe-shampoo-gallon` visually verify token rendering
- [ ] Ship entry appended to `brands/furgenics/knowledge/log.md`

## Open questions for Stephen

1. **INCI metafield status** — products.md known catalog issue #1 still lists FUR-011's `custom.full_ingredients` as "TEST". You confirmed mid-Session-1 that all TEST entries are updated; products.md note is stale. The post-push response will reveal the actual INCI — I'll flag any sulfate-free / paraben-free observations once it returns.
2. **"Free of sulfates, parabens, and synthetic dyes" claim removal** — this draft removed the ingredient-exclusion claim pending INCI verification. If you'd prefer to keep it (and the INCI supports it), happy to push a follow-up. Conservative stance based on the FUR-013 lesson.

## Cross-references

- `knowledge/content-style-guide.md` — token API + maintenance rules
- `knowledge/products.md` — canonical product roster (FUR-011 entry, includes stale "TEST" INCI note in known catalog issues #1)
- `knowledge/brand-voice.md` — voice rules
- `knowledge/competitor-intel.md` — Earthbath + Nature's Specialties per-market captures (2026-05)
- `knowledge/business-identity.md` — Vaughan ON address, info@furgenics.com, dual-market fulfillment
- `content-drafts/groomer-program.md` — Path B canonical wording (CA samples / US first-order discount)
- `content-drafts/oatmeal-aloe-sensitive-skin-dog-shampoo.{html,md}` — the coat-01 / breed-03 pillar that this PDP anchors; PDP body cross-references it as the broader sensitive-skin context
- `content-drafts/products/hypoallergenic-shampoo-gallon.{html,md}` — PDP #1 (template pattern + sister sensitive-skin SKU)
- `content-drafts/products/deshedding-shampoo.{html,md}` — PDP #2 (template pattern + sulfate-free claim cautionary tale)
- `content-drafts/products/2in1-doodle-shampoo-conditioner.{html,md}` — PDP #3 (template pattern + DRAFT-status flagging precedent)
- `docs/shopify-theme/sections/main-page-pillar.liquid` — token pipeline reference (product equivalent confirmed deployed 2026-05-21)

## Change log

- **2026-05-21** — v2 drafted (this file). Fourth PDP token-conversion rewrite, first of Session 2. Token-driven prices, value-math snippets, Earthbath + Nature's Specialties per-market benchmarks, universal both-markets framing, Path B Groomer Program wording, theme-driven discount banner. Sensitive-skin chemistry framed by mechanism (beta-glucans + avenanthramides + aloe humectant action). Deliberately removed "Free of sulfates, parabens, and synthetic dyes" claim pending INCI verification (FUR-013 lesson). Replaces v1 prose-only description shipped pre-token-architecture.
