# Furgenics Refund Policy

> **Content type:** Shopify policy page — published to `/policies/refund-policy` (Shopify-managed policy URL, auto-linked from checkout and footer)
> **Status:** Draft, awaiting review and publish
> **Target prompts:** N/A — this is a legal/operational page, not an AEO target. No measurement attached.
> **Drafted:** 2026-04-27 (revised same day)
> **Why this page:** The schema v3 deployment on 2026-04-21 declared a refund-only return policy in structured data, but the customer-facing page text needs to match. This draft codifies the existing 30-day refund-only / no-return-shipping policy from heartbeat.md.
> **Drafting notes:** Initial draft (commit 60104b9) assumed US customers were routed to Amazon for refunds. Stephen clarified 2026-04-27 that furgenics.com is the merchant of record for ALL orders regardless of destination — Amazon Multi-Channel Fulfillment is backend-only and invisible to customers. The policy was therefore simplified to a single unified refund path (email info@furgenics.com, 30-day window, no return required) for all orders bought from furgenics.com. The Amazon-routing language was removed entirely. The carve-out for "Furgenics products purchased through other retailers" remains, in case the customer bought from a third-party reseller or a future direct Amazon listing — but is no longer the primary US path. Support email throughout: info@furgenics.com per Stephen confirmation 2026-04-27 (heartbeat.md had info@furgenicspetgrooming.com which appears to be wrong; the four live pillar pages and two new drafts use hello@furgenics.com which is also wrong — both need separate cleanup).

---

# Refund Policy

We want every groomer who tries Furgenics to be confident in the purchase. If a product doesn't work for you, we'll refund it.

## The basics

- **30-day window.** You have 30 days from the date your order was delivered to request a refund.
- **No return shipping required.** Once your refund is approved, you can keep the remaining product or recycle the bottle locally — whichever makes sense. We don't ask you to ship the product back.
- **Full refund of the purchase price.** Refunds are issued to the original payment method.
- **Original shipping charges are refunded** if the return is due to a defect, damage in transit, or a fulfillment error on our end. Original shipping is not refunded for change-of-mind returns.

## How to request a refund

For any order placed on furgenics.com, regardless of where it shipped to, email **info@furgenics.com** with:

- Your order number (starts with `#`, found in your order confirmation email)
- A brief description of the issue (didn't perform as expected, allergic reaction, damaged in transit, wrong product, etc.)
- A photo if the product arrived damaged or if you received the wrong item

We'll respond within 2 business days. Approved refunds are processed to your original payment method within 5–10 business days; depending on your bank, it can take an additional 3–7 business days for the refund to appear on your statement.

## Damaged or defective products

If a product arrives damaged — leaking, with a broken cap, or otherwise unusable — we'll refund or replace it at no cost to you. Email us within 7 days of delivery with a photo and your order number, and we'll send a replacement or process a refund, whichever you prefer. You don't need to ship the damaged product back.

If a product is defective in a way that's not visible at delivery (separates strangely, doesn't lather correctly, has an unusual smell), email us within 30 days with a description and we'll refund or replace it.

## Wrong product received

If we shipped the wrong product, email **info@furgenics.com** with your order number and a photo of what you received. We'll ship the correct product to you and either refund the original or arrange a return at our expense — your call.

## Allergic or skin reactions

Furgenics shampoos and conditioners are formulated for dogs, pH-balanced for canine skin, and free of common irritants (sulfates, parabens, dyes). However, individual dogs can have unpredictable reactions to any new product, including ours.

If your dog experiences an allergic reaction or skin irritation after using a Furgenics product, **stop using the product immediately and consult your veterinarian.** We'll provide a full refund within the 30-day window — just email us with your order number and a brief description. You don't need to return the product.

## Promotional discount orders (FUR50 and similar)

