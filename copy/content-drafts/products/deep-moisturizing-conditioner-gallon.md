# Furgenics Deep Moisturizing Conditioner Gallon — PDP rewrite (token-driven + universal both-markets)

> **Product description draft for `deep-moisturizing-conditioner-gallon`.** Seventh of 9 PDP token-conversion rewrites — first PDP of Session 3.
>
> _Drafted 2026-05-21 as the seventh Markets-aware token-driven PDP rewrite. Replaces the pre-token description (hardcoded "16:1" and "17 working gallons", hardcoded "FUR50" discount callout, generic "Made in Canada, serving groomers across the US and Canada" line, no competitor benchmarks, no pillar link). Third conditioner PDP in the project; pattern continues from FUR-014 + FUR-010._

## Meta + technical

- **Product handle:** `deep-moisturizing-conditioner-gallon`
- **Product GID:** `gid://shopify/Product/8104367325323`
- **SKU (internal, not in customer copy):** FUR-021
- **Product title (unchanged):** `Deep Moisturizing Dog Conditioner Gallon For Professional Groomers`
- **SEO title (UPDATE):** `Deep Moisturizing Dog Conditioner Gallon | Furgenics` (52 chars)
- **Meta description (UPDATE, ≤155 chars):** `16:1 deep moisturizing conditioner with argan oil, shea butter, and hydrolyzed oats. Built for damaged, brittle, long, and curly salon coats.` (142 chars)
- **Status (unchanged):** ACTIVE
- **Pricing (unchanged, managed by Shopify Markets):** $24.99 CAD / $19 USD per gallon
- **Tags, vendor, collections, variants, images (all unchanged):** out of scope per PDP rewrite prompt
- **Featured pillar:** `/pages/best-shampoo-goldendoodle` (cross-reference — doodle clients are a primary audience for this intensive-conditioning escalation; not the anchor SKU for any pillar)
- **Category note:** this is a CONDITIONER — third in the project. Body structure adapted from FUR-014 and FUR-010: rebuild-vs-maintenance chemistry framing, conditioner-step how-to with longer leave-in time (5–7 min vs 3–5 min for maintenance), compare section uses qualitative framing for iGroom + Chris Christensen since their conditioner-line tokens don't exist in main-page-pillar.liquid yet.

## Token usage table

| Token | Where used | Resolves to |
|---|---|---|
| `[[VALUE:dilution-ratio]]` | Opener; "How to use" step 2 | `16:1 concentrate` |
| `[[VALUE:working-gallons-per-bottle]]` | Opener | `up to 17 working gallons per bottle at professional dilution` |
| `[[VALUE:per-working-gallon-cost-narrative]]` | Opener | `roughly the cost of a cup of coffee per working gallon at pro dilution` |
| `[[VALUE:made-in-canada]]` | Shipping + sourcing section | `Made in Canada` |
| `[[COMPETITOR:coat-handler-15-in-1]]` | "How it compares" — conditioner-category benchmark (third use across project) | Per-market price for Coat Handler 15-in-1 Anti-Static Conditioner |
| `[[COMPETITOR:isle-of-dogs-evening-primrose]]` | "How it compares" — NEW premium salon conditioning anchor | Per-market price for Isle of Dogs Evening Primrose Conditioner |
| `[[PRICE:2in1-doodle-shampoo-conditioner]]` | "When to use" — doodle daily-driver alternative | Markets-aware Furgenics price |
| `[[PRICE:oatmeal-aloe-conditioner-gallon]]` | "How it compares" — maintenance step-down | Markets-aware Furgenics price |
| `[[PRICE:lavender-spa-shampoo]]` | "How it compares" — spa-experience companion | Markets-aware Furgenics price |
| `[[DISCOUNT]]` | End of description | Active discount campaign banner from theme settings |

First use of `[[COMPETITOR:isle-of-dogs-evening-primrose]]` token in the project — diversifies away from the coat-handler-15-in-1 monopoly that FUR-014 and FUR-010 both used as their sole conditioner-category benchmark. Isle of Dogs is the natural premium-salon anchor for the intensive-rebuild category. iGroom and Chris Christensen referenced qualitatively because their conditioner-line tokens aren't in main-page-pillar.liquid (same gap surfaced in FUR-014 and FUR-010 ship logs).

## Key changes from current Shopify description

