# 2026-08-18 end of day — pick up here

> Filed: 2026-08-18  ·  Kind: synthesis
> Source: Stephen + Cursor cloud agent; live theme pushes and homepage decisions the same day
> Related: [products.md](../products.md), [sessions.md](../../sessions.md), [2026-08-18-gsc-ctr-economics-brief.md](./2026-08-18-gsc-ctr-economics-brief.md), [2026-08-17-us-compare-at-zero.md](./2026-08-17-us-compare-at-zero.md), [2026-08-14-pdp-phase2-build.md](./2026-08-14-pdp-phase2-build.md)

This is the **start-here page** for the next person. Older same-day session entries and the morning GSC brief still describe 512 washes / ultra-gentle 404 as open — those are **done**. Use this page + `docs/sessions.md` (top entry) instead of those Next bullets.

## Where the work lives

| Surface | State |
|---|---|
| GitHub | Branch `cursor/live-wash-economics-push-3113` · [PR #9](https://github.com/petralabx/furgenics/pull/9) (theme + this handoff). PR #8 (tokens + guide drafts) is **merged to `main`**. |
| Live Shopify theme | **Copy of Copy of scg9xy-xt `#152547065995`** (`role: live`). Former live `#150922428555` is unpublished. Confirm with `shopify theme list --store scg9xy-xt.myshopify.com --json`. |
| Storefront | `furgenics.com` HTML `Shopify.theme.id` = `152547065995` |

Always `shopify theme push --allow-live --nodelete --only <files>`. Never a full-theme push (`config/` and unversioned `mx-style.css` would clobber live). Theme Access password is `SHOPIFY_CLI_THEME_TOKEN` (`shptka_…`). Public-repo Cursor secrets often skip injection — last deploys reused Theme Access from a prior session.

## Shipped today (do not redo)

**Morning — PR #8, already on `main`**

- Canonical wash math in `site/theme/snippets/wash-economics.liquid` + `data/config.json` → `economics`: 128 oz × 17 = **2176** working oz; usage **5 / 11 / 18 / 25** → **435 / 198 / 121 / 87** washes; `$/wash` from live `variant.price`.
- Tokens: `[[COST:handle:tier]]`, `[[VALUE:washes-*]]`, `[[VALUE:usage-oz-*]]`, `[[VALUE:dilution-ratio-bare]]`. FUR20 / 20% schema defaults.
- Guide drafts in repo (not pasted live): `copy/content-drafts/best-shampoo-goldendoodle.md|.html` v3 (FUR-005 + FUR-021; FUR-020 waitlist via `info@furgenics.com`); `copy/content-drafts/deshedding-shampoo-huskies-german-shepherds.md|.html` v3 (deshed tier + live pairing SKUs).
- US compare-at is already `null`. Do **not** Reset Markets pricing.

**Afternoon — PR #9, live on `#152547065995`**

- Pushed snippets: `wash-economics`, `homepage-wash-stats`, `token-substitution`, `value-math`, `product-at-a-glance`.
- Homepage dilution band (`sections/fg-dilution-callout.liquid`) **computes** 16:1, **435 small-dog washes**, medium `$/wash` from `deshedding-shampoo` (renders **$0.18** at $34.99, labeled). Theme-editor 512 / $0.18 fields are **ignored** on the storefront.
- Hero slide 3: `ultra-gentle-shampoo` → `hypoallergenic-shampoo-gallon`.
- Versioned `site/theme/templates/index.json` + `sections/fg-dilution-callout.liquid` so the homepage is no longer fully unversioned.

**Stephen’s homepage calls (2026-08-18)** — do not reverse:

1. Math: “up to” = **small**; avg cost = **medium** (deshedding-shampoo).
2. Hero CTA → hypoallergenic.
3. Keep Oatmeal & Aloe tile (FUR-011 restock inbound). Do **not** publish FUR-011 yet — the PDP is still 404.
4. Keep FUR-001 **SHOP NOW** (inbound in a day or two). Do not swap to Sold out.
5. Keep the existing “free from parabens, sulfates” sentence. Formulas are sulfate-free; **published INCI lists are still wrong**. Do not spread that claim to other surfaces until `products.md` issue 9 is done.
6. Keep pet-owner hero (“man's best friend”). Keep Bella / Charlie (and Max).

## Next (ordered)

1. **Merge PR #9** so `main` matches live Shopify.
2. **Paste guide HTML** in Shopify Admin (this VM had no Shopify page MCP):
   - `/pages/best-shampoo-goldendoodle` ← `copy/content-drafts/best-shampoo-goldendoodle.html` + SEO title/meta in the draft `.md`
   - `/pages/deshedding-shampoo-huskies-german-shepherds` ← matching `.html` + meta
   - Checklist is in each draft. `page.content-pillar` must still exist on the live theme or tokens will show raw.
3. **INCI metafields** (`products.md` issue 9): R&D-corrected lists → `custom.full_ingredients` on FUR-013 / FUR-005 (confirm the other 7) → then claim reinstatement + AGENTS.md guardrail. Homepage sentence is the only sulfate copy Stephen kept in the meantime.
4. **PDP content still pending MCP** (from 2026-08-14, not this session): FUR-013 v4 body + `custom.faqs` v2 in `copy/content-drafts/products/deshedding-shampoo.md`. Live bodies are still pre-v4.
5. **Admin, not theme:** Search & Discovery complementary pairings from `products.md` “Pairs with”. `custom.display_title` metafield (Class B — titles proposed, not created).
6. **After restock:** publish FUR-011 when inventory is real; FUR-020 / FUR-050 stay draft. Open: is **$24.99** on those drafts leftover or launch price?

## Do not

- Full-theme push, or push `config/settings_data.json`
- `shopify theme publish` / create a new unpublished copy for this work — live is already `#152547065995`
- Markets **Reset pricing**, `priceListFixedPricesDelete`, or type `0` into compare-at
- Activate FUR-020 / FUR-050 / FUR-011
- Hardcode 512, $0.18, 80–100, or 340 in new copy
- Invent salon volume figures; rewrite Bella/Charlie
- Treat Lane 4 GSC cron as this repo — that is `plx-aeo-steward`

## Fragile files

- `sections/fg-dilution-callout.liquid` — numbers are liquid, not settings. Re-hardcoding 512 in the theme editor will **not** show on the storefront.
- `templates/index.json` is now in git; a later theme-editor save will drift until pulled again.
- `assets/mx-style.css` is still unversioned and overrides `.button`.
- `main-page-pillar.liquid` is **not** in this repo.

## Verify (already true at handoff)

Live CA + US homepage: `16:1` · `$0.18` + “Avg cost per wash · medium” · “One gallon. Up to 435 small-dog washes.” No `ultra-gentle-shampoo`. Degreasing button → `/products/hypoallergenic-shampoo-gallon`. Oatmeal tile, SHOP NOW, sulfate sentence, pet-owner H2, Bella/Charlie still present.

## Sources & references

- Live theme list 2026-08-18: `#152547065995` role `live`
- Live HTML: `https://furgenics.com/` and `/en-ca/`
- Repo: `site/theme/snippets/wash-economics.liquid`, `sections/fg-dilution-callout.liquid`, `templates/index.json`
- Morning brief (partially superseded): `analyses/2026-08-18-gsc-ctr-economics-brief.md`
