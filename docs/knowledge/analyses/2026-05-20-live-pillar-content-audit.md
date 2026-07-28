# Live pillar content audit — 2026-05-20

> **Scope:** 6 published pillar pages on furgenics.com, pulled via MCP `read-shopify-page` on 2026-05-20 as the kickoff for the C + Markets snippet-driven rewrite of all content pages. The 5 remaining published content pages (about-us, contact, faqs, shipping-returns, terms-and-conditions) are next.

## Pages pulled (6 of 11 in-scope)

| Handle | Title | Template | Last updated | URL |
|---|---|---|---|---|
| `bulk-dog-shampoo-for-canadian-mobile-groomers` | Bulk Dog Shampoo for Canadian Mobile Groomers | `content-pillar` | 2026-05-20 | `/pages/bulk-dog-shampoo-for-canadian-mobile-groomers` |
| `furgenics-vs-bio-groom` | Furgenics vs Bio-Groom: Professional Dog Shampoo Comparison | `content-pillar` | 2026-05-12 | `/pages/furgenics-vs-bio-groom` |
| `best-shampoo-goldendoodle` | Best Professional Shampoo for Goldendoodles | `content-pillar` | 2026-05-12 | `/pages/best-shampoo-goldendoodle` |
| `oatmeal-aloe-sensitive-skin-dog-shampoo` | Oatmeal & Aloe Shampoo for Sensitive-Skin Dogs | `content-pillar` | 2026-05-12 | `/pages/oatmeal-aloe-sensitive-skin-dog-shampoo` |
| `deshedding-shampoo-huskies-german-shepherds` | Best Professional Deshedding Shampoo for Huskies and German Shepherds | `content-pillar` | 2026-05-20 | `/pages/deshedding-shampoo-huskies-german-shepherds` |
| `how-to-dilute-dog-shampoo-16-to-1` | How to Dilute Professional Dog Shampoo at 16:1 | `content-pillar` | 2026-05-20 | `/pages/how-to-dilute-dog-shampoo-16-to-1` |

All 6 use the `content-pillar` template, which renders Liquid in body — **snippet rewrites will work without template changes.**

## Findings ranked by severity

| Severity | Finding | Affected pages | Remediation |
|---|---|---|---|
| **HIGH** | Broken `mailto:` link routes to non-existent `hello@furgenics.com` despite displayed text saying `info@furgenics.com` | `furgenics-vs-bio-groom`, `best-shampoo-goldendoodle`, `oatmeal-aloe-sensitive-skin-dog-shampoo` (3 of 6) | Find-and-replace `mailto:hello@furgenics.com` → `mailto:info@furgenics.com` per page via Shopify admin. ~5 min total. |
| **MEDIUM** | 15+ hardcoded competitor prices without `as_of` annotation | All 6 pillars (varies per page) | Replace with `{% render 'competitor-price' %}` snippet calls; date-stamp `as_of: '2026-04'` for current data |
| **MEDIUM** | ~15+ hardcoded Furgenics gallon prices (`$24.99 CAD`, `$19 USD`) | All 6 pillars | Replace with `{% render 'pricing', handle: '<handle>' %}` — Markets renders correct currency |
| **MEDIUM** | All pages link to legacy `/pages/groomer-program` (noindex). Will break when CA/US Groomer Program pair ships. | All 6 pillars | 301 redirect at Markets level OR manually update links to `/en-ca/pages/groomer-program-canada` (CA) and `/en-us/pages/groomer-program-usa` (US) |
| **MEDIUM** | Hardcoded value-math claims ("16:1 concentrate", "17 working gallons", "approximately 340 medium dogs per gallon") | All 6 pillars | Replace with `{% render 'value-math', claim: 'dilution-ratio' %}` etc. |
| **LOW** | Inconsistent geographic phrasing — "Ontario" / "Vaughan, Ontario" / "made in Canada" all used across pages | All 6 pillars | Standardize on a `value-math` claim like `made-in-canada` or `manufactured-in-vaughan-on` |
| **LOW** | Hardcoded discount references no longer appear in pillar bodies (good) — discount-banner snippet is the future path | None of the 6 (already free of hardcoded FUR50 in body) | No action; new content uses `{% render 'discount-banner' %}` per style guide |

