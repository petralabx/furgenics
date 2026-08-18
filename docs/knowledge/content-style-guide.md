# Furgenics — Content Style Guide

> **Class C — human-owned.** Canonical rules for treating pricing, competitor benchmarks, value claims, and discount campaigns in Furgenics content. Every page draft (mine or yours) must follow these rules.
>
> _Created 2026-05-20 as Phase 2 of the C + Markets path. Revised 2026-05-21 to reflect the token-substitution architecture. Revised 2026-05-27 to reflect the 4-surface shared-snippet architecture (descriptions + pillar bodies + FAQ accordion + FAQPage JSON-LD all driven by `snippets/token-substitution.liquid`)._

## Why this exists

Furgenics serves two markets (Canada, USA) with different prices, different offers, and different fulfillment realities. Hardcoded dollar amounts in content become wrong the moment a price changes, the moment a market launches a promo, or the moment the same content URL serves both markets via Shopify Markets.

This guide gives every content surface the same four tools — `[[PRICE]]`, `[[VALUE]]`, `[[COMPETITOR]]`, and `[[DISCOUNT]]` tokens — and rules for when to use each. Follow it, and content stays fresh per-market forever with zero hand-update tax.

As of 2026-05-27, the substitution pipeline runs on **four content surfaces**, all driven by a single shared snippet `snippets/token-substitution.liquid`:

1. **`product.description`** (PDP body) — substituted in `sections/main-product.liquid`
2. **`page.content`** on pillar pages — substituted in `sections/main-page-pillar.liquid`
3. **Visible FAQ accordion** on PDPs — substituted in `snippets/furgenics-product-faqs.liquid` (reads from the `custom.faqs` metafield)
4. **FAQPage JSON-LD schema** on PDPs — substituted in `snippets/furgenics-schema.liquid`, then `strip_html | json` before emission so Google sees clean text

The token vocabulary is identical across all four surfaces. Add a new PRICE handle, VALUE key, or COMPETITOR slug in `snippets/token-substitution.liquid` once; every surface picks it up automatically.

## The token API (what you paste into content)

Content (whether typed in Shopify admin, pasted from a `content-drafts/*.html` file, or stored in the `custom.faqs` metafield) uses **placeholder tokens** in `[[TOKEN]]` form. The shared snippet substitutes them at render time, replacing each token with live, Markets-aware output.

The substitution pipeline lives in `docs/shopify-theme/snippets/token-substitution.liquid`. When a new token type is needed, the snippet is the file to edit.

### `[[PRICE:handle]]` — for our own products

Renders the live price of a Furgenics product in the active market's currency. The `handle` must match a real Shopify product handle.

```
List price is [[PRICE:hypoallergenic-shampoo-gallon]] per gallon.
```

Renders on the live page as `$24.99 CAD` on `/en-ca/` and the Markets-managed USD price on `/en-us/` (or whatever the active prices are when the page is requested).

**When to use:** anywhere you'd write a dollar amount that refers to a Furgenics SKU.

**Supported handles** (extend the list in the shared snippet when a new SKU launches):

- `hypoallergenic-shampoo-gallon`
- `2in1-hypoallergenic-shampoo-conditioner`
- `oatmeal-aloe-conditioner-gallon`
- `oatmeal-aloe-shampoo-gallon`
- `deshedding-shampoo`
- `deshedding-conditioner`
- `2in1-doodle-shampoo-conditioner`
- `deep-moisturizing-conditioner-gallon`
- `lavender-spa-shampoo`

### `[[VALUE:claim-key]]` — for invariant claims

Renders pre-approved value claims with consistent phrasing across all surfaces. Use when the claim is a product property (dilution ratio, working gallons, origin) — not a price.

```
Furgenics is a [[VALUE:dilution-ratio]] built for professional salons.
One gallon yields [[VALUE:working-gallons-per-bottle]].
```

Renders as `Furgenics is a 16:1 concentrate built for professional salons. One gallon yields up to 17 working gallons per bottle at professional dilution.`

