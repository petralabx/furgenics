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
- **Watch:** This VM predates the `SHOPIFY_CLI_THEME_TOKEN` secret so nothing was pushed to Shopify; admin blockers remain (inventory, inverted compare-at, FUR-011 404). `buy-buttons.liquid` is still unversioned — pull before editing. Never push to the published theme. Do not reinstate sulfate-free claims before the INCI metafields are corrected.

## 2026-08-05 — session log convention added

- **Who:** Stephen + Cursor
- **PR:** #7
- **Done:** Added this file; wired start/end-of-session discipline into `AGENTS.md`
- **Next:** Colleagues pull `main`, read latest entries before starting; append an entry with each meaningful PR
- **Watch:** Steward (`plx-aeo-steward/brands/furgenics/`) remains upstream for machine-maintained wiki pages until repointed; soft MC compliance — operator PRs do not need `MC-Checkout`
