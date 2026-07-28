# Token-substitution extraction + FAQ-metafield architecture — 4 surfaces unified, 9 SKUs tokenized

**Filed:** 2026-05-27
**Kind:** synthesis
**Sessions:** Claude Code (theme refactor) + Claude.ai (FAQ metafield rewrites + documentation)
**Repo:** stephenalton-collab/plx-aeo-steward
**Brief:** `docs/claude-code-briefs/2026-05-27-token-substitution-extraction-and-price-bug.md`
**Handoff prompt:** `docs/prompts/2026-05-27-claude-desktop-faq-metafield-rewrite.md`

## Headline

The Furgenics token-substitution pipeline — `[[PRICE:handle]]` / `[[VALUE:key]]` / `[[COMPETITOR:slug]]` / `[[DISCOUNT]]` — was extended from two render surfaces (PDP descriptions, pillar bodies) to **four** (adding the visible FAQ accordion and the FAQPage JSON-LD schema). The inline substitution code that previously lived in `sections/main-product.liquid` AND `sections/main-page-pillar.liquid` was extracted into a single shared snippet `snippets/token-substitution.liquid` — adding a new VALUE key, PRICE handle, or COMPETITOR slug is now a one-file edit propagating to all four surfaces. All 9 active gallon products' `custom.faqs` metafields were rewritten via the Shopify MCP to use the same token vocabulary as page bodies.

## What shipped

### Claude Code session (theme refactor)

Diff summary — 7 commits, all to `main`:

| File | Change |
|---|---|
| `snippets/token-substitution.liquid` | NEW — 161 lines. Single shared snippet covering all 13 COMPETITOR per-market blocks (CA/US split via `localization.country.iso_code`), all 6 VALUE keys, all 9 PRICE handles, and the DISCOUNT block (renders the `discount-banner` snippet via `{% capture %}`). |
| `sections/main-product.liquid` | −153 / +5. Inline pipeline replaced by `{% capture rendered_description %}{% render 'token-substitution', text: product.description %}{% endcapture %}`. |
| `sections/main-page-pillar.liquid` | −156 / +5. Same refactor with `page.content` as input. Side-effect fix: pre-existing `product` variable shadowing renamed to `tprod`. |
| `snippets/furgenics-product-faqs.liquid` | −2 / +4. `{% capture %}` for `faq.q` and `faq.a` ahead of accordion render. |
| `snippets/furgenics-schema.liquid` (FAQPage block) | −2 / +4. Same `{% capture %}`, then `strip_html \| json` before emission inside `acceptedAnswer.text`. |
| `snippets/furgenics-schema.liquid` (OnlineStore description) | −1 / +1. "Every formula is 16:1 concentrate and free of sulfates, parabens, and synthetic dyes" → "Every formula is 16:1 concentrate, paraben-free, and dye-free". The brand-wide sulfate-free claim was dropped because FUR-013 + FUR-005 INCI both contain SLES (open INCI items with formulation team). |

Deployment: Shopify CLI was unavailable in the Claude Code environment; deployed via Shopify admin duplicate-then-publish workflow from `docs/shopify-theme/theme_export__furgenics-com-scg9xy-xt__27MAY2026-1013am/`. Live and verified across 10 acceptance checks before publish.

### Claude.ai session (FAQ metafield rewrites)

All 9 active gallon products' `custom.faqs` metafields rewritten via `shopify:update-product` MCP calls. Each metafield is a `type: "json"` array of `{q, a}` objects, typically 11–13 questions per product (3–5 product-specific opening + a shared 5–9-question universal tail).

**Pilot product:** FUR-001 (hypoallergenic-shampoo-gallon, GID 8104403304587). Verified clean on both `/en-ca/` and `/en-us/` — accordion rendering with substituted values, schema clean text via `strip_html`, email fix (`info@furgenicspetgrooming.com` → `info@furgenics.com`) propagated.

**Batched products (8):** FUR-005, FUR-010, FUR-011, FUR-013, FUR-014, FUR-020 (DRAFT), FUR-021, FUR-050 (DRAFT). All pushes accepted on first attempt; same payload pattern as pilot.

**Universal tail (5 Qs, near-identical wording across all 9):**

