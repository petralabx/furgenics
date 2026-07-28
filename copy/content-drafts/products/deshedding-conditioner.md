# Furgenics Deshedding Conditioner Gallon — PDP rewrite (token-driven + universal both-markets)

> **Product description draft for `deshedding-conditioner`.** Fifth of 9 PDP token-conversion rewrites — second PDP of Session 2.
>
> _Drafted 2026-05-21 as the fifth Markets-aware token-driven PDP rewrite. Replaces the pre-token description (hardcoded "16:1" and "17 working gallons", hardcoded "FUR50" discount callout, generic "Made in Canada, serving groomers across the US and Canada" line, no competitor benchmarks, no pillar link). This is the back-half of the deshedding system anchored by FUR-013._

## Meta + technical

- **Product handle:** `deshedding-conditioner`
- **Product GID:** `gid://shopify/Product/8104408187019`
- **SKU (internal, not in customer copy):** FUR-014
- **Product title (unchanged):** `Deshedding Dog Conditioner Gallon For Professional Groomers`
- **SEO title (UPDATE):** `Professional Deshedding Dog Conditioner Gallon | Furgenics` (57 chars)
- **Meta description (UPDATE, ≤155 chars):** `16:1 deshedding conditioner with hydrolyzed keratin and argan oil. Built for Husky and GSD undercoat-release work on heavy salon volume.` (137 chars)
- **Status (unchanged):** ACTIVE
- **Pricing (unchanged, managed by Shopify Markets):** $24.99 CAD / $19 USD per gallon
- **Tags, vendor, collections, variants, images (all unchanged):** out of scope per PDP rewrite prompt
- **Featured pillar:** `/pages/deshedding-shampoo-huskies-german-shepherds` (shared with FUR-013; the PDP cross-references it as the broader breed-02 protocol guide)
- **Category note:** this is a CONDITIONER, not a shampoo — body structure adapted accordingly (chemistry section explains conditioner mechanism in a deshedding protocol; how-to section is the conditioner step, not a full bath; compare section uses qualitative framing for FURminator + Bio-Groom since the available competitor token slugs resolve to shampoo prices, not conditioner prices)

## Token usage table

| Token | Where used | Resolves to |
|---|---|---|
| `[[VALUE:dilution-ratio]]` | Opener; "How to use" step 2; Coat Handler compare line context (implicit) | `16:1 concentrate` |
| `[[VALUE:working-gallons-per-bottle]]` | Opener | `up to 17 working gallons per bottle at professional dilution` |
| `[[VALUE:per-working-gallon-cost-narrative]]` | Opener | `roughly the cost of a cup of coffee per working gallon at pro dilution` |
| `[[VALUE:made-in-canada]]` | Shipping + sourcing section | `Made in Canada` |
| `[[COMPETITOR:coat-handler-15-in-1]]` | "How it compares" — closest conditioner-category benchmark | Per-market price for Coat Handler 15-in-1 Anti-Static Conditioner |
| `[[PRICE:deshedding-shampoo]]` | "How it compares" — matching shampoo, system anchor | Markets-aware Furgenics price |
| `[[PRICE:oatmeal-aloe-conditioner-gallon]]` | "How it compares" — lighter dry-skin maintenance fall-back | Markets-aware Furgenics price |
| `[[PRICE:deep-moisturizing-conditioner-gallon]]` | "How it compares" — intensive-rebuild escalation | Markets-aware Furgenics price |
| `[[DISCOUNT]]` | End of description | Active discount campaign banner from theme settings |

FURminator deShedding Ultra Premium Conditioner and Bio-Groom's deshedding-line conditioner mentioned qualitatively (no `[[COMPETITOR:...]]` token) because the available `furminator-deshedding` and `bio-groom-hypo-groom` slugs in main-page-pillar.liquid capture each brand's shampoo, not their conditioner. Per-market price benchmarking on the wrong product would be misleading; qualitative framing is honest.

## Key changes from current Shopify description

| Pre-token (current live) | Token-driven (this rewrite) |
|---|---|
| Hardcoded "16:1" + "17 working gallons" | `[[VALUE:dilution-ratio]]` + `[[VALUE:working-gallons-per-bottle]]` |
| "Made in Canada, serving groomers across the US and Canada" | `[[VALUE:made-in-canada]]` + explicit dual-market fulfillment paragraph |
| No competitor benchmarks | Coat Handler 15-in-1 per-market benchmark + qualitative FURminator/Bio-Groom positioning |
| No cross-referenced product pricing | `[[PRICE]]` tokens on deshedding-shampoo, oatmeal-aloe-conditioner-gallon, deep-moisturizing-conditioner-gallon |
| Hardcoded "First order? Save 50%... Use code FUR50" | `[[DISCOUNT]]` snippet driven by theme settings |
| Generic 4-line conditioner instructions | 7-step conditioner-step protocol with rationale (confirm-shampoo-rinsed, dilute, apply-into-undercoat, contact-time, rinse, HV-dry-release, slicker-finish) |
| No pillar cross-reference | Links to `/pages/deshedding-shampoo-huskies-german-shepherds` for the broader breed-02 guide |
| Chemistry stated as marketing list ("hydrolyzed keratin, argan oil, shea butter") | Same ingredients framed by mechanism in a deshedding protocol: keratin as shaft-repair carry-over from shampoo, argan as slip-without-undercoat-weighting, shea as topcoat-only finishing |
| "Pairs well with: Matching shampoo... For between-deshedding maintenance... For deeper hydration..." (3 bullets) | Same three cross-refs but woven into the compare section with priced links via `[[PRICE]]` tokens |