**Note on severity calibration:** the email bug is HIGH because it's an active broken-link defect that leaks customer intent to a dead address — affects conversion right now. Everything else is MEDIUM/LOW because the pages WORK (content is accurate, just hardcoded) — these are maintenance taxes that compound over time but don't break anything today.

## Detailed: the email bug

Reproducer: visit any of the three affected pages, click the email link at the bottom. The browser opens a `mailto:` to `hello@furgenics.com` despite the display showing `info@furgenics.com`.

Root cause: during the 2026-05-05 email cleanup (per `analyses/2026-05-05-email-cleanup-audit.md`), the displayed text was updated from `info@furgenicspetgrooming.com` → `info@furgenics.com`, but the `href` attribute on three pages picked up a different (also-incorrect) value: `mailto:hello@furgenics.com`. Possibly an autocomplete or copy-paste residue from an earlier draft.

The cleanup was substantively correct — the visible email is now right. The bug is in the link target, which most users don't inspect.

Fixes needed (per page):
- Open Shopify admin → Pages → click the affected page → Source view (`</>` icon in editor) → find `mailto:hello@furgenics.com` → replace with `mailto:info@furgenics.com` → save.
- OR: bulk fix via the Shopify Pages API once Phase B writer ships.

This finding should also be captured in `optimization-log.md` when fixed.

## Detailed: pricing inventory — what needs the `pricing` snippet

The `pricing` snippet (`brands/furgenics/theme-drafts/snippets/pricing.liquid`) replaces hardcoded Furgenics gallon prices with live Markets-aware product prices. Each call needs the right Shopify product handle.

Confirmed handles (per Stephen, 2026-05-20):

| Product | Handle |
|---|---|
| Hypoallergenic Shampoo Gallon | `hypoallergenic-shampoo-gallon` |
| Oatmeal & Aloe Shampoo Gallon | `oatmeal-aloe-shampoo-gallon` |
| Oatmeal & Aloe Conditioner Gallon | `oatmeal-aloe-conditioner-gallon` |
| Deep Moisturizing Conditioner Gallon | `deep-moisturizing-conditioner-gallon` |
| Deshedding Shampoo | `deshedding-shampoo` _(no `-gallon` suffix)_ |
| Deshedding Conditioner | `deshedding-conditioner` _(no `-gallon` suffix)_ |
| 2-in-1 Hypoallergenic Shampoo & Conditioner | `2in1-hypoallergenic-shampoo-conditioner` |

Handles still to confirm (referenced in live pillar bodies but not yet verified):
- 2-in-1 Doodle Shampoo & Conditioner — body references `2in1-doodle-shampoo-conditioner` — verify
- Lavender Spa Shampoo — body references `lavender-spa-shampoo` — verify

Per-page conversion (estimated effort):
- `furgenics-vs-bio-groom`: ~6 `$24.99 CAD` references → ~30 min rewrite
- `bulk-dog-shampoo-for-canadian-mobile-groomers`: ~5 references → ~30 min
- `best-shampoo-goldendoodle`: ~3 references → ~20 min
- `oatmeal-aloe-sensitive-skin-dog-shampoo`: ~4 references → ~25 min
- `deshedding-shampoo-huskies-german-shepherds`: ~3 references → ~20 min
- `how-to-dilute-dog-shampoo-16-to-1`: ~3 references → ~25 min

Total: ~2.5–3 hours of focused rewrite work across all 6 pillars.

## Detailed: competitor pricing inventory

Each entry needs a `competitor-price` snippet call with `as_of: '2026-04'` (when the original benchmarks were captured per `competitor-intel.md`).