**Approved claim keys** (in the shared snippet):

| Key | Renders as |
|---|---|
| `dilution-ratio` | `16:1 concentrate` |
| `dilution-ratio-bare` | `16:1` (use after prepositions: "Dilute at [[VALUE:dilution-ratio-bare]]") |
| `working-gallons-per-bottle` | `up to 17 working gallons per bottle at professional dilution` |
| `washes-small` / `washes-medium` / `washes-large` / `washes-deshed` | `435` / `198` / `121` / `87` (2176 working oz ÷ usage oz; from `wash-economics.liquid`) |
| `usage-oz-small` / `usage-oz-medium` / `usage-oz-large` / `usage-oz-deshed` | `5` / `11` / `18` / `25` (diluted ounces per wash) |
| `per-working-gallon-cost-narrative` | `roughly the cost of a cup of coffee per working gallon at pro dilution` |
| `made-in-canada` | `Made in Canada` |
| `professional-grade` | `built for professional salons` |
| `pro-vs-retail-positioning` | `a professional concentrate designed for salon volume — not a retail bottle in a bigger size` |

**Adding a new claim:** add a `replace` line to the VALUE block in `snippets/token-substitution.liquid` AND add the key to the table above. Both edits in one commit. Wash-count keys must be computed in `snippets/wash-economics.liquid`, not hardcoded.

### `[[COST:handle:tier]]` — for cost per wash

Renders the live Markets price of `handle` × usage_oz_tier ÷ 2176 working oz, as money. Tiers: `small` · `medium` · `large` · `deshed`.

```
A medium wash costs [[COST:deshedding-shampoo:medium]] at typical usage.
```

At $34.99 this is `$0.18`. Draft/unpublished handles fall back to `currently unavailable online` (same safety net as PRICE). Never hardcode `$0.18`, `$0.40`, or a bath count.

Homepage stats: do not pair an unlabeled "up to N washes" with an unlabeled "$X avg cost" unless they are the same tier. Use `snippets/homepage-wash-stats.liquid` (small = "up to"; medium = "avg").

### `[[COMPETITOR:brand-slug]]` — for industry benchmarks

Renders a competitor's published price + product + capture-date in one inline span. **Per-market aware** — the snippet detects the active Shopify Market via `localization.country.iso_code` and renders the captured CA or US price accordingly. Captured data lives in the snippet; refresh quarterly during `competitor-intel.md` updates.

```
For comparison, [[COMPETITOR:bio-groom-hypo-groom]] on a 15:1 dilution.
```

Renders on `/en-ca/` as: `For comparison, Bio-Groom Hypo-Groom Gallon: $110.41 CAD (as of 2026-05, Amazon Canada) on a 15:1 dilution.`

Renders on `/en-us/` as: `For comparison, Bio-Groom Hypo-Groom Gallon: $49.99 USD (as of 2026-05, Amazon US) on a 15:1 dilution.`

For competitors where only one market's data has been captured, the proxy market renders the same value with an explicit annotation like `(Amazon US — CA market price pending)` so the data source is visible.

**Supported competitor slugs** (in the shared snippet, last captured 2026-05):

| Slug | Brand + product |
|---|---|
| `bio-groom-hypo-groom` | Bio-Groom Hypo-Groom Gallon |
| `coat-handler-15-in-1` | Coat Handler 15-in-1 Gallon |
| `coat-handler-anti-shed` | Coat Handler Anti-Shed Gallon |
| `furminator-deshedding` | FURminator deShedding Ultra Premium 16oz |
| `chris-christensen-day-to-day` | Chris Christensen Day to Day Gallon |
| `igroom-silk` | iGroom Silk Shampoo Gallon |
| `isle-of-dogs-evening-primrose` | Isle of Dogs Evening Primrose Oil Shampoo Gallon |
| `earthbath-oatmeal-aloe` | Earthbath Oatmeal & Aloe Gallon (RTU) |
| `burts-bees-oatmeal` | Burt's Bees Oatmeal 16oz |
| `tropiclean-pro-hypoallergenic-oatmeal` | Tropiclean Pro Hypoallergenic Oatmeal Gallon |
| `natures-specialties-colloidal-oatmeal` | Nature's Specialties Colloidal Oatmeal Gallon (32:1) |
| `all-systems-botanical-oatmeal` | #1 All Systems Botanical Oatmeal Gallon |
| `bark2basics-de-shedding` | Bark2Basics De-Shedding Gallon (32:1) |

