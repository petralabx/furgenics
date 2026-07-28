# Content quick wins shipped — 2026-05-20

> **Status:** All 7 fixes from `analyses/2026-05-20-live-pillar-content-audit.md` recommendations are live as of 2026-05-20. This analysis documents what shipped and what it unblocks.

## What shipped

| # | Page | Fix | Severity (pre-ship) |
|---|---|---|---|
| 1 | `/pages/furgenics-vs-bio-groom` | `mailto:hello@furgenics.com` → `mailto:info@furgenics.com` | HIGH |
| 2 | `/pages/best-shampoo-goldendoodle` | Same `mailto:` fix | HIGH |
| 3 | `/pages/oatmeal-aloe-sensitive-skin-dog-shampoo` | Same `mailto:` fix | HIGH |
| 4 | `/pages/terms-and-conditions` Section 24 | Mailing address completed: `Vaughan, Ontario, Canada` → `Furgenics, 90 Moyal Ct, Concord, Ontario L4K 4R8, Canada` | MEDIUM |
| 5 | `/pages/terms-and-conditions` Section 6 | Generalized away from hardcoded FUR50/50%/4-gallon framing; campaign-rotation-resilient | MEDIUM |
| 6 | `/pages/about-us` | Removed hardcoded `at $40–60 per gallon equivalent` competitor benchmark | LOW |
| 7 | `/pages/faqs` | Template `Default page` → `page.content-pillar` (Liquid-renders, prerequisite for future snippet adds) | LOW-MEDIUM |

## Why each one mattered

### Fixes 1-3: email-link bug

The 2026-05-05 email cleanup audit corrected the displayed email text from `info@furgenicspetgrooming.com` (a never-working address) to `info@furgenics.com` across the site. But on 3 of the 6 pillars, the `href` value of the linked email was *also* wrong — pointing to `mailto:hello@furgenics.com`. Display said one thing; click sent the customer to a different (and equally dead) inbox.

Severity rationale: HIGH because this is a live conversion leak. Visitors to high-intent comparison/breed pages who clicked "Email us with questions" were silently failing. The number is unknowable — Shopify doesn't log mailto-click attempts — but the floor is non-zero on pages getting traffic.

The cleanup audit caught the display-text bug; the link-href bug surfaced 15 days later during the live MCP content pull. Lesson: future cleanup audits should grep BOTH display text AND `href` attributes (or run the linked-content through a `mailto:` validator).

### Fix 4: ToS mailing address completeness

ToS Section 24 ("Contact us") gave only `Furgenics, Vaughan, Ontario, Canada` as the mailing address. For a legal document that includes:
- Section 17 limitation of liability ($100 CAD or 12 months of purchases)
- Section 18 indemnification including animal-harm claims
- Section 21 governing law (Ontario, courts of Toronto)
- Section 22 class-action waiver

…the full postal address (`90 Moyal Ct, Concord, ON L4K 4R8`) should be available so any party serving notice or filing a claim has a complete service address. Now matches `business-identity.md`.

### Fix 5: ToS Section 6 generalization

Section 6 ("Promotional codes and discounts") read: "From time to time we offer promotional discount codes **such as FUR50** (50% off your first order, maximum four gallons, one use per customer)."

Two problems with the original framing:
1. **Goes stale on every campaign rotation.** FUR50 → FUR20 → SUMMER25 each require a legal-doc revision. That's an unforced ongoing maintenance burden.
2. **Conflicts with the C+Markets `discount-banner` snippet architecture.** The snippet pulls the active code + percent + max-units + eligibility from theme settings — one source of truth. If the ToS also hardcodes them, the two surfaces can drift (theme-setting says FUR20, ToS says FUR50).

New opening: "From time to time we offer promotional discount codes. The specific code, discount percentage, eligibility, maximum order quantity, and other limits are displayed at the time of offer and at checkout." Bullet-pointed rules below the opener (one use per customer, can't combine, no cash value, reseller-revocation, etc.) kept verbatim.

This pattern — legal docs describe the rules, not the specifics — is the right shape for any field that rotates. Apply the same principle elsewhere as it comes up.

### Fix 6: About Us "$40-60" removal

About Us "Why we exist" paragraph contained: "ultra-premium imports at $40–60 per gallon equivalent." That's a competitor benchmark without an `as_of` date, mentioned in the body of a page that doesn't otherwise lean into hard numbers. Per `content-style-guide.md`, competitor benchmarks need either the `competitor-price` snippet (with explicit as-of) or removal.

Removed `at $40–60 per gallon equivalent`. The sentence still works: "ultra-premium imports, and generic-value products that trade quality for price." Cleaner, no maintenance debt.

### Fix 7: FAQs template change

The FAQs page was using Shopify's default `page.liquid` template, which doesn't reliably render Liquid in body content across themes. We need it to render Liquid in body so we can drop in `value-math` snippets where the FAQs explain "16:1 dilution" and "17 working gallons" — invariant claims that should come from the snippet's single source of truth.

Template switched to `page.content-pillar` (the same custom template used by all 6 pillar pages, confirmed Liquid-renders body). Content unchanged. Visual layout *should* be unchanged — needs a quick visual confirmation by Stephen.

## What this unblocks

With these 7 fixes shipped, the C+Markets snippet rewrite of existing content can begin without dragging known defects forward. Specifically:

- **The 6 pillars are ready for snippet conversion.** Email link bug is gone; pricing/value-math hardcoding is the only remaining work per `analyses/2026-05-20-live-pillar-content-audit.md`.
- **The legal layer (ToS) is durable to campaign rotations.** When FUR50 → FUR20 ships (via theme settings + `discount-banner` snippet), no ToS revision needed.
- **FAQs can absorb value-math snippets** in the next edit.
- **About Us is consistent with the no-hardcoded-competitor-prices rule** ahead of any further About Us improvements.

## What's still on the to-do list (in priority order)

1. **First pillar rewrite — `furgenics-vs-bio-groom`** (highest market-map priority — comparison cluster gets highest-intent traffic). Convert all hardcoded `$24.99 CAD` and `$49.94 CAD` (Bio-Groom) references to `pricing` + `competitor-price` snippet calls. Convert value-math claims. Re-link `/pages/groomer-program` → new CA Groomer Program page (once that's live).
2. **Publish the Canadian Groomer Program page** (`brands/furgenics/content-drafts/groomer-program-canada.html` is ready; needs the 4 snippets + `settings_schema.json` paste-over deployed to live theme first).
3. **Draft + publish the US Groomer Program page** (mirror CA structure with first-order discount offer).
4. **Continue pillar rewrites:** bulk-supply → deshedding → goldendoodle → oatmeal-aloe → dilute (in that order, by traffic priority).
5. **Light About Us edit** — add `value-math` snippets for "16:1" and "17 working gallons" references.
6. **FAQs light edit** — same snippet additions.
7. **9 gallon PDPs** — answer-first openings + snippet-driven pricing + alt text + meta. Each PDP ~30 min; ~5 hours total.
8. **US sibling pillar** — `/en-us/pages/bulk-dog-shampoo-for-us-groomers` mirroring the CA pillar.

## Cross-references

- `analyses/2026-05-20-live-pillar-content-audit.md` — the audit that surfaced the fixes
- `business-identity.md` — canonical address used in Fix 4
- `content-style-guide.md` — the no-hardcoded-discount / no-hardcoded-competitor rules these fixes align with
- `market-map.md` — informs the priority order for the upcoming pillar rewrites
- `optimization-log.md` — the canonical ship log; this analysis cross-references the 2026-05-20 entry there
