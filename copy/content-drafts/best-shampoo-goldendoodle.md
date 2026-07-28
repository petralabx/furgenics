# Best Professional Shampoo for Goldendoodles — pillar rewrite (v2, token-driven + universal both-markets)

> **Page draft for `/pages/best-shampoo-goldendoodle`.** Targets `breed-01` ("best shampoo for Goldendoodle"). Overlaps with `high-intent-01` (Furgenics brand discovery). Per market-map: this pillar serves both markets via Shopify Markets — copy is universal in v2.
>
> _Drafted 2026-05-21 as the fourth C+Markets snippet-driven pillar rewrite (after `furgenics-vs-bio-groom`, `bulk-dog-shampoo-for-canadian-mobile-groomers`, and `deshedding-shampoo-huskies-german-shepherds`). Replaces v1 (2026-04-23) which had 3x hardcoded `$24.99 CAD`, hardcoded competitor USD prices ($79 USD Chris Christensen, $65 USD iGroom Silk, $60+ Isle of Dogs), `$100 CAD starter kit` outlay, and "ships from Ontario" / "Ships inside Canada free" CA-only framing._

---

## Meta + technical

- **URL:** `/pages/best-shampoo-goldendoodle` (unchanged; serves both markets via Shopify Markets)
- **Template:** `page.content-pillar` (unchanged; renders tokens via the pipeline)
- **Page title (unchanged):** `Best Professional Shampoo for Goldendoodles | Furgenics 2-in-1 Doodle` (universal — works for both markets)
- **SEO title (keep or refine):** `Best Professional Shampoo for Goldendoodles | Furgenics 2-in-1 Doodle`
- **Meta description (UPDATE, ≤155 chars):** `Professional 2-in-1 shampoo + conditioner for Goldendoodles. 16:1 concentrate, argan + silk amino acids. Direct-to-salon in Canada and the US.`
- **Schema:** `FAQPage` for FAQ section (JSON-LD below)
- **Hero image:** Existing 2_in_1_Shampoo.jpg on the live page (kept as-is)

---

## What's different from v1

### Pricing & math (hardcoded → token / ratio)

| v1 (hardcoded) | v2 (token / ratio) |
|---|---|
| `$24.99 CAD per gallon` (Furgenics 2-in-1 Doodle, 3 references) | `[[PRICE:2in1-doodle-shampoo-conditioner]]` × 4 (opener + vs-alternatives + pairing + CTA) |
| Deep Moisturizing, Lavender Spa, Oatmeal & Aloe all unpriced in body | Now each priced via `[[PRICE:...]]` in the pairing-protocol section |
| `$79 USD per gallon` (Chris Christensen Day to Day) | `[[COMPETITOR:chris-christensen-day-to-day]]` (renders US $57.99 with proxy annotation for CA) |
| `$65 USD per gallon` (iGroom Silk) | `[[COMPETITOR:igroom-silk]]` (renders US $66.07 Squeaky Clean variant / CA $63.99 Deshedding & Detangling variant — variant proxies, body text generalized to "iGroom Shampoo") |
| `$60+ per gallon` (Isle of Dogs Evening Primrose) | `[[COMPETITOR:isle-of-dogs-evening-primrose]]` (renders US $63.06 Tearless Puppy as proxy — body text generalized to "Isle of Dogs Shampoo") |
| Earthbath Oatmeal & Aloe qualitative | `[[COMPETITOR:earthbath-oatmeal-aloe]]` (CA $114.30 / US $73.90) |
| `$100 CAD total outlay` (four-SKU starter kit) | Removed specific dollar; described as "Four gallons cover the entire doodle-focused practice" |
| `17 working gallons` | `[[VALUE:working-gallons-per-bottle]]` |
| `16:1` and `16:1 dilution` (multiple refs) | `[[VALUE:dilution-ratio]]` |
| `Canadian-made` | `[[VALUE:made-in-canada]]` |

### Framing (CA-only → universal both-markets)

| v1 (CA-only) | v2 (universal) |
|---|---|
| no fulfillment paragraph in opener | New: "fulfilled domestically in both markets (Canadian orders from Vaughan, Ontario; US orders from a US fulfillment partner)" |
| "ships from Ontario in 3–5 business days" (CTA) | "ships domestically in Canada (from Vaughan, Ontario) or in the US (via fulfillment partner) in 3–5 business days" |
| "Ships inside Canada free" (sample FAQ) | "Shipped free domestically in both Canada and the US, no obligation" |

### Body text adjustments to match token outputs

| v1 product names | v2 names |
|---|---|
| "iGroom Silk Shampoo" | "iGroom Shampoo" (matches what the `igroom-silk` token renders; variant proxy is noted in the rendered annotation) |
| "Isle of Dogs Evening Primrose Oil Shampoo" | "Isle of Dogs Shampoo" (matches `isle-of-dogs-evening-primrose` token output) |

### Other

| v1 | v2 |
|---|---|
| No discount mention | New `[[DISCOUNT]]` near CTA |
| Body refers to "Furgenics Deep Moisturizing Conditioner" with internal link but no price | Internal link kept, price added via `[[PRICE:deep-moisturizing-conditioner-gallon]]` |
| Pairing protocol bullets unlinked | Added internal links to each Furgenics SKU mentioned in pairing protocol |
| "Furgenics delivers comparable performance at roughly one-third the price" | Reworded to point at the rendered per-gallon price gap (since exact ratio drifts as Furgenics or competitor prices move) |

## Body HTML

See sibling file `best-shampoo-goldendoodle.html` for the paste-ready version.

Structure (preserves v1 — content was strong):

