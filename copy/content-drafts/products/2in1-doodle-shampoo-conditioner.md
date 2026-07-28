# Furgenics 2-in-1 Doodle Shampoo & Conditioner — PDP rewrite (token-driven + universal both-markets)

> **Product description draft for `2in1-doodle-shampoo-conditioner`.** Third of 9 PDP token-conversion rewrites in Session 1. Final PDP for this session per the prompt's 3-product cadence.
>
> _Drafted 2026-05-21 as the third C+Markets token-driven PDP rewrite. Replaces the pre-token description (hardcoded "16:1" and "17 working gallons", hardcoded "FUR50" discount callout, generic "Made in Canada, serving groomers across the US and Canada" line, salon-scenarios bullet list, no competitor benchmarks, no pillar link)._

## Meta + technical

- **Product handle:** `2in1-doodle-shampoo-conditioner`
- **Product GID:** `gid://shopify/Product/8104408252555`
- **SKU (internal, not in customer copy):** FUR-020 (note: products.md flags potential reconciliation with GTM workbook's FUR-037 SKU — see knowledge/products.md known catalog issues #5)
- **Product title (unchanged):** `2-in-1 Doodle Shampoo and Conditioner Gallon For Grooming Professionals`
- **SEO title (UPDATE):** `Professional 2-in-1 Doodle Dog Shampoo Gallon | Furgenics` (56 chars)
- **Meta description (UPDATE, ≤155 chars):** `16:1 doodle 2-in-1 shampoo + conditioner with argan oil and silk amino acids. Built for Goldendoodle, Labradoodle, and curly-coat salon work.` (142 chars)
- **Status (unchanged):** **DRAFT** — product is currently not published. The token-driven description update applies regardless of status; customers won't see the new copy until Stephen publishes the product. May be intentional pending FUR-020/FUR-037 SKU reconciliation (products.md known catalog issue #5) or may be an oversight.
- **Pricing (unchanged, managed by Shopify Markets):** $24.99 CAD / $19 USD per gallon
- **Tags, vendor, collections, variants, images (all unchanged):** out of scope per PDP rewrite prompt
- **Featured pillar:** `/pages/best-shampoo-goldendoodle` (anchor SKU for the breed-01 pillar; PDP body cross-references it as the broader doodle-protocol guide)

## Token usage table

| Token | Where used | Resolves to |
|---|---|---|
| `[[VALUE:dilution-ratio]]` | Opener; step 3 of "How to use" | `16:1 concentrate` |
| `[[VALUE:working-gallons-per-bottle]]` | Opener | `up to 17 working gallons per bottle at professional dilution` |
| `[[VALUE:per-working-gallon-cost-narrative]]` | Opener | `roughly the cost of a cup of coffee per working gallon at pro dilution` |
| `[[VALUE:made-in-canada]]` | Shipping + sourcing section | `Made in Canada` |
| `[[COMPETITOR:chris-christensen-day-to-day]]` | "How it compares" — show-coat poodle/doodle community anchor | CA: `$57.99 USD (Amazon US — CA market Day to Day price pending)` · US: `$57.99 USD (Amazon US)` |
| `[[COMPETITOR:igroom-silk]]` | "How it compares" — modern salon-pro doodle-adjacent | CA: `$63.99 CAD (Deshedding & Detangling variant)` · US: `$66.07 USD (Squeaky Clean variant)` |
| `[[PRICE:deep-moisturizing-conditioner-gallon]]` | "How it compares" iGroom comparison + post-bath hydration follow-up | Markets-aware Furgenics price |
| `[[PRICE:2in1-hypoallergenic-shampoo-conditioner]]` | "How it compares" sensitive-skin fallback | Markets-aware Furgenics price |
| `[[DISCOUNT]]` | End of description | Active discount campaign banner from theme settings |

We Love Doodles is mentioned qualitatively (no `[[COMPETITOR:...]]` token — not in the section template's slug list) to surface the niche Amazon-only doodle brand without inflating the per-market price block on the PDP. The half-gallon-only size limitation is the relevant point, not a head-to-head price.

## Key changes from current Shopify description

| Pre-token (current live) | Token-driven (this rewrite) |
|---|---|
| Hardcoded "16:1" + "17 working gallons" | `[[VALUE:dilution-ratio]]` + `[[VALUE:working-gallons-per-bottle]]` |
| "Made in Canada, serving groomers across the US and Canada" | `[[VALUE:made-in-canada]]` + explicit dual-market fulfillment paragraph |
| No competitor benchmarks | Chris Christensen + iGroom per-market benchmarks + qualitative We Love Doodles positioning |
| No cross-referenced product pricing | `[[PRICE]]` tokens on deep-moisturizing-conditioner-gallon (2×) and 2in1-hypoallergenic-shampoo-conditioner |
| Hardcoded "First order? Save 50%... Use code FUR50" | `[[DISCOUNT]]` snippet driven by theme settings |
| Generic 5-step instructions "Apply evenly, working through coat... Allow to sit 2–3 minutes" | 7-step doodle-specific bath protocol (brush out, saturate slower, dilute, apply, massage 3–4 min, rinse fully, brush damp + HV dry) |
| No pillar cross-reference | Links to `/pages/best-shampoo-goldendoodle` for the broader doodle-protocol guide |
| Chemistry stated as marketing list ("argan oil, coconut oil, shea butter, silk amino acids, chamomile") | Same ingredients now framed by mechanism: argan/shea for slip, coconut for moisture retention, silk amino acids for damaged-section repair, chamomile as mild anti-irritant |
| "Brush while damp for best detangling results" (single line) | Numbered step 7 of the bath protocol, paired with HV dry guidance |

## Body HTML

See sibling file `2in1-doodle-shampoo-conditioner.html` for the full token-driven HTML body.

Structure (matches the FUR-001 / FUR-013 pattern; adapted for 2-in-1 format + doodle-coat chemistry):

1. Answer-first opener (~50 words, no heading) — product + audience + chemistry headline + dilution economics
2. **Why doodle coats need a different chemistry than straight or double coats** — chemistry rationale framed by mechanism (~155 words)
3. **When to use Furgenics 2-in-1 Doodle** — coat types, breed list, salon scenarios with pillar link (~120 words)
4. **How it compares to alternatives** — Chris Christensen + iGroom tokens, We Love Doodles qualitative, 2in1-hypoallergenic cross-ref (~190 words)
5. **How to dilute and use** — 7-step doodle-specific bath protocol + Deep Moisturizing pair recommendation (~150 words)
6. **Shipping, sourcing, and the Groomer Program** — made-in-canada + dual-market fulfillment + Path B program + `[[DISCOUNT]]` + email contact (~85 words)

Total body: ~720 words (slightly above the 400–600 PDP target but consistent with PDP #2 depth; chemistry rationale and 2-in-1-vs-two-step competitor framing both warrant the additional words).

## Pre-publish checklist

- [x] POC confirmed (token rendering on live PDPs both /en-ca/ and /en-us/) — Stephen 2026-05-21 via PDP #1
- [x] Draft committed to `brands/furgenics/content-drafts/products/2in1-doodle-shampoo-conditioner.{html,md}`
- [ ] `update-product` MCP call pushes new `descriptionHtml` + `seo.title` + `seo.description` to Shopify (status stays DRAFT)
- [ ] If Stephen publishes the product: live URLs `/en-ca/products/2in1-doodle-shampoo-conditioner` and `/en-us/products/2in1-doodle-shampoo-conditioner` visually verify token rendering
- [ ] Ship entry appended to `brands/furgenics/knowledge/log.md` (noting DRAFT status)

## Open questions for Stephen

1. **DRAFT status intentional?** Product is currently `status: DRAFT` in Shopify. If unintentional, publish via Shopify admin. If intentional pending FUR-020/FUR-037 SKU reconciliation, leave as-is and the new description sits ready for whenever publish happens.
2. **INCI metafield not returned** — unlike FUR-001 and FUR-013, get-product-by-id didn't return a `custom.full_ingredients` metafield value. Worth confirming whether the metafield exists or whether products.md's "Full list present in metafield" note is stale for this SKU. Either way, this draft avoids unverifiable sulfate/paraben claims (lesson learned from PDP #2).

## Cross-references

- `knowledge/content-style-guide.md` — token API + maintenance rules
- `knowledge/products.md` — canonical product roster (FUR-020 entry, includes the FUR-037 reconciliation note in known catalog issues)
- `knowledge/brand-voice.md` — voice rules
- `knowledge/competitor-intel.md` — Chris Christensen + iGroom per-market captures (2026-05) + We Love Doodles narrative positioning
- `knowledge/business-identity.md` — Vaughan ON address, info@furgenics.com, dual-market fulfillment
- `content-drafts/groomer-program.md` — Path B canonical wording (CA samples / US first-order discount)
- `content-drafts/best-shampoo-goldendoodle.{html,md}` — the breed-01 pillar that features this SKU; PDP body cross-references it as the broader protocol guide
- `content-drafts/products/hypoallergenic-shampoo-gallon.{html,md}` — PDP #1 (template pattern)
- `content-drafts/products/deshedding-shampoo.{html,md}` — PDP #2 (template pattern + sulfate-free claim cautionary tale)
- `docs/shopify-theme/sections/main-page-pillar.liquid` — token pipeline reference (product equivalent confirmed deployed 2026-05-21)

## Change log

- **2026-05-21** — v2 drafted (this file). Third PDP token-conversion rewrite, completing Session 1. Token-driven prices, value-math snippets, Chris Christensen + iGroom per-market benchmarks, qualitative We Love Doodles positioning, universal both-markets framing, Path B Groomer Program wording, theme-driven discount banner. Doodle-coat chemistry framed by mechanism (slip, hydration, damaged-section repair, anti-irritant). 2-in-1-vs-two-step competitor framing made explicit. Avoided sulfate-free / paraben-free claims pending INCI verification. Replaces v1 prose-only description shipped pre-token-architecture.