Orders placed with a first-time-customer discount code such as FUR50 are eligible for a refund under the same terms as full-price orders. If you receive a refund on an order that used a first-time discount code, the discount code cannot be reused on a future order — each first-time code is limited to one use per customer.

## Groomer Program samples

Free 8oz samples distributed through the Groomer Program are not refundable, since they are provided at no cost. If a free sample arrives damaged or you have a concern about a sample, please email us anyway — we'll send a replacement sample or address the issue, even though no refund is involved.

## Wholesale and bulk orders

Wholesale orders and bulk purchases (typically 6+ gallons) follow a separate refund process and are handled case-by-case. If you placed a wholesale order and need to discuss a refund, email **info@furgenics.com** with your purchase order or invoice number and we'll work with you directly.

## What's not eligible for a refund

- Orders placed more than 30 days before the refund request (with the exception of products under manufacturer warranty for hidden defects, which are handled case-by-case)
- Free samples from the Groomer Program (since no payment was made)
- Subscription or recurring orders that have already shipped, beyond the 30-day window for each individual shipment
- Furgenics products purchased through retailers other than furgenics.com. If you bought a Furgenics product elsewhere (Amazon.com, a pet store, a distributor, or any other third-party retailer), please use that retailer's return process — they have your purchase record and we don't.

## Where we ship

Furgenics currently ships to addresses in Canada and the United States. We do not currently ship outside of Canada and the U.S.

## Your statutory rights

This refund policy is in addition to, and does not limit, any rights you have under applicable consumer protection law, including (if you are a Canadian customer) the consumer protection legislation of your province or territory.

## Contact us

Questions about a refund or return?

- **Email:** info@furgenics.com
- **Mailing address:** Furgenics, Vaughan, Ontario, Canada

We respond to all refund inquiries within 2 business days.

---

**Effective date:** [Date of publish]
**Last updated:** [Date of publish]

---

## Publish checklist (for Stephen)

This is a Shopify-managed policy page, not a regular Page. Two paths to publish:

**Recommended path — Shopify Settings policy field (auto-linked at checkout and in footer):**

1. Shopify admin → **Settings** → **Policies**
2. Find the **Refund policy** field (Shopify pre-populates a generic template here; replace it)
3. Click **Edit** on the Refund policy
4. Click the `<>` button in the rich text editor toolbar to switch to HTML view
5. Paste the contents of `refund-policy.html`
6. Switch back to rendered view, verify it looks right
7. Replace `[Date of publish]` placeholders with today's date in both the **Effective date** and **Last updated** lines
8. Click **Save**

The policy now lives at `https://furgenics.com/policies/refund-policy` and is automatically linked from the footer and the checkout page.

**Alternative path — if you'd rather have it as a regular Page:**

1. Online Store → Pages → Add page
2. Title: `Refund Policy`
3. Paste the HTML
4. URL handle: `refund-policy` (lives at `/pages/refund-policy`)
5. Use the default page template (NOT `page.content-pillar` — that template is for long-form AEO content with a hero image)
6. Make sure to also remove or update the auto-generated Shopify policy at Settings → Policies, otherwise both will exist with conflicting language

The Settings→Policies path is preferred because it's where Shopify expects refund policies to live, and where customer-facing flows (checkout, footer, return links) point automatically.

## Pre-publish review checklist (for Stephen)

Before publishing, review and confirm:

