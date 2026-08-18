# Best Professional Shampoo for Goldendoodles — pillar rewrite (v3)

> **Page draft for `/pages/best-shampoo-goldendoodle`.** Targets `breed-01`. Paste-ready body: `best-shampoo-goldendoodle.html`.
>
> v2 (2026-05-21) tokenized prices but still sold **FUR-020** (`2in1-doodle-shampoo-conditioner`) as in-stock. That handle is DRAFT / storefront **404** both markets. Stephen: keep FUR-020 draft. v3 points CTAs at live SKUs and waitlists the doodle gallon via email.

---

## Meta + technical

- **URL:** `/pages/best-shampoo-goldendoodle` (unchanged)
- **Template:** `page.content-pillar` (tokens substitute only if the live theme still has that section)
- **Page title (keep or refine):** `Best Professional Shampoo for Goldendoodles | Furgenics`
- **SEO title (UPDATE):** `Best Professional Shampoo for Goldendoodles | Salon Protocol`
- **Meta description (UPDATE, 121 chars, no price, no FUR-020):** `Salon-ready Goldendoodle wash protocol: 16:1 concentrate, 2-in-1 plus deep moisture. Ships to salons in Canada and the US.`
- **Hero image:** existing `2_in_1_Shampoo.jpg` (alt already names the hypoallergenic 2-in-1)

---

## What's different from v2

| v2 | v3 |
|---|---|
| Daily driver FUR-020 + `[[PRICE:2in1-doodle-shampoo-conditioner]]` + Order now (404) | Daily driver **FUR-005** + follow-up **FUR-021**; Order now hits a live PDP |
| “washes approximately 340 medium Goldendoodles” | `[[VALUE:washes-medium]]` at `[[VALUE:usage-oz-medium]]` oz (~198 at 11 oz) |
| Protocol 3–4 oz (contradicts 340 and the economics model) | Protocol uses `[[VALUE:usage-oz-medium]]` so math matches |
| `[[VALUE:dilution-ratio]]` after “Apply at” / “dilute” | `[[VALUE:dilution-ratio-bare]]` → `16:1` |
| Sulfate-free in “what to look for” + puppy FAQ | Dropped (INCI cleanup still pending) |
| Pairing includes Lavender Spa + Oatmeal shampoo (both 404) | Pairing is FUR-005 / FUR-021 / FUR-010 conditioner (all ACTIVE) |
| “per-gallon price gap (rendered above for your market)” | Plain sentence pointing at rendered PRICE + COMPETITOR figures |
| Invented Klaviyo waitlist | `info@furgenics.com` subject “Goldendoodle gallon waitlist” |
| Checklist expected $24.99 CAD everywhere | `[[PRICE]]` is Markets-live (FUR-005 $37.99 CAD / $34.99 USD; FUR-021 same split) |

---

## Pre-publish checklist

- [ ] SEO title + meta updated in Shopify (no `$24.99`, no “2-in-1 Doodle” as if it is for sale)
- [ ] Paste v3 HTML into the page source view
- [ ] `/en-ca/` and `/en-us/`: FUR-005 and FUR-021 prices render; no raw `[[TOKEN]]`; no link to `/products/2in1-doodle-shampoo-conditioner` except in waitlist prose (v3 HTML has **zero** that href)
- [ ] Discount banner is FUR20 (theme settings), not FUR50
- [ ] Confirm live theme still runs token substitution on `page.content-pillar` (`main-page-pillar.liquid` is not in this repo)

## FAQPage JSON-LD (update with the page)

Use the six v3 questions in the HTML (puppy / non-doodle curls / vs Chris Christensen / matted dilution / sample / doodle-gallon waitlist). Do not ship the v2 FAQ that names 2-in-1 Doodle as a live product or says sulfate-free.
