# Furgenics Deshedding Dog Shampoo — PDP rewrite (token-driven + universal both-markets)

> **Product description draft for `deshedding-shampoo`.** Second of 9 PDP token-conversion rewrites in Session 1. Same architecture as PDP #1 (hypoallergenic-shampoo-gallon, shipped 2026-05-21).
>
> _Drafted 2026-05-21 as the second C+Markets token-driven PDP rewrite. Replaces the pre-token description (hardcoded "16:1" and "17 working gallons", hardcoded "FUR50" discount callout, generic "Made in Canada, serving groomers across the US and Canada" line, salon-scenarios bullet list, no competitor benchmarks, no pillar link)._

## Meta + technical

- **Product handle:** `deshedding-shampoo`
- **Product GID:** `gid://shopify/Product/8104408088715`
- **SKU (internal, not in customer copy):** FUR-013
- **Product title (unchanged):** `Deshedding Dog Shampoo Gallon for Professional Groomers`
- **SEO title (UPDATE):** `Professional Deshedding Dog Shampoo Gallon | Furgenics` (54 chars)
- **Meta description (UPDATE, ≤155 chars):** `16:1 deshedding concentrate with hydrolyzed keratin and safflower oil. Built for Huskies, GSDs, and high-volume double-coat salon work.` (133 chars)
- **Status (unchanged):** ACTIVE
- **Pricing (unchanged, managed by Shopify Markets):** $24.99 CAD / $19 USD per gallon
- **Tags, vendor, collections, variants, images (all unchanged):** out of scope per PDP rewrite prompt
- **Featured pillar:** `/pages/deshedding-shampoo-huskies-german-shepherds` (anchor SKU for the breed-02 pillar; PDP body cross-references it as the broader protocol guide)

## Token usage table

| Token | Where used | Resolves to |
|---|---|---|
| `[[VALUE:dilution-ratio]]` | Opener; step 3 + step 6 of "How to use"; "How it compares" Bark2Basics paragraph | `16:1 concentrate` |
| `[[VALUE:working-gallons-per-bottle]]` | Opener | `up to 17 working gallons per bottle at professional dilution` |
| `[[VALUE:per-working-gallon-cost-narrative]]` | Opener | `roughly the cost of a cup of coffee per working gallon at pro dilution` |
| `[[VALUE:made-in-canada]]` | Shipping + sourcing section | `Made in Canada` |
| `[[COMPETITOR:furminator-deshedding]]` | "How it compares" — mindshare anchor | CA: `$86.01 CAD (Amazon Canada)` · US: `$62.47 USD (Amazon US)` |
| `[[COMPETITOR:coat-handler-anti-shed]]` | "How it compares" — direct salon-pro head-to-head | CA: `$78.95 CAD (Amazon Canada)` · US: `$54.97 USD (Amazon US)` |
| `[[PRICE:deshedding-conditioner]]` | "How it compares" matching system mention; bath step 6 conditioner pairing | Markets-aware Furgenics price |
| `[[PRICE:hypoallergenic-shampoo-gallon]]` | "How it compares" sensitive-skin fallback for double-coated dogs | Markets-aware Furgenics price |
| `[[DISCOUNT]]` | End of description | Active discount campaign banner from theme settings |

Bark2Basics De-Shedding is mentioned qualitatively (no `[[COMPETITOR:bark2basics-de-shedding]]` token) to stay within the 1–2 token guideline. The qualitative mention surfaces the 32:1 dilution-rate landscape point without inflating the per-market price block on the PDP.

## Key changes from current Shopify description

| Pre-token (current live) | Token-driven (this rewrite) |
|---|---|
| Hardcoded "16:1" + "17 working gallons" | `[[VALUE:dilution-ratio]]` + `[[VALUE:working-gallons-per-bottle]]` |
| "Made in Canada, serving groomers across the US and Canada" | `[[VALUE:made-in-canada]]` + explicit dual-market fulfillment paragraph |
| No competitor benchmarks | FURminator + Coat Handler Anti-Shed per-market benchmarks + qualitative Bark2Basics positioning |
| No cross-referenced product pricing | `[[PRICE]]` tokens on deshedding-conditioner (2×) and hypoallergenic-shampoo-gallon |
| Hardcoded "First order? Save 50%... Use code FUR50" | `[[DISCOUNT]]` snippet driven by theme settings |
| Generic "Apply shampoo, work into coat... Massage thoroughly... 3–5 minutes" 4-step instructions | 7-step deshedding-specific bath protocol (pre-blow, saturate, dilute, massage 4–5 min, rinse 5–7 min, conditioner, HV-dry) matching the pillar's protocol |
| No pillar cross-reference | Links to `/pages/deshedding-shampoo-huskies-german-shepherds` for the broader breed-by-breed protocol guide |
| Chemistry stated as "Keratin and safflower oil help support coat health" (consumer-soft) | Chemistry framed in pro-grooming terms: hydrolyzed keratin penetrating the cuticle, safflower oil's molecular weight vs heavier oils, sulfate-free base reasoning for double coats |

