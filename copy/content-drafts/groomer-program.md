# Furgenics Groomer Program — dual-offer landing page (Path B)

> **Page draft for `/pages/groomer-program`** (the existing legacy URL — currently empty + unpublished on the live site, but every shipped pillar links here). Targets `business-01` ("What professional dog shampoo brands offer free samples to groomers?"). Class A scope (no strategic claims; mirrors operational reality of the dual-offer program).
>
> _Drafted 2026-05-21 as Path B (dual offer, single page) after operational confirmation that the US fulfillment partner (Amazon FBA) cannot ship free / non-revenue sample packs. Replaces an earlier Path A draft (universal both-markets sample pack) that was operationally infeasible._

---

## Architectural decision: Path B (dual offer, single page)

We considered three architectures for the Groomer Program:

- **Path A** (originally proposed): single page, both markets get free sample pack. Operationally infeasible — Amazon FBA doesn't ship non-revenue freight.
- **Path B** (chosen): single page presenting both offers in parallel — Canadian groomers get a free sample pack from Vaughan, ON; US groomers get a first-order gallon discount. Cross-border fulfillment reality is honestly explained in a dedicated section.
- **Path C** (deferred): two separate pages (`groomer-program-canada` + `groomer-program-usa`) with hreflang routing. Splits domain authority across two thin pages; adds Markets routing config. Possible future move if the single-page version proves too long or confuses visitors.

The dual-offer reality cascades into a small correction across all 5 published pillars whose sample FAQ currently promises "Shipped free domestically in both Canada and the US." Those FAQs need to be updated to differentiate offers. See the "Pillar updates" section below.

---

## Meta + technical

- **URL:** `/pages/groomer-program` (existing legacy URL — preserves the links currently embedded in 5 live pillars)
- **Template:** `page.groomer-pillar` — a new template that combines the `main-page-pillar` section (token-substitution pipeline for prices/values/discount) with a Shopify Inline Form section (Form ID 960509) below the content. **Why a dedicated template:** Shopify Inline Forms are theme sections, not body-content embeds. Adding the form section to `content-pillar` directly would render the form on every pillar page (deshedding, goldendoodle, etc.). The `groomer-pillar` template is assigned only to this page so the form only appears here.
- **Page title (drives H1):** suggested `Furgenics Groomer Program: Free Samples or First-Order Discount` (or shorter: `Furgenics Groomer Program`). Final wording is your call.
- **SEO title (≤60 chars):** `Furgenics Groomer Program | Samples + Discounts`
- **Meta description (≤155 chars):** `Verified groomers in Canada get a free sample pack; US groomers get a first-order gallon discount. Same goal: try our 16:1 concentrate before committing.`
- **Canonical:** `https://furgenics.com/pages/groomer-program`
- **hreflang:** not needed — single URL via Markets
- **Schema:** `FAQPage` (JSON-LD below)
- **Indexing:** indexable

---

## What changed from the (now-deleted) Path A draft

