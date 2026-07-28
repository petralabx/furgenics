# Furgenics Lavender Spa Shampoo Gallon — PDP rewrite (token-driven + universal both-markets)

> **Product description draft for `lavender-spa-shampoo`.** Eighth of 9 PDP token-conversion rewrites — second PDP of Session 3.
>
> _Drafted 2026-05-21 as the eighth Markets-aware token-driven PDP rewrite. Replaces the pre-token description (hardcoded "16:1" and "17 working gallons", hardcoded "FUR50" discount callout, generic "Made in Canada, serving groomers across the US and Canada" line, no competitor benchmarks, no pillar link)._

## Meta + technical

- **Product handle:** `lavender-spa-shampoo`
- **Product GID:** `gid://shopify/Product/8104408121483`
- **SKU (internal, not in customer copy):** FUR-050
- **Product title (unchanged):** `Lavender Spa Professional Dog Grooming Shampoo Gallon`
- **SEO title (UPDATE):** `Professional Lavender Spa Dog Shampoo Gallon | Furgenics` (55 chars)
- **Meta description (UPDATE, ≤155 chars):** `16:1 lavender spa shampoo with real essential oil for spa-grade scent. Built for premium salon service across all dog coat types.` (130 chars)
- **Status (unchanged):** **DRAFT** — product is currently not published. The token-driven description update applies regardless of status; customers won't see the new copy until Stephen publishes the product. **`products.md` lists this product as ACTIVE — wiki is stale on FUR-050 status.** Same situation as FUR-020 (PDP #3). Two of the newer SKUs now showing DRAFT state may relate to the SKU reconciliation work flagged in products.md known catalog issues #5.
- **Pricing (unchanged, managed by Shopify Markets):** $24.99 CAD / $19 USD per gallon
- **Tags, vendor, collections, variants, images (all unchanged):** out of scope per PDP rewrite prompt
- **Featured pillar:** `/pages/best-shampoo-goldendoodle` (cross-reference — doodle and small long-coat breeds are a primary audience; not the anchor SKU for any pillar)

## Token usage table

| Token | Where used | Resolves to |
|---|---|---|
| `[[VALUE:dilution-ratio]]` | Opener; "How to use" step 3 | `16:1 concentrate` |
| `[[VALUE:working-gallons-per-bottle]]` | Opener | `up to 17 working gallons per bottle at professional dilution` |
| `[[VALUE:per-working-gallon-cost-narrative]]` | Opener | `roughly the cost of a cup of coffee per working gallon at pro dilution` |
| `[[VALUE:made-in-canada]]` | Shipping + sourcing section | `Made in Canada` |
| `[[COMPETITOR:all-systems-botanical-oatmeal]]` | "How it compares" — NEW project use; premium salon botanical anchor | Per-market price for #1 All Systems Botanical Shampoo |
| `[[COMPETITOR:burts-bees-oatmeal]]` | "How it compares" — NEW project use; consumer natural-ingredients anchor | Per-market price for Burt's Bees Natural Pet Care |
| `[[PRICE:deep-moisturizing-conditioner-gallon]]` | "How it compares" — spa-tier conditioner pair; "How to use" step 7 — matching premium conditioner | Markets-aware Furgenics price |
| `[[PRICE:hypoallergenic-shampoo-gallon]]` | "How it compares" — unscented sensitive-skin fallback | Markets-aware Furgenics price |
| `[[DISCOUNT]]` | End of description | Active discount campaign banner from theme settings |