1. Hero image (existing 2_in_1_Shampoo.jpg)
2. Answer-first opener (~90 words, token-driven)
3. "What makes Goldendoodle coats different" — preserved (F1 / F1b / F2 + common challenges)
4. "What to look for in a Goldendoodle shampoo" — preserved (moisturizing, silk amino, 2-in-1, sulfate-free, dilution, rinse profile)
5. "Furgenics 2-in-1 Doodle vs. the alternatives" — Furgenics + Chris Christensen + iGroom + Isle of Dogs + Earthbath; per-market prices via tokens
6. "How to wash a Goldendoodle with 2-in-1 Doodle shampoo" — 6-step protocol, preserved
7. "What to pair with 2-in-1 Doodle in your doodle protocol" — pairing menu with token-driven prices on each Furgenics SKU
8. "Frequently asked questions" — 5 Q&A with FAQPage schema
9. "Ready to try Furgenics 2-in-1 Doodle on your route?" — CTA + `[[DISCOUNT]]` + email contact

---

## Schema (FAQPage JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Furgenics 2-in-1 Doodle safe for puppies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The formulation is pH-balanced for dog skin, sulfate-free, tearless, and free of dyes. Safe for puppies over 8 weeks. For very young puppies or dogs with diagnosed skin conditions, use a vet-recommended medicated shampoo."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use this on non-doodle curly breeds?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The formulation works well on any curly or wavy coat — Poodles, Bichons, Portuguese Water Dogs, Irish Water Spaniels, Cockapoos, Labradoodles, Bernedoodles. Anywhere coat matting and dryness are concerns, the 2-in-1 Doodle formula delivers."
      }
    },
    {
      "@type": "Question",
      "name": "How does this compare to using separate Chris Christensen shampoo and conditioner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chris Christensen's two-step system will produce marginally better show-coat results on championship doodles. For production salon work, the difference is small and the 2-in-1 approach saves 40% of bath time per dog. For a salon doing 20 doodles a week, that's 4–5 hours of reclaimed time per week."
      }
    },
    {
      "@type": "Question",
      "name": "What dilution works best on a heavily matted doodle?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For a heavily matted dog, dilute 12:1 instead of 16:1 for the first pass and let the shampoo sit for 4–5 minutes before rinsing. The extra dwell time softens existing tangles and makes post-wash brushout easier."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer a sample before I buy a full gallon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Request a free 8oz sample through the Groomer Program. Shipped free domestically in both Canada and the US, no obligation."
      }
    }
  ]
}
```

---

## Pre-publish checklist for Stephen (v2)

- [ ] Updated section template (per-market COMPETITOR with Chris Christensen + iGroom + Isle of Dogs + Earthbath) is deployed ✅
- [ ] Updated discount-banner snippet (spacing fix) is deployed ✅
- [ ] **Update meta description** in Shopify SEO settings → `Professional 2-in-1 shampoo + conditioner for Goldendoodles. 16:1 concentrate, argan + silk amino acids. Direct-to-salon in Canada and the US.`
- [ ] **Paste body** from `best-shampoo-goldendoodle.html` into Shopify admin → Pages → "Best Professional Shampoo for Goldendoodles | Furgenics 2-in-1 Doodle" → Source view (`</>`) → replace existing body → save
- [ ] **Leave Page title, URL, hero image unchanged**
- [ ] Save and visually verify on /en-ca/:
  - All Furgenics 2-in-1 Doodle prices render as `$24.99 CAD` (4 spots: opener, vs-alternatives, pairing, CTA)
  - Deep Moisturizing renders as `$24.99 CAD` (2 spots: wash protocol + pairing)
  - Lavender Spa renders as `$24.99 CAD`
  - Oatmeal & Aloe renders as `$24.99 CAD`
  - Chris Christensen benchmark renders (CA renders as `$57.99 USD` with proxy annotation since Day to Day CA price wasn't directly captured)
  - iGroom benchmark renders `$63.99 CAD` (Deshedding & Detangling variant)
  - Isle of Dogs benchmark renders with proxy annotation
  - Earthbath benchmark renders `$114.30 CAD`
  - Discount banner appears with current campaign
  - No raw `[[TOKEN]]` text visible anywhere
- [ ] Same verification on /en-us/:
  - Furgenics prices render in USD
  - Chris Christensen renders `$57.99 USD`
  - iGroom renders `$66.07 USD` (Squeaky Clean variant)
  - Isle of Dogs renders `$63.06 USD` (Tearless Puppy variant)
  - Earthbath renders `$73.90 USD`
  - Copy reads naturally to a US visitor (mentions US fulfillment partner)
- [ ] Submit to GSC for re-indexing once verified

---

## Cross-references

- `content-style-guide.md` — token API + maintenance rules
- `competitor-intel.md` — "Per-market price capture history" table (2026-05 captures, with variant-proxy annotations for Chris Christensen / iGroom / Isle of Dogs)
- `market-map.md` — `breed-01` cluster entry
- `analyses/2026-05-20-live-pillar-content-audit.md` — audit that flagged this pillar's hardcoded competitor prices

## Change log

- **2026-04-23** — v1 drafted and shipped (per `analyses/2026-04-23-v1-content-ship-session.md`). Hardcoded all prices, CA-only fulfillment framing.
- **2026-05-21** — v2 drafted (this file). Fourth C+Markets token-conversion pillar rewrite. Token-driven prices, universal both-markets framing, body product names adjusted to match the proxy-variant token outputs (iGroom Silk → iGroom Shampoo, Isle of Dogs Evening Primrose → Isle of Dogs Shampoo), added `[[DISCOUNT]]` near CTA.