**Adding or updating a competitor:** edit the COMPETITOR block in `snippets/token-substitution.liquid` AND update `competitor-intel.md` with the same data. Quarterly refresh per the maintenance section below.

### `[[DISCOUNT]]` — for the active discount campaign

Renders the active general discount campaign for the current market. Pulls from theme settings (live 2026-08-18: **FUR20 / 20%** / max 4 gallons / "New customers, first order only"). Scalars: `[[DISCOUNT:code]]` → `FUR20`, `[[DISCOUNT:percent]]` → `20`. Swap FUR20 → FUR10 in Theme settings → Active Discount Campaign (one field) — do not edit copy.

```
[[DISCOUNT]]
```

Renders the discount-banner widget with the current campaign code, percent, max-units, and eligibility note.

**Placement in page bodies and pillar content:** place once per page on its own line, near a CTA. The rendered output is a full `<div>` block.

**Placement in `custom.faqs` answer text:** acceptable inline — the block-level `<div>` displays naturally as its own row in the accordion answer flow. For the JSON-LD schema, `strip_html` collapses the div to its text content, which reads as a flat sentence inside `acceptedAnswer.text`. The natural home is FAQ Q"Do you offer a discount on first orders?".

**When a campaign rotates** (FUR50 → FUR20, say): three steps in Shopify admin, no content edits anywhere:
1. Create the new discount code in Shopify admin → Settings → Discounts.
2. Update the "Active Discount Campaign" section in Theme Editor → Customize → Theme settings → update `discount_code` and `discount_percent`.
3. Deactivate the old code in Shopify Discounts.

Every content surface with `[[DISCOUNT]]` updates instantly.

## Internal theme infrastructure (not for content authors)

Behind the scenes:

- **`docs/shopify-theme/snippets/token-substitution.liquid`** — the shared snippet that runs the substitution pipeline. Single source of truth for the token vocabulary. Adding a new VALUE key, PRICE handle, or COMPETITOR slug is a one-file edit here.
- **`docs/shopify-theme/sections/main-product.liquid`** — calls the shared snippet on `product.description`.
- **`docs/shopify-theme/sections/main-page-pillar.liquid`** — calls the shared snippet on `page.content` for pillar-template pages.
- **`docs/shopify-theme/snippets/furgenics-product-faqs.liquid`** — calls the shared snippet on each `faq.q` and `faq.a` before rendering the accordion.
- **`docs/shopify-theme/snippets/furgenics-schema.liquid`** — calls the shared snippet on each `faq.q` and `faq.a` in the FAQPage JSON-LD block, then `strip_html | json` before emission. The `strip_html` step is critical — without it, the COMPETITOR token's `<span>` markup and the DISCOUNT token's `<div>` markup would leak into Google's structured-data view.
- **`brands/furgenics/theme-drafts/snippets/discount-banner.liquid`** — the discount-banner snippet that the shared snippet renders for `[[DISCOUNT]]` substitution. Reads from theme settings.
- **`brands/furgenics/theme-drafts/config/settings_schema.json`** — theme settings schema including the Active Discount Campaign section.

**Content authors should never reach for `{% render '...' %}` directly in content.** Tokens only. The theme infrastructure handles rendering.

## Special surface: the `custom.faqs` metafield