| Competitor | Product mentioned | Price | Appears on |
|---|---|---|---|
| Bio-Groom | Hypo-Groom gallon | $49.94 CAD | bulk-dog-shampoo, furgenics-vs-bio-groom |
| Coat Handler | 15-in-1 gallon | $60-70 CAD via distributors | bulk-dog-shampoo |
| Coat Handler | Anti-Shed gallon | $32-38 USD | deshedding-shampoo-huskies-gsds |
| Chris Christensen | Day to Day gallon | $79 USD | best-shampoo-goldendoodle |
| Chris Christensen | (mentioned generally) | premium tier | bulk-dog-shampoo |
| iGroom | Silk Shampoo gallon | $65 USD | best-shampoo-goldendoodle |
| Isle of Dogs | Evening Primrose Oil Shampoo | $60+ per gallon | best-shampoo-goldendoodle |
| Earthbath | Oatmeal & Aloe gallon | $32 CAD | oatmeal-aloe-sensitive-skin |
| Earthbath | Shed Control Shampoo | (no specific price) | deshedding-shampoo-huskies-gsds |
| Burt's Bees | Oatmeal Shampoo 16oz | $14 CAD | oatmeal-aloe-sensitive-skin |
| Tropiclean Pro | Hypoallergenic Oatmeal gallon | $45-60 USD | oatmeal-aloe-sensitive-skin |
| Nature's Specialties | Plum Silky gallon | (price not specified, position) | bulk-dog-shampoo |
| Nature's Specialties | Colloidal Oatmeal gallon | $80 USD | oatmeal-aloe-sensitive-skin |
| #1 All Systems | Botanical Oatmeal gallon | $75+ USD | oatmeal-aloe-sensitive-skin |
| FURminator | deShedding Ultra Premium 16oz | $14-18 USD | deshedding-shampoo-huskies-gsds |
| Bark2Basics | De-Shedding gallon | $39 USD | deshedding-shampoo-huskies-gsds |
| Show Season | (mentioned generally) | (no specific price) | bulk-dog-shampoo |

**Maintenance implication:** once these are snippet-driven with `as_of: '2026-04'`, the next competitor-intel.md refresh (quarterly per the style guide) updates the prices and the `as_of` date. One file edit, one set of dates, propagates to every page using the snippet for that competitor.

## Detailed: value-math claims used in the live pillars

These should become `value-math` snippet calls. Some are already in the snippet's approved claim list; some need to be added.

Current approved claims in `value-math.liquid`:
- ✅ `dilution-ratio` ("16:1 concentrate") — heavy use across all 6 pillars
- ✅ `working-gallons-per-bottle` ("17 working gallons") — heavy use
- ✅ `per-working-gallon-cost-narrative` ("roughly the cost of a cup of coffee per working gallon") — light use
- ✅ `made-in-canada` ("Made in Canada") — appears as variations ("made in Ontario", "manufactured in Vaughan, Ontario", "Canadian-made")
- ✅ `professional-grade` ("built for professional salons") — moderate use
- ✅ `pro-vs-retail-positioning` — light use, mostly implicit

Claims to consider adding to `value-math.liquid`:
- `dogs-per-gallon-medium` → "approximately 340 medium dogs per concentrate gallon"
- `gallon-volume` → "128 oz / 3.79 L / 1 gallon"
- `per-dog-cost-narrative` → "roughly $0.07 CAD per dog at typical 3 oz usage"
- `shipping-canada` → "ships from Ontario anywhere in Canada in 3–5 business days"
- `shelf-life` → "24-month shelf life unopened, 12–18 months once diluted" (if substantiated)
- `weekly-volume-typical-mobile` → "6–10 dogs per day, ~40 per week" (this might be context, not claim — leave as prose)

**Recommendation:** add `dogs-per-gallon-medium`, `gallon-volume`, and `per-dog-cost-narrative` to the next `value-math.liquid` revision. They appear repeatedly across pillars and are exactly the kind of invariant claim the snippet is designed for.