| Pre-token (current live) | Token-driven (this rewrite) |
|---|---|
| Hardcoded "16:1" + "17 working gallons" | `[[VALUE:dilution-ratio]]` + `[[VALUE:working-gallons-per-bottle]]` |
| "Made in Canada, serving groomers across the US and Canada" | `[[VALUE:made-in-canada]]` + explicit dual-market fulfillment paragraph |
| No competitor benchmarks | Coat Handler 15-in-1 + Isle of Dogs Evening Primrose per-market benchmarks + qualitative iGroom/Chris Christensen positioning |
| No cross-referenced product pricing | `[[PRICE]]` tokens on 2in1-doodle-shampoo-conditioner, oatmeal-aloe-conditioner-gallon, lavender-spa-shampoo |
| Hardcoded "First order? Save 50%... Use code FUR50" | `[[DISCOUNT]]` snippet driven by theme settings |
| Generic 4-line conditioner instructions | 6-step conditioner-step protocol with rationale (confirm-shampoo-rinsed, dilute-or-RTU-for-damaged, root-to-tip, longer-leave-in-for-argan-penetration, rinse-fully-against-shea-weight, towel + HV dry for lipid-seal set) |
| No pillar cross-reference | Links to `/pages/best-shampoo-goldendoodle` for the broader doodle-protocol context |
| Chemistry stated as marketing list ("argan oil, shea butter, hydrolyzed oats") | Same ingredients framed by mechanism: argan as cortex-penetrating active for damaged hair shafts, shea as heavier barrier-layer lipid seal, hydrolyzed oats as water-binding (distinguished from oat kernel flour used in FUR-010 maintenance conditioner) |
| "Pairs well with: For curly/mat-prone doodles... For spa experience finish... For lighter everyday conditioning" (3 bullets) | Same three cross-refs but woven into the body with priced links via `[[PRICE]]` tokens — doodle 2-in-1 in "When to use" as the daily-driver alternative, oatmeal-aloe + lavender-spa in compare section |

## Body HTML

See sibling file `deep-moisturizing-conditioner-gallon.html` for the full token-driven HTML body.

Structure (matches FUR-014 + FUR-010 conditioner pattern; chemistry adapted to rebuild-vs-maintenance framing):

1. Answer-first opener (~55 words, no heading) — product + rebuild-not-maintenance angle + chemistry headline + dilution economics
2. **Why a rebuild conditioner is different from a maintenance conditioner** — chemistry rationale framed by mechanism (~170 words; cortex penetration vs surface coating, distinguishes from FUR-010)
3. **When to use Furgenics Deep Moisturizing Conditioner** — coat types, breed list, salon scenarios with doodle daily-driver cross-ref + pillar link (~165 words)
4. **How it compares to alternatives** — Coat Handler 15-in-1 + Isle of Dogs Evening Primrose tokens, qualitative iGroom + Chris Christensen, two Furgenics cross-refs (~190 words)
5. **How to dilute and use** — 6-step conditioner-step protocol with intro line framing this as the back-half of an intensive-conditioning bath; longer leave-in time (5–7 min) than maintenance conditioner (3–5 min) (~170 words)
6. **Shipping, sourcing, and the Groomer Program** — made-in-canada + dual-market fulfillment + Path B program + `[[DISCOUNT]]` + email contact (~80 words)

Total body: ~830 words.

## Pre-publish checklist

- [x] POC confirmed (token rendering on live PDPs both /en-ca/ and /en-us/) — verified by Stephen across Sessions 1 + 2
- [x] Draft committed to `brands/furgenics/content-drafts/products/deep-moisturizing-conditioner-gallon.{html,md}`
- [ ] `update-product` MCP call pushes new `descriptionHtml` + `seo.title` + `seo.description` to Shopify
- [ ] Live URLs `/en-ca/products/deep-moisturizing-conditioner-gallon` and `/en-us/products/deep-moisturizing-conditioner-gallon` visually verify token rendering
- [ ] Ship entry appended to `brands/furgenics/knowledge/log.md` (batched at end of Session 3)

## Open questions for Stephen

None for this PDP — chemistry claims grounded in the live description's named ingredients (argan, shea, hydrolyzed oats), token coverage clean, status remains ACTIVE. INCI will be revealed in post-push response and noted in the ship log.

## Cross-references

- `knowledge/content-style-guide.md` — token API + maintenance rules
- `knowledge/products.md` — canonical product roster (FUR-021 entry)
- `knowledge/brand-voice.md` — voice rules
- `knowledge/competitor-intel.md` — Coat Handler 15-in-1 + Isle of Dogs Evening Primrose per-market captures (2026-05); iGroom + Chris Christensen narrative positioning
- `knowledge/business-identity.md` — Vaughan ON address, info@furgenics.com, dual-market fulfillment
- `content-drafts/groomer-program.md` — Path B canonical wording (CA samples / US first-order discount)
- `content-drafts/best-shampoo-goldendoodle.{html,md}` — breed-01 pillar referenced as broader doodle-protocol context
- `content-drafts/products/deshedding-conditioner.{html,md}` — PDP #5 (first conditioner pattern reference)
- `content-drafts/products/oatmeal-aloe-conditioner-gallon.{html,md}` — PDP #6 (maintenance-conditioner pattern; this PDP positioned as the escalation)
- `docs/shopify-theme/sections/main-page-pillar.liquid` — token pipeline reference; conditioner-category gap noted for future extension

## Change log

- **2026-05-21** — v2 drafted (this file). Seventh PDP token-conversion rewrite, first of Session 3. Token-driven prices, value-math snippets, Coat Handler 15-in-1 + Isle of Dogs Evening Primrose per-market benchmarks (first use of Isle of Dogs token in project), qualitative iGroom + Chris Christensen positioning, universal both-markets framing, Path B Groomer Program wording, theme-driven discount banner. Conditioner-specific body structure with rebuild-vs-maintenance chemistry framing distinguishing from FUR-010. Longer leave-in time (5–7 min) than prior conditioner protocols. Replaces v1 prose-only description shipped pre-token-architecture.