Each product carries a `custom.faqs` metafield of type `json` — a JSON array of `{q, a}` objects feeding both the visible FAQ accordion AND the FAQPage JSON-LD schema. As of 2026-05-27, both rendering paths run through the shared token-substitution snippet, so the same `[[PRICE:]]` / `[[VALUE:]]` / `[[COMPETITOR:]]` / `[[DISCOUNT]]` tokens that work in page bodies work inside FAQ Q&A text.

**Rules specific to FAQ content:**

- **Tokens work in both `q` and `a` fields,** but use them sparingly in question text. The COMPETITOR token renders verbose copy ("Bio-Groom Hypo-Groom Gallon: $49.99 USD (as of 2026-05, Amazon US)") which reads poorly inside a question. PRICE tokens in question text are fine.
- **`[[DISCOUNT]]` renders a `<div>` block.** In the visible accordion it displays as a styled banner inline within the answer flow. For the JSON-LD schema, `strip_html` collapses the div to its text content. Both behaviors are correct; just be aware the inline-vs-block rendering can affect how the question reads.
- **Email addresses in answers should always be `info@furgenics.com`** — never the legacy `info@furgenicspetgrooming.com` typo.
- **One token per concept is enough.** Don't double-substitute the same value (e.g., `[[VALUE:dilution-ratio]]` once per Q is fine; three times within one answer is noise).
- **Question count per product is typically 10–13.** Pattern: 3–5 product-specific opening questions + a shared 5-question tail (discount, made-in-NA, shipping, return, wholesale) that's near-identical across all 9 SKUs.

**Pushing FAQ updates via Shopify MCP:** the metafield is namespaced `custom.faqs` with type `json`. Push via `update-product` with `metafields: [{namespace: "custom", key: "faqs", type: "json", value: "<JSON-stringified array>"}]`. No `id` field is required — Shopify upserts by namespace+key. The MCP `get-product-by-id` tool does NOT return `custom.faqs` in its metafield payload — verification has to be done on the live PDP (both `/en-ca/` and `/en-us/`), not the API response.

## Pricing treatment — the rules

| Price type | Treatment | Example |
|---|---|---|
| **Our product prices** | `[[PRICE:handle]]` token | `[[PRICE:hypoallergenic-shampoo-gallon]]` |
| **Our discount %** | `[[DISCOUNT]]` token | Pulls from theme settings; never hardcoded |
| **Our value math** | `[[VALUE:key]]` token | `[[VALUE:dilution-ratio]]`, `[[VALUE:working-gallons-per-bottle]]` |
| **Competitor benchmarks** | `[[COMPETITOR:slug]]` token | `[[COMPETITOR:bio-groom-hypo-groom]]` |
| **Ratios / percentages** ("5× more concentrated", "80% lower per-bath cost") | Hardcoded — invariant by definition | "Furgenics is 5× more concentrated than typical retail dog shampoos" — only if substantiated |
| **Industry context numbers** (Amazon GMC volume, market sizes) | Hardcoded with explicit `as of YYYY-MM` annotation in surrounding prose | "Bio-Groom's Amazon Hypoallergenic listing did $36,092/mo (as of January 2026)" |

### ❌ Never do this

```html
<p>Our gallon is $24.99 CAD, or just $12.50 CAD with code FUR50.</p>
```

Hardcodes both our price and our discount. Goes stale every campaign rotation; serves wrong currency to wrong market.

### ❌ Also never do this (the v2 mistake)

```html
<p>Our gallon is {% render 'pricing', handle: 'hypoallergenic-shampoo-gallon' %} per gallon.</p>
```

Shopify does not render Liquid in `page.content`. The `{% render %}` tag would display verbatim as text on the live page. Use tokens instead.

### ✅ Always do this

```html
<p>Our gallon lists at [[PRICE:hypoallergenic-shampoo-gallon]] per gallon.</p>

[[DISCOUNT]]
```

Tokens substituted at render time by the shared snippet. Markets-aware. Campaign-rotation-resilient.

## Brand voice constraints (cross-reference)

