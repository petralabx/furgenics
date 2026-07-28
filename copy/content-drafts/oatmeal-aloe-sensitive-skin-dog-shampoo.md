# Oatmeal & Aloe Shampoo for Sensitive-Skin Dogs — pillar rewrite (v2, token-driven + universal both-markets)

> **Page draft for `/pages/oatmeal-aloe-sensitive-skin-dog-shampoo`.** Targets `coat-01` ("best oatmeal dog shampoo for dry itchy skin"), partial `breed-03` (French Bulldog sensitive skin), and overlaps with `high-intent-01` (Furgenics brand discovery). Per market-map: this pillar serves both markets via Shopify Markets — copy is universal in v2.
>
> _Drafted 2026-05-21 as the fifth C+Markets snippet-driven pillar rewrite (after `furgenics-vs-bio-groom`, `bulk-dog-shampoo-for-canadian-mobile-groomers`, `deshedding-shampoo-huskies-german-shepherds`, `best-shampoo-goldendoodle`). Replaces v1 (2026-04-23) which had 4x hardcoded `$24.99 CAD`, hardcoded competitor prices that were substantially out of date (Earthbath at `$32 CAD/gal` vs actual 2026-05 capture of `$114.30 CAD`), hardcoded annual-cost dollar math, and "Canadian winters / from Ontario / inside Canada free" CA-only framing._

---

## Meta + technical

- **URL:** `/pages/oatmeal-aloe-sensitive-skin-dog-shampoo` (unchanged; serves both markets)
- **Template:** `page.content-pillar` (unchanged)
- **Page title (unchanged):** `Oatmeal & Aloe Shampoo for Sensitive-Skin Dogs | Furgenics Professional`
- **SEO title (keep):** Same as page title
- **Meta description (UPDATE, ≤155 chars):** `Professional oatmeal & aloe dog shampoo for sensitive skin, dry coats, hot-spot recovery. 16:1 concentrate, sulfate-free. Direct-to-salon in Canada & the US.`
- **Schema:** `FAQPage` for FAQ section (JSON-LD below)
- **Hero image:** Existing `oat-conn_3.png` (kept; added alt text since v1 had empty alt)

---

## What's different from v1

### Pricing & math (hardcoded → token / ratio)

