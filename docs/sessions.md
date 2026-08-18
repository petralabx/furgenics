# Session log

Append-only handoff log for humans and agents. **Newest entry at the top.**

Read the latest 1–3 entries at the start of every working session (after `git pull` on `main`). Append a short entry in the same PR that lands the work — before merge.

This is the **human/agent session handoff**. It is separate from:
- `docs/knowledge/log.md` — operational timeline (audits, citation runs, ships)
- `docs/knowledge/optimization-log.md` — SEO/AEO optimization history
- `docs/knowledge/analyses/` — deep session write-ups

## How to use

```bash
git checkout main && git pull
# skim this file (and optionally: grep "^## \[" docs/knowledge/log.md | head -20)
# then branch and work
```

**Entry format** (copy the template):

```markdown
## YYYY-MM-DD — short title

- **Who:** name / agent runtime (e.g. Stephen + Cursor)
- **PR:** #N or n/a
- **Done:** 1–3 bullets of what landed
- **Next:** open follow-ups for the next person
- **Watch:** risks, known issues touched, files that are fragile
```

Keep entries short. File deep analysis under `docs/knowledge/analyses/` and link it from **Done** or **Next** when useful.

---

## 2026-08-18 — EOD handoff (start here)

- **Who:** Stephen + Cursor cloud agent
- **PR:** #9 (merge this so `main` matches live). #8 already merged.
- **Done:** Full day: wash-economics tokens on `main` (#8); five snippets + dilution band + hypoallergenic hero **live** on theme `#152547065995`. Stephen kept oatmeal tile, FUR-001 SHOP NOW, sulfate sentence, pet-owner hero, Bella/Charlie. Write-up: `docs/knowledge/analyses/2026-08-18-eod-handoff.md`.
- **Next:** (1) Merge #9. (2) Paste Goldendoodle + deshedding v3 HTML in Shopify Admin. (3) INCI metafields (issue 9) before spreading sulfate-free. (4) FUR-013 v4 body + faqs v2 via MCP. Do not publish FUR-011/020/050 yet.
- **Watch:** Ignore Next bullets in the two older 2026-08-18 entries below — 512 / ultra-gentle / “remove oatmeal” are done or reversed. Live push always `--allow-live --nodelete --only`. Do not Reset US pricing. `main-page-pillar.liquid` is not in this repo.

## 2026-08-18 — Homepage dilution math + hypoallergenic hero

- **Who:** Cursor cloud agent (Stephen)
- **PR:** #9
- **Done:** Wired live `fg-dilution-callout` to `wash-economics` (16:1; up to small-dog washes; medium $/wash from deshedding-shampoo). Hero slide 3 now links `hypoallergenic-shampoo-gallon`. Kept oatmeal tile, FUR-001 SHOP NOW, existing sulfate sentence, pet-owner hero, Bella/Charlie. Versioned `sections/fg-dilution-callout.liquid` + `templates/index.json`.
- **Next:** Correct INCI metafields (issue 9) so the kept sulfate sentence matches published lists. Paste guide HTML in Shopify. Do not activate FUR-020/050/011 until restock.
- **Watch:** `--nodelete` on partial pushes. Dilution numbers are computed in section liquid — theme-editor 512/$0.18 fields are ignored. Do not Reset US pricing.

## 2026-08-18 — Wash-economics snippets pushed to live theme #152547065995

- **Who:** Cursor cloud agent (Stephen)
- **PR:** #9
- **Done:** Confirmed `[live]` is **Copy of Copy of scg9xy-xt** `#152547065995` (old live `#150922428555` is unpublished). `shopify theme push --allow-live --nodelete --only` of `snippets/wash-economics.liquid`, `homepage-wash-stats.liquid`, `token-substitution.liquid`, `value-math.liquid`, `product-at-a-glance.liquid`. Pull-back diff: all 5 match repo. Live HTML `Shopify.theme.id` is 152547065995.
- **Next:** Homepage JSON is still unversioned and still shows **$0.18 / Up to 512 washes**. Pull homepage and replace that block with `{% render 'homepage-wash-stats' %}`; remove FUR-011 tile and ultra-gentle hero. Paste guide HTML in Shopify (no MCP on this VM). Sulfate copy stays off until INCI metafields are fixed.
- **Watch:** `--nodelete` is mandatory on partial pushes. Do not push `config/` or a full theme (would clobber live settings / homepage JSON). `main-page-pillar.liquid` is not in this repo. Do not activate FUR-020/050/011. Do not Reset US pricing.

## 2026-08-18 — GSC CTR brief corrected; wash-economics tokens

- **Who:** Stephen + Cursor cloud agent
- **PR:** #8
- **Done:** Re-checked the uploaded GSC/economics brief against live JSON. US compare-at is already `null` (do not redo). Canonical wash math is 128 oz × 17 = 2176 working oz; usage 5/11/18/25 → 435/198/121/87 washes; $/wash from live `variant.price`. Wired `snippets/wash-economics.liquid`, `[[COST:handle:tier]]`, `[[VALUE:dilution-ratio-bare]]`, FUR20 defaults. Goldendoodle + deshedding drafts retargeted to live SKUs. Filed `docs/knowledge/analyses/2026-08-18-gsc-ctr-economics-brief.md`.
- **Next:** Paste guide HTML in Shopify (no MCP on this VM). Pull unversioned homepage and replace 512/$0.18 with `{% render 'homepage-wash-stats' %}`; remove FUR-011 tile and ultra-gentle hero; sulfate copy stays off until INCI metafields are fixed. Lane 4 GSC cron is the steward repo, not this one.
- **Watch:** Homepage JSON is not in git. `main-page-pillar.liquid` is not in this repo — tokens on pages only work if the live theme still has it. Do not activate FUR-020/050/011. Do not Reset US pricing.

## 2026-08-17 — US compare-at $0.00 is a Markets override, not a blank

- **Who:** Stephen + Cursor cloud agent
- **PR:** #5 (continued)
- **Done:** Diagnosed USA compare-at: blanking the Markets field writes `0` (Sale vs `$0.00` on FUR-013 + FUR-014); Canada is already `null`. Reset pricing is the wrong control — it wipes the whole US fixed price, which is why the selling price jumped and then looked uneditable. Filed `docs/knowledge/analyses/2026-08-17-us-compare-at-zero.md`. Theme guard in `main-product.liquid` hides sale UI when compare-at is 0 or not greater than price (repo-side; unpublished duplicate until a token-equipped push).
- **Next:** Stephen (or Claude + Shopify Admin MCP): `priceListFixedPricesUpdate` with US `price: 34.99` and `compareAtPrice: null` — do not Reset. Then spot-check `/en-us/` JSON `compare_at_price: null`. Theme push of `main-product.liquid` to `#152547065995` when a deploy VM is available.
- **Watch:** Do not type `0` into compare-at. Do not delete the US fixed price. Live theme will keep showing `$0.00` until the catalog is `null` or the guard is published.

## 2026-08-14 — Phase 2 theme files pushed to unpublished duplicate

- **Who:** Stephen + Cursor cloud agent
- **PR:** #5 (continued)
- **Done:** Pushed `description-accordion.liquid`, `product-at-a-glance.liquid`, `furgenics-product-faqs.liquid`, `main-product.liquid` to unpublished `#152547065995` only. Preview: 2×2 chip-strip at-a-glance, comparison card below the accordion on deshedding, FAQ in the page gutter, original "Loved by Pets, Endorsed by the Best" testimonial restored. Live theme not published.
- **Next:** Claude MCP FUR-013 v4 body + faqs v2; Stephen: display titles, corrected INCI, August competitor captures, S&D pairings.
- **Watch:** Current Shopify bodies are still pre-v4, so accordion row titles are the old H2s (comparison extraction still works). Do not publish. No sulfate-claim reinstatement before INCI metafields are corrected.

## 2026-08-14 (later) — PDP Phase 2 build: 4-section accordion + Dandylion adoptions

- **Who:** Stephen + Cursor cloud agent
- **PR:** #5 (continued)
- **Done:** Phase 2 built repo-side per Stephen's go-ahead (Dandylion reference PDP): `description-accordion.liquid` v2 (INCI merges into an "ingredients" H2 section; "how-it-compares" H2 auto-extracted below the accordion as a compact card; backwards-compatible with un-migrated bodies + samples, simulation-verified), v4 deshedding description + curated 9-question `custom.faqs` (in the draft .md, ready for MCP), at-a-glance chip-strip restyle, `custom.display_title` + gallon eyebrow support in the title block (inert until metafield exists), proposed short titles for 9 SKUs in products.md (Class B). Also: FAQ page-width gutter fix + testimonial layout reverted to original per Stephen (2c). Brief: `docs/knowledge/analyses/2026-08-14-pdp-phase2-build.md`.
- **Next:** Theme push to #152547065995: `description-accordion.liquid`, `product-at-a-glance.liquid`, `main-product.liquid`, `furgenics-product-faqs.liquid`. Claude MCP: FUR-013 v4 body + faqs v2. Stephen: approve display titles, corrected INCI lists from R&D, August competitor captures, S&D pairings.
- **Watch:** Pushing snippet v2 extracts the comparison section below the accordion on ALL gallons immediately (intended — verify one conditioner too). No sulfate-claim reinstatement before INCI metafields are corrected. `mx-style.css` still unversioned. Secrets skip injection on this public repo — deploy runs need the Theme Access flow the 2026-08-14 deploy session used.

## 2026-08-14 — buy-button alignment fix pushed to unpublished duplicate

- **Who:** Stephen + Cursor cloud agent
- **PR:** #5 (continued)
- **Done:** Pushed `snippets/buy-buttons.liquid` (2b alignment fix) to unpublished duplicate `#152547065995` only. Live `#150922428555` untouched. Preview at 1440px and 390px: Add to cart full-width solid teal with arrow at the right edge; Apply for salon pricing full-width outlined secondary stacked below; left/right edges identical (desktop both 440px @ x=693; mobile both 350px @ x=20).
- **Next:** Stephen previews; Search & Discovery complementary pairings still admin; consider versioning `assets/mx-style.css` (P2). Then Phase 2.
- **Watch:** Never push to or publish the live theme. `mx-style.css` still globally overrides `.button`; the buy-box fix is higher-specificity CSS in the snippet, not a removal of those globals.

## 2026-08-14 — PDP Phase 1 deployed to unpublished duplicate theme

- **Who:** Stephen + Cursor cloud agent
- **PR:** #5 (continued)
- **Done:** Pushed Phase 1 `site/theme/` files to unpublished duplicate **Copy of Copy of scg9xy-xt** (`#152547065995`) only — live `#150922428555` untouched, nothing published. Versioned original `snippets/buy-buttons.liquid`, then restyled Add to cart as solid/primary full-width and the wholesale control as an outlined secondary **Apply for salon pricing** link (keeps `.wholesale-product` so the existing Klaviyo form `W5fDYc` still opens; `/pages/groomer-program` is the no-JS fallback). Preview verified on deshedding + deshedding conditioner, `/en-us/` and `/en-ca/`: at-a-glance + market shipping/currency, sticky ATC markup, no legacy Features & Benefits accordion, tokens substituting, 6 JSON-LD blocks parse.
- **Next:** Stephen previews; Search & Discovery complementary pairings still need admin (bundle block empty until then); then Phase 2 (v4 descriptions, FAQ dedupe, competitor price refresh). Sulfate: wait on corrected INCI lists before reinstating the claim.
- **Watch:** Never push to or publish the live theme. Nav still has a “Wholesale Pricing” menu label (out of scope). Admin blockers remain (inventory, inverted compare-at, FUR-011 404). `SHOPIFY_CLI_THEME_TOKEN` did not inject into this VM (public-repo secret skip); session used Theme Access against the duplicate only.

## 2026-08-14 — PDP Phase 1: buy-box + at-a-glance + accordion polish (repo-side)

- **Who:** Stephen + Cursor cloud agent
- **PR:** #5 (continued)
- **Done:** Assessed external PDP design review and filed `docs/knowledge/analyses/2026-08-14-pdp-phase1-buybox.md` with Stephen's five decisions (canonical shipping CA 2–5 / US 3–5; FUR20 manual entry; claims substantiated via 60+ groomer testing; sulfate claim held; review app pending). Built Phase 1 in `site/theme/`: buy-box reorder + quantity restore, new `product-at-a-glance` and `sticky-atc` snippets, duplicate H2/static rating/hidden legacy accordion removed, testimonial compacted, complementary bundle block, accordion focus-visible + reduced-motion fixes. `products.md` shipping updated.
- **Next:** Token-equipped agent run pushes the six changed theme files to duplicate theme #152547065995, pulls + restyles `snippets/buy-buttons.liquid` (wholesale → "Apply for salon pricing" secondary), sets Search & Discovery complementary pairings; Stephen previews, then Phase 2 (v4 descriptions, FAQ dedupe, competitor price refresh). **Sulfate resolution (same day, later):** R&D confirmed formulas ARE sulfate-free — published INCI lists are the error; awaiting corrected lists from R&D, then metafield push → claim reinstatement → AGENTS.md guardrail update (sequence in products.md issue 9).
- **Watch:** This VM predates the `SHOPIFY_CLI_THEME_TOKEN` secret so nothing was pushed to Shopify; admin blockers remain (inventory, inverted compare-at, FUR-011 404). Never push to the published theme. Do not reinstate sulfate-free claims before the INCI metafields are corrected. **`assets/mx-style.css` (unversioned) carries aggressive global overrides** — `.button` forced solid teal + arrow padding, submit `width:auto`, Dawn `:after` borders disabled — it caused the buy-button misalignment (fixed in `buy-buttons.liquid` with higher-specificity rules, verified via CSS injection on the rendered preview; needs one theme push). Candidate for pulling + versioning in a later session. Related-products renders 0 items on the preview (inventory/recommendations) — recheck after inventory fix.

## 2026-08-05 — session log convention added

- **Who:** Stephen + Cursor
- **PR:** #7
- **Done:** Added this file; wired start/end-of-session discipline into `AGENTS.md`
- **Next:** Colleagues pull `main`, read latest entries before starting; append an entry with each meaningful PR
- **Watch:** Steward (`plx-aeo-steward/brands/furgenics/`) remains upstream for machine-maintained wiki pages until repointed; soft MC compliance — operator PRs do not need `MC-Checkout`