All content must conform to `brand-voice.md`. Specifically:

- **Never reference "Petra Lab-X"** in any content. Use the `[[VALUE:made-in-canada]]` token as the approved origin statement.
- **No medical / treatment claims.** Value-math claims have been pre-screened.
- **No retail pet-owner vocabulary.** Token outputs are B2B-toned by design.

## Maintenance workflows

### When pricing changes (most common)

1. Update the product price in Shopify admin (or via Shopify Markets per-market pricing).
2. **No content edits needed.** Every surface using `[[PRICE:handle]]` updates automatically on next render — PDP descriptions, pillar pages, FAQ accordion answers, FAQPage schema.

### When a value-math claim changes (e.g. reformulation)

1. Edit `docs/shopify-theme/snippets/token-substitution.liquid` — find the VALUE block, update the relevant `replace` line.
2. Update the approved-claims table in this style guide.
3. Deploy the updated snippet to the live theme (copy to Shopify theme code editor → save).
4. **No content edits needed.** Every surface using the claim updates automatically.

### When a competitor benchmark changes (quarterly refresh)

1. Update `competitor-intel.md` first — the "Per-market price capture history" table near the bottom is the source of truth for what data we have.
2. Edit `docs/shopify-theme/snippets/token-substitution.liquid` — find the COMPETITOR block, update BOTH the `{% if active_market == 'US' %}` and `{% else %}` (CA) captures for that competitor.
3. Update the supported-slugs table in this style guide.
4. Deploy the updated snippet to the live theme.
5. **No content edits needed.** Every surface using the `[[COMPETITOR:slug]]` token updates automatically — per-market, per visitor.

**Capture cadence.** Quarterly cycle is the target (next: 2026-08). Capture method is currently manual browser capture by Stephen — Amazon blocks WebFetch programmatic capture, so this is a human chore for now. Future improvement: a different data source (SerpAPI, Helium 10, etc.) that can be queried programmatically per quarter.

### When a discount campaign rotates (FUR50 → FUR20)

1. Create the new discount code in Shopify admin → Settings → Discounts.
2. Theme Editor → Customize → Theme settings → "Active Discount Campaign" → update `discount_code` and `discount_percent` (and `discount_eligibility` if it changed).
3. Deactivate the old code in Shopify Discounts.
4. **No content edits anywhere.** Every surface with `[[DISCOUNT]]` updates instantly.

### Adding a new product handle

1. Add the handle to the `furgenics_handles` list in `docs/shopify-theme/snippets/token-substitution.liquid` (PRICE block).
2. Update the supported-handles table in this style guide.
3. Deploy the updated snippet to the live theme.
4. New handle is immediately usable as `[[PRICE:new-handle]]` on every surface.

### Updating FAQ content for a product

1. Edit the `custom.faqs` metafield on the product (via Shopify admin metafields editor, or the `update-product` MCP).
2. Use tokens for any value that has a corresponding `[[PRICE:]]` / `[[VALUE:]]` / `[[COMPETITOR:]]` / `[[DISCOUNT]]` substitution. Hardcoding prices, dilution ratios, or discount codes inside FAQ answers will go stale — same problem as on page bodies.
3. Verify on `/en-ca/products/<handle>` AND `/en-us/products/<handle>`. Both the accordion text and the JSON-LD schema should show substituted values; the schema's `acceptedAnswer.text` fields should be clean plain text (no `<span>` or `<div>` markup).
4. **No theme edits needed** — the shared snippet handles substitution at render time on both render paths.

## Page-type policy (which surfaces support tokens)

The substitution pipeline now runs on four surfaces. Tokens render correctly on all of them:

- ✅ **Product templates (`product.liquid` via `sections/main-product.liquid`)** — PDP descriptions go through the shared substitution snippet. All four token types work. The `custom.faqs` metafield is ALSO token-aware on both the visible accordion and the FAQPage JSON-LD schema.
- ✅ **`page.content-pillar` template** — pillar pages run through `sections/main-page-pillar.liquid`. All four token types work.

