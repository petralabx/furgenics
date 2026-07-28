# Furgenics vs Bio-Groom — pillar rewrite (snippet-driven, v2)

> **Page draft for `/pages/furgenics-vs-bio-groom`.** Targets `comparison-01` and `high-intent-03` (both P1 in `market-map.md` open gaps). Class B content — agent-drafted, human-approved.
>
> _Drafted 2026-05-20 as the first pillar rewrite in the C+Markets snippet conversion. Replaces v1 (drafted 2026-04-23) which had hardcoded gallon prices and per-dog dollar amounts. This v2 uses `pricing`, `competitor-price`, `value-math`, and `discount-banner` snippets. Per-dog cost numerics converted to ratio language per `content-style-guide.md`._

---

## Meta + technical

- **URL:** `/pages/furgenics-vs-bio-groom` (Markets-aware; serves /en-ca/ and /en-us/)
- **Template:** `page.content-pillar` (already in use; Liquid-renders)
- **SEO title (keep, already strong):** `Furgenics vs Bio-Groom: Professional Dog Shampoo Comparison | Furgenics`
- **Meta description (UPDATE, 153 chars):** `Compare Furgenics 16:1 concentrate to Bio-Groom Hypo-Groom for professional salons. Honest per-bath economics, formulation, and shipping breakdown.`
- **Schema:** `FAQPage` for FAQ section (JSON-LD in template head; see bottom of this file for the exact JSON-LD block)
- **Indexable:** yes
- **Hero image:** existing FUR-001 hero photo (photo-debt — replace at next photography pass)
- **Email:** `info@furgenics.com` (Stephen fixed broken `mailto:hello@` earlier today)

---

## What's different from v1

