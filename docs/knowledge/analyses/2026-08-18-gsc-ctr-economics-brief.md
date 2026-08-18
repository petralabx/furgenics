# GSC CTR + economics — corrected brief (do not implement the original as-is)

> Filed: 2026-08-18  ·  Kind: brief
> Source: Stephen uploaded `furgenics-cursor-brief.md` plus the wash-economics model from Claude (`gallon_oz: 128`, `dilution_parts: 16`, usage 5/11/18/25, discount FUR20). Live storefront + this repo were re-checked before any copy/token work.
> Related: [products.md](../products.md), [content-style-guide.md](../content-style-guide.md), [2026-08-17-us-compare-at-zero.md](./2026-08-17-us-compare-at-zero.md)

The uploaded brief is useful on diagnosis (US CTR vs impressions; Goldendoodle 404 CTA; homepage 512 vs $0.18). Several acceptance items and catalog rows are **stale or wrong**. This page is the working plan. Repo is **`petralabx/furgenics`**, not `stephenalton-collab/plx-aeo-steward`.

## Canonical wash economics (Stephen 2026-08-18)

```
base:      gallon_oz: 128, dilution_parts: 16
derived:   working_oz: 2176, working_gallons: 17
usage_oz:  small: 5, medium: 11, large: 18, deshed: 25
per SKU:   live Markets price (CAD and USD independently)
computed:  washes_tier = working_oz / usage_oz_tier
           cost_per_wash_tier = price × usage_oz_tier / working_oz
discount:  code: "FUR20", pct: 20     ← swap to FUR10 in theme settings, one field
```

`usage_oz` is **diluted** ounces per wash. Runtime: `site/theme/snippets/wash-economics.liquid`. Snapshot: `data/config.json` → `economics`. Tokens: `[[VALUE:washes-*]]`, `[[VALUE:usage-oz-*]]`, `[[COST:handle:tier]]`, `[[VALUE:dilution-ratio-bare]]`.

| Tier | oz diluted | washes / gallon | $/wash at $34.99 |
|---|---|---|---|
| small | 5 | 435 | $0.08 |
| medium | 11 | 198 | **$0.18** |
| large | 18 | 121 | $0.29 |
| deshed | 25 | 87 | $0.40 (matches the old 80–100 baths band) |

**512 washes is wrong** (implies 4.25 oz, below "small"). **340 medium Goldendoodles is wrong** (3–4 oz protocol or ~198 at medium — pick one and tokenize). Do not collapse to a single bath-count. Cost must come from live `variant.price`, never a hardcoded dollar. Homepage "up to N" = small; "avg cost" = medium; **labels required** or the pair contradicts again.

## Brief vs live (verified 2026-08-18)

**Still true — do these:**