Tokens do NOT render on these surfaces:

- ❌ **`page` (Default page)**, **`page.contact`**, **`page.coming-soon`** — these templates do not include the substitution pipeline. Tokens in body content will display as raw text. If a page using one of these templates needs tokens, either change the template to `page.content-pillar` (preferred) or add the substitution call to the relevant section file.
- ❌ **Policy templates** (`/policies/refund-policy` etc.) — fixed Shopify templates; no token support. Policy content must hardcode any references with explicit `as of` annotations.
- ❌ **Blog article templates** — depends on theme; verify before relying on tokens in blog post bodies.

**Default convention for new content pages:** use `page.content-pillar`. For PDP-specific content (description body + FAQ metafield), no template choice is needed — both surfaces already token-aware.

## Examples — good vs bad

### Good: Pillar page paragraph (tokens, snippet-driven)

```html
<p>Furgenics is a [[VALUE:dilution-ratio]] built for professional salons. One gallon yields [[VALUE:working-gallons-per-bottle]] — [[VALUE:per-working-gallon-cost-narrative]]. List price [[PRICE:hypoallergenic-shampoo-gallon]] direct.</p>

[[DISCOUNT]]
```

Every dollar amount, percent, code, and value claim above is dynamic. Change FUR50 → FUR20 in theme settings — every surface updates. Reformulate to 20:1 — every surface updates. Change the gallon price — every surface updates. Zero content edits.

### Good: PDP FAQ Q&A (tokens inside the `custom.faqs` metafield)

```json
{
  "q": "How does this compare to Bio-Groom So-Gentle Hypoallergenic?",
  "a": "Both are hypoallergenic professional gallon shampoos. Furgenics retails at [[PRICE:hypoallergenic-shampoo-gallon]] vs [[COMPETITOR:bio-groom-hypo-groom]], and both dilute at roughly [[VALUE:dilution-ratio]] — which gives Furgenics a significantly lower cost per working gallon for the same category of use."
}
```

Visible accordion shows substituted values with HTML formatting. JSON-LD schema gets the same values as clean plain text via `strip_html`. Both Markets-aware.

### Good: Competitor comparison

```html
<p>For comparison: [[COMPETITOR:bio-groom-hypo-groom]] on a 15:1 dilution; or [[COMPETITOR:chris-christensen-day-to-day]] at premium tier.</p>
```

Both competitor benchmarks render with their captured prices + as-of dates. Quarterly refresh updates both via one snippet edit.

### Bad: Hardcoded everything

```html
<p>Our Hypoallergenic shampoo is a 16:1 concentrate. One gallon makes 17 working gallons. Price: $24.99 CAD or $19 USD. New customers save 50% with code FUR50.</p>
```

Five problems:
1. Dilution ratio hardcoded — reformulation requires N edits.
2. Working gallons hardcoded — same problem.
3. Two currencies appear together — wrong for the visitor of either market.
4. Specific gallon price — goes stale on any price change.
5. Discount code + percent hardcoded — every campaign rotation requires N page edits.

## Cross-references

- `brand-voice.md` — voice rules these tokens must conform to
- `products.md` — canonical SKU list (sources of `handle` values for `[[PRICE]]` tokens)
- `competitor-intel.md` — canonical competitor positioning + most recent benchmark prices feeding the `[[COMPETITOR]]` tokens
- `market-map.md` — query-to-page mapping (informs which pages need which tokens)
- `business-identity.md` — canonical name / address / email referenced in CTAs
- `docs/shopify-theme/snippets/token-substitution.liquid` — the shared substitution pipeline (source of truth)
- `docs/shopify-theme/snippets/furgenics-product-faqs.liquid` — visible FAQ accordion render path (calls shared snippet)
- `docs/shopify-theme/snippets/furgenics-schema.liquid` — FAQPage JSON-LD render path (calls shared snippet + `strip_html | json`)
- `brands/furgenics/theme-drafts/snippets/discount-banner.liquid` — discount-banner snippet rendered by the shared snippet for `[[DISCOUNT]]` substitution
- `analyses/2026-05-27-token-substitution-extraction-and-faq-architecture.md` — after-action analysis of the 4-surface extraction
- `docs/proposals/shopify-content-surface-v2.md` — Phase A/B publisher build (Phase B is the eventual programmatic-publishing path that supersedes copy-paste)

