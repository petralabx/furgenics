# How to Dilute Dog Shampoo at 16:1 — pillar rewrite (v2, token-driven + universal both-markets)

> **Page draft for `/pages/how-to-dilute-dog-shampoo-16-to-1`.** Targets `how-to-01` ("How do I dilute professional dog shampoo at 16 to 1?"). Overlaps with `high-intent-01` (Furgenics brand discovery via educational content). Per market-map: this pillar serves both markets via Shopify Markets — copy is universal in v2.
>
> _Drafted 2026-05-21 as the sixth and final C+Markets pillar rewrite in this series (after furgenics-vs-bio-groom, bulk-dog-shampoo-for-canadian-mobile-groomers, deshedding-shampoo-huskies-german-shepherds, best-shampoo-goldendoodle, oatmeal-aloe-sensitive-skin-dog-shampoo). Replaces v1 (2026-04-27)._

---

## Meta + technical

- **URL:** `/pages/how-to-dilute-dog-shampoo-16-to-1` (unchanged; serves both markets)
- **Template:** `page.content-pillar` (unchanged)
- **Page title (unchanged):** `How to Dilute Professional Dog Shampoo at 16:1 | Furgenics`
- **SEO title (keep):** same as page title
- **Meta description (UPDATE if not already universal, ≤155 chars):** `How to dilute professional dog shampoo at 16:1: exact math for every bottle size, equipment that holds up, the four mistakes new groomers make, and when to deviate.`
- **Schema:** `FAQPage` for FAQ section (JSON-LD below)
- **Hero image:** Existing `samplepage_header.jpg` (kept; alt added — v1 was empty)

---

## What's different from v1

### Surgical changes (this is a technique pillar, not a comparison pillar — most of the body is unchanged)

| v1 (hardcoded) | v2 (token / generalized) |
|---|---|
| `$24.99 CAD ($19 USD)` (Furgenics gallon price, in per-bath cost section) | `[[PRICE:hypoallergenic-shampoo-gallon]]` (rendered in active market currency only) |
| `$1.47 CAD ($1.12 USD)` (derived cost per working gallon) | `[[VALUE:per-working-gallon-cost-narrative]]` (renders as "roughly the cost of a cup of coffee per working gallon at pro dilution") |
| `$0.05–$0.07 CAD ($0.04–$0.05 USD)` (derived per-dog cost) | "a few cents at professional dilution — the per-dog math compounds quickly, which is why concentrate format wins at production volume" |
| `$1.50–$2.10 CAD per shampoo SKU` (weekly cost claim) | Removed; replaced with "The exact per-bath cost shifts by brand. The 16:1 economics ... are the same across any professionally-formulated 16:1 concentrate." |
| `in the order of $400–700 per shampoo SKU per year` (annual cost gap in "Why 16:1 is the standard") | "in the order of hundreds of dollars per shampoo SKU per year for a typical salon" (drops the specific range that anchors to particular gallon prices) |
| `All $24.99 CAD per gallon` (final CTA) | `All consistently priced direct-to-salon` (drops hardcoded price since multiple SKUs are mentioned) |
| `Ships free inside Canada` (sample closing line) | `Shipped free domestically in both Canada and the US` |
| No "made in Canada" or both-markets fulfillment mention in CTA | New: "[[VALUE:made-in-canada]] and ship domestically in both markets (Canadian orders from Vaughan, Ontario; US orders from a US fulfillment partner) in 3–5 business days" |
| No discount mention | New `[[DISCOUNT]]` near CTA |
| Hero image had empty `alt` attribute | Added descriptive alt text |

### What stayed the same in v2

- The 16:1 dilution math table (universal — same in both markets)
- The dilution-math note and 17-working-gallons-per-bottle yield
- The "Why 16:1 is the professional standard" 3-constraint argument (cost-per-bath, cleaning power, mixing accuracy)
- All equipment-guide content (HDPE bottles, gallon pumps, backpack sprayers, dilution-pump bottles)
- The 6-step mix protocol
- The four mistakes section
- The four "when to deviate" scenarios
- The FAQ section (6 questions, with cross-references intact)
- Internal cross-links to the deshedding and oatmeal pillars

### Why 16:1 was NOT tokenized

`[[VALUE:dilution-ratio]]` renders as "16:1 concentrate" (full phrase). Most occurrences of `16:1` in this pillar are bare ratio references (table headers, "At 16:1, a salon...", "How to mix a 16:1 dilution"). Substituting in the full phrase would produce awkward grammar ("How to mix a 16:1 concentrate dilution"). Since this entire pillar is built around the 16:1 ratio as a literal value, keeping it as plain text is the right call. The token is appropriate in product-comparison contexts where positioning ("a 16:1 concentrate") is what matters; it's not appropriate here.

---

## Body HTML

See sibling file `how-to-dilute-dog-shampoo-16-to-1.html` for the paste-ready version.

Structure (preserves v1):

