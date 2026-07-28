# Furgenics Hypoallergenic Dog Shampoo — PDP rewrite (token-driven + universal both-markets)

> **Product description draft for `hypoallergenic-shampoo-gallon`.** First of 9 PDP token-conversion rewrites kicked off 2026-05-21 after Stephen confirmed the product section template's substitution pipeline is deployed and POC-validated on both `/en-ca/` and `/en-us/`.
>
> _Drafted 2026-05-21 as the first C+Markets token-driven PDP rewrite. Replaces the pre-token description (hardcoded "16:1" and "17 working gallons", "FUR50" code naming hardcoded in body, salon-scenarios bullet list, "Made in Canada, serving groomers across the US and Canada" line without dual-market fulfillment specificity)._

## Meta + technical

- **Product handle:** `hypoallergenic-shampoo-gallon`
- **Product GID:** `gid://shopify/Product/8104403304587`
- **SKU (internal, not in customer copy):** FUR-001
- **Product title (unchanged):** `Hypoallergenic Dog Shampoo Gallon for Professional Groomers`
- **SEO title (UPDATE):** `Professional Hypoallergenic Dog Shampoo Gallon | Furgenics` (58 chars)
- **Meta description (UPDATE, ≤155 chars):** `Sulfate-free 16:1 hypoallergenic concentrate built for professional salons. One gallon makes up to 17 working gallons for sensitive-skin clients.` (143 chars)
- **Status (unchanged):** ACTIVE
- **Pricing (unchanged, managed by Shopify Markets):** $24.99 CAD / $19 USD per gallon
- **Tags, vendor, collections, variants, images (all unchanged):** out of scope per PDP rewrite prompt

## Token usage table

| Token | Where used | Resolves to |
|---|---|---|
| `[[VALUE:dilution-ratio]]` | Opener; step 3 of "How to use"; "How it compares" Bio-Groom comparison | `16:1 concentrate` |
| `[[VALUE:working-gallons-per-bottle]]` | Opener | `up to 17 working gallons per bottle at professional dilution` |
| `[[VALUE:per-working-gallon-cost-narrative]]` | Opener | `roughly the cost of a cup of coffee per working gallon at pro dilution` |
| `[[VALUE:made-in-canada]]` | Shipping + sourcing section | `Made in Canada` |
| `[[COMPETITOR:bio-groom-hypo-groom]]` | "How it compares" — primary head-to-head | CA: `$110.41 CAD (Amazon Canada)` · US: `$49.99 USD (Amazon US)` |
| `[[COMPETITOR:tropiclean-pro-hypoallergenic-oatmeal]]` | "How it compares" — secondary | CA: `$83.97 CAD (Amazon Canada)` · US: `$59.38 USD (Amazon US, Aloe & Coconut variant)` |
| `[[PRICE:2in1-hypoallergenic-shampoo-conditioner]]` | "How it compares" sibling cross-reference | Markets-aware Furgenics price |
| `[[PRICE:oatmeal-aloe-shampoo-gallon]]` | "How it compares" sibling cross-reference | Markets-aware Furgenics price |
| `[[PRICE:oatmeal-aloe-conditioner-gallon]]` | "How to use" conditioner pairing | Markets-aware Furgenics price |
| `[[DISCOUNT]]` | End of description (final element before email contact) | Active discount campaign banner from theme settings |

## Key changes from current Shopify description

| Pre-token (current live) | Token-driven (this rewrite) |
|---|---|
| Hardcoded "16:1" | `[[VALUE:dilution-ratio]]` |
| Hardcoded "17 working gallons" | `[[VALUE:working-gallons-per-bottle]]` |
| "Made in Canada, serving groomers across the US and Canada" | `[[VALUE:made-in-canada]]` + explicit dual-market fulfillment paragraph (Vaughan ON for CA; US fulfillment partner for US) |
| No competitor benchmarks | Two per-market benchmarks (Bio-Groom Hypo-Groom + TropiClean Pro Hypoallergenic Oatmeal) |
| No cross-referenced product pricing | `[[PRICE]]` tokens on three linked Furgenics products |
| Hardcoded "First order? Save 50%... Use code FUR50 at checkout" | `[[DISCOUNT]]` snippet driven by theme settings |
| Salon-use covered via flat bullet list | Reorganized into prose under "When to use" with named breed examples and 4 explicit salon scenarios |
| No pillar internal-link | Links to `/pages/oatmeal-aloe-sensitive-skin-dog-shampoo` for broader sensitive-skin protocol context |
| Generic 4-step dilution instructions | 6-step protocol with sensitive-skin-specific notes (warm not hot, gentler massage, over-rinse rather than under-rinse) |
| "safe for sensitive skin, puppies, and dogs prone to irritation" (puppies floated upfront without context) | Puppies referenced only in salon-scenarios with "over 8 weeks" qualifier — same fact, less risk of being read as a retail-marketing line |

