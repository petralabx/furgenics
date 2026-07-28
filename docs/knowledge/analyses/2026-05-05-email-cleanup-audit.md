# Email cleanup audit — the wrong email is in your structured data

> **Filed:** 2026-05-05 as `analysis`  
> **Source:** Stephen request 2026-05-05 — Phase A read-tool audit of bad-email occurrences across Shopify  
> **Tooling:** scan-shopify CLI, Phase A read tools (commits 0066152, 6c48a25, 95c9484, f4ae5fc)  
> **Read first:** [`heartbeat.md`](../../heartbeat.md) · [`docs/proposals/shopify-content-surface-v2.md`](../../../../docs/proposals/shopify-content-surface-v2.md)

---

## Headline

**Two bad emails found in 8 confirmed surfaces. The single highest-priority finding is in `snippets/furgenics-schema.liquid` line 25 — the wrong support email is being broadcast as the canonical contact in the Organization JSON-LD that AI engines and Google read.**

9th surface (the `info@furgenicspetgrooming.com` mention in `data-sharing-opt-out` page contact info, if any) was not detected because the page bodies for that legacy page were scanned and came back clean. Audit is partially complete — see Coverage Gaps below.

---

## Background — the two bad emails

Furgenics has two email addresses showing up in the storefront, neither of which is the canonical contact:

1. **`info@furgenicspetgrooming.com`** — a domain that doesn't exist (Furgenics's domain is furgenics.com, not furgenicspetgrooming.com). Almost certainly a leftover from initial brand setup when a longer name was being considered. Customer emails to this address bounce. Stephen confirmed 2026-04-27 that this is wrong; the heartbeat was hand-corrected the same day.

2. **`hello@furgenics.com`** — a plausible-looking address but Stephen confirmed it's also not real. Used as the support contact in CTA blocks across the 6 pillar pages drafted between 2026-04-23 and 2026-04-27.

**Canonical:** `info@furgenics.com`. Per heartbeat (commit 0c6bd1b).

---

## Confirmed findings

### Finding 1 — `snippets/furgenics-schema.liquid` line 25 [CRITICAL]

Variable assignment in the brand's structured-data snippet:

```liquid
{%- assign brand_support_email = 'info@furgenicspetgrooming.com' -%}
```

This variable feeds into the JSON-LD `<script type="application/ld+json">` block that renders the Organization schema for every page on furgenics.com. Per `knowledge/schema-state.md`, schema v3/v4 includes the `email` property in the Organization schema (since 2026-04-21).

**Why this is critical:**
- AI engines that crawl the site read structured data first when reasoning about a brand. Perplexity is confirmed to be reading furgenics.com via real-time web search per the 2026-05-03 cron review.
- The Organization schema is the canonical "who/what/contact" record for the brand on Google's Knowledge Graph and downstream AI engines.
- Every page on the site emits this. Every crawl of every page reinforces the wrong email.
- ChatGPT, Gemini, and Claude won't reflect this for 6–12 months due to training data lag, but Perplexity reflects it within hours.
- This single fix has higher leverage than fixing all 6 pillar pages combined.

### Finding 2 — `sections/footer.liquid` line 359 [HIGH]

The site footer's contact CTA block:

```liquid
<p>Email us at <a href="mailto:info@furgenicspetgrooming.com">info@furgenicspetgrooming.com</a></p>
```

**Why this matters:**
- Visible on every page of furgenics.com (the footer renders globally).
- Customers who click the email link get a `mailto:` to a dead address; either bounces or simply produces no response.
- Time-window of impact: footer has been live with this email since the site launched (October 2024 per page-creation timestamps); 19+ months of customers have potentially seen it.
- If anyone has actually emailed this address looking for support, those messages are gone.

### Findings 3–8 — 6 pillar pages [MEDIUM]

The `hello@furgenics.com` address appears in CTA blocks on every pillar page that's currently live:

| Page | Line | Match count |
|---|---|---|
| `/pages/bulk-dog-shampoo-for-canadian-mobile-groomers` | 53 | 2 |
| `/pages/furgenics-vs-bio-groom` | 62 | 2 |
| `/pages/best-shampoo-goldendoodle` | 70 | 2 |
| `/pages/oatmeal-aloe-sensitive-skin-dog-shampoo` | 83 | 2 |
| `/pages/deshedding-shampoo-huskies-german-shepherds` | 66 | 1 |
| `/pages/how-to-dilute-dog-shampoo-16-to-1` | 121 | 1 |

The pattern is consistent: each page has a CTA section near the end that says something like *"Questions? Email hello@furgenics.com"*. The bottom 4 entries each have 2 matches because the email appears once in the `mailto:` href and once in the visible link text. The bottom 2 (most recent ships) appear to use a slightly different markup that produces only 1 match per occurrence — same content surface, different rendering.

**Why MEDIUM not HIGH:**
- Customer impact is real but bounded: only customers who navigate to a pillar page and read to the CTA section are exposed.
- All 6 pages are recent (April 23–27), so the impact window is small (≤ 13 days).
- The schema.liquid finding is more harmful per impression because it affects every crawl, not just direct page visits.

That said, if Phase B execution is bundled, fixing all 6 pages costs the same as fixing one because they share the same write tool.

---

## Coverage gaps

The scan was partial. Three gaps to address before declaring the audit complete:

### Gap 1: Policies surface failed (access denied)

```
GraphQL errors: Access denied for shopPolicies field.
Required access: read_legal_policies access scope.
```

The `Claude_MCP_1` Shopify app does not currently have the `read_legal_policies` scope. Stephen needs to add this in the Shopify Partner Dashboard (Apps → Claude_MCP_1 → API access) and re-install/re-auth the app. Recommend also adding `write_legal_policies` at the same time so Phase B writes can target policies (the refund + ToS published 2026-04-28 may need email cleanup).