## Change log

- **2026-05-20** — Document created during the C + Markets path kickoff. Three snippets (`pricing`, `competitor-price`, `value-math`) + rules captured. First page draft (Canadian Groomer Program) was the acceptance test.
- **2026-05-20** (later) — `discount-banner.liquid` added as the fourth snippet; companion `theme-drafts/config/settings_schema.json` for editable theme settings. Closed the hardcoded-discount-code gap.
- **2026-05-21** — **Architectural revision.** Discovered that Shopify does not render Liquid in `page.content`, so the `{% render '...' %}` snippet API failed when pasted into page body. Pivoted to token-substitution architecture: body content uses `[[TOKEN]]` placeholders that the `page.content-pillar` section template substitutes at render time. The 4 underlying snippets stay as theme infrastructure; the discount-banner snippet is still rendered (via `{% render %}` inside the section template) for the `[[DISCOUNT]]` substitution. Content drafts converted from `{% render %}` syntax to `[[TOKEN]]` syntax in the same commit. Page-type policy added (`page.content-pillar` is the only template with the substitution pipeline; product/policy templates can't use tokens).
- **2026-05-21** (later) — **Per-market `[[COMPETITOR]]` rendering** + **discount-banner spacing fix**. Section template's COMPETITOR block restructured with per-market `{% if active_market == 'US' %}` / `{% else %}` (CA) captures for all 13 tracked competitors. Active market detected via `localization.country.iso_code`; default `CA`. Stephen captured fresh Amazon CA + Amazon US prices on 2026-05-21 — captures recorded in `competitor-intel.md` "Per-market price capture history" table (the source of truth). Discount-banner snippet `{%- ... -%}` whitespace stripping replaced with `{% ... %}` + explicit leading spaces to fix the "FUR50.Max 4..." run-together rendering bug.
- **2026-08-18** — Wash-economics tokens. `[[VALUE:dilution-ratio-bare]]`, wash/usage tiers, `[[COST:handle:tier]]`, `[[DISCOUNT:code]]` / `[[DISCOUNT:percent]]`. Engine: `snippets/wash-economics.liquid` + `data/config.json` `economics`. Live campaign FUR20/20% (schema defaults updated; live banner was already FUR20). Do not hardcode 512 / $0.18 / 80–100 / 340. See `analyses/2026-08-18-gsc-ctr-economics-brief.md`.
- **2026-05-27** — **4-surface token-substitution architecture.** Inline substitution pipelines (previously duplicated in `sections/main-product.liquid` AND `sections/main-page-pillar.liquid`) extracted into a single shared snippet `snippets/token-substitution.liquid`. Two new call sites added: `snippets/furgenics-product-faqs.liquid` (visible FAQ accordion) and `snippets/furgenics-schema.liquid` (FAQPage JSON-LD, with `strip_html` before `json`-encoding so Google reads clean text). The `custom.faqs` metafield on all 9 active gallon products rewritten to use tokens — same vocabulary as page bodies, same maintenance story. Pillar template's `product` variable shadowing fixed as a side effect (renamed to `tprod` in the shared snippet). Schema OnlineStore description updated to drop "free of sulfates" brand-wide claim (FUR-013 + FUR-005 INCI mismatch); now reads "paraben-free, and dye-free". Token surface area is now four files behind one source of truth: adding a new PRICE handle, VALUE key, or COMPETITOR slug is a one-file edit. See `analyses/2026-05-27-token-substitution-extraction-and-faq-architecture.md` for full session details.
