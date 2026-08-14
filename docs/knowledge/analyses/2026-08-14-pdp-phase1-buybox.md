# PDP Phase 1 — buy-box hierarchy, at-a-glance specs, accordion polish

> Filed: 2026-08-14  ·  Kind: brief
> Source: Stephen forwarded an external design review of the accordion-template preview and approved "Proceed with Phase 1" with five decisions answered
> Related: [2026-07-28-pdp-accordion-template-proposal.md](./2026-07-28-pdp-accordion-template-proposal.md), [2026-07-28-pdp-accordion-implementation-review.md](./2026-07-28-pdp-accordion-implementation-review.md), [products.md](../products.md), [icp.md](../icp.md)

## External feedback — assessment summary

The review's diagnosis (information hierarchy, not styling; PDP should read as a professional spec sheet with a fast purchase path) was accepted. Adopted: buy-box primacy, quantity controls, mobile sticky ATC, at-a-glance spec panel, computed $/working gallon over the coffee narrative, four-section accordion consolidation (Phase 2), comparison moved below the accordion (Phase 2), testimonial compaction, purpose-built conditioner bundle, imagery expansion.

Rejected or amended:

- **No hardcoded prices anywhere** ($34.99 button labels, $2.06/working gallon). Everything renders from live variant price / token pipeline — the $/working gallon is computed at render time (`variant.price ÷ 17`, Markets-aware).
- **No `aria-expanded`/`aria-controls` retrofit** — the accordions are native `<details>/<summary>`, which provides the W3C pattern's behavior natively. Adopted instead: 52px+ rows, visible `:focus-visible` states, reduced-motion-respecting animation.
- **Keep the named-competitor comparison** (token-maintained, as-of-dated) rather than replacing with a Furgenics-only table; August quarterly price refresh is the prerequisite. Move below the accordion in Phase 2.
- **No fabricated review stars.** The static rating screenshot was removed; stars return when a real review app populates `reviews.rating` metafields (Dawn's rating block already reads them).
- **FAQ cut to ~5:** dedupe rather than amputate (Phase 2); the corpus feeds FAQPage JSON-LD and AEO long-tail.
- **Copy trimming phased** so citation-run/Search Console effects of structure vs. copy changes stay attributable.

## Stephen's decisions (2026-08-14)

1. **Sulfate claim:** waiting on formulation truth — keep live copy as-is for now; no sweep. (Guardrail unchanged: no *new* copy reintroduces the claim.)
2. **Shipping:** CA 2–5 business days, US 3–5 business days — now canonical in `products.md`.
3. **FUR20:** shopper must enter the code manually. FAQ tail answer "works automatically at checkout" is wrong → Phase 2 metafield sweep.
4. **Claims:** substantiated via the 60+ groomer testing program. (Keep phrasing observational/cosmetic; drug/veterinary claim guardrail still applies.)
5. **Review app + photography:** options and shot list provided in session; choice pending.

## Phase 1 changes (this PR, repo-side)

All in `site/theme/`, targeting duplicate theme **“Copy of Copy of scg9xy-xt”** (`#152547065995`):

| Change | File |
|---|---|
| Buy-box order → price → at-a-glance → variant → quantity → buy → Groomer CTA → description → bundle | `templates/product.json` (block_order) |
| At-a-glance spec panel (dilution/yield via VALUE tokens, computed $/working gallon, coat fit from `custom.coat_type`, 1 gal/128 oz, market-aware shipping + 30-day refund) replaces the coffee-narrative economics line | new `snippets/product-at-a-glance.liquid` + `product.json` block |
| Mobile sticky add-to-cart bar (IntersectionObserver on the primary buy button; submits the main product form) | new `snippets/sticky-atc.liquid` + render in `sections/main-product.liquid` |
| Quantity controls restored (they were commented out — the quantity block rendered nothing) | `sections/main-product.liquid` |
| Duplicate `<h2 class="h1">` title + static star-rating screenshot removed | `sections/main-product.liquid` (title block) |
| Hidden legacy Bootstrap accordion (duplicate metafield content, repeated IDs) removed | `sections/main-product.liquid` (description block) |
| Testimonial compacted to a small proof card; cross-store portrait removed | `sections/main-product.liquid` |
| “Complete the grooming system” complementary-products block (Search & Discovery-driven, quick add on) | `templates/product.json` |
| Accordion a11y polish: `:focus-visible` restored (FAQ CSS had `outline: none`), 52px rows, reduced-motion | `snippets/description-accordion.liquid`, `snippets/furgenics-product-faqs.liquid` |

## Deploy runbook

Target: unpublished duplicate **“Copy of Copy of scg9xy-xt”** (`#152547065995`). Never push to live `#150922428555`; never publish.

1. **Done 2026-08-14.** `shopify theme push --nodelete --only` of the six Phase 1 files (`sections/main-product.liquid`, `templates/product.json`, `snippets/description-accordion.liquid`, `snippets/furgenics-product-faqs.liquid`, `snippets/product-at-a-glance.liquid`, `snippets/sticky-atc.liquid`) to `#152547065995` only.
2. **Done 2026-08-14.** Pulled `snippets/buy-buttons.liquid`, committed the original, then restyled: Add to cart solid/primary full-width; wholesale as outlined secondary link **“Apply for salon pricing”** (class `wholesale-product` kept for the existing Klaviyo form `W5fDYc`; href `/pages/groomer-program` is the no-JS fallback). Pushed the edit to the same duplicate.
2b. **Done 2026-08-14.** Pushed `snippets/buy-buttons.liquid` (alignment fix) to `#152547065995` only (`shopify theme push --nodelete --only`). Live `#150922428555` unchanged, nothing published. Rendered preview confirmed at 1440px and 390px: Add to cart full-width solid teal (`rgb(1, 69, 102)`) with arrow at `calc(100% - 20px)`; Apply for salon pricing full-width outlined secondary stacked below; left/right edges identical. Consider pulling + versioning `assets/mx-style.css` (P2).
3. **Still admin.** In Shopify admin → Search & Discovery, set complementary products from the `products.md` "Pairs with" data (FUR-013→FUR-014, FUR-011→FUR-010, FUR-021↔FUR-020, etc.) so the bundle block renders.
4. **Done 2026-08-14 (except bundle).** Preview verified on `/products/deshedding-shampoo` + `/products/deshedding-conditioner`, both `/en-ca/` and `/en-us/`: at-a-glance values + currency, quantity controls, sticky ATC markup, no legacy accordion in DOM, tokens substituting, 6 JSON-LD blocks parse. Complementary bundle is empty until step 3.
5. Admin blockers unchanged from the implementation review: inventory/availability, inverted `compare_at_price` ($18.04 under $34.99), FUR-011 storefront 404.

Preview: `https://scg9xy-xt.myshopify.com/products/deshedding-shampoo?preview_theme_id=152547065995`

## Phase 2 backlog (content + metafields, needs approval/MCP)

- v4 descriptions: four-section accordion (best-for → dilution/protocol → ingredients & safety → shipping/programs), chemistry folded in, comparison moved below the accordion; shipping-window and FUR20-wording fixes in the same sweep.
- New per-SKU metafields (document in `products.md` first): contact time, display short title, safety notes, matching-product reference.
- FAQ dedupe + reorder (purchase blockers first, logistics tail last).
- August competitor price refresh before the comparison surface ships.
- Short display H1 + eyebrow via metafield (keep `product.title` for feeds/cart).

## Sources & references

- External design review forwarded by Stephen 2026-08-14 (accordion-preview PDF + live-page observations)
- `analyses/2026-07-28-pdp-accordion-implementation-review.md` — P0/P1 items this phase closes (buy-box order, focus states, hidden accordion, static rating image, coffee narrative)
- `products.md` — canonical pairings, shipping decision, catalog blockers
- W3C APG accordion pattern; WCAG 2.2 target size (24×24 minimum; rows built at 52px+)