| Path A (universal samples) | Path B (dual offer, single page) |
|---|---|
| Single offer: free sample pack to all verified groomers in both markets | Two offers in parallel: CA sample pack / US first-order discount |
| Lead paragraph promised free samples in both Canada and the US | Lead paragraph explicitly names the dual offer |
| "How the sample pack ships" section described CA-from-Vaughan AND US-from-fulfillment-partner | "Canadian Groomer Program" section (sample pack details, CA fulfillment) + separate "US Groomer Program" section (discount details, US fulfillment) |
| Sample list was universal-presented | Sample list now scoped to CA program (US doesn't get samples) |
| Process flow was 5 universal steps | Two process flows (CA: apply → verify → ship sample pack → test → no-obligation; US: apply → verify → discount confirmation → order gallon → no-obligation past first order) |
| FAQ: "Does the same offer apply in Canada and the US?" answered yes | FAQ leads with "Why do Canadian and US groomers get different offers?" answered honestly with fulfillment economics |
| No standalone explainer for the asymmetry | New "Why the offers differ" section explains the cross-border fulfillment reality |

---

## Pillar updates (required as part of this Path B publish)

All 5 published pillars currently have a sample FAQ that promises "Shipped free domestically in both Canada and the US, no obligation" — false for US groomers under Path B. Each must be corrected to reflect the dual offer.

Affected files and lines:

| Pillar | File | Line | Current language |
|---|---|---|---|
| Deshedding | `deshedding-shampoo-huskies-german-shepherds.html` | 116 | "Shipped free domestically in both Canada and the US, no obligation" |
| Goldendoodle | `best-shampoo-goldendoodle.html` | 130 | "Shipped free domestically in both Canada and the US, no obligation" |
| Oatmeal & Aloe | `oatmeal-aloe-sensitive-skin-dog-shampoo.html` | 140 | "Shipped free domestically in both Canada and the US, no obligation" |
| 16:1 dilution | `how-to-dilute-dog-shampoo-16-to-1.html` | 191 | "Shipped free domestically in both Canada and the US, no obligation" |
| Bulk mobile | `bulk-dog-shampoo-for-canadian-mobile-groomers.html` | 85 | "shipped free domestically in both Canada and the US" (main body, not FAQ) |
| Bio-Groom vs | `furgenics-vs-bio-groom.html` | 48, 85, 124-126 | Multiple references, currently CA-only or unscoped |

Corrected language pattern (for FAQ entries):

> **Do you offer a sample before I buy a full gallon?**<br>Canadian groomers do — request a free 8oz sample pack via the Groomer Program. US groomers get a first-order discount instead (US fulfillment doesn't handle non-revenue shipments, so the discount is the cross-border equivalent). Apply at /pages/groomer-program either way.

Or shorter, where the FAQ is brief:

> **Do you offer samples?**<br>Free sample pack for Canadian groomers; first-order discount for US groomers (fulfillment differences). Apply via the Groomer Program.

---

## Body HTML

See sibling file `groomer-program.html` for the paste-ready version.

Structure:

1. Lead paragraph naming both offers
2. "Canadian Groomer Program: free professional sample pack" — full details for CA visitors
3. "What's in the Canadian sample pack" — 8 product bullets (no SKU codes)
4. "How the Canadian program works" — 5-step CA flow
5. "US Groomer Program: first-order gallon discount" — full details for US visitors
6. "How the US program works" — 6-step US flow (ends with no-obligation past first order)
7. "Why the offers differ" — honest cross-border fulfillment explainer
8. "Who qualifies (both markets)" — universal eligibility
9. "After samples or first-order discount — what gallon pricing looks like" — token-driven prices
10. `[[DISCOUNT]]`
11. "Why we run this program" — short rationale section
12. FAQ — 7 questions, dual-offer-aware
13. "Apply for the Groomer Program" + form

---

## Schema (FAQPage JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why do Canadian and US groomers get different offers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cross-border free-sample shipping is structurally expensive, and our US fulfillment partner doesn't handle non-revenue shipments. Rather than offer US groomers a worse version of the sample-pack program, we structured the US offer as a first-order discount on a single gallon — same goal (low-risk trial), different mechanism."
      }
    },
    {
      "@type": "Question",
      "name": "How long do the 8oz samples last in a working salon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Each 8oz sample at 16:1 pro dilution gives you roughly 4–6 dilutions of working wash for a typical mid-size dog. Eight samples cover a few weeks of normal testing across coat types."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get a sample pack for each of my locations? (Canada)",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The standard program ships one pack per verified business. Multi-location groups should reach out at info@furgenics.com — we run a separate flow for multi-location evaluation."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get a multi-location discount? (US)",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — multi-location US groups should reach out at info@furgenics.com for a multi-location discount arrangement that covers the trial economics across all your sites."
      }
    },
    {
      "@type": "Question",
      "name": "What if my coat-type mix doesn't match the standard pack? (Canada)",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We can swap one or two samples for alternative formulations on request. Note the request in the form's \"anything else?\" field."
      }
    },
    {
      "@type": "Question",
      "name": "How is this different from your retail customer first-order discount?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The retail first-order discount is a new-customer offer on any first gallon order — anyone can use it once. The Groomer Program is a verified-groomer benefit that's structured around your bench setup. In Canada, that means a free sample pack before any purchase. In the US, that means a discount on your first gallon that's typically more favorable than the retail new-customer discount once verification clears."
      }
    },
    {
      "@type": "Question",
      "name": "What's the catch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There isn't one. Sample packs and first-order discounts both cost a modest acquisition expense per groomer onboarded. We make it back when your salon switches to a gallon order; we lose a small marketing cost if you don't."
      }
    }
  ]
}
```

---

## Pre-publish checklist for Stephen

- [x] **US fulfillment confirmed unable to ship free samples** — Path B is correct architecture ✅ (Stephen confirmed 2026-05-21)
- [ ] **Sample FAQ corrections on all 6 affected pillar drafts** are shipped (this commit batch)
- [ ] **Create the `groomer-pillar` template** (one-time setup):
  - [ ] In Shopify Forms admin → Form 960509 → Placement → Existing page → "Go to theme editor"
  - [ ] Create new template `groomer-pillar` based on `content-pillar` (or duplicate `page.content-pillar.json` to `page.groomer-pillar.json` via Edit code)
  - [ ] In theme editor with `groomer-pillar` open, add the **Inline form** section, configure with Form ID `960509`, position below the main pillar content
  - [ ] Save
- [ ] **In Shopify admin → Pages → "The Furgenics Groomer Program":**
  - [ ] Change the **Template** from `groomer-program` to `groomer-pillar`. Critical — without this, both tokens won't render AND the form won't appear.
  - [ ] Update the **Page title** to `Furgenics Groomer Program: Free Samples or First-Order Discount` (or shorter).
  - [ ] Update **SEO title** to `Furgenics Groomer Program | Samples + Discounts`.
  - [ ] Update **meta description** to: `Verified groomers in Canada get a free sample pack; US groomers get a first-order gallon discount. Same goal: try our 16:1 concentrate before committing.`
  - [ ] Open **Source view** (`</>`) and paste the full body from `groomer-program.html`.
  - [ ] **Leave the `<!-- [SHOPIFY-FORM-EMBED-960509] -->` placeholder comment in the body** — it's documentation only. The form renders from the template section (groomer-pillar template), not the body. Browsers ignore HTML comments, so it's invisible to visitors. **Make sure the form has a required `country` field** (Canada / United States dropdown) so submissions can be routed to the CA or US flow internally.
  - [ ] **Update form copy in Shopify Forms admin** (Form 960509):
    - Title → `Apply for the Furgenics Groomer Program`
    - Intro → `Tell us about your salon and we'll verify within 1–2 business days. Canadian groomers receive a free 8oz sample pack shipped from Vaughan, Ontario. US groomers receive a first-order gallon discount code via email. Same form, same goal — get our 16:1 concentrate into your bath setup.`
    - Autoresponder email → market-neutral copy (e.g., "Thanks — we received your application. We'll verify within 1–2 business days and email you next steps.") — country-specific message comes in the post-verification follow-up email.
  - [ ] **Publish** the page (toggle Visibility to Visible).