1. Hero image (existing `samplepage_header.jpg` — alt text added in v2)
2. "The short answer" — preserved (dilution math summary across 3 bottle sizes + brand context)
3. Reader caveat for pet owners
4. Pre-summary of what follows
5. "The dilution table" — preserved exactly (6 working bottle sizes × 4 columns)
6. "Why 16:1 is the professional standard" — preserved with one number generalization
7. "The equipment that holds up" — preserved
8. "How to mix a 16:1 dilution: step by step" — preserved
9. "The four mistakes new groomers make" — preserved
10. "When to deviate from 16:1" — preserved (with the two cross-links to deshedding + oatmeal pillars)
11. "Per-bath cost at 16:1" — v2 surgical changes (gallon price token, working-gallon cost narrative token, generalized derived numbers)
12. "Frequently asked questions" — preserved (6 Q&A)
13. "Try Furgenics 16:1 concentrates" — v2 surgical changes (no hardcoded prices, added both-markets fulfillment, `[[DISCOUNT]]`)

---

## Schema (FAQPage JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does this guide work for any 16:1 concentrate, or only Furgenics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The math and protocol work for any professional shampoo formulated for 16:1 dilution. That includes Furgenics, Chris Christensen Day to Day, iGroom (most variants), and many others. Always check the label — a shampoo formulated for 32:1 or 8:1 will not produce the right results at 16:1."
      }
    },
    {
      "@type": "Question",
      "name": "Can I dilute below 16:1 to stretch a gallon further?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For lightly soiled dogs in a maintenance wash, yes — 24:1 or even 32:1 dilution will clean adequately. For normal salon work, 16:1 is the sweet spot between cost and cleaning power. Going significantly weaker (40:1+) reliably produces under-cleaned dogs and is not recommended."
      }
    },
    {
      "@type": "Question",
      "name": "How long does diluted shampoo last in a spray bottle?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most professional shampoos hold up at 16:1 dilution for 2–4 weeks at room temperature. Mark the dilution date on the bottle. Discard if the solution becomes cloudy, smells off, or shows visible separation — these are signs of microbial growth."
      }
    },
    {
      "@type": "Question",
      "name": "Does the dilution change for different coat types within the same shampoo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Generally no. 16:1 works across coat types with the same product. The variations described above (12:1 for heavy blowouts, 20:1+ for puppies and sensitive skin) are exceptions for specific conditions, not coat-type-driven adjustments."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I sample a 16:1 concentrate to test for my salon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Furgenics offers free 8oz samples to professional groomers through the Groomer Program. Each sample is enough for 8–10 medium-dog baths at 16:1 dilution — enough to evaluate cleaning power, rinse profile, and coat feel before committing to a gallon."
      }
    },
    {
      "@type": "Question",
      "name": "What if my shampoo says \"15:1\" instead of \"16:1\"?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "15:1 (Coat Handler's standard) and 16:1 are close enough that 16:1 protocols work for either with no meaningful difference. Below 12:1 or above 20:1, follow the manufacturer's label — the chemistry was formulated for that specific ratio."
      }
    }
  ]
}
```

---

## Pre-publish checklist for Stephen (v2)

- [ ] Updated section template (token pipeline) is deployed ✅
- [ ] Updated discount-banner snippet (spacing fix) is deployed ✅
- [ ] **Update meta description** (optional — if current is fine, leave): `How to dilute professional dog shampoo at 16:1: exact math for every bottle size, equipment that holds up, the four mistakes new groomers make, and when to deviate.`
- [ ] **Paste body** from `how-to-dilute-dog-shampoo-16-to-1.html` into Shopify admin → Pages → "How to Dilute Professional Dog Shampoo at 16:1 | Furgenics" → Source view (`</>`) → replace existing body → save
- [ ] **Leave Page title, URL, hero image, SEO title unchanged**
- [ ] Save and visually verify on /en-ca/:
  - Per-bath cost section's "Furgenics gallon price" renders as `$24.99 CAD`
  - "Cost per working gallon" renders as the narrative "roughly the cost of a cup of coffee per working gallon at pro dilution"
  - "Made in Canada" appears in the closing CTA
  - Discount banner appears with current campaign
  - No raw `[[TOKEN]]` text visible anywhere
  - No hardcoded `$24.99 CAD ($19 USD)`-style dual-currency dollar amounts remain
- [ ] Same verification on /en-us/:
  - Per-bath cost gallon price renders in USD
  - Other content (which is mostly market-neutral) reads correctly
  - Both-markets fulfillment language in CTA renders correctly
- [ ] Submit to GSC for re-indexing once verified

---

## Cross-references

- `content-style-guide.md` — token API + maintenance rules
- `market-map.md` — `how-to-01` cluster entry
- `analyses/2026-05-20-live-pillar-content-audit.md` — audit that flagged hardcoded prices and CA-only sample shipping

## Change log

- **2026-04-27** — v1 drafted and shipped. Hardcoded Furgenics gallon price in both currencies, hardcoded derived per-bath/per-gallon/per-week dollar math, CA-only sample shipping language, empty hero alt.
- **2026-05-21** — v2 drafted (this file). Sixth and final C+Markets token-conversion pillar rewrite in this series. Surgical changes: tokenized the per-bath cost section's gallon price + working-gallon cost narrative, generalized derived dollar specifics that anchored to single-market prices, dropped hardcoded price from multi-SKU CTA, added both-markets fulfillment + `[[DISCOUNT]]` to CTA, added hero alt. Dilution math table, equipment guide, mix protocol, mistakes section, and deviation scenarios all unchanged (universal content).
