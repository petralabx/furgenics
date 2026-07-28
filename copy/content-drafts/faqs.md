# Help & FAQ

Common questions about Furgenics products, ordering, and our Groomer Program. If you don't find your answer here, email us at [info@furgenics.com](mailto:info@furgenics.com) — we respond personally within one business day.

## Ordering & shipping

**How long does shipping take?**  
Orders within Canada typically arrive in 3–5 business days. US orders take 5–10 business days depending on destination. We ship from our Vaughan, Ontario facility and from a US fulfillment partner for US orders.

**Do you ship internationally?**  
We currently ship to Canada and the United States only.

**How do I track my order?**  
You'll receive a tracking link by email when your order ships. If you don't see one within 24 hours of your order confirmation, check your spam folder or email [info@furgenics.com](mailto:info@furgenics.com).

**Do you offer free shipping?**  
Free shipping thresholds and rates are calculated at checkout based on your destination and order size.

## Returns & refunds

**What's your return policy?**  
30 days, refund-only, no return shipping required. If a product doesn't work for your dog or your salon, we'll refund you without asking for the bottle back. Read the full policy at [/policies/refund-policy](/policies/refund-policy).

**My dog had a reaction. What do I do?**  
Stop using the product immediately and email us at [info@furgenics.com](mailto:info@furgenics.com). We'll process a full refund and want to hear about your dog's reaction so we can document it.

**Can I exchange a product instead of returning?**  
Yes. Email [info@furgenics.com](mailto:info@furgenics.com) with your order number and what you'd like instead. We'll work it out.

## Products & dilution

**What does 16:1 mean?**  
Sixteen parts water to one part Furgenics shampoo. That's a [[VALUE:dilution-ratio]], which yields [[VALUE:working-gallons-per-bottle]] (1 gallon Furgenics + 16 gallons water = 17 gallons output) — [[VALUE:per-working-gallon-cost-narrative]].

**How do I dilute a Furgenics shampoo?**  
Pump or pour 1 part concentrate into a clean salon bottle, add 16 parts warm water, shake well — that's the [[VALUE:dilution-ratio]] working solution. We have a full how-to guide at [/pages/how-to-dilute-dog-shampoo-16-to-1](/pages/how-to-dilute-dog-shampoo-16-to-1).

**Where are your products made?**  
[[VALUE:made-in-canada]] in Vaughan, Ontario. Canadian orders ship from Vaughan; US orders ship from our US fulfillment partner. The formulations are identical across both markets — only the fulfillment origin differs.

**Are your products safe for puppies?**  
Most Furgenics formulas are safe for dogs of all ages, but always check the label and consult your veterinarian if your dog has specific health concerns or is under eight weeks old.

**Do you make products for cats?**  
No. Furgenics is dog-specific. Cat skin chemistry is different and our formulas aren't tested for feline use.

**Where can I find ingredient lists?**  
Each product page has the full INCI (International Nomenclature of Cosmetic Ingredients) list under the "Ingredients" section.

**What's the difference between your shampoos?**  
Each formula is built for a specific need: hypoallergenic for sensitive skin, oatmeal & aloe for dry/itchy coats, 2-in-1 doodle for curly mat-prone coats, deshedding for double-coats, lavender spa for calming finishes, deep moisturizing for damaged coats. Browse the full lineup on our [shop page](/collections/all).

## Groomer Program

**What is the Groomer Program?**  
Furgenics' professional program for dog groomers. Canadian groomers receive free 8oz samples of each Furgenics formula — test on your bench before committing to a gallon. US groomers receive a first-order gallon discount through the same program, since our US fulfillment partner doesn't ship non-revenue samples. One-time enrollment, no purchase obligation.

**Who qualifies?**  
Active professional dog grooming salons, mobile groomers, and grooming schools in Canada or the United States. The program is for working groomers — we don't ship samples to individual pet owners.

**How do I sign up?**  
Visit the [Groomer Program page](/pages/groomer-program) and complete the form. Canadian groomers receive their sample-shop link by email within one business day. US groomers receive their first-order discount code the same way.

## Account & support

**Do you offer first-time customer discounts?**  
Yes. Our current first-order discount:

[[DISCOUNT]]

Apply the code at checkout. The campaign rotates from time to time — this section always shows what's active.

**Do I need an account to order?**  
No, you can check out as a guest. Creating an account makes reordering and tracking easier.

**Can I order on behalf of multiple salon locations?**  
Yes. For multi-location orders or volume pricing, email [info@furgenics.com](mailto:info@furgenics.com).

**Where can I leave a product review?**  
Each product page has a review section. We also welcome reviews on Google. Honest feedback helps us improve.

**How do I contact you?**  
Email: [info@furgenics.com](mailto:info@furgenics.com) — we respond within one business day.  
Location: Vaughan, Ontario, Canada.

We're a small team. We don't have a 24/7 phone line, but we read every email and respond personally.

---

## Token usage table

