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

Structure (v4, four-section accordion template — opener stays visible; each H2 section renders as an accordion row via `site/theme/snippets/description-accordion.liquid` v2; the INCI metafield is auto-appended INTO the "Ingredients and safety" row; the "How it compares on cost" section is auto-extracted and rendered as a compact block BELOW the accordion, ahead of the bundle block):

1. Answer-first opener (~50 words, no heading, stays visible above the accordion) — product + audience + chemistry headline + dilution economics
2. **Best for and expected results** — bullets: coat types, breed list, what it does (cosmetic/observational phrasing), salon fit + pillar link — accordion row 1, default-open
3. **Dilution and professional protocol** — 7-step deshedding bath protocol with bolded ratios/timings + ready-to-use note
4. **Ingredients and safety** — chemistry rationale (hydrolyzed keratin, safflower oil) + safety block (paraben-free, pH-balanced, tearless, puppy/senior suitability, patch-test, not-for-cats); INCI list auto-appended from `custom.full_ingredients`
5. **How it compares on cost** — FURminator + Coat Handler Anti-Shed tokens, Bark2Basics qualitative, hypoallergenic fallback (rendered below the accordion by the snippet)
6. **Shipping, samples, and the Groomer Program** — made-in-canada + canonical market shipping (CA 2–5 / US 3–5 business days) + 30-day refund + Path B program + `[[DISCOUNT]]` + email contact

## custom.faqs v2 (curated, for MCP push)

Curated 9-question set (down from 12). Dropped as duplicative of new page surfaces: dilution-ratio Q (at-a-glance chip + protocol row), breeds Q (best-for row), FURminator comparison Q (comparison block). Fixed per 2026-08-14 decisions: shipping windows (CA 2–5 / US 3–5, was 3–7 US), FUR20 must be entered at checkout (was "works automatically"). Push via `update-product` with `metafields: [{namespace: "custom", key: "faqs", type: "json", value: "<stringified array>"}]`; verify on live PDP both markets (accordion + FAQPage JSON-LD).

```json
[
  {"q": "How does Furgenics Deshedding Shampoo actually reduce shedding?", "a": "It works by deeply cleansing and loosening the undercoat during the wash, so when you follow up with brushing the loose fur releases cleanly rather than ending up on your client's couch. Used as part of a complete grooming process (shampoo + conditioner + brushing), it substantially reduces post-bath shedding for 2–3 weeks."},
  {"q": "How long should I leave the shampoo on?", "a": "3–5 minutes. Long enough for the formulation to penetrate the undercoat; short enough to keep bath times reasonable in a busy salon schedule. Rinse thoroughly — residue will attract new dirt and shed hair."},
  {"q": "Should I pair this with the Deshedding Conditioner?", "a": "Yes, when shedding is severe. The shampoo loosens undercoat during the wash; the conditioner ([[PRICE:deshedding-conditioner]]) continues that work while softening the coat so the loose fur releases cleanly during brushing. Used together they're substantially more effective than either alone — each product targets a different phase of the shedding cycle."},
  {"q": "Is Furgenics Deshedding Shampoo safe for puppies?", "a": "Yes. The formula is tearless and free of common irritants — parabens and synthetic dyes — which makes it suitable for puppies, senior dogs, and dogs with sensitive or reactive skin. Always patch-test on a small area first with any new shampoo."},
  {"q": "Do you offer a discount on first orders?", "a": "Yes — our current first-order discount: [[DISCOUNT]] Enter the code at checkout; it's limited to one use per customer."},
  {"q": "Is Furgenics made in North America?", "a": "Yes — [[VALUE:made-in-canada]]. We manufacture in Vaughan, Ontario, and ship direct to groomers, salons, and facilities across the United States and Canada."},
  {"q": "How quickly will my order ship?", "a": "Orders placed before 2pm Eastern on business days typically ship the same day. Canadian orders ship direct from Vaughan, Ontario with 2–5 business day transit. US orders ship from a US fulfillment partner with 3–5 business day transit. You'll receive a tracking number by email once your order ships."},
  {"q": "What is your return policy on gallons?", "a": "If a gallon doesn't perform as described, we issue a full refund within 30 days of delivery — no return shipping required. Contact info@furgenics.com with your order number and we'll process the refund. We stand behind every bottle."},
  {"q": "Do you offer wholesale pricing for multiple gallons or salon accounts?", "a": "Yes. Wholesale pricing is available for professional groomers buying regularly. Contact info@furgenics.com with your business license, groomer credential, or business website to set up a wholesale account with recurring-order pricing."}
]
```

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

- **2026-08-14** — v4: four-section accordion template (Phase 2, Dandylion-informed). Sections consolidated to best-for / dilution-protocol / ingredients-safety / shipping; chemistry copy folded into "Ingredients and safety" (no copy deleted); "How it compares on cost" auto-extracted below the accordion by the v2 snippet; INCI auto-appended into the ingredients row. "Best for" converted to scannable bullets. Shipping windows updated to canonical CA 2–5 / US 3–5 business days; 30-day refund line added. Curated `custom.faqs` v2 (12 → 9; dedupe + FUR20 manual-entry + shipping fixes) added above for MCP push. Sulfate-free claim still held pending the INCI metafield correction. See `docs/knowledge/analyses/2026-08-14-pdp-phase2-build.md`.
- **2026-07-28** — v3: H2 sections reordered to the PDP accordion-template order (when-to-use → compares → dilute-and-use → chemistry → shipping; INCI row injected by the theme snippet between dilute-and-use and chemistry). Copy otherwise unchanged except one compliance fix: "sulfate-free" claim removed from the chemistry section — SLES is present in FUR-013's INCI and the claim was removed brand-wide pending INCI cleanup. Reference exemplar for the 9-SKU rollout. See `docs/knowledge/analyses/2026-07-28-pdp-accordion-template-proposal.md`.
- **2026-05-21** — v2 drafted (this file). Second PDP token-conversion rewrite, following PDP #1 (hypoallergenic) pattern. Token-driven prices, value-math snippets, FURminator + Coat Handler Anti-Shed per-market benchmarks, qualitative Bark2Basics positioning, universal both-markets framing, Path B Groomer Program wording, theme-driven discount banner. Replaces v1 prose-only description shipped pre-token-architecture.
