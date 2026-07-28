# Best Professional Deshedding Shampoo for Huskies and German Shepherds — pillar rewrite (v2, token-driven + universal both-markets)

> **Page draft for `/pages/deshedding-shampoo-huskies-german-shepherds`.** Targets `breed-02` ("best professional deshedding shampoo for Huskies and German Shepherds"). Overlaps with `high-intent-01` (Furgenics brand discovery for groomers). Per market-map: this pillar serves both markets via Shopify Markets — copy is universal in v2.
>
> _Drafted 2026-05-21 as the third C+Markets snippet-driven pillar rewrite (after `furgenics-vs-bio-groom` and `bulk-dog-shampoo-for-canadian-mobile-groomers`). Replaces v1 (2026-04-27) which had hardcoded gallon prices, hardcoded per-bath costs, internal SKU codes throughout, stale Amazon Brand Analytics monthly-revenue estimates ($49,652/mo and $26,863/mo for Coat Handler and Bark2Basics), wrong contact email (`hello@furgenics.com`), and CA-only fulfillment framing._

---

## Meta + technical

- **URL:** `/pages/deshedding-shampoo-huskies-german-shepherds` (unchanged; serves both markets via Shopify Markets)
- **Template:** `page.content-pillar` (unchanged; renders tokens via the pipeline in `docs/shopify-theme/sections/main-page-pillar.liquid`)
- **Page title (unchanged):** `Best Professional Deshedding Shampoo for Huskies and German Shepherds` (universal — works for both markets as-is)
- **SEO title (UPDATE, drop the `FUR-013` framing if present):** `Best Professional Deshedding Shampoo for Huskies & GSDs | Furgenics`
- **Meta description (UPDATE, ≤155 chars):** `Professional deshedding shampoo for Huskies & German Shepherds. 16:1 concentrate, hydrolyzed keratin + safflower oil. Direct-to-salon in Canada & the US.`
- **Schema:** `FAQPage` for FAQ section (JSON-LD below)
- **Hero image:** Existing FUR-013 deshedshampoo.png on the live page (kept as-is)
- **Email:** `info@furgenics.com` (v1 had `hello@furgenics.com` — typo, corrected in v2)

---

## What's different from v1

### Pricing & math (hardcoded → token / ratio)

| v1 (hardcoded) | v2 (token / ratio) |
|---|---|
| `$24.99 CAD per gallon` (Furgenics deshedding shampoo, 4 references) | `[[PRICE:deshedding-shampoo]]` × 4 |
| `$24.99 CAD` (Furgenics deshedding conditioner, 2 references) | `[[PRICE:deshedding-conditioner]]` × 2 |
| Furgenics Hypoallergenic, Deep Moisturizing, Lavender Spa, Oatmeal & Aloe all unpriced in body | Now each priced via `[[PRICE:...]]` in the pairing-protocol section |
| `$14-18 USD per 16-ounce bottle` (FURminator) | `[[COMPETITOR:furminator-deshedding]]` (renders CA $86.01 / US $62.47 for the gallon — actual capture from 2026-05) |
| `$32-38 USD per gallon` (Coat Handler) | `[[COMPETITOR:coat-handler-anti-shed]]` (renders CA $78.95 / US $54.97) |
| `$39 USD per gallon` (Bark2Basics) | `[[COMPETITOR:bark2basics-de-shedding]]` (renders CA $71.35 / US $48.97) |
| Per-bath cost: `$1.75–$2.50 USD` retail, `$1.10 CAD ($0.80 USD)` Furgenics | Removed specific dollar amounts; positioning is now "per-gallon price gap (rendered above for your market) is the most concrete switch incentive" |
| `$49,652/mo on Amazon` (Coat Handler), `$26,863/mo` (Bark2Basics) | Removed — stale Amazon BSR estimates don't compound well, and they're not the right framing for an answer-engine page |
| `$99.96 CAD total outlay` (four-gallon starter kit) | Removed specific dollar amount; described as "a four-gallon starter kit … covers most heavy-coat salon scenarios" |
| `16:1`, `17 working gallons` | `[[VALUE:dilution-ratio]]`, `[[VALUE:working-gallons-per-bottle]]` |