## Body HTML

See sibling file `deshedding-conditioner.html` for the full token-driven HTML body.

Structure (adapted from the shampoo PDP pattern; chemistry + how-to sections rebuilt for conditioner mechanism + protocol):

1. Answer-first opener (~60 words, no heading) — product + role in the deshedding system + chemistry headline + dilution economics
2. **Why a deshedding-specific conditioner matters in the protocol** — conditioner mechanism explained (~175 words; deshedding-protocol-specific framing: slip-without-undercoat-weighting)
3. **When to use Furgenics Deshedding Conditioner** — coat types, breed list, salon scenarios with pillar link (~150 words)
4. **How it compares to alternatives** — Coat Handler 15-in-1 token, qualitative FURminator + Bio-Groom, two Furgenics conditioner cross-refs (~195 words)
5. **How to dilute and use** — 7-step conditioner-step protocol with intro line explicitly framing this as the back-half of the bath (~180 words)
6. **Shipping, sourcing, and the Groomer Program** — made-in-canada + dual-market fulfillment + Path B program + `[[DISCOUNT]]` + email contact (~80 words)

Total body: ~840 words (slightly above PDP #1-4 average; the compare section is longer because conditioner category needs more qualitative framing than shampoo category given thinner token coverage).

## Pre-publish checklist

- [x] POC confirmed (token rendering on live PDPs both /en-ca/ and /en-us/) — verified via PDP #1
- [x] Draft committed to `brands/furgenics/content-drafts/products/deshedding-conditioner.{html,md}`
- [ ] `update-product` MCP call pushes new `descriptionHtml` + `seo.title` + `seo.description` to Shopify
- [ ] Live URLs `/en-ca/products/deshedding-conditioner` and `/en-us/products/deshedding-conditioner` visually verify token rendering
- [ ] Ship entry appended to `brands/furgenics/knowledge/log.md`

## Open questions for Stephen

1. **INCI metafield** — not returned by get-product-by-id on read (same pattern as FUR-020 and FUR-011 reads). Post-push response will reveal it; I'll flag any sulfate-free / paraben-free observations once it returns.
2. **Conditioner-category competitor token coverage** — `furminator-deshedding` and `bio-groom-hypo-groom` slugs capture each brand's shampoo, not their conditioner. For conditioner-category PDPs this is a gap. Two options for future: (a) extend main-page-pillar.liquid with new slugs (`furminator-deshedding-conditioner`, `bio-groom-anti-shed-conditioner`) and capture the per-market prices; (b) accept qualitative framing for cross-category competitor brands as the pattern. This draft uses (b).

## Cross-references

- `knowledge/content-style-guide.md` — token API + maintenance rules
- `knowledge/products.md` — canonical product roster (FUR-014 entry)
- `knowledge/brand-voice.md` — voice rules
- `knowledge/competitor-intel.md` — Coat Handler 15-in-1 per-market captures (2026-05); FURminator + Bio-Groom narrative positioning
- `knowledge/business-identity.md` — Vaughan ON address, info@furgenics.com, dual-market fulfillment
- `content-drafts/groomer-program.md` — Path B canonical wording (CA samples / US first-order discount)
- `content-drafts/deshedding-shampoo-huskies-german-shepherds.{html,md}` — the breed-02 pillar (shared with FUR-013); PDP body cross-references it as the broader protocol guide
- `content-drafts/products/deshedding-shampoo.{html,md}` — PDP #2 (matching shampoo, system front-half; sulfate-free claim cautionary tale)
- `content-drafts/products/oatmeal-aloe-shampoo-gallon.{html,md}` — PDP #4 (template pattern + chemistry-by-mechanism precedent)
- `docs/shopify-theme/sections/main-page-pillar.liquid` — token pipeline reference; conditioner-category token coverage gap noted for future extension

## Change log

- **2026-05-21** — v2 drafted (this file). Fifth PDP token-conversion rewrite, second of Session 2. Token-driven prices, value-math snippets, Coat Handler 15-in-1 per-market benchmark, qualitative FURminator + Bio-Groom positioning, universal both-markets framing, Path B Groomer Program wording, theme-driven discount banner. Conditioner-specific body structure: chemistry section explains conditioner mechanism in a deshedding protocol (slip enables brush-out release without weighting undercoat); how-to section is the conditioner step starting with "confirm shampoo rinsed". Replaces v1 prose-only description shipped pre-token-architecture.
