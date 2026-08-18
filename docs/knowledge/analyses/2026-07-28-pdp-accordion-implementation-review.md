# PDP accordion implementation review and session handoff

> Filed: 2026-07-28  ·  Kind: synthesis
> Source: Stephen requested an end-of-session review of the PDP accordion work, its SEO/AEO effect, and remaining groomer-shopping improvements
> Related: [PDP accordion template proposal](./2026-07-28-pdp-accordion-template-proposal.md), [products.md](../products.md), [content-style-guide.md](../content-style-guide.md), [schema-state.md](../schema-state.md), [icp.md](../icp.md), [target-queries.md](../target-queries.md)

## Executive decision

The accordion direction is sound: it removes a wall of open copy and a second, duplicative metafield accordion while preserving server-rendered content, headings, the visible answer-first opener, and FAQ content.

**Do not publish the duplicate theme yet.** The remaining launch blockers are product availability/pricing, prohibited or medical-adjacent claims still present in Shopify-owned content, incomplete purchase-decision ordering across the catalog, and two implementation risks (Product JSON-LD substitution and missing keyboard focus).

SEO parity is likely, but not guaranteed until the change is live and measured in Search Console/citation runs. Native collapsed `<details>` content remains crawlable; Google does not guarantee that every collapsed passage receives identical ranking weight in every context.

## Deployment state at session close

- Branch: `cursor/pdp-accordion-template-5f9a`
- PR: `#5` — “PDP accordion template: proposal, theme snippet, and exemplar draft reorder”
- Shopify target used throughout: unpublished duplicate **“Copy of Copy of scg9xy-xt”** (`#152547065995`)
- Preview: `https://scg9xy-xt.myshopify.com/products/deshedding-shampoo?preview_theme_id=152547065995`
- Published theme was not pushed to or published.
- Theme originals were committed before edits so review/rollback context exists in Git history.

## Work completed

### Accordion and template

- Pulled and versioned `sections/main-product.liquid`.
- Verified the duplicate theme's `snippets/description-accordion.liquid` matched the repo source before wiring.
- Replaced direct `{{ rendered_description }}` output with:
  `{% render 'description-accordion', description_html: rendered_description, product: product %}`.
- Description opener stays visible; H2 sections become native `<details>` rows; `custom.full_ingredients` is injected as “Full ingredients (INCI)”.
- Removed six duplicated `custom_liquid` rows from `templates/product.json`: Features & Benefits, Ingredients, Professional Groomer Size, Ready to Use or Dilutes 16:1, Directions of Use, and Coat Type.
- Unified description and FAQ accordion styling (bold title, rotating chevron, hairline borders).
- Moved the quantity selector above the long description. It is still below the buy button; see remaining recommendations.

### Conversion additions

- Added a token-driven dilution/economics line under the price.
- Added a market-aware Groomer Program CTA: CA references verified-pro samples; US references the first-order discount.
- Enabled Shopify's related-products section.

### Token and schema changes

- Versioned `snippets/token-substitution.liquid`.
- Added a graceful fallback for a `[[PRICE:handle]]` whose product is unavailable to `all_products`, preventing raw token brackets from rendering.
- Added `plain: true` output mode for schema contexts.
- Ran Shopify's serialized Product structured data through token substitution so known tokens no longer appear raw in the Product JSON-LD.
- Verified the rendered preview had zero supported raw tokens and that all six JSON-LD blocks parsed under the current data/settings.

### Content artifact

- Reordered the repo's deshedding v3 draft to the proposed purchase sequence and removed one prohibited sulfate-free statement there.
- The reordered draft was **not pushed into the Shopify product body**. The preview still reflects the older Shopify description order/content.

## SEO/AEO review

### Preserved signals

- Product title tag, meta description, canonical, H1, FAQPage schema, Product schema, and internal description links remained present in the tested preview.
- All five existing description H2 topics remained; “Full ingredients (INCI)” became an additional H2.
- The ~150-word reduction came from thin duplicate metafield rows. Their useful facts (breed fit, dilution, working-gallon yield, directions, and INCI) remain elsewhere.
- The answer-first opener remains visible before the accordion.

### SEO/AEO issues to resolve

1. **Product JSON-LD substitution is brittle.** `main-product.liquid` replaces tokens after Shopify serializes JSON. A future replacement containing a quote, backslash, or control character can invalidate the schema despite `strip_html | strip_newlines`. Build a safely JSON-escaped description before serialization, or emit a purpose-built concise Product description.
2. **Unsupported/mistyped tokens are not rejected.** Only known tokens are replaced; a new typo can still leak. Add a post-substitution check and CI/render tests.
3. **Title branding is duplicated.** Rendered titles resemble `… | Furgenics – FURGENICS`, wasting search-result title space.
4. **Product title is emitted twice in the heading outline.** `main-product.liquid` outputs the same product title as both H1 and H2.
5. **The old hidden accordion remains in `main-product.liquid`.** It is `display:none` but can still contain duplicate metafield content and repeated IDs. Remove it.
6. **FAQ content is longer and more repetitive than necessary.** Keep unique purchase objections; make duplicated dilution, breed, comparison, shipping, and discount answers complementary rather than full repeats.
7. **Schema/policy consistency requires validation.** Current OnlineStore schema promises free shipping and uses `ReturnByMail`, while the canonical policy is refund-only/no return and storefront copy says shipping is calculated at checkout. Confirm operations, then align every surface.
8. Add the natural modifier **“128 oz / 1 gallon”** to gallon copy; “128 oz” was the only potentially useful phrase lost with the retired Professional Groomer Size row.