### Framing (CA-only → universal both-markets)

| v1 (CA-only) | v2 (universal) |
|---|---|
| "sold direct-to-salon from Vaughan, Ontario" | "sold direct-to-salon" + factual fulfillment paragraph: "ships domestically in both markets (Canadian orders from Vaughan, Ontario; US orders from a US fulfillment partner)" |
| "ships from Vaughan, Ontario in 2–5 business days inside Canada" (CTA) | "ships domestically in Canada (from Vaughan, Ontario) or in the US (via fulfillment partner) in 3–5 business days" |
| "Ships free inside Canada" (sample FAQ) | "Shipped free domestically in both Canada and the US, no obligation" |
| Furgenics differentiation: "direct-to-salon Canadian shipping" | "direct-to-salon pricing in both Canada and the US (no Amazon channel margin)" |

### SKU codes (internal → customer-facing)

| v1 (internal SKU) | v2 (product name) |
|---|---|
| `FUR-013` (Deshedding Shampoo) | "Furgenics Deshedding Shampoo" |
| `FUR-014` (Deshedding Conditioner) | "Furgenics Deshedding Conditioner" |
| `FUR-001 + FUR-021` (starter kit) | "Hypoallergenic Shampoo + Deep Moisturizing Conditioner" |
| "Is FUR-013 safe for puppies?" (FAQ) | "Is Furgenics Deshedding Shampoo safe for puppies?" |
| "Can I use FUR-013 on dogs other than Huskies and GSDs?" (FAQ) | "Can I use Furgenics Deshedding on dogs other than Huskies and GSDs?" |

### Other

| v1 | v2 |
|---|---|
| No discount mention | New `[[DISCOUNT]]` near CTA |
| `hello@furgenics.com` (wrong) | `info@furgenics.com` (correct per canonical business-identity.md) |
| FURminator framed as "16-ounce retail bottle vs salon gallon" comparison | Reframed as gallon-vs-gallon direct comparison (since the COMPETITOR token captures the actual 1-gal Amazon listing) |

## Body HTML

See sibling file `deshedding-shampoo-huskies-german-shepherds.html` for the paste-ready version.

Structure (preserves v1 — content was strong):

1. Hero image (existing FUR-013 deshedshampoo.png)
2. Answer-first opener (~85 words, token-driven)
3. "Why Husky and German Shepherd coats need different handling than other heavy shedders" — preserved (Husky vs GSD coat behavior + common challenge + other breeds list)
4. "What to look for in a professional deshedding shampoo" — preserved (5 criteria: hydrolyzed protein, conditioning oil, concentrate format, sulfate-free, INCI transparency)
5. "Furgenics Deshedding Shampoo vs. the alternatives" — Furgenics + FURminator + Coat Handler Anti-Shed + Bark2Basics + Earthbath Shed Control; per-market prices via tokens for the first three
6. "How to wash a Husky or German Shepherd with a deshedding shampoo" — 7-step protocol, preserved
7. "What to pair with Furgenics Deshedding in your double-coat protocol" — pairing menu with token-driven prices on each Furgenics SKU
8. "Frequently asked questions" — 5 Q&A with FAQPage schema
9. "Ready to switch your double-coat protocol to Furgenics?" — CTA + `[[DISCOUNT]]` + email contact

---

