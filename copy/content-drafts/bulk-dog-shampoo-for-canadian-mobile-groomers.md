# Bulk Dog Shampoo for Mobile Groomers — pillar rewrite (v2.2, universal — no Canada-specific framing)

> **Page draft for `/pages/bulk-dog-shampoo-for-canadian-mobile-groomers`.** Targets `high-intent-02` ("Recommend a bulk dog shampoo for a mobile groomer") — generalized from CA-only to NA-wide. Also overlaps with `high-intent-01` and `high-intent-03`. Per market-map: this pillar was originally CA-targeted; v2.2 generalizes the copy to serve both markets natively (no second pillar needed).
>
> **URL kept as-is** (`/pages/bulk-dog-shampoo-for-canadian-mobile-groomers`) to preserve SEO equity / backlinks. **Title + content drop "Canadian" framing** so a US visitor lands on copy that addresses them directly. If we ever want a clean URL, we'd 301-redirect old→new — that's a future decision.
>
> _Drafted 2026-05-21 as v2 (token-driven, CA-first). Updated 2026-05-21 to v2.2 (universal both-markets framing) after Stephen flagged that the CA-only positioning excluded US visitors despite Markets serving the same URL._

---

## Meta + technical

- **URL:** `/pages/bulk-dog-shampoo-for-canadian-mobile-groomers` (kept as-is for SEO equity; serves both markets via Shopify Markets)
- **Template:** `page.content-pillar` (already in use; Liquid-renders via the token-substitution pipeline)
- **Page title (UPDATE in Shopify, drives H1):** was `Bulk Dog Shampoo for Canadian Mobile Groomers` → new `Bulk Dog Shampoo for Mobile Groomers`
- **SEO title (UPDATE):** was `Bulk Dog Shampoo for Canadian Mobile Groomers` → new `Bulk Dog Shampoo for Mobile Groomers | Furgenics`
- **Meta description (UPDATE, ≤155 chars):** `16:1 concentrate gallon shampoo for professional mobile groomers. Light, dilute, fast restock, predictable per-bath cost. Ships domestically in Canada and the US.`
- **Schema:** `FAQPage` for FAQ section
- **Hero image:** existing FUR-001 hero (photo-debt — replace at next photography pass)
- **Email:** `info@furgenics.com` (plain-text in v1; same in v2)

---

## What's different from v1

| v1 (hardcoded) | v2 (token / ratio) |
|---|---|
| `$24.99 CAD` (Furgenics gallon, 5 references) | `[[PRICE:hypoallergenic-shampoo-gallon]]` × 5 |
| `$49.94 CAD on Amazon` (Bio-Groom) | `[[COMPETITOR:bio-groom-hypo-groom]]` (now renders $110.41 CAD on /en-ca/, $49.99 USD on /en-us/) |
| `$60-70 CAD for a gallon via Canadian distributors` (Coat Handler 15-in-1) | `[[COMPETITOR:coat-handler-15-in-1]]` |
| Chris Christensen + Nature's Specialties + Show Season qualitative | Same — kept as qualitative since these don't have token slugs (Show Season) or the relevant variant wasn't captured |
| `$0.07 per dog`, `$1.18 per dog`, `$182 a year`, `$2,460 a year` | Ratio language ("approximately half", "roughly an order of magnitude lower", "thousands of dollars annually at typical mobile-route volume") |
| `16:1`, `17 working gallons` | `[[VALUE:dilution-ratio]]`, `[[VALUE:working-gallons-per-bottle]]` |
| `Made in Ontario` / `manufactured in Canada` | `[[VALUE:made-in-canada]]` once in positioning context; "Vaughan, Ontario" kept as factual location reference |
| `$75-$100 CAD first-month outlay` | Removed specific math; described as "a few gallons for first-month trial" |
| No discount mention in v1 body | New `[[DISCOUNT]]` near CTA |

## What's different in v2.2 (vs v2)