- **Hardcoded `$24.99 CAD` (Furgenics)** → `{% render 'pricing', handle: 'hypoallergenic-shampoo-gallon' %}`
- **Hardcoded `$49.94 CAD` (Bio-Groom)** → `{% render 'competitor-price', brand: 'Bio-Groom', product: 'Hypo-Groom Gallon', price: '$49.94', currency: 'CAD', as_of: '2026-04', source: 'Amazon Canada' %}`
- **Hardcoded `$0.07 / $0.14 per dog`** → ratio language ("approximately half the per-dog cost", "roughly 2× on Bio-Groom") — invariant, doesn't go stale with price changes
- **Hardcoded `$182/year, $364/year, $910 / $4,550 multi-location savings`** → volume-scaling language ("thousands of dollars annually for multi-location groups on a single shampoo line") — same shape, no specific numbers that rotate with MSRP
- **Hardcoded `16:1`** → `{% render 'value-math', claim: 'dilution-ratio' %}` in positioning contexts (kept hardcoded where comparing to Bio-Groom's `15:1` — the comparison requires both numbers literally)
- **Hardcoded `17 working gallons`** → `{% render 'value-math', claim: 'working-gallons-per-bottle' %}` in positioning contexts
- **`Made in Canada`** → `{% render 'value-math', claim: 'made-in-canada' %}` once (positioning); plain prose elsewhere (factual location references)
- **New:** `{% render 'discount-banner' %}` near the end of the body — pulls active discount campaign from theme settings (currently FUR50/50% but rotates without page edits)
- **Email link:** confirmed `mailto:info@furgenics.com` (the v1 had `mailto:hello@furgenics.com` bug which Stephen fixed today)

## Body HTML

See sibling file `furgenics-vs-bio-groom.html` for the paste-ready version with all snippets inline.

Section outline:

1. Hero image (existing FUR-001)
2. Answer-first opener (~85 words, snippet-driven)
3. "Bio-Groom wins on three things" framing paragraph (preserved)
4. Head-to-head comparison — 8 prose dimensions
5. The pricing math, worked out — ratio + volume scaling
6. Where Bio-Groom wins — 3 honest concessions
7. Where Furgenics wins — 5 advantages
8. When to choose which — decision matrix
9. FAQ — 5 Q&A (with FAQPage schema)
10. Ready to sample before switching? — CTA + discount-banner snippet + email contact

---

## Schema (FAQPage JSON-LD to add to page metafield or template head)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Are Furgenics and Bio-Groom formulations directly comparable?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For hypoallergenic and oatmeal-based shampoos, yes — both brands use similar base chemistry (sulfate-free, pH-balanced, tearless) with comparable dilution ratios. Coat-feel, lather, and rinse characteristics are nearly identical on side-by-side testing. The main difference is price, not formulation quality."
      }
    },
    {
      "@type": "Question",
      "name": "Can I switch from Bio-Groom to Furgenics without retraining staff?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The dilution ratios are similar (15:1 vs 16:1) and the application technique is identical. Most salons see no workflow change after switching. Request a sample first if you want to confirm lather/rinse profile on your route before ordering a gallon."
      }
    },
    {
      "@type": "Question",
      "name": "Does Furgenics have the same shelf life as Bio-Groom?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Both brands' concentrates have roughly 24-month shelf life unopened, 12–18 months once opened. Store in a cool, dry place out of direct sunlight."
      }
    },
    {
      "@type": "Question",
      "name": "Is Furgenics available through my current distributor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not at this time. Furgenics is direct-to-salon only. This is intentional — cutting out distributor markup is what enables the per-gallon pricing advantage."
      }
    },
    {
      "@type": "Question",
      "name": "How does Furgenics handle wholesale or bulk pricing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Multi-gallon and multi-location pricing is available through the Groomer Program. Contact us at info@furgenics.com with your volume estimate and locations and we'll quote accordingly."
      }
    }
  ]
}
```

---

## Pre-publish checklist for Stephen

- [ ] 4 snippets deployed to live theme (you confirmed earlier ✅)
- [ ] `discount-banner` theme settings set (FUR50 / 50 / 4 / "New customers, first order only") ✅
- [ ] Paste body from `furgenics-vs-bio-groom.html` into Shopify admin → Pages → "Furgenics vs Bio-Groom" → Source view (`</>`)
- [ ] Update meta description per Meta section above
- [ ] Add the FAQPage JSON-LD above to the page metafield OR the theme template's head section
- [ ] Save and **visually verify the live page**:
  - Furgenics gallon price renders as a real dollar amount in active market's currency (CAD on `/en-ca/`, USD on `/en-us/`)
  - Bio-Groom snippet renders inline: `Bio-Groom Hypo-Groom Gallon: $49.94 CAD (as of 2026-04, Amazon Canada)`
  - Value-math claims render inline (`16:1 concentrate`, `up to 17 working gallons per bottle at professional dilution`, `Made in Canada`)
  - Discount banner renders with current campaign code + percent
  - No raw `{% render %}` text visible anywhere
- [ ] Confirm `/pages/groomer-program` link still works (it points to the legacy noindex page; will redirect to new CA/US pair once those ship)
- [ ] Submit to GSC for re-indexing once verified

---

## Cross-references

- `content-style-guide.md` — snippet API + maintenance rules followed
- `business-identity.md` — canonical email used in CTA
- `competitor-intel.md` — Bio-Groom positioning + benchmark capture as of 2026-04
- `market-map.md` — `comparison-01` and `high-intent-03` cluster entries (this pillar is canonical owner)
- `analyses/2026-05-20-live-pillar-content-audit.md` — the audit that drove this rewrite
- `theme-drafts/snippets/{pricing,competitor-price,value-math,discount-banner}.liquid` — snippets used
- v1 of this draft (2026-04-23) — preserved in git history

## Change log

- **2026-04-23** — v1 drafted and shipped (per `analyses/2026-04-23-v1-content-ship-session.md`). Hardcoded all prices and value math.
- **2026-05-20** — v2 drafted (this file). C+Markets snippet conversion. First pillar in the snippet-rewrite series.