- [ ] **Counsel review.** This draft is a reasonable starting point but should be reviewed by a lawyer or someone familiar with Canadian e-commerce law before going live, particularly the allergic-reaction language and the no-return-required commitment.
- [ ] **"7 days" and "30 days" windows.** This draft uses 7 days to report damaged-on-arrival and 30 days for general refunds. Confirm these match operational capacity — if you can't reliably respond to a 7-day damage claim with a replacement gallon, soften the language. Note that for US orders fulfilled by Amazon MCF, replacement-shipment turnaround may be slower than Vaughan-direct, which is worth pressure-testing before committing.
- [ ] **Wholesale order threshold.** This draft uses 6+ gallons as the wholesale-bulk threshold. Adjust to match Furgenics' actual wholesale program structure.
- [ ] **Subscription orders.** This draft references "subscription or recurring orders" in the not-eligible section. If Furgenics doesn't offer subscriptions, remove the line. If it does, the policy may need a dedicated subscription-cancellation section.
- [ ] **Mailing address.** "Vaughan, Ontario, Canada" is the placeholder. Replace with the full street address if you want a mailable contact, or leave as-is if email-only is intentional.
- [ ] **Direct Amazon listings (if any).** This policy assumes Furgenics sells only through furgenics.com (with Amazon MCF as backend fulfillment). If Furgenics also has direct seller listings on Amazon.com (a separate sales channel from MCF), those orders fall under Amazon's marketplace return policy and the "unauthorized retailer" language may need adjustment to be clearer.
- [ ] **Effective date.** Replace `[Date of publish]` placeholders with the actual publish date in two places (Effective date and Last updated lines).
- [ ] **Log the publish event** in `brands/furgenics/knowledge/log.md` as a `ship` entry referencing this draft path.

## Related cleanup (separate from publishing this policy)

The support email confirmation surfaced two pre-existing inconsistencies in the wiki and live pages that should be fixed:

- **`heartbeat.md`** lists support email as `info@furgenicspetgrooming.com`. Per Stephen 2026-04-27, the canonical support email is `info@furgenics.com`. Heartbeat needs correction.
- **Six content drafts** (4 live pillar pages + 2 new) use `hello@furgenics.com` in their CTAs:
  - `bulk-dog-shampoo-for-canadian-mobile-groomers.{md,html}` (live)
  - `furgenics-vs-bio-groom.{md,html}` (live)
  - `best-shampoo-goldendoodle.{md,html}` (live)
  - `oatmeal-aloe-sensitive-skin-dog-shampoo.{md,html}` (live)
  - `deshedding-shampoo-huskies-german-shepherds.{md,html}` (live, just shipped)
  - `how-to-dilute-dog-shampoo-16-to-1.{md,html}` (live, just shipped)
  Each needs the email changed to `info@furgenics.com`. The drafts can be batch-updated in repo, but the four older live pages also need the live Shopify content updated to match — otherwise customers emailing `hello@...` get a bounce. The two pages just shipped today still need this same fix.
- Net cleanup: 1 wiki file + 6 draft pairs + 6 live Shopify pages = 13 places. Worth a single batched session to clean up.

## Internal notes (don't include in the published policy)

- The policy is silent on whether refunds for partially-used product follow the same rules as unopened. The implicit answer in the draft is yes — a customer can use 25% of a gallon, decide it doesn't work, and get a full refund within 30 days. This is the customer-favorable interpretation and matches the heartbeat-documented "refund-only, no return" policy. If Furgenics wants to limit this (e.g., "unopened bottles only for change-of-mind"), that change needs to be added explicitly. Recommend keeping it as drafted — the unit economics on a $24.99 gallon don't justify policing partial use, and the goodwill is worth more than the recovered product.
- For US orders fulfilled by Amazon MCF, the customer-facing experience is identical to a Canadian Vaughan-direct order: they email Furgenics, Furgenics processes the refund through Shopify Payments, the customer keeps the product. Amazon doesn't get the unit back — the cost of recovering a $19 USD gallon from a US customer through Amazon's reverse logistics far exceeds the unit value. Furgenics absorbs the inventory write-off as a cost of customer trust. This is the same operational reality as Vaughan-direct returns, just with the inventory loss coming from the Amazon FBA pool instead of the Vaughan warehouse.
- The schema v3 deployment on 2026-04-21 already declared the refund policy in structured data (per log.md). Once this page is live, run a Google Rich Results test on `/policies/refund-policy` to confirm the structured data and page text are consistent.