## Detailed: groomer-program link reroute

Every pillar currently links `<a href="/pages/groomer-program">`. The `/pages/groomer-program` page exists in Shopify but is `isPublished: false` (per the page listing pulled earlier) — it's effectively unreachable. The links are broken in practice.

Once the CA/US Groomer Program pair ships (`groomer-program-canada` + `groomer-program-usa`), each link can:
- **Option A** — Set up a 301 redirect from `/pages/groomer-program` → `/en-ca/pages/groomer-program-canada` (assuming Markets resolves geo-routing to the US sibling). One redirect rule fixes all 6 pillars at once.
- **Option B** — Hand-update each pillar link to point to the new CA page directly. Six page edits.
- **Option C** — Use Markets' built-in URL substitution if it handles relative `/pages/...` links to per-market equivalents. (Need to verify Markets behavior here.)

**Recommendation: A.** Set up the redirect at the same time as publishing the new groomer-program-canada page. One redirect rule covers all current and future internal/external links to the old URL.

## Recommended ship order (after this audit)

1. **NOW: fix the email bug.** 3 page edits, ~5 minutes total. Highest severity, blocking nothing else but actively defective.
2. **Pull remaining 5 content pages** (about-us, contact, faqs, shipping-returns, terms-and-conditions). Verify same conventions hold + check for additional bugs.
3. **Publish the Canadian Groomer Program landing page** (`groomer-program-canada.{html,md}` already drafted; needs only Phase 1 snippet deployment + form embed). Submits the page draft to GSC for priority indexing.
4. **Deploy the 4 snippets + settings_schema.json** to the live theme (Phase 1 + Phase 2 prerequisites for the pillar rewrites).
5. **Rewrite the 6 pillars** one at a time, replacing hardcoded values with snippets. Ship order by impact: comparison (`furgenics-vs-bio-groom` — gets highest-intent traffic) first, then bulk-supply, then deshedding, then goldendoodle, then oatmeal-aloe, then dilute.
6. **Set up the `/pages/groomer-program` → `/en-ca/pages/groomer-program-canada` 301.**
7. **Draft + publish the US Groomer Program page** (`groomer-program-usa`).
8. **Rewrite the 9 gallon PDPs** (each needs its own answer-first block + snippets).

Phase 3 (page rewrites) is realistically 5-7 working sessions to complete across pillars + PDPs.

## What this analysis confirms

- The C + Markets architecture is the right call — every pillar has the same maintenance trap (hardcoded prices, hardcoded value math) and snippets eliminate it permanently.
- The pillars are well-written. The rewrite isn't about content quality; it's about pulling out hardcoded values so the same content survives price changes, currency switches, and competitor price refreshes.
- One real defect (email bug) was caught only because of this live-pull. Future quarterly content audits should be a regular ritual — the cron can detect the pricing/value-math drift programmatically once we build that auditor.

## Cross-references

- `content-style-guide.md` — snippet API + maintenance rules
- `business-identity.md` — confirmed email (info@furgenics.com) and address (90 Moyal Ct, Concord, ON L4K 4R8)
- `market-map.md` — query-to-page mapping; informs which pillars get rewrite priority
- `competitor-intel.md` — competitor positioning data that feeds the `competitor-price` snippet calls
- `optimization-log.md` — should record the email-bug fix and each pillar rewrite as `ship` events
- `theme-drafts/snippets/pricing.liquid`, `competitor-price.liquid`, `value-math.liquid`, `discount-banner.liquid` — the four snippets that drive the rewrites
- `analyses/2026-05-05-email-cleanup-audit.md` — the original email cleanup audit that identified (and mostly fixed) the email problem; this analysis surfaces what that cleanup missed

## Next concrete action

Continue with **option A from the prior turn:** fix the email bug (3 page edits in Shopify admin) AND continue pulling the remaining 5 pages (about-us, contact, faqs, shipping-returns, terms-and-conditions) so we have full visibility before rewrites begin.
