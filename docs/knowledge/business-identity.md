# Furgenics — Business Identity

> **Class C — human-owned.** Canonical business identity values referenced anywhere in customer-facing content, structured data (Organization JSON-LD), policies, footers, contact pages, etc. **One source of truth.** Any draft that mentions Furgenics' business identity must pull from here.
>
> _Captured 2026-05-20 from Stephen's direct confirmation during content-rewrite kickoff._

## Core fields

| Field | Value |
|---|---|
| **Business name (public)** | Furgenics |
| **Legal entity** | Furgenics (use plain brand name in public copy; do NOT reference Petra Lab-X per brand-voice rules) |
| **Public domain** | furgenics.com |
| **Support email** | info@furgenics.com |
| **Phone** | _none_ — email only (do not invent a placeholder phone number; if a form/template requires one, leave blank or use the email) |
| **Mailing / business address** | 90 Moyal Ct, Concord, Ontario L4K 4R8, Canada |
| **Country of operation** | Canada (primary), United States (via Markets + Amazon FBA fulfillment) |
| **Primary market** | Canada (direct-to-salon DTC + Groomer Program with free samples) |
| **Secondary market** | United States (direct-to-salon DTC + Groomer Program with first-order discount; some Amazon retail surface) |

## Where these values appear

- **Footer** of every page (address, email)
- **`/policies/refund-policy`, `/policies/terms-of-service`, `/policies/shipping-policy`, `/policies/privacy-policy`** (entity name, address, jurisdiction references)
- **`/pages/contact`** (if it exists — verify next live-read pass)
- **`/about`** (entity name, location, mission)
- **`snippets/schema.liquid`** (Organization JSON-LD: name, url, email, address) — this is the highest-leverage place for AEO because AI engines parse structured data
- **Order confirmation + transactional emails** (Shopify-managed, but reference same email + address)
- **Google Merchant Center** (business identity for product feed verification)
- **Google Business Profile** (if claimed)

## What NOT to surface in public content (per `brand-voice.md`)

- ❌ "Petra Lab-X" (manufacturing relationship is private)
- ❌ Any address other than 90 Moyal Ct, Concord, ON (e.g. shared facility addresses, fulfillment-partner addresses)
- ❌ A made-up phone number
- ❌ Any prior incorrect email address (historical: `info@furgenicspetgrooming.com` — was never a working address; 2026-05-05 cleanup audit confirmed remediation across theme + 6 pillar pages)

## Rules for content drafts

1. **If a draft references the business name, email, or address — quote this file exactly.** Do not paraphrase the address (no "Toronto-area" or "in Concord"; use the full address verbatim when it's an address field).
2. **Policies and ToS reference the legal entity.** The legal entity for public-facing copy is "Furgenics" — same as the brand name.
3. **Structured data must match.** When updating `schema.liquid` or any Organization/LocalBusiness JSON-LD, the values come from here.
4. **No phone.** If a form template requires a phone field, leave it blank or supply the email as the contact channel. Do not invent.
5. **Update history is the change log below.** Any business-identity change (new address, new email, phone added, legal-entity formalization) is recorded with date + reason.

## Structured data — the canonical JSON-LD shape

This is what `schema.liquid` should emit for the Organization (the highest-leverage AEO surface):

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Furgenics",
  "url": "https://furgenics.com",
  "email": "info@furgenics.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "90 Moyal Ct",
    "addressLocality": "Concord",
    "addressRegion": "ON",
    "postalCode": "L4K 4R8",
    "addressCountry": "CA"
  },
  "sameAs": [
    "https://www.instagram.com/furgenics",
    "https://www.facebook.com/furgenics"
  ]
}
```

(Verify the `sameAs` entries against actual live social handles — if a handle doesn't exist, omit rather than guess.)

## Cross-references

- `brand-voice.md` — voice rules (Petra Lab-X privacy, no medical claims, etc.)
- `analyses/2026-05-05-email-cleanup-audit.md` — historical record of the email correction (shipped per Stephen confirmation 2026-05-20)
- `schema-state.md` — current structured-data deployment state
- `content-style-guide.md` — pricing/value-math/competitor-price/discount-banner snippet conventions; this business-identity file is the equivalent for identity values
- `theme-drafts/snippets/` — Liquid snippets that may consume these values

## Change log

- **2026-05-20** — File created during content-rewrite kickoff. Address (90 Moyal Ct, Concord, ON L4K 4R8) and email (info@furgenics.com) captured from Stephen's direct confirmation. No phone — explicit decision to operate email-only.
