# Furgenics — Schema Deployment State

> Current state of structured data (JSON-LD, OG, Twitter, canonical) deployed on furgenics.com. Human-edited; agents read this to ground their reasoning about what's live. The schema-deployment auditor reads its expected version from `brands/furgenics/config.json → schemaDeployment.expectedVersionMarker`. Keep these two files in sync (the LLM-linter will eventually enforce this automatically).

## Current schema version

**v3** — deployed 2026-04-21. Live in Shopify main theme at `snippets/furgenics-schema.liquid`.

### v3 changes (April 21, 2026)

Shipped in the 2026-04-21 session after Google Merchant flagged v2 and the brand privacy rule was tightened:

- **Country code:** `"addressCountry": "CA"` (ISO 3166-1 alpha-2) — fixes the Google Merchant "Invalid country code" warning that rejected the string `"Canada"`.
- **Return policy:** refund-only (no physical return required) with `returnFees: FreeReturn`. Aligns with how Furgenics actually handles returns (no return shipping required — customer keeps the product, gets refund).
- **Brand privacy:** Petra Lab-X `parentOrganization` reference removed from the Organization schema. Per brand-voice.md, no public Furgenics content references Petra Lab-X.
- **Description scrubbed:** Organization description rewritten to not mention Petra Lab-X.
- **Fulfillment reality:** US via Amazon FBA, Canada via direct shipping — represented accurately in OG product tags and `shippingDetails`.

The v3 Liquid snippet is the authoritative implementation of these. To inspect: Shopify admin → Online Store → Themes → Edit code → `snippets/furgenics-schema.liquid`. To change: update the snippet, bump the version marker in the `{%- comment -%}` header, then bump `schemaDeployment.expectedVersionMarker` in config.json + update this file's "Current schema version" section.

## Schema inventory — what v3 emits

### Always-on (every page)
- ✅ `OnlineStore` JSON-LD with shippingDetails + hasMerchantReturnPolicy
- ✅ `WebSite` + `SearchAction` JSON-LD
- ✅ Canonical URL tag
- ✅ Open Graph tags (og:site_name, og:type, og:url, og:title, og:description, og:image, og:locale)
- ✅ Twitter Card tags (summary_large_image)

### Context-aware
- ✅ `BreadcrumbList` — context-aware (product/collection/page hierarchies)
- ✅ `FAQPage` — product pages only, reads `custom.faqs` metafield (JSON array of `{q,a}`)
- ✅ `Product` supplementary — product pages only, adds mpn (from SKU), audience (Professional Groomers), manufacturer, material, countryOfOrigin (CA)
- ✅ Product-specific OG (price:amount, price:currency, availability, retailer_item_id)

### Brand-level assigns (for reference)
- `brand_name`: Furgenics
- `brand_logo`: https://furgenics.com/cdn/shop/files/furgenics-logo.png
- `brand_support_email`: info@furgenicspetgrooming.com
- `brand_city`: Vaughan
- `brand_region`: Ontario
- `brand_country`: CA

## Deployment mechanism

- **File:** `/snippets/furgenics-schema.liquid` in theme code editor
- **Render line:** `{% render 'furgenics-schema' %}` added to `theme.liquid` before `</head>`
- **Visual FAQ accordion:** `/snippets/furgenics-product-faqs.liquid` added via Custom Liquid section in product template

## Validation state

Last Google Rich Results Test run (2026-04-21 on hypoallergenic-shampoo-gallon):

| Schema | Status | Notes |
|---|---|---|
| Crawl | ✅ Success | |
| Product snippets | ✅ Valid | Non-critical: missing review/aggregateRating (needs review collection system — v4 candidate) |
| Merchant listings | ✅ Valid | Non-critical: optional Offer-level fields |
| Breadcrumbs | ✅ Valid | Clean |
| FAQ | ✅ Valid | 11 FAQs detected |
| Organization | ✅ Valid | Non-critical: postalCode/streetAddress intentionally omitted for brand privacy |
| Return policies | ✅ Valid | Free return with $0 CAD fee |

## v4 — planned but not yet generated

When we're ready to generate v4, the candidate additions are:

- **review / AggregateRating** — requires installing a review collection system (Judge.me free tier or Shopify Product Reviews). Currently we emit nothing for reviews. Highest-impact v4 addition for both AEO and rich-results display.
- **HowTo** — blog posts and breed guides should emit HowTo when step-by-step content is present (dilution procedure, deshedding workflow, etc.)
- **VideoObject** — when we add video content (dilution demos, breed-specific grooming techniques), emit VideoObject
- **Article** — blog posts should emit full Article with headline, author, datePublished, dateModified, image
- **LocalBusiness re-evaluation** — v2/v3 intentionally omitted LocalBusiness. Re-evaluate whether emitting it for the Vaughan office helps vs hurts for a primarily-online merchant. Likely still keep omitted.
- **sitelinks_searchbox upgrade** — `WebSite.potentialAction.SearchAction` is already emitted in v3; the full sitelinks-searchbox surface in Google requires domain authority we don't yet have.

**Process for v4:** update this section with the finalized diff first, then have an agent generate the Liquid, then human review + paste into theme, then bump `schemaDeployment.expectedVersionMarker` to `"v4"` in config.json, then re-run the audit to confirm the snippet contains the new marker.

## Site-wide indexing and robots

- `/pages/groomer-program` — noindex (gated content, not for public search)
- All 9 gallon PDPs — indexable, canonicalized
- All 8 active 8oz sample PDPs — indexable (tracked in sitemap), but positioned as gated; consider adding `noindex` if sample URLs are causing SERP confusion with gallons
- Legacy DRAFT products — excluded from sitemap automatically by Shopify

## Search engine verification

- **Google Search Console HTML meta tag** — deployed at `theme.liquid` line 323
- **Bing Webmaster Tools** — imported via GSC (no separate tag required)
- **Other engines** — none configured yet

## Sitemaps

- **Parent:** https://furgenics.com/sitemap.xml
- **Children (4):**
  - `sitemap_products_1.xml` — all active products
  - `sitemap_pages_1.xml` — all active pages
  - `sitemap_collections_1.xml` — all active collections
  - `sitemap_blogs_1.xml` — all blog articles (currently near-empty)
- **GSC submission status (as of 2026-04-21):** Parent submitted, 1 child succeeded, 3 showing "Couldn't fetch" — expected to auto-resolve 24-48h.

## Change log

- **2026-04-21 (revision)** — Rewrote this file to reflect the actual deployed state. Previous version aspirationally claimed v4 was "generated, deployment pending" — in reality, v3 was deployed and v4 has not been generated. Corrected alongside the ADR-009 config migration (schema expectations now live in brands/furgenics/config.json → schemaDeployment).
- **2026-04-21 (original scaffold)** — Seed document written during v0 scaffold.