| v2 (CA-only framing) | v2.2 (universal both-markets) |
|---|---|
| Title "Bulk Dog Shampoo for Canadian Mobile Groomers" | Title "Bulk Dog Shampoo for Mobile Groomers" (drops "Canadian"; URL unchanged) |
| Opener: "If you're a mobile groomer in Canada looking for bulk dog shampoo..." | Opener: "If you're a mobile groomer looking for bulk dog shampoo..." |
| "ships across Canada without customs" | "fulfilled domestically in both markets (Canadian orders ship from Vaughan, Ontario; US orders ship via a US fulfillment partner)" |
| Section header "Canadian supply reliability" | Section header "Domestic supply reliability" |
| "Sourcing from within Canada avoids cross-border shipping delays..." | "Sourcing from a domestic warehouse... Brands fulfilled domestically in your market — Furgenics serves Canadian orders from Vaughan, Ontario and US orders via a US fulfillment partner" |
| Section header "Shipping and sourcing inside Canada" | Section header "Shipping and sourcing" |
| "Furgenics ships direct from Vaughan, Ontario to anywhere in Canada within 3–5 business days" | "Furgenics ships direct in both markets: Canadian orders ship from Vaughan, Ontario; US orders ship from a US fulfillment partner. Both routes typically deliver in 3–5 business days domestic" |
| Bio-Groom: "Canadian shipping adds variable delays and occasional customs paperwork" | Bio-Groom: "cross-border shipping (when applicable) adds variable delays and occasional customs paperwork" |
| Coat Handler: "Sourcing in Canada depends on distributor stock cycles" | Coat Handler: "Sourcing depends on distributor stock cycles" |
| "Bio-Groom, Chris Christensen, and most other US-based professional brands ship to Canada via their Canadian distributors... Direct Amazon.ca orders from US brands are faster but hit listed prices in CAD..." | Generalized to "Most professional brands ship cross-border via distributor networks (US distributors selling into Canada, or vice versa). Cross-border friction shows up in the price — distributor markup, currency conversion, and occasional customs paperwork on larger orders. Direct-to-salon shipping with domestic fulfillment in both markets — Furgenics' model — sidesteps that friction entirely." |
| Sample program: "shipped free inside Canada" | Sample program: "shipped free domestically in both Canada and the US" |
| Order CTA: "ships from Vaughan, Ontario anywhere in Canada in 3–5 business days" | Order CTA: "ships domestically in Canada (from Vaughan, Ontario) or in the US (via fulfillment partner) in 3–5 business days" |

**What stayed the same in v2.2:** All token markers (`[[PRICE:...]]`, `[[COMPETITOR:...]]`, `[[VALUE:...]]`, `[[DISCOUNT]]`), the dilution math, the comparison structure, the FAQ section + JSON-LD, the operator-constraints framing (weight/water/dog variety still universal to mobile grooming regardless of country).

## Body HTML

See sibling file `bulk-dog-shampoo-for-canadian-mobile-groomers.html` for the paste-ready version.

Structure (preserves v1 — content was strong):

1. Hero image (existing FUR-001)
2. Answer-first opener (~85 words, token-driven)
3. "What mobile groomers actually need from a bulk shampoo" — preserved (operator constraints, weight, water quality, dog variety, supply reliability, per-wash cost)
4. "The math on 16:1 concentrate for mobile groomers" — converted per-dog $ to ratios; gallon yield via `[[VALUE:working-gallons-per-bottle]]`
5. "Furgenics Hypoallergenic vs. the alternatives, for a mobile route" — Bio-Groom + Coat Handler + Nature's Specialties + Chris Christensen + Show Season; competitor prices via tokens where captured
6. "Shipping and sourcing" — v2.2 generalized (both markets, both domestic warehouses)
7. "Groomer sample program" — links to `/pages/groomer-program` (legacy noindex; redirect to new CA + US Groomer Programs when those ship)
8. "What to order for a first-month trial" — three gallon-trial bullets using `[[PRICE:...]]` tokens for each
9. "Frequently asked questions" — 5 Q&A with FAQPage schema
10. "Order direct from furgenics.com" — CTA + `[[DISCOUNT]]` + email contact

---