| v1 (hardcoded) | v2 (token / ratio) |
|---|---|
| `$24.99 CAD per gallon` (Furgenics oatmeal, 4 references) | `[[PRICE:oatmeal-aloe-shampoo-gallon]]` × 5 (opener + pricing-math + vs-alternatives + pairing + CTA) |
| Oatmeal Conditioner, Hypoallergenic, Deep Moisturizing all unpriced in body | Now each priced via `[[PRICE:...]]` in the pairing-protocol section |
| `roughly $32 CAD per gallon` (Earthbath, v1 — substantially stale) | `[[COMPETITOR:earthbath-oatmeal-aloe]]` (renders CA $114.30 / US $73.90 — 2026-05 capture, ~3.5x v1's stale estimate on CA) |
| `$14 CAD per 16oz bottle` (Burt's Bees, v1 — stale) | `[[COMPETITOR:burts-bees-oatmeal]]` (renders CA $9.99 / US $7.98 — captured 16oz size) |
| `$45-60 USD per gallon` (Tropiclean Pro) | `[[COMPETITOR:tropiclean-pro-hypoallergenic-oatmeal]]` (CA $83.97 / US $59.38) |
| `roughly $80 per gallon` (Nature's Specialties, no market specified) | `[[COMPETITOR:natures-specialties-colloidal-oatmeal]]` (CA $186.89 Plum Silky / US $80 via distributors) |
| `$75+ per gallon` (#1 All Systems, no market specified) | `[[COMPETITOR:all-systems-botanical-oatmeal]]` (CA $68.01 / US $49.40 — v1's "$75+" was overstated for both markets) |
| `roughly $0.07 CAD per dog`, `roughly $38 CAD annually`, `about $168 annually` (Earthbath), `about $450 annually` (Burt's Bees) | Entire annual-dollar math section removed; replaced with ratio framing that points at the rendered per-gallon competitor benchmarks below |
| `$100 CAD total for the full starter kit` | Removed specific dollar; described as "Four gallons cover the entire sensitive-skin practice" |
| `16:1 concentrate` (multiple) | `[[VALUE:dilution-ratio]]` |
| `17 working gallons` | `[[VALUE:working-gallons-per-bottle]]` |
| `Canadian-made` | `[[VALUE:made-in-canada]]` |

### Framing (CA-only → universal both-markets)

| v1 (CA-only) | v2 (universal) |
|---|---|
| "Canadian winters dry out most dog coats" | "Cold-weather climates dry out most dog coats" |
| no fulfillment paragraph in opener | New: "fulfilled domestically in both markets (Canadian orders from Vaughan, Ontario; US orders from a US fulfillment partner)" |
| "ships from Ontario in 3–5 business days" (CTA) | "ships domestically in Canada (from Vaughan, Ontario) or in the US (via fulfillment partner) in 3–5 business days" |
| "Ships inside Canada free" (sample FAQ) | "Shipped free domestically in both Canada and the US, no obligation" |
| Burt's Bees framed as "sold at Canadian retailers" | "sold at consumer retailers in both markets" |

### Other

| v1 | v2 |
|---|---|
| No discount mention | New `[[DISCOUNT]]` near CTA |
| Hero image had empty `alt` attribute (accessibility gap) | Added descriptive alt text |
| Pairing protocol mostly unlinked; some links present | All four bullets now linked with per-market prices |
| "The savings compound over time" framed via hardcoded annual numbers | Reframed as "the annual cost gap compounds over time" pointing at the rendered competitor prices |

## Body HTML

See sibling file `oatmeal-aloe-sensitive-skin-dog-shampoo.html` for the paste-ready version.

Structure (preserves v1 — content was strong):

1. Hero image (existing `oat-conn_3.png` — alt text added in v2)
2. Answer-first opener (~95 words, token-driven)
3. "When to use oatmeal and aloe shampoo" — preserved (6 indications + when-NOT-to-use bullets)
4. "Oatmeal vs hypoallergenic: which shampoo to choose" — preserved
5. "The pricing math for a salon running oatmeal" — preserved math framing minus the hardcoded annual dollar amounts
6. "Furgenics Oatmeal & Aloe vs. the retail and salon-pro alternatives" — Furgenics + Earthbath + Burt's Bees + Tropiclean + Nature's Specialties + #1 All Systems; per-market prices via tokens for all five competitors
7. "How to use Furgenics Oatmeal & Aloe in salon practice" — 7-step protocol, preserved
8. "What to pair with Oatmeal & Aloe shampoo" — pairing menu with token-driven prices on each Furgenics SKU
9. "Frequently asked questions" — 6 Q&A with FAQPage schema
10. "Ready to add Oatmeal & Aloe..." — CTA + `[[DISCOUNT]]` + email contact

---

## Schema (FAQPage JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is this safe for dogs with known allergies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes for most general sensitivities. The formulation is sulfate-free, pH-balanced, and tearless. However, for dogs with diagnosed severe allergies or specific ingredient sensitivities, use a vet-recommended medicated shampoo. This is a gentle maintenance product, not a medical treatment."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use this on puppies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Safe for puppies over 8 weeks. The gentle formulation works well for puppy coats that haven't fully developed their natural oil balance."
      }
    },
    {
      "@type": "Question",
      "name": "How often can I use oatmeal shampoo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For dogs with active dry/itchy skin, weekly baths are reasonable. For maintenance or prevention, every 2–4 weeks is typical. More frequent than weekly should be under veterinary guidance."
      }
    },
    {
      "@type": "Question",
      "name": "What about dogs with yeast infections or bacterial skin problems?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "These require vet-prescribed medicated shampoo. Oatmeal & aloe is a gentle maintenance product, not an antimicrobial treatment. Use after the vet has resolved the acute condition."
      }
    },
    {
      "@type": "Question",
      "name": "Does this smell strongly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The scent is mild and subtle — natural oatmeal with light aloe notes. No artificial fragrance. Dogs with scent sensitivities typically tolerate this well."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer samples?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Request a free 8oz sample of Furgenics Oatmeal & Aloe through the Groomer Program. Shipped free domestically in both Canada and the US, no obligation."
      }
    }
  ]
}
```

---

## Pre-publish checklist for Stephen (v2)

- [ ] Updated section template (per-market COMPETITOR for all 5 oatmeal alternatives) is deployed ✅
- [ ] Updated discount-banner snippet (spacing fix) is deployed ✅
- [ ] **Update meta description** in Shopify SEO settings → `Professional oatmeal & aloe dog shampoo for sensitive skin, dry coats, hot-spot recovery. 16:1 concentrate, sulfate-free. Direct-to-salon in Canada & the US.`
- [ ] **Paste body** from `oatmeal-aloe-sensitive-skin-dog-shampoo.html` into Shopify admin → Pages → this page → Source view (`</>`) → replace existing body → save
- [ ] **Leave Page title, URL, hero image, SEO title unchanged**
- [ ] Save and visually verify on /en-ca/:
  - All Furgenics Oatmeal & Aloe prices render as `$24.99 CAD` (5 spots: opener, pricing-math, vs-alternatives, pairing, CTA)
  - Oatmeal Conditioner, Hypoallergenic, Deep Moisturizing prices render as `$24.99 CAD` in pairing section (1 each)
  - Earthbath benchmark renders `$114.30 CAD`
  - Burt's Bees benchmark renders `$9.99 CAD`
  - Tropiclean Pro benchmark renders `$83.97 CAD`
  - Nature's Specialties renders `$186.89 CAD` (Plum Silky variant)
  - #1 All Systems renders `$68.01 CAD`
  - Discount banner appears with current campaign
  - No raw `[[TOKEN]]` text visible anywhere
- [ ] Same verification on /en-us/:
  - Furgenics prices render in USD
  - Earthbath renders `$73.90 USD`
  - Burt's Bees renders `$7.98 USD`
  - Tropiclean Pro renders `$59.38 USD`
  - Nature's Specialties renders `$80 USD` (with distributor annotation)
  - #1 All Systems renders `$49.40 USD`
  - Copy reads naturally to a US visitor (mentions US fulfillment partner)
- [ ] Submit to GSC for re-indexing once verified

---

## Cross-references

- `content-style-guide.md` — token API + maintenance rules
- `competitor-intel.md` — "Per-market price capture history" table; the Earthbath CA price update is the most material change (v1 had it at `$32 CAD`, actual is `$114.30 CAD`)
- `market-map.md` — `coat-01` cluster entry
- `analyses/2026-05-20-live-pillar-content-audit.md` — audit that flagged hardcoded prices

## Change log

- **2026-04-23** — v1 drafted and shipped. Hardcoded all prices including substantially stale competitor benchmarks (Earthbath at `$32 CAD/gal` vs actual `$114.30`), hardcoded annual dollar math, CA-only framing.
- **2026-05-21** — v2 drafted (this file). Fifth C+Markets token-conversion pillar rewrite. Token-driven prices, removed hardcoded annual dollar math (was locking in stale Earthbath price as anchor), universal both-markets framing, added alt text to hero image, added `[[DISCOUNT]]` near CTA.