- "Do you offer a discount on first orders?" → uses `[[DISCOUNT]]` inline
- "Is Furgenics made in North America?" → uses `[[VALUE:made-in-canada]]`
- "How quickly will my order ship?" → no tokens (shipping windows are operational facts)
- "What is your return policy on gallons?" → email standardized to `info@furgenics.com`
- "Do you offer wholesale pricing for multiple gallons or salon accounts?" → same email fix

**Product-specific opening Qs (varies per SKU):** typically a use-case question, a breeds question, and a competitor-comparison question — the comparison Q uses `[[PRICE:<own-handle>]]` + `[[COMPETITOR:<slug>]]` + `[[VALUE:dilution-ratio]]`. Competitor slug matched per product category (e.g., FUR-013 uses `furminator-deshedding`; FUR-011 uses `earthbath-oatmeal-aloe`).

## Architectural change: 4 surfaces, 1 source of truth

**Before this session:**

Inline substitution pipeline duplicated across `sections/main-product.liquid` (~80 lines, PDP descriptions) AND `sections/main-page-pillar.liquid` (~80 lines, pillar bodies). Adding a new COMPETITOR slug required editing both files identically. The FAQ render paths (`snippets/furgenics-product-faqs.liquid` for the accordion, `snippets/furgenics-schema.liquid` for the JSON-LD FAQPage block) emitted `{{ faq.q }}` and `{{ faq.a }}` raw — no substitution. FAQ metafield content was therefore stuck on hardcoded values (literal `16:1`, `$24.99 CAD`, `FUR50`, `$49.94`) that went stale on every price or campaign rotation.

**After this session:**

Single shared snippet `snippets/token-substitution.liquid` (161 lines) is the source of truth for the token vocabulary — 9 PRICE handles, 6 VALUE keys, 13 COMPETITOR slugs (CA + US captures), 1 DISCOUNT block. Four call sites all invoke it via the same `{% capture %} + {% render 'token-substitution', text: <input> %}` pattern:

1. `sections/main-product.liquid` — substitutes `product.description`
2. `sections/main-page-pillar.liquid` — substitutes `page.content` (pillar pages)
3. `snippets/furgenics-product-faqs.liquid` — substitutes each `faq.q` and `faq.a` from `custom.faqs` before rendering the accordion
4. `snippets/furgenics-schema.liquid` — same as #3, plus `strip_html | json` before emission so Google reads clean text

A price change in Shopify admin propagates to PDP descriptions, pillar bodies, FAQ accordion answers, and FAQPage schema simultaneously. Campaign rotation via theme settings → same propagation. Quarterly competitor refresh → one edit, all surfaces updated.

## Decisions made along the way

### 1. `strip_html` before `json` in the schema FAQPage block

The COMPETITOR token renders HTML — `<span class="competitor-price">Bio-Groom Hypo-Groom Gallon: <strong>$49.99 USD</strong> <small>(as of 2026-05, Amazon US)</small></span>`. The DISCOUNT token renders a full `<div>` block. For the visible accordion this is correct — the browser renders the markup as formatted text. For the JSON-LD schema, Google reads `acceptedAnswer.text` as plain text and we want it clean.

The chosen sequence in `furgenics-schema.liquid`:

```liquid
{%- capture rendered_a -%}{%- render 'token-substitution', text: faq.a -%}{%- endcapture -%}
...
"text": {{ rendered_a | strip_html | json }}
```

Without `strip_html`, structured-data testing tools would show raw `<span>` markup inside answer text — not a parse failure, but it pollutes the data view Google sees.

### 2. `tprod` variable namespacing in the shared snippet

The shared snippet uses `{% assign tprod = all_products[handle] %}` rather than `product`. The original `main-page-pillar.liquid` PRICE loop had used `{% assign product = ... %}`, which shadowed the page template's `product` global (empty on page templates, but reserved). Net effect on pillar pages was nil because `product` is blank in page templates, but the namespacing is now safer if future template work introduces a meaningful `product` context.

### 3. `json` type for the `custom.faqs` metafield (not `list.metaobject_reference`)

The simplest metafield shape that matches the snippet's iteration pattern (`{% for faq in faq_list %}` + `faq.q` / `faq.a` access) is `json` containing an array of objects. Pushing via `shopify:update-product` with `{namespace: "custom", key: "faqs", type: "json", value: "<JSON-stringified array>"}` works — Shopify upserts by namespace+key, no `id` field needed.