| Token | Where used | Resolves to |
|---|---|---|
| `[[VALUE:dilution-ratio]]` | "What does 16:1 mean?" + "How do I dilute?" answers | `16:1 concentrate` |
| `[[VALUE:working-gallons-per-bottle]]` | "What does 16:1 mean?" answer | `up to 17 working gallons per bottle at professional dilution` |
| `[[VALUE:per-working-gallon-cost-narrative]]` | "What does 16:1 mean?" answer | `roughly the cost of a cup of coffee per working gallon at pro dilution` |
| `[[VALUE:made-in-canada]]` | "Where are your products made?" answer (NEW Q) | `Made in Canada` |
| `[[DISCOUNT]]` | "Do you offer first-time customer discounts?" answer (NEW Q) | Active discount campaign banner from theme settings |

No `[[PRICE:handle]]` or `[[COMPETITOR:slug]]` tokens used — not appropriate for FAQ context. PRICE tokens belong on PDPs and pillars where a specific SKU is in scope; COMPETITOR tokens belong in comparison content. The FAQ stays product-agnostic.

## Key changes from current Shopify FAQ

| Pre-token (current live) | Token-driven (this rewrite) |
|---|---|
| Hardcoded "16:1" (3 occurrences) | `[[VALUE:dilution-ratio]]` |
| Hardcoded "17 working gallons" | `[[VALUE:working-gallons-per-bottle]]` |
| Hardcoded "At $24.99 CAD per gallon, that works out to roughly $1.50 per working gallon" | `[[VALUE:per-working-gallon-cost-narrative]]` (per-market aware; rotates with any future price change) |
| No "Where are products made?" Q | NEW Q with `[[VALUE:made-in-canada]]` |
| No discount mention anywhere on FAQ | NEW Q with `[[DISCOUNT]]` banner |
| Groomer Program: "Free sample sizes (eight bottles total) for professional dog groomers and grooming schools... We verify business status before sending samples." | Path B framing: free 8oz samples for Canadian groomers, first-order discount for US groomers (since US fulfillment doesn't ship non-revenue samples). Sample count framed generically ("each Furgenics formula") to avoid counting-stale-with-new-launches. "Verify business status" replaced with the lighter "sample-shop link by email" flow that matches the actual rollout. |
| Groomer Program: "Active professional dog grooming salons, mobile groomers, or grooming schools in Canada or the United States. We verify business status before sending samples." | Cleaner: "in Canada or the United States. The program is for working groomers — we don't ship samples to individual pet owners." |
| Groomer Program: "Approval typically takes 1–2 business days" | "Canadian groomers receive their sample-shop link by email within one business day. US groomers receive their first-order discount code the same way." Matches the n8n-automated form-submission flow. |

## Pre-publish checklist

- [ ] Page handle: `faqs` (existing — preserves any indexing)
- [ ] **Template: `page.content-pillar`** — critical for token substitution. If the page is currently on `page` (default), swap to `page.content-pillar` BEFORE pasting, otherwise tokens display as raw text. Per `content-style-guide.md`, FAQs were migrated to content-pillar on 2026-05-20.
- [ ] SEO title: "Help & FAQ — Furgenics Professional Dog Grooming Products" (unchanged)
- [ ] SEO description: "Common questions about Furgenics professional dog shampoo and conditioner gallons, 16:1 dilution, ordering, the Groomer Program, and our 30-day refund policy." (unchanged — SEO descriptions don't run through the token pipeline; the "16:1" here is hardcoded but invariant so this is fine)
- [ ] Visibility: Visible (publish, not draft)
- [ ] Visual verification: tokens render correctly on `/en-ca/pages/faqs` and `/en-us/pages/faqs`. Check the four token sites:
  - "What does 16:1 mean?" answer renders the dilution + working-gallons + cost-narrative substitutions inline
  - "Where are your products made?" answer starts with "Made in Canada"
  - "Do you offer first-time customer discounts?" shows the discount banner block (not raw `[[DISCOUNT]]` text)
  - "How do I dilute a Furgenics shampoo?" answer contains "16:1 concentrate" inline

## Change log

- **2026-05-21** — v2 token-driven rewrite. Heavy update to "What does 16:1 mean?" answer (3 tokens), light update to "How do I dilute?" (1 token), 2 new questions added ("Where are products made?" with `[[VALUE:made-in-canada]]` and "Do you offer first-time customer discounts?" with `[[DISCOUNT]]`). Groomer Program section rewritten for Path B (CA samples / US first-order discount) per the canonical wording in `groomer-program.md` and the simpler rollout decided 2026-05-21 (any Canadian groomer who fills out the form receives the sample-shop link, no verification step). Pre-publish checklist corrected: template requirement is `page.content-pillar` (was incorrectly listed as `page` default in v1 — stale per content-style-guide.md 2026-05-20 migration).
- **2026-05-20** — v1 created during the content quick-wins ship session. Initial FAQ structure + 17 questions + Groomer Program v1 wording. Template at that time was `page` default; migrated to `page.content-pillar` later same day per content-style-guide.md.