## Schema (FAQPage JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How often should a Husky or GSD have a professional deshedding bath?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For most adults, every 4–6 weeks is the working interval. During seasonal blowouts (typically spring and late summer/early fall), every 2–3 weeks is appropriate until the coat stabilizes. Continuous weekly deshedding is generally not recommended — over-shampooing strips the topcoat and reduces the natural weather-resistance of the coat."
      }
    },
    {
      "@type": "Question",
      "name": "Is Furgenics Deshedding Shampoo safe for puppies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The formulation is sulfate-free, paraben-free, pH-balanced for dog skin, and tearless. Safe for puppies over 8 weeks. For dogs with diagnosed skin conditions or active hot spots, consult a veterinarian before using any deshedding shampoo."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use Furgenics Deshedding on dogs other than Huskies and GSDs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The formulation works on any double-coated breed: Akitas, Malamutes, Samoyeds, Chow Chows, Golden Retrievers, Labrador Retrievers, Bernese Mountain Dogs, Australian Shepherds, Newfoundlands. It's also appropriate for any heavy-shedding single-coated breed. Not recommended as a daily driver for curly or wavy coats — use Furgenics 2-in-1 Doodle for those."
      }
    },
    {
      "@type": "Question",
      "name": "What dilution works best on a heavy seasonal blowout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For a dog mid-blowout, a slightly stronger 12:1 dilution on the first pass produces better undercoat release. Follow the standard 16:1 protocol on the second pass and on subsequent baths once the blowout has settled."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer a sample before I buy a full gallon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Request a free 8oz sample of the Deshedding Shampoo through the Groomer Program. Shipped free domestically in both Canada and the US, no obligation."
      }
    }
  ]
}
```

---

## Pre-publish checklist for Stephen (v2)

- [ ] Updated section template (per-market COMPETITOR with FURminator + Coat Handler Anti-Shed + Bark2Basics) is deployed ✅
- [ ] Updated discount-banner snippet (spacing fix) is deployed ✅
- [ ] **Update meta description** in Shopify SEO settings → `Professional deshedding shampoo for Huskies & German Shepherds. 16:1 concentrate, hydrolyzed keratin + safflower oil. Direct-to-salon in Canada & the US.`
- [ ] **Update SEO title** (under "Search engine listing preview" → "Edit website SEO") → `Best Professional Deshedding Shampoo for Huskies & GSDs | Furgenics`
- [ ] **Paste body** from `deshedding-shampoo-huskies-german-shepherds.html` into Shopify admin → Pages → "Best Professional Deshedding Shampoo for Huskies and German Shepherds" → Source view (`</>`) → replace existing body → save
- [ ] **Leave URL unchanged** (`/pages/deshedding-shampoo-huskies-german-shepherds`)
- [ ] **Leave Page title unchanged** (already universal — no Canada-specific framing in the title)
- [ ] Save and visually verify on /en-ca/:
  - All Furgenics deshedding shampoo prices render as `$24.99 CAD`
  - All Furgenics deshedding conditioner prices render as `$24.99 CAD`
  - FURminator benchmark renders as `$86.01 CAD`
  - Coat Handler Anti-Shed benchmark renders as `$78.95 CAD`
  - Bark2Basics De-Shedding benchmark renders as `$71.35 CAD`
  - "Pair with" section shows prices for Hypoallergenic, Deep Moisturizing, Lavender Spa, Oatmeal & Aloe
  - Discount banner appears with current campaign
  - No raw `[[TOKEN]]` text visible anywhere
- [ ] Same verification on /en-us/:
  - Furgenics prices render in USD
  - FURminator benchmark renders as `$62.47 USD`
  - Coat Handler Anti-Shed benchmark renders as `$54.97 USD`
  - Bark2Basics De-Shedding benchmark renders as `$48.97 USD`
  - Copy reads naturally to a US visitor (mentions US fulfillment partner)
- [ ] Submit to GSC for re-indexing once verified

---

## Cross-references

- `content-style-guide.md` — token API + maintenance rules
- `competitor-intel.md` — "Per-market price capture history" table (2026-05 captures for FURminator, Coat Handler Anti-Shed, Bark2Basics)
- `market-map.md` — `breed-02` cluster entry
- `analyses/2026-05-20-live-pillar-content-audit.md` — audit that flagged hardcoded prices + stale Amazon BSR estimates as cleanup priorities

## Change log

- **2026-04-27** — v1 drafted and shipped (per `analyses/2026-04-27-pillar-5-deshedding-shipped.md` if it exists; otherwise inferred from live `updatedAt` 2026-05-20). Hardcoded all prices, internal SKU codes throughout, CA-only fulfillment framing, stale Amazon BSR estimates.
- **2026-05-21** — v2 drafted (this file). Third C+Markets token-conversion pillar rewrite. Token-driven prices, universal both-markets framing, dropped internal SKU codes from customer-facing copy, fixed email typo, removed stale Amazon BSR estimates, added `[[DISCOUNT]]` near CTA.