`list.metaobject_reference` would also have worked (each metaobject defining `q` and `a` fields) but adds setup overhead with zero functional benefit. `json` it is.

### 4. Question count and structure per product (11–13 Qs)

Pattern that emerged across the 9 products:

- 3–5 product-specific opening questions (use-case, breeds, comparison to category competitor, "should I pair with X?")
- 1 universal dilution question (always present, uses `[[VALUE:dilution-ratio]]` + `[[VALUE:working-gallons-per-bottle]]`)
- 1 universal puppy-safety question (slightly varied per product — FUR-013's drops "sulfates" from the irritant list to reflect actual chemistry)
- 5-question universal tail: discount (uses `[[DISCOUNT]]`), made-in-NA (uses `[[VALUE:made-in-canada]]`), shipping, return policy, wholesale

This balance keeps each product's FAQ relevant without exploding the accordion length.

### 5. Schema OnlineStore description: drop "free of sulfates" brand-wide

The pre-2026-05-27 OnlineStore description claimed "Every formula is 16:1 concentrate and free of sulfates, parabens, and synthetic dyes." FUR-013 (deshedding shampoo) contains SLES and FUR-005 (2-in-1 hypoallergenic) contains SLES — the brand-wide claim doesn't hold across actual chemistry. Schema OnlineStore description revised to "16:1 concentrate, paraben-free, and dye-free" — both claims true brand-wide. Per-product sulfate-free positioning still allowed where INCI supports it.

## Findings & observations

### FUR-014 variant CAD price diverged to $29.99

Discovered in the MCP response payload during the FUR-014 push (was $24.99 in project memory and the pre-2026-05-27 `products.md`). Updated `products.md` to reflect the actual live price. The `[[PRICE:deshedding-conditioner]]` token resolves to whatever the live variant price is on each market, so no FAQ content change was needed — the token absorbed the price update automatically. This is the architecture working as designed: pricing changes don't require content edits.

### FUR-001 has duplicate `furgenics.*` namespace metafields

The MCP response on FUR-001 showed `furgenics.dilution_ratio: "16:1"` and `furgenics.working_gallons_per_bottle: "17"` alongside the standard `custom.*` versions found on other products. Both namespaces are now dormant (token-driven via the shared snippet). FUR-001 has duplicate dead data — to be cleaned up in the eventual metafield deletion pass alongside the unstructured pricing metafields. Logged in `products.md` "Dormant unstructured metafields" section.

### MCP `get-product-by-id` doesn't return `custom.faqs` in its metafield payload

Confirmed across multiple product reads. The MCP returns a subset of metafields (typically those with formal definitions in the standard `custom.*` namespace pattern); the JSON metafield for FAQs isn't in that subset. Verification of FAQ writes has to be done on the live PDP, not the API response. Now documented in `content-style-guide.md` as a workflow note.

### The US Markets $19 USD override bug was NOT theme-side

Claude Code's Task 7 grep across the freshly-pulled live theme returned **zero hits** for `retail_price_*`, `cost_per_working_gallon`, `public_offer`, `gated_offer`. No locale-conditional near any price expression. No hardcoded `$19` / `$28` / `1900` / `2800` in any `.liquid` or `.json` theme file. The original premise of Task 7 — that the theme reads `custom.retail_price_usd` to override US variant prices — did not hold. The bug lived elsewhere.

**Resolved 2026-05-27 by Stephen, outside the theme.** Per his confirmation, per-market pricing is now Markets-managed correctly; the unstructured pricing metafields (`custom.retail_price_*`, `custom.cost_per_working_gallon_*`, `custom.public_offer`, `custom.gated_offer`) are dormant dead data, not actively overriding. They remain on the products pending the batch metafield cleanup pass.

### `product-description-token-pipeline.liquid` is dead code in the repo

The file at `docs/shopify-theme/snippets/product-description-token-pipeline.liquid` (243 lines) is NOT in the live theme; the freshly-pulled theme export contains zero references to it. Pre-refactor, the inline pipeline was the live render path; this snippet was a stale mirror. Post-refactor, the shared `token-substitution.liquid` is the source of truth. Per Claude Code's instruction, not deleted in this session — flagged for the future cleanup pass.

## Known open items (carried forward)

1. **Metafield batch cleanup** (deferred to separate session): batch-delete dormant unstructured metafields — `custom.retail_price_cad`/`_usd`, `custom.cost_per_working_gallon_cad`/`_usd`, `custom.public_offer`, `custom.gated_offer`, `custom.dilution_ratio`, `custom.working_gallons_per_bottle`, `custom.size_oz`, and FUR-001's duplicate `furgenics.*` namespace entries. Estimated ~50+ metafield deletes across 9 products.
2. **Sulfate-free claim mismatch on FUR-013 + FUR-005** (formulation team item, not blocking): SLES present in INCI despite `sulfate-free` tag. FUR-013's FAQ adapted (drops "sulfates" from puppy answer). FUR-005's FAQ retains brand-wide phrasing per accepted gap. Awaiting formulation team's INCI cleanup.
3. **FUR-050 lavender INCI placeholder** (formulation team item): `custom.full_ingredients` has no `Lavandula angustifolia` entry despite product positioning. Awaiting formulation team finalization.
4. **`product-description-token-pipeline.liquid` deletion** (low-priority cleanup): dead code in the repo's `docs/shopify-theme/snippets/` mirror. Safe to delete; not in this session.
5. **Quarterly competitor refresh** (next: 2026-08): per `content-style-guide.md` maintenance workflows, the 13 COMPETITOR captures are due for next quarterly refresh. Update in `snippets/token-substitution.liquid` (CA and US blocks for each slug) AND in `competitor-intel.md` simultaneously.

## Lessons learned

### 1. Pre-staging wiki updates pays off

Both `content-style-guide.md` and `products.md` were updated ahead of this analysis being written — describing the state they'd reach once the work landed. By the time the FAQ rewrites + Stephen's price-override resolution completed, the only remaining writeback was this analysis. The Karpathy-loop discipline of "the docs describe the destination, not just the journey" keeps the wiki useful for the next session's context-load even when one part of the work isn't finished yet. Trade-off: forward references can dangle if work doesn't complete; the structural linter catches that.

### 2. Test the premise of a bug before deep-diving

The original brief asserted the price override was theme-side. Claude Code's first action was an exhaustive grep — which proved the premise wrong before any fix was attempted. Saved a session of looking for an override that wasn't there. When investigating a bug, asking "is the bug actually where we think it is?" is cheaper than assuming and digging.

### 3. Single source of truth is worth the refactor cost

The 4-way maintenance hazard from inline duplication (across `main-product` + `main-page-pillar`, plus adding the same to `furgenics-product-faqs` + `furgenics-schema`) would have grown linearly with each new token. Extracting to one shared snippet kept the marginal cost flat. Adding a new VALUE key in the next session will be a one-file edit.

### 4. `strip_html` is the JSON-LD HTML-leak guard

When a render path produces HTML for human display AND structured data for machine consumption, the HTML strip step is mandatory before JSON-encoding. Easy to forget; visible in `View Source` if missed; degrades structured-data quality without raising an error. The pattern `{% capture %} → strip_html → json` works for any future token that introduces HTML.

### 5. MCP API responses don't expose all metafields

`get-product-by-id` returns a partial metafield set. Verification of writes to non-standard-namespace metafields (like `custom.faqs` JSON) requires live-page inspection, not API round-tripping. This was a 5-minute realization in the pilot; now documented in `content-style-guide.md` so the next FAQ author doesn't re-learn it.

## Cross-references

- `docs/claude-code-briefs/2026-05-27-token-substitution-extraction-and-price-bug.md` — full Claude Code brief with task acceptance criteria and the Findings section filled in
- `docs/prompts/2026-05-27-claude-desktop-faq-metafield-rewrite.md` — Claude.ai prompt for the FAQ metafield rewrite phase
- `content-style-guide.md` — token API + maintenance workflows + FAQ-metafield specific rules (updated 2026-05-27)
- `products.md` — canonical product roster + metafield catalog + dormant-metafields cleanup list (updated 2026-05-27)
- `analyses/2026-05-21-pdp-token-conversion.md` — prior session's after-action covering PDP description tokenization (same token vocabulary, narrower surface area)
- `competitor-intel.md` — per-market competitor benchmark captures (last refresh 2026-05; next 2026-08)
- `docs/shopify-theme/snippets/token-substitution.liquid` — the shared substitution pipeline (source of truth)