- Homepage still has **“Up to 512 washes”** and **“$0.18 AVG COST PER WASH”** together. Also pet-owner hero (“man's best friend”), Bella/Max/Charlie testimonials, sulfate-free language, FUR-011 tile (404), `/products/ultra-gentle-shampoo` in the hero.
- Banner is **FUR20 / 20%** live. Wiki/`data/config.json` and theme-setting *defaults* still said FUR50 until this PR.
- Goldendoodle guide still sells FUR-020 (storefront 404). Deep moisturizing shows $34.99 on US because US live price *is* $34.99.
- Deshedding guide: 80–100 baths vs 5–7 oz diluted (~362 baths); shipped internal note “per-gallon price gap (rendered above for your market)”.
- `[[VALUE:dilution-ratio]]` → `"16:1 concentrate"` is awkward after “Dilute at”. Need `dilution-ratio-bare`.
- FUR-001 hypoallergenic `available: false` both markets. Still on homepage — keep the tile, kill the buy CTA.
- FUR-020 / FUR-050 stay draft.

**False / stale in the uploaded brief:**

- Repo is **`petralabx/furgenics`**. Steward is operational upstream for cron artifacts, not this brand home.
- **US compare-at is already `null`.** Acceptance criterion 4 is done (catalog CSV). Collection CTR / `$0.00` snippet is wait-and-see, not a remaining bug. Do not Reset, `priceListFixedPricesDelete`, or write compare-at `0`.
- FUR-014 live **$34.99 CAD**, not $37.99. FUR-005 / FUR-010 / FUR-021 CAD **$37.99**; **US FUR-021 is $34.99**. `[[PRICE]]` already uses live Markets prices — do **not** force tokens to 37.99.
- “Do not touch copy” contradicts Lane 2. This repo *should* edit drafts + theme snippets.
- Gating **all** tiles on `product.available` would hide FUR-001 (core SKU, restock inbound). Gate **buy CTA** only.
- Lane 4 (GSC cron + steward MCP) and Lane 5 (custom Admin app) are **other repos / admin**.
- Lane 2.6 `/pages/` → `/blogs/guides/` 301s: after content fixes, not this PR.
- Open Q1: **FUR20 is live.** Q2: use the tiered model above, not 80–100 vs 512. Q4: FUR-001 continue-selling is **off**.

**Also missing from the brief:**

- Homepage still claims sulfate-free; published INCI on FUR-013/FUR-005 still lists SLES. **Do not reinstate sulfate-free** until metafields are corrected (`products.md` issue 9).
- `main-page-pillar.liquid` is **not** in this repo. Guide tokens only render if the live theme already has that section.
- Named salon testimonials: do **not** invent volume figures. Need real salon names or keep Greg-style proof.
- Homepage / `index.json` / `mx-style.css` are **unversioned**. 512/$0.18 cannot be fixed from git until those sections are pulled. Drop-in: `snippets/homepage-wash-stats.liquid`.

## What this PR does (this repo)

1. File this corrected brief.
2. `wash-economics.liquid` + VALUE/COST/DISCOUNT scalar tokens + schema defaults FUR20/20 + `data/config.json` economics block.
3. `products.md` live CA/US prices; issue 11 marked resolved.
4. Goldendoodle draft **v3**: purchasable protocol FUR-005 + FUR-021; FUR-020 waitlist via `info@furgenics.com` (no invented Klaviyo form); no FUR-020 price/availability; no 340; no sulfate-free; no 404 Order now; title/meta rewritten.
5. Deshedding draft **v3**: `washes-deshed` / `usage-oz-deshed` / `COST:deshedding-shampoo:deshed`; drop internal note; pair with live SKUs (FUR-010 conditioner, not FUR-011/FUR-050 404s); drop sulfate-free.

Live Shopify page paste still needs admin/MCP (this VM has no Shopify MCP). Theme push of new snippets needs Theme Access.

## Out of scope here

- GSC Vercel cron, steward eighth MCP tool, custom Admin app
- `/blogs/guides/` migration, hreflang/canonical audit
- Homepage JSON / ultra-gentle hero / testimonial rewrite (unversioned; needs salon names)
- Activating FUR-020 / FUR-050 / FUR-011
- Sulfate-free copy reinstatement
- Compare-at GraphQL (already null)

## Open for Stephen

1. Confirm usage_oz 5 / 11 / 18 / 25 as canonical, including Goldendoodle (old guide said 3–4 oz — v3 uses medium 11 oz so economics and protocol match).
2. Homepage hero: keep pet-owner line vs switch to groomer; real salon names for testimonials.
3. FUR-001 homepage: keep Sold out tile (recommended) vs hide.
4. $24.99 on draft SKUs: stale leftover or intended launch price?
5. Steward/GSC work is a **separate repo** if you want Lane 4 this week.

## Sources & references

- Live JSON 2026-08-18: `https://furgenics.com/en-ca|en-us/products/<handle>.js`
- Homepage HTML 2026-08-18: 512, $0.18, FUR20, sulfate, FUR-011 + ultra-gentle product links
- Uploaded brief: `/home/ubuntu/.cursor/projects/workspace/uploads/furgenics-cursor-brief_f987.md`
- Theme: `site/theme/snippets/wash-economics.liquid`, `token-substitution.liquid`, `homepage-wash-stats.liquid`