## Schema (FAQPage JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does a 16:1 concentrate gallon last for a mobile groomer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At 6–10 dogs per day, 5 days a week, a single gallon of 16:1 concentrate lasts roughly 8–9 weeks of full-time mobile work. Less for larger dogs (more shampoo per wash) or double-soap washes on heavily soiled coats."
      }
    },
    {
      "@type": "Question",
      "name": "Is Furgenics Hypoallergenic safe for puppies and senior dogs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The formula is sulfate-free, pH-balanced for dog skin, and free of dyes and strong fragrances. It's been formulated specifically for daily-use professional grooming across all ages and most breeds. Not intended as a medicated shampoo — dogs with diagnosed skin conditions should use a vet-recommended medicated product."
      }
    },
    {
      "@type": "Question",
      "name": "How do I dilute 16:1 in a bottle on the van?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fill a dedicated squeeze or foamer bottle most of the way with lukewarm water, then add shampoo to reach the 16:1 ratio (for a 32 oz bottle: 2 oz shampoo + 30 oz water). Shake gently to mix; avoid vigorous shaking to prevent excess foaming. Use within 2–3 weeks of dilution for best results."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer bulk pricing beyond a single gallon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — contact us at info@furgenics.com for multi-gallon pricing and multi-location wholesale inquiries through the Groomer Program."
      }
    },
    {
      "@type": "Question",
      "name": "What if I already use Bio-Groom or Coat Handler and want to switch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both Bio-Groom Hypo-Groom and Coat Handler 15-in-1 use similar dilution ratios to Furgenics Hypoallergenic (15:1 and 15:1 respectively versus our 16:1), so the switch is nearly drop-in. Request a sample first to confirm the lather and rinse profile match your route, then order a full gallon when you're ready. Most switchers notice cost savings inside the first 60 days."
      }
    }
  ]
}
```

---

## Pre-publish checklist for Stephen (v2.2)

- [ ] Updated section template (per-market COMPETITOR) is deployed ✅ (you did this earlier)
- [ ] Updated discount-banner snippet (spacing fix) is deployed ✅
- [ ] **Update Page title** in Shopify admin → Pages → this page → Title: change to `Bulk Dog Shampoo for Mobile Groomers` (drops "Canadian"; this controls the H1 rendered on the page)
- [ ] **Update SEO title** (under "Search engine listing preview" → "Edit website SEO") → `Bulk Dog Shampoo for Mobile Groomers | Furgenics`
- [ ] **Update meta description** → `16:1 concentrate gallon shampoo for professional mobile groomers. Light, dilute, fast restock, predictable per-bath cost. Ships domestically in Canada and the US.`
- [ ] **Paste body** from `bulk-dog-shampoo-for-canadian-mobile-groomers.html` into Source view (`</>`) → replace existing body → save
- [ ] **Leave URL unchanged** (`/pages/bulk-dog-shampoo-for-canadian-mobile-groomers`) — preserves backlinks + SEO history. The "canadian" in the URL is a cosmetic inconsistency we accept for now.
- [ ] Save and visually verify on /en-ca/:
  - H1 reads "Bulk Dog Shampoo for Mobile Groomers" (no "Canadian")
  - All Furgenics gallon prices render as `$24.99 CAD`
  - Bio-Groom benchmark renders `$110.41 CAD`
  - Coat Handler 15-in-1 benchmark renders `$66.02 CAD`
  - "Shipping and sourcing" section mentions BOTH markets (Vaughan, ON for CA; US fulfillment partner for US)
  - Discount banner appears with current campaign
  - No raw `[[TOKEN]]` text visible anywhere
- [ ] Same verification on /en-us/:
  - H1 unchanged
  - Furgenics gallon prices render in USD
  - Bio-Groom benchmark renders `$49.99 USD`
  - Coat Handler 15-in-1 benchmark renders `$47.97 USD`
  - Copy reads naturally to a US visitor (no "across Canada" / "Canadian distributors" language)
- [ ] Submit to GSC for re-indexing once verified

---

## Cross-references

- `content-style-guide.md` — token API + maintenance rules
- `competitor-intel.md` — "Per-market price capture history" table (2026-05-21 captures)
- `market-map.md` — `high-intent-02` cluster entry (this pillar is canonical owner)
- `analyses/2026-05-20-live-pillar-content-audit.md` — audit that drove this rewrite
- v1 of this draft (was at `canadian-mobile-groomers.{md,html}`, renamed 2026-05-21 to match URL handle)

## Change log

- **2026-04-23** — v1 drafted and shipped (per `analyses/2026-04-23-v1-content-ship-session.md`). Hardcoded all prices and value math.
- **2026-05-21** — v2 drafted. C+Markets token conversion. File renamed from `canadian-mobile-groomers.{md,html}` to `bulk-dog-shampoo-for-canadian-mobile-groomers.{md,html}` to match URL handle convention established with `furgenics-vs-bio-groom.{md,html}`.
- **2026-05-21** — v2.2 drafted (this file). Universal both-markets generalization. Title changes from "Bulk Dog Shampoo for Canadian Mobile Groomers" → "Bulk Dog Shampoo for Mobile Groomers". All CA-specific framing in body removed; replaced with both-markets framing (CA via Vaughan, ON; US via Amazon FBA / US fulfillment partner). URL kept unchanged for SEO equity. Filename kept unchanged to match URL. Triggered by Stephen flagging that the CA-only pillar copy was being served to US visitors via Shopify Markets without country-appropriate framing.