## Body HTML

See sibling file `hypoallergenic-shampoo-gallon.html` for the full token-driven HTML body.

Structure (matches the deshedding pillar pattern adapted for PDP scope, ~400–600 word PDP target):

1. Answer-first opener (~50 words, no heading) — what + who + headline differentiator + dilution economics
2. **Why this formulation works for sensitive-skin clients** — chemistry/INCI/use case rationale (~150 words)
3. **When to use Furgenics Hypoallergenic Shampoo** — coat types, breed examples, salon scenarios with pillar link (~135 words)
4. **How it compares to alternatives** — Bio-Groom + TropiClean Pro competitor benchmarks + Furgenics sibling-product cross-references (~150 words)
5. **How to dilute and use** — 6-step bath protocol with sensitive-skin notes + conditioner pairing (~115 words)
6. **Shipping, sourcing, and the Groomer Program** — made-in-canada + dual-market fulfillment + Path B program + `[[DISCOUNT]]` + email contact (~95 words)

Total body: ~595 words (within the 400–600 PDP target).

## Pre-publish checklist

- [x] POC confirmed (token rendering on live PDPs both /en-ca/ and /en-us/) — Stephen 2026-05-21
- [x] Draft committed to `brands/furgenics/content-drafts/products/hypoallergenic-shampoo-gallon.{html,md}`
- [ ] `update-product` MCP call pushes new `descriptionHtml` + `seo.title` + `seo.description` to Shopify
- [ ] Live URL `/en-ca/products/hypoallergenic-shampoo-gallon` visually verifies: all tokens resolve, no raw `[[TOKEN]]` text, Bio-Groom shows `$110.41 CAD`, TropiClean shows `$83.97 CAD`, sibling PRICE tokens resolve in CAD, discount banner appears
- [ ] Live URL `/en-us/products/hypoallergenic-shampoo-gallon` visually verifies: Bio-Groom shows `$49.99 USD`, TropiClean shows `$59.38 USD`, sibling PRICE tokens resolve in USD
- [ ] Ship entry appended to `brands/furgenics/knowledge/log.md`

## Cross-references

- `knowledge/content-style-guide.md` — token API + maintenance rules
- `knowledge/products.md` — canonical product roster (FUR-001 entry includes coat types and breed targeting)
- `knowledge/brand-voice.md` — voice rules (no Petra Lab-X, no retail vocabulary, no marketing filler)
- `knowledge/competitor-intel.md` — Bio-Groom Hypo-Groom + TropiClean Pro per-market captures (2026-05)
- `knowledge/business-identity.md` — Vaughan ON address, info@furgenics.com, dual-market fulfillment
- `content-drafts/groomer-program.md` — Path B canonical wording (CA samples / US first-order discount)
- `content-drafts/deshedding-shampoo-huskies-german-shepherds.{html,md}` — structure + voice template for PDP rewrites
- `content-drafts/oatmeal-aloe-sensitive-skin-dog-shampoo.{html,md}` — sensitive-skin pillar that features this SKU
- `docs/shopify-theme/sections/main-page-pillar.liquid` — token pipeline reference (lines 105–258); product equivalent confirmed deployed 2026-05-21

## Change log

- **2026-05-21** — v2 drafted (this file). First PDP token-conversion rewrite. Mirrors the C+Markets pillar pattern: token-driven prices, value-math snippets, per-market competitor benchmarks, universal both-markets framing, Path B Groomer Program wording, theme-driven discount banner. Replaces v1 prose-only description shipped pre-token-architecture.