## Launch blockers and compliance findings

1. **Availability:** tested representative gallon PDPs rendered Sold out/OutOfStock without a back-in-stock path.
2. **Inverted compare-at price:** US preview showed a lower struck-through regular price (`$18.04`) than the `$34.99` sale price.
3. **Sulfate-free remains deployed:** the claim still appears across descriptions, metadata, media alt text, FAQs, and Product JSON-LD, including the deshedding and hypoallergenic pages. The repo-wide guardrail requires removal pending INCI cleanup.
4. **Medical-adjacent language remains on sensitive-skin content:** examples include diagnosed allergies, contact dermatitis, conjunctivitis flare-ups, post-medication recovery, eczema-prone, hot spots, and causation/safety language. Reframe around coat/skin profiles and professional-use observations, then obtain claims review.
5. **Catalog divergence:** FUR-011 (`oatmeal-aloe-shampoo-gallon`) is listed ACTIVE in `products.md` but returned a storefront 404 during the session. Verify channel/market publication before changing the canonical roster.
6. **Market logistics diverge:** body and FAQ shipping windows/source descriptions do not consistently match the canonical CA direct 2–5 day / US Amazon 3–7 day model.

## Groomer-shopping recommendations

### P0 — before launch

1. Correct inventory/market availability and compare-at pricing.
2. Sweep prohibited and medical-adjacent claims across product body, SEO fields, media alt text, FAQ metafield, and schema-visible content.
3. Push purchase-decision-ordered descriptions for every gallon:
   fit/breeds → comparison/economics → dilution/workflow → INCI → chemistry → logistics.
4. Change buy-box order to:
   price → economics → variant → quantity → buy button → Groomer Program CTA → description.
5. Fix Product JSON-LD generation and add schema/token render tests.
6. Restore a visible keyboard focus state for FAQ summaries; current CSS removes the outline without a replacement.

### P1 — conversion improvements

1. Replace generic “You may also like” with curated **“Complete the grooming system”** pairings driven by the canonical product relationships in `products.md`.
2. Replace “roughly the cost of a cup of coffee” with a market-aware cost per working gallon calculated from the current retail price and professional dilution.
3. For unavailable products, provide back-in-stock notification, matching sample/program path, and the closest in-stock professional alternative.
4. Replace the static rating image and generic testimonial with verifiable groomer proof: salon/role, coat type, and workflow outcome. Do not fabricate testimonials.
5. Add a compact trust row near the buy box after policies are reconciled: Made in Canada, 16:1 concentrate, market-specific delivery, and 30-day refund policy.
6. For sensitive-skin products, test INCI at position 2 or 3; ingredient scrutiny may precede competitor comparison for that buyer.

### P2 — quality and maintainability

- Version `snippets/furgenics-schema.liquid` in this repo so visible FAQ and FAQPage schema behavior can be reviewed together.
- Gate template-wide additions by product type/tags or use dedicated gallon/sample templates. The Groomer CTA and recommendations currently apply to every product using `product.json`, including samples and legacy products.
- Remove inline CSS from repeated custom-Liquid/snippet output and consolidate it into a versioned theme asset.
- Render INCI using the appropriate metafield filter/escaping and suppress known placeholder values.
- Add image alt text and dimensions to hardcoded testimonial imagery.

## Suggested next-session decision order

1. Decide whether the unpublished duplicate is the rollout vehicle.
2. Resolve admin blockers: inventory, market publication, compare-at price.
3. Approve the claims sweep.
4. Approve catalog-wide description/FAQ ordering.
5. Fix implementation risks and accessibility.
6. Review curated pairings, trust proof, and economics presentation.
7. Re-test CA/US gallons and samples, then publish through the normal reviewed process.
8. After launch, log the ship in `optimization-log.md` and monitor Search Console plus AEO citation runs; do not record the unpublished preview as a live optimization.

## Sources & references

- Duplicate-theme rendered reviews: deshedding and hypoallergenic PDPs in CA/US, 2026-07-28
- Theme files versioned under `site/theme/`
- `docs/knowledge/products.md`
- `docs/knowledge/content-style-guide.md`
- `docs/knowledge/schema-state.md`
- `docs/knowledge/icp.md`
- `docs/knowledge/target-queries.md`
- `docs/knowledge/faq-corpus.md`