## Body HTML

See sibling file `deshedding-shampoo.html` for the full token-driven HTML body.

Structure (matches the FUR-001 pattern; adapted for deshedding chemistry depth):

1. Answer-first opener (~50 words, no heading) — product + audience + chemistry headline + dilution economics
2. **Why hydrolyzed keratin and safflower oil work for deshedding** — chemistry rationale, ingredient-level (~125 words)
3. **When to use Furgenics Deshedding Shampoo** — coat types, breed list, salon scenarios with pillar link (~115 words)
4. **How it compares to alternatives** — FURminator + Coat Handler Anti-Shed tokens, Bark2Basics qualitative, hypoallergenic-shampoo-gallon cross-ref (~165 words)
5. **How to dilute and use on a heavy double coat** — 7-step deshedding bath protocol matching the pillar's flow (~165 words)
6. **Shipping, sourcing, and the Groomer Program** — made-in-canada + dual-market fulfillment + Path B program + `[[DISCOUNT]]` + email contact (~85 words)

Total body: ~705 words (slightly above the 400–600 PDP target but justified by deshedding's chemistry-and-protocol depth; pillar context shares this voice).

## Pre-publish checklist

- [x] POC confirmed (token rendering on live PDPs both /en-ca/ and /en-us/) — Stephen 2026-05-21 via PDP #1
- [x] Draft committed to `brands/furgenics/content-drafts/products/deshedding-shampoo.{html,md}`
- [ ] `update-product` MCP call pushes new `descriptionHtml` + `seo.title` + `seo.description` to Shopify
- [ ] Live URL `/en-ca/products/deshedding-shampoo` visually verifies: all tokens resolve, FURminator shows `$86.01 CAD`, Coat Handler Anti-Shed shows `$78.95 CAD`, sibling PRICE tokens resolve in CAD, discount banner appears
- [ ] Live URL `/en-us/products/deshedding-shampoo` visually verifies: FURminator shows `$62.47 USD`, Coat Handler Anti-Shed shows `$54.97 USD`, sibling PRICE tokens resolve in USD
- [ ] Ship entry appended to `brands/furgenics/knowledge/log.md`

## Cross-references

- `knowledge/content-style-guide.md` — token API + maintenance rules
- `knowledge/products.md` — canonical product roster (FUR-013 entry includes coat types, breed targeting, and confirmed-present INCI)
- `knowledge/brand-voice.md` — voice rules
- `knowledge/competitor-intel.md` — FURminator + Coat Handler Anti-Shed + Bark2Basics per-market captures (2026-05)
- `knowledge/business-identity.md` — Vaughan ON address, info@furgenics.com, dual-market fulfillment
- `content-drafts/groomer-program.md` — Path B canonical wording (CA samples / US first-order discount)
- `content-drafts/deshedding-shampoo-huskies-german-shepherds.{html,md}` — the breed-02 pillar that features this SKU; PDP body cross-references it as the broader protocol guide
- `content-drafts/products/hypoallergenic-shampoo-gallon.{html,md}` — PDP #1, voice + structure template for this PDP
- `docs/shopify-theme/sections/main-page-pillar.liquid` — token pipeline reference (product equivalent confirmed deployed 2026-05-21)

## Change log

- **2026-05-21** — v2 drafted (this file). Second PDP token-conversion rewrite, following PDP #1 (hypoallergenic) pattern. Token-driven prices, value-math snippets, FURminator + Coat Handler Anti-Shed per-market benchmarks, qualitative Bark2Basics positioning, universal both-markets framing, Path B Groomer Program wording, theme-driven discount banner. Replaces v1 prose-only description shipped pre-token-architecture.