First project use of both `all-systems-botanical-oatmeal` and `burts-bees-oatmeal` tokens. Diversifies competitor coverage in the project so far (token slugs used across the line: bio-groom-hypo-groom, coat-handler-anti-shed, furminator-deshedding, chris-christensen-day-to-day, igroom-silk, earthbath-oatmeal-aloe, tropiclean-pro-hypoallergenic-oatmeal, natures-specialties-colloidal-oatmeal, coat-handler-15-in-1, isle-of-dogs-evening-primrose, all-systems-botanical-oatmeal, burts-bees-oatmeal — 12 of the 13 available slugs touched by end of Session 3 PDP #2). Espree, Buddy Wash, Wahl referenced qualitatively for the lavender-specific market context since no lavender-specific competitor tokens exist in main-page-pillar.liquid.

## Key changes from current Shopify description

| Pre-token (current live) | Token-driven (this rewrite) |
|---|---|
| Hardcoded "16:1" + "17 working gallons" | `[[VALUE:dilution-ratio]]` + `[[VALUE:working-gallons-per-bottle]]` |
| "Made in Canada, serving groomers across the US and Canada" | `[[VALUE:made-in-canada]]` + explicit dual-market fulfillment paragraph |
| No competitor benchmarks | #1 All Systems Botanical + Burt's Bees Natural per-market benchmarks + qualitative Espree/Buddy Wash/Wahl positioning |
| No cross-referenced product pricing | `[[PRICE]]` tokens on deep-moisturizing-conditioner-gallon (×2), hypoallergenic-shampoo-gallon |
| Hardcoded "First order? Save 50%... Use code FUR50" | `[[DISCOUNT]]` snippet driven by theme settings |
| Generic 5-line instructions | 7-step protocol with rationale per step (brush-out for binding, warm-water activation, dilution-vs-RTU for service-tier, application, massage-time-as-service-deliverable, rinse-fully-essential-oil-already-bound, conditioner pair-up) |
| "Free of sulfates, parabens, and synthetic dyes" | Removed pending INCI verification (FUR-013 cautionary tale; same conservative approach as FUR-011). Body's premium-positioning angle doesn't need ingredient-exclusion claims. |
| Chemistry stated as marketing phrase ("real lavender essential oil leaves coats smelling fresh and spa-clean") | Same positioning now framed by tier-distinction: real essential oil vs synthetic fragrance compounds, steam-distilled aromatic chemistry vs reverse-engineered, coat-retention behavior post-dry. No species-specific ("Lavandula angustifolia") or aromatic-compound ("linalool, linalyl acetate") claims pending INCI verification |
| "Pairs well with: For long curly coats... For doodle-specific spa service... For sensitive-skin lavender clients" (3 bullets) | Same three cross-refs but woven into compare section with priced links; Deep Moisturizing pairing surfaced twice (compare + how-to) per FUR-013 precedent |
| No pillar cross-reference | Links to `/pages/best-shampoo-goldendoodle` for the doodle and small long-coat breed protocol context |

## Body HTML

See sibling file `lavender-spa-shampoo.html` for the full token-driven HTML body.

Structure (matches FUR-001 / FUR-011 / FUR-013 shampoo pattern; adapted for spa-positioning + essential-oil chemistry):

1. Answer-first opener (~65 words, no heading) — product + scent-experience angle + chemistry headline + dilution economics
2. **Why real lavender essential oil matters for the spa experience** — tier-distinction framing (real essential oil vs synthetic fragrance) + coat-retention behavior (~150 words)
3. **When to use Furgenics Lavender Spa Shampoo** — coat types, breed list, salon scenarios with pillar link (~155 words)
4. **How it compares to alternatives** — All Systems + Burt's Bees tokens, qualitative Espree/Buddy Wash/Wahl, two Furgenics cross-refs (~220 words)
5. **How to dilute and use** — 7-step spa-service protocol with rationale per step + conditioner pair-up (~185 words)
6. **Shipping, sourcing, and the Groomer Program** — made-in-canada + dual-market fulfillment + Path B program + `[[DISCOUNT]]` + email contact (~80 words)

Total body: ~855 words (consistent with chemistry-rich PDP depth).

## Pre-publish checklist

- [x] POC confirmed (token rendering on live PDPs both /en-ca/ and /en-us/) — verified by Stephen across Sessions 1 + 2
- [x] Draft committed to `brands/furgenics/content-drafts/products/lavender-spa-shampoo.{html,md}`
- [ ] `update-product` MCP call pushes new `descriptionHtml` + `seo.title` + `seo.description` to Shopify (status stays DRAFT)
- [ ] If Stephen publishes the product: live URLs `/en-ca/products/lavender-spa-shampoo` and `/en-us/products/lavender-spa-shampoo` visually verify token rendering
- [ ] Ship entry appended to `brands/furgenics/knowledge/log.md` (batched at end of Session 3)

## Open questions for Stephen

1. **DRAFT status intentional?** Product is currently `status: DRAFT` in Shopify. `products.md` lists status as ACTIVE — wiki is stale. Same situation as FUR-020. If unintentional, publish via Shopify admin. If intentional pending SKU reconciliation, leave as-is and the new description sits ready for whenever publish happens.
2. **Two of the newer SKUs (FUR-020 + FUR-050) in DRAFT** — worth a wiki cleanup pass on products.md to mark current status accurately and consolidate whatever the SKU reconciliation decision is (FUR-005/020 vs FUR-026/037 from the GTM workbook).
3. **"Free of sulfates, parabens, and synthetic dyes" claim removal** — this draft removed the ingredient-exclusion claim pending INCI verification, same conservative approach as FUR-011. If you'd prefer to keep it (and the INCI supports it), happy to push a follow-up.

## Cross-references

- `knowledge/content-style-guide.md` — token API + maintenance rules
- `knowledge/products.md` — canonical product roster (FUR-050 entry; **stale on status field — lists ACTIVE but live state is DRAFT**)
- `knowledge/brand-voice.md` — voice rules
- `knowledge/competitor-intel.md` — All Systems Botanical + Burt's Bees per-market captures (2026-05); Espree/Buddy Wash/Wahl narrative positioning
- `knowledge/business-identity.md` — Vaughan ON address, info@furgenics.com, dual-market fulfillment
- `content-drafts/groomer-program.md` — Path B canonical wording (CA samples / US first-order discount)
- `content-drafts/products/2in1-doodle-shampoo-conditioner.{html,md}` — PDP #3 (DRAFT-status flagging precedent + breed-overlap audience)
- `content-drafts/products/deep-moisturizing-conditioner-gallon.{html,md}` — PDP #7 (premium-tier conditioner pair)
- `content-drafts/products/hypoallergenic-shampoo-gallon.{html,md}` — PDP #1 (sensitive-skin/scent-free fallback)
- `docs/shopify-theme/sections/main-page-pillar.liquid` — token pipeline reference

## Change log

- **2026-05-21** — v2 drafted (this file). Eighth PDP token-conversion rewrite, second of Session 3. Token-driven prices, value-math snippets, All Systems Botanical + Burt's Bees per-market benchmarks (first project use of both tokens), qualitative Espree/Buddy Wash/Wahl positioning, universal both-markets framing, Path B Groomer Program wording, theme-driven discount banner. Shampoo-pattern body structure with spa-positioning + real-essential-oil tier-distinction chemistry framing. DRAFT status flagged (products.md stale). Sulfate-free/paraben-free claim removed pending INCI verification per FUR-011 precedent. Replaces v1 prose-only description shipped pre-token-architecture.
