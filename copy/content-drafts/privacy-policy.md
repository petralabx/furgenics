# Privacy Policy — update 2026-05-22

> **Updated Privacy Policy draft** for Shopify Settings → Legal → Privacy policy. Replaces existing policy last updated 2025-02-06.
>
> **NOT LEGAL ADVICE.** This update is operational-accuracy + minor copyediting. The new disclosures (US fulfillment partner via Amazon FBA, Shopify Markets geo-routing, Groomer Program data collection, PIPEDA references) describe data flows that exist today. Recommend counsel review before publishing, especially the US fulfillment partner disclosure language — but the changes here are factually accurate to current operations and ship-ready as a baseline.

---

## Meta + technical

- **Location in Shopify:** Settings → Policies → Privacy policy (NOT a regular Page — this lives in the policies area)
- **Last updated date:** 2026-05-22 (was 2025-02-06)
- **Indexable:** Yes (privacy policies should be discoverable)

---

## What changed from the prior version (last updated 2025-02-06)

### Bugs and inaccuracies fixed

| Old | New | Why |
|---|---|---|
| Contact email: `greg@furgenics.com` | `info@furgenics.com` | Canonical per `brands/furgenics/knowledge/business-identity.md` — `greg@` was wrong, same email error we fixed on every pillar + Groomer Program + PDPs |
| "provide or improve or improve the Services" | "provide or improve the Services" | Typo (duplicated "or improve") |
| "contact us immediately.." | "contact us immediately." | Double period typo |
| Address: "Concord ON, L4K 4R8, CA" | "Concord, Ontario L4K 4R8, Canada" | Match canonical business identity format |

### Operational reality additions

| Section | What was added |
|---|---|
| **Opening paragraph** | New paragraph identifying Furgenics as a Canadian Ontario-registered business operating in both Canada and the United States via Shopify Markets, with PIPEDA + CCPA compliance |
| **"Information We Collect Directly from You" list** | New bullet for Groomer Program application data (salon name, country, business contact, current product use, etc.) — the form is live and collecting this data |
| **"Information We Collect about Your Usage"** | Added that IP / inferred country is used by Shopify Markets to route between /en-ca/ and /en-us/ |
| **"Information We Obtain from Third Parties" list** | Added bullet for fulfillment partners: Canadian orders from Vaughan, Ontario; US orders from Amazon FBA. Specifies that Amazon FBA receives order details needed to ship in the US |
| **"How We Use Your Personal Information" list** | New bullet for the Groomer Program use case (verification → CA samples vs US discount) |
| **"How We Disclose Personal Information" disclosure tables** | Added explicit mention of Amazon FBA as a US-orders fulfillment partner in the vendor list and the disclosure-categories table |
| **Children's Data** | Clarified that Furgenics serves professional groomers + adult pet owners, not children |
| **Your Rights** intro | Added explicit reference to PIPEDA (for Canadian residents) alongside the existing CCPA reference (for California residents) |
| **Complaints** | Added reference to the Office of the Privacy Commissioner of Canada as the relevant authority for Canadian complaints |
| **NEW SECTION: Cross-Border Data Transfers** | Replaces / expands the prior "International Users" section. Honestly describes the CA↔US data flow that actually happens in operations (Canadian customers → Canadian fulfillment; US customers → Amazon FBA; Groomer Program applicants processed in Canada regardless of market) |

### Content removed or de-emphasized

| Removed / changed | Why |
|---|---|
| "International Users" section referencing EU/UK transfer mechanisms (Standard Contractual Clauses) | Replaced with "Cross-Border Data Transfers" section focused on the actual CA↔US flow. Furgenics doesn't serve EU/UK customers — the SCC language was aspirational/template-y. If you add EU customers later, restore the SCC language. |

---

## Counsel-review-worthy items (flag for your lawyer if you have one)

1. **Amazon FBA disclosure language.** I described Amazon FBA as a "US-based third-party logistics partner." That's accurate but counsel may want more specific language (e.g., naming Amazon as the data processor explicitly under specific privacy frameworks, identifying the data processing agreement, etc.).

2. **Cross-Border Data Transfers section.** I added a "by using the Services you consent" line. Counsel may want explicit consent mechanisms vs implied consent for Canadian PIPEDA purposes.

3. **Groomer Program data retention.** I said we "retain Groomer Program application data for record-keeping and to administer the program over time." A specific retention period (e.g., "for the duration of the program plus N years") would be cleaner from a counsel perspective.

4. **PIPEDA-specific rights.** I referenced PIPEDA generically; PIPEDA has some specific requirements (consent withdrawal, breach notification timelines) that counsel may want enumerated.

5. **Children's Data section** says "under 16 years of age" — this is the CCPA threshold. PIPEDA has no specific minor age. The current language is fine but worth confirming with counsel for your specific market mix.

6. **Shopify Markets disclosure.** Generic mention is included. If Shopify Markets shares additional data with downstream processors (Klaviyo, Shopify Email, etc.) you actively use, those should be enumerated too — I didn't have visibility into your full marketing stack.

7. **The "sold/shared" tables.** Kept as-is from the prior policy. Counsel should confirm those reflect current marketing partner relationships (e.g., if you've added Meta Pixel, TikTok Pixel, Google Ads, etc. since 2025-02 the categories may need updating).

---

## Pre-publish checklist

- [ ] **Counsel review** of the new disclosures (optional but recommended — see flagged items above)
- [ ] **Shopify admin → Settings → Policies → Privacy policy**:
  - [ ] Paste body from `privacy-policy.html` (the file is the full policy, top to bottom)
  - [ ] Save
- [ ] **Verify** on both /en-ca/policies/privacy-policy AND /en-us/policies/privacy-policy that the policy renders correctly, all internal links work, and the "Last updated" date displays as `May 22, 2026`
- [ ] **Update Terms of Service** to match — if your Terms reference the privacy policy or duplicate the address/contact email, those need the same `greg@` → `info@` correction
- [ ] **Update Refund Policy + Shipping Policy** — same review pass, especially shipping policy which should now honestly describe both Canadian and US fulfillment routes

---

## Cross-references

- `brands/furgenics/knowledge/business-identity.md` — canonical address + email source
- `brands/furgenics/content-drafts/groomer-program.md` — the Groomer Program reference point for the new data collection disclosure
- Prior live policy (Feb 6, 2025) — only in Shopify admin; this draft replaces it

## Change log

- **2025-02-06** — Prior policy version (Shopify-template-based, used `greg@furgenics.com` contact, no US fulfillment / Groomer Program / Markets / PIPEDA disclosures)
- **2026-05-22** — Updated to reflect operational reality (dual-market via Shopify Markets, Amazon FBA US fulfillment, Groomer Program data collection, PIPEDA + CCPA compliance). Corrected `greg@furgenics.com` → `info@furgenics.com` typo. Fixed two grammar typos. Replaced aspirational EU/UK SCC language with a factual CA↔US cross-border data transfer section. Counsel review recommended but not blocking — the changes describe data flows that already exist and the prior policy was misleading by omission about them.