Likelihood the policies have the bad email: low. The refund policy and ToS were drafted 2026-04-28, after the email correction was confirmed. They were drafted with `info@furgenics.com` from the start. But policies inherited from the original Shopify auto-generated drafts (privacy policy especially) may still reference the old emails. **Re-scan with the scope added** before declaring policies clean.

### Gap 2: Theme assets scan was rate-limited

Shopify's REST endpoint has stricter rate limits than GraphQL. The current `ShopifyThemeClient.readAsset` fires requests as fast as possible, hits the bucket, gets HTTP 429s on subsequent reads.

- First scan (`info@furgenicspetgrooming.com`): 70/365 assets read, 28+ 429 errors
- Second scan (`info@furgenicspetgrooming.com` rerun): 71/365 assets read, similar pattern  
- Third scan (`hello@furgenics.com`): 61/365 assets read, similar pattern

Key files NOT scanned that could plausibly contain the bad emails:
- `snippets/meta-tags.liquid` — likely contains Open Graph + Twitter Card metadata, possibly with contact info
- `snippets/furgenics-product-faqs.liquid` — brand-specific custom snippet, could reference support email
- Several `templates/*.json` files (404, blog, cart) — unlikely but possible

**Fix:** Add 250ms throttle + 429 retry-with-backoff to `ShopifyThemeClient`. ~30 lines of code. Should ship as part of Phase A polish before Phase B writes, since Phase B will hit the same rate limits when WRITING theme assets.

### Gap 3: Notification email templates not in scan scope

Shopify's order-confirmation, shipping-confirmation, abandoned-cart, etc. email templates are NOT theme assets accessible via the Asset endpoint. They live in Settings → Notifications and require a separate API surface (or manual admin inspection).

Likelihood the bad emails are in notifications: medium-high. The Shopify Notifications templates often include brand contact info in the email footer, and these templates were set up at the same time as the original site (October 2024) when the wrong email was being used elsewhere.

**Fix path options:**
- Manual: Stephen checks each notification template in Shopify admin (~15 minutes)
- Programmatic: future Phase C extension adds notifications as a scan surface (Shopify has an API for this, just not built into the scan tool yet)

For today, manual is the right call. Phase C tooling is a follow-up.

### Gap 4 (low risk): Active Shopify forms

The Groomer Program signup form (Form ID 960509 per heartbeat) has its own auto-responder and confirmation email. These are NOT theme assets, NOT notifications — they're a third API surface. Probably fine since the form was set up after the email correction, but worth a 60-second manual check.

---

## Recommendations for Phase B execution

### Priority order for fixes

1. **First:** Fix `snippets/furgenics-schema.liquid` line 25. Highest leverage. Affects structured data globally. One-line liquid variable change.
2. **Second:** Fix `sections/footer.liquid` line 359. High visibility. Two adjacent occurrences (href + visible text) on same line.
3. **Third (batch):** Fix the 6 pillar pages in one Phase B operation. Lower per-page leverage but bundleable.
4. **After Phase B fixes:** Manually check Shopify Notifications templates (15 min). Add `read_legal_policies` scope and re-scan policies.

### Why this ordering matters strategically

The May 3 Sunday cron review (filed today, separately) showed that Perplexity is the only AI engine actively finding Furgenics, via real-time web search. The schema.liquid fix changes what Perplexity sees on its NEXT crawl of the site. If we fix this before the 2026-05-10 Sunday cron, the May 10 measurement will reflect a clean Organization schema.

This matters because the May 10 cron is the gating data point for the 2026-05-11 measurement-checkpoint decision. We want that checkpoint reading clean data, not data confounded by structural-data quality issues.

### Phase B safety considerations

The `replace-string-in-shopify` tool spec'd in the proposal includes mandatory dry-run + confirm flow. For this cleanup specifically:
- Run Phase B's `replace-string-in-shopify` in dry-run mode first to confirm match list matches this audit
- Confirm the replacement string (`info@furgenics.com`) before each surface category
- Theme asset writes target the LIVE theme by default — per ADR-016 (planned), live theme writes require explicit `confirm: true` AND `target: "live"` env var
- Each surface logs to `log.md` as a `fix` entry per the wiki contract

### What to NOT do

- **Don't touch the 12 markdown drafts in `brands/furgenics/content-drafts/`** during this cleanup. Those are repo source-of-truth for the pillar pages — they should be updated, but as a separate `fix` operation in the repo, not via Shopify API. Per the proposal v2 §Open Questions, repo cleanup and Shopify cleanup are separate operations.

---

## Appendix: Audit methodology

Scans run with `npx tsx src/cli/scan-shopify.ts furgenics <needle>` against:
- All 20 Online Store Pages (read in full)
- 0 Shop Policies (access denied — missing scope)
- 70-71 of 365 theme assets (rate-limited; capped before completion)
- 18 active products (descriptions + SEO metadata)

Duration: 16–18 seconds per scan.

Three scans were run:
1. `"info@furgenicspetgrooming.com"` — found 1 hit (footer.liquid only)
2. `"info@furgenicspetgrooming.com"` rerun — found 2 hits (footer.liquid + furgenics-schema.liquid). The schema.liquid file was rate-limited in scan 1 but read in scan 2; this is why coverage matters.
3. `"hello@furgenics.com"` — found 6 hits (all pillar pages, no theme assets)

The variation in scan 1 vs scan 2 results is itself evidence that the rate-limiting is hiding findings. **Don't trust any single scan as comprehensive until the throttle fix lands.**

Full JSON results are in `scan-info-email.json` and `scan-hello-email.json` (Stephen's local working directory; not committed to repo).
