# Legal Notice — new page, drafted 2026-05-22

> **New Legal Notice page** for Furgenics. Complements the existing Privacy Policy + Terms of Service. Lives as a regular Shopify Page (NOT under Settings → Policies) at `/pages/legal-notice`.
>
> **NOT LEGAL ADVICE.** This is a baseline Legal Notice covering business identification, intellectual property (incl. competitor trademark acknowledgments since the pillar pages cite many third-party brands), product information disclaimers, the no-veterinary-advice notice, warranty + liability disclaimers, third-party link disclaimers, and governing law. Counsel review recommended for the veterinary disclaimer scope, the governing-law clause, and the liability cap specifically — but the draft is comprehensive enough to publish as a baseline if needed.

---

## Meta + technical

- **URL:** `/pages/legal-notice` (regular Page, not in Shopify's built-in Policies area)
- **Template:** `page.content-pillar` (consistent typography with the rest of the site)
- **Page title (drives H1):** `Legal Notice`
- **SEO title (≤60 chars):** `Legal Notice | Furgenics`
- **Meta description (≤155 chars):** `Legal terms governing your use of furgenics.com, including intellectual property notices, product disclaimers, and limitation of liability.`
- **Canonical:** `https://furgenics.com/pages/legal-notice`
- **hreflang:** not needed — single URL via Shopify Markets serves both markets
- **Indexable:** Yes (legal pages should be discoverable from footer)
- **Footer link:** Add to the site footer alongside Privacy Policy, Terms of Service, Refund Policy, Shipping Policy

---

## Sections covered

1. **About this Site** — business identification (Furgenics, Ontario-registered, Vaughan ON manufacturing, dual-market operations via Shopify Markets, Amazon FBA for US fulfillment)
2. **Intellectual Property** — copyright on all site content; non-commercial use permitted; no AI/ML training without permission; trademark notice for Furgenics name + logo
3. **Third-Party Trademarks and Comparison Content** — explicit acknowledgment that competitor brand names (Bio-Groom, Coat Handler, FURminator, Chris Christensen, iGroom, Isle of Dogs, Earthbath, Burt's Bees, TropiClean, Nature's Specialties, #1 All Systems, Bark2Basics) are trademarks of their respective owners; comparison content is honest reference, not endorsement; brand-owner contact path if they think a statement is inaccurate
4. **Price and Product Information** — Markets-aware pricing disclosure (CAD on /en-ca/, USD on /en-us/); competitor benchmark pricing dated at point of capture; no warranty on competitor product info; content update cadence
5. **No Veterinary or Professional Advice** — Furgenics is shampoo, not medicine; consult a vet for diagnosed skin conditions, hot spots, infections, allergic reactions; informational content is not professional advice for the user's specific business
6. **Disclaimer of Warranties** — standard "as is" disclaimer; specific note that coat outcomes depend on factors outside Furgenics' control (water, dilution, technique); carve-out for non-waivable consumer protection laws
7. **Limitation of Liability** — standard indirect/consequential damages exclusion; total liability capped at price paid for product or CAD $100, whichever is greater; jurisdictional carve-out
8. **Third-Party Links** — convenience-only disclaimer for Amazon, social media, and other external links
9. **Reporting Issues** — DMCA-style notification path for IP infringement claims or factual inaccuracies (especially from competitor brand owners)
10. **Governing Law** — Ontario law + federal Canadian law applicable in Ontario; Ontario courts have exclusive jurisdiction; consumer protection law carve-out for non-Ontario residents
11. **Changes to This Legal Notice** — standard update language
12. **Contact** — info@furgenics.com + mailing address

## Important design choices to note

- **Liability cap of CAD $100.** This is on the lower end of what's typical (some businesses use CAD $500 or "the amount paid in the last 12 months"). Counsel may want to adjust. The $100 cap mirrors the per-product price structure (most Furgenics gallons are under $50) so it's roughly 2x the typical purchase — defensible but conservative.
- **Competitor brand-owner outreach path.** The "if you are the brand owner of a third-party product mentioned on the Site and you believe a statement we make about your product is inaccurate, please contact us..." line is intentional. Comparative advertising is legal under both Canadian and US trademark law, but providing a clear contact path for brand owners reduces the chance of a dispute escalating to legal action.
- **AI/ML training restriction.** Added the "you may not use Site content to train artificial intelligence or machine learning models without our prior written permission" clause. This is increasingly common in 2026 as AEO matters more; the pillar guide content is the core competitive moat and worth protecting.
- **Veterinary disclaimer.** Scoped narrowly — Furgenics is shampoo, not vet care, and the site doesn't claim otherwise. The disclaimer is for the breed-specific guidance (which mentions skin sensitivities, hot-spot recovery, etc.) where readers might over-interpret editorial content as veterinary advice. Counsel may want to review this scope.
- **Jurisdictional choice.** Ontario law / Ontario courts. Standard for an Ontario-registered business. The "consumer protection laws of your jurisdiction" carve-out preserves non-waivable consumer rights for US residents (e.g., California Unruh Civil Rights Act, Magnuson-Moss for warranties).

---

## Counsel-review-worthy items (flag for your lawyer if you have one)

1. **Veterinary disclaimer scope.** "Information on the Site — including but not limited to guidance on breed-specific shampoo selection, sensitive-skin formulations, dilution protocols, and bath frequency — is provided for general informational and educational purposes only." Counsel may want this either narrower (limit to specific pages) or broader (cover all of "Site content").

2. **Liability cap amount.** CAD $100. Conservative. Counsel may want to adjust based on your insurance coverage and average order value.

3. **Liability cap interaction with provincial consumer protection.** Ontario Consumer Protection Act has specific rules around limiting liability in B2C transactions; the cap may not be enforceable for Canadian consumer transactions. The "Nothing in this Legal Notice limits warranties or rights you may have under applicable consumer protection laws..." carve-out is the standard protection but counsel should confirm.

4. **Governing law for US customers.** Ontario law / Ontario courts. This may be unenforceable against US consumers under various state laws (especially California, which heavily favors consumer-state jurisdiction). Practical effect: if a US consumer sued you in their home state, they could probably proceed despite this clause. Counsel may want to add an arbitration clause as an alternative dispute resolution path.

5. **AI/ML training restriction.** New territory. Some jurisdictions are developing case law around whether such restrictions are enforceable; the EU's AI Act and various US state regulations are in flux. The clause is good belt-and-suspenders protection but enforceability is uncertain.

6. **Trademark fair-use defense for competitor comparisons.** Comparative advertising is legal but specific factual claims about competitor products carry libel risk if inaccurate. Counsel should verify our claims on each pillar page are defensible. (Recommend: keep claims factual and time-stamped, which we already do via the per-market dated competitor tokens.)

7. **DMCA-style reporting path.** Set up an internal process for handling these notices once the page is live. Even a single template-response email policy reduces risk if a complaint comes in.

---

## Pre-publish checklist

- [ ] **Counsel review** (optional, recommended for the 7 flagged items above)
- [ ] **In Shopify admin → Pages → Add page**:
  - [ ] Page title: `Legal Notice`
  - [ ] Page handle: `legal-notice` (results in URL `/pages/legal-notice`)
  - [ ] Theme template: `content-pillar`
  - [ ] SEO title: `Legal Notice | Furgenics`
  - [ ] Meta description: `Legal terms governing your use of furgenics.com, including intellectual property notices, product disclaimers, and limitation of liability.`
  - [ ] Source view (`</>`) → paste full body from `legal-notice.html`
  - [ ] Visibility: Visible
  - [ ] Save
- [ ] **Add to footer** under Legal / Information section, alongside Privacy Policy, Terms of Service, Refund Policy, Shipping Policy
- [ ] **Verify on /en-ca/ and /en-us/** that the page renders correctly, all internal links work, address + email are correct
- [ ] **Submit to GSC** for indexing (legal pages should be discoverable from search)
- [ ] **Internal-comms / SOP**: brief whoever monitors info@furgenics.com that legal notices may come in via that address; have a template response for trademark/inaccuracy complaints

---

## Cross-references

- `brands/furgenics/knowledge/business-identity.md` — canonical address + email source
- `brands/furgenics/content-drafts/privacy-policy.html` — companion legal page (drafted 2026-05-22)
- `brands/furgenics/knowledge/competitor-intel.md` — source for the third-party trademark list
- Pillar pages (`brands/furgenics/content-drafts/*.html`) — content covered under the IP + comparison-content sections

## Change log

- **2026-05-22** — Initial draft of Legal Notice page. Fresh content (no prior version existed on the site). Includes business identification, IP + competitor trademark acknowledgments, product information disclaimers, no-veterinary-advice notice, warranty + liability disclaimers, third-party link disclaimers, reporting-issues path, Ontario governing law, and standard contact info. Counsel review flagged on 7 items in the .md sister doc.