- [ ] **Add FAQPage JSON-LD** to the page metafield or theme template head.
- [ ] **Verify on /en-ca/:**
  - Page renders correctly, no raw tokens
  - "Canadian Groomer Program" section reads as the primary offer for the visitor
  - Furgenics gallon prices render in CAD
  - Discount banner appears
  - Form loads and country field defaults to / accepts "Canada"
- [ ] **Verify on /en-us/:**
  - "US Groomer Program" section reads as the primary offer
  - Furgenics gallon prices render in USD
  - Discount banner appears
  - Form accepts US ZIPs / country = "US"
- [ ] Re-paste each of the 6 affected pillars with the corrected sample FAQ (this commit batch updates the source files; you still need to paste each into Shopify admin and re-save)
- [ ] **Submit to GSC** for indexing once everything is live
- [ ] **Photo-debt:** sample-pack hero photography when next photo pass happens

---

## Cross-references

- `content-style-guide.md` — token API + maintenance rules
- `market-map.md` — `business-01` cluster (highest-ranked open gap)
- All 5 just-shipped pillars link here via their sample FAQ — this page's existence + correctness is load-bearing

## Change log

- **2026-05-20** — Original `groomer-program-canada` CA-only draft (single-offer, sample pack).
- **2026-05-21** — Path A universal both-markets draft (all groomers get samples). Replaced because operationally infeasible.
- **2026-05-21** — Path B dual-offer draft. Canadian groomers get sample pack; US groomers get first-order discount. Single page presents both offers in parallel with an honest "why the offers differ" explainer. Triggers sample-FAQ corrections on 6 published pillars.
- **2026-05-21** — Architecture refinement: form rendering moved from body-embed to template-section (Shopify Inline Forms are theme sections, not pasteable HTML). Requires new `groomer-pillar` template that extends `content-pillar` with the form section. Form copy + autoresponder updated for dual-offer reality.
