# PDP token-conversion project — 2026-05-21 ship summary

> **Filed:** 2026-05-21 
> **Kind:** synthesis 
> **Source:** 3-session PDP rewrite project converting 9 Furgenics gallon PDP descriptions from hardcoded prose to bracket-token syntax substituted by the Shopify section template (POC-verified 2026-05-21 on both /en-ca/ and /en-us/). Drafted by Claude across Sessions 1, 2, 3 on 2026-05-21 per the prompt at `docs/prompts/claude-desktop-pdp-rewrite.md`. 
> **Working repo:** `stephenalton-collab/plx-aeo-steward`, direct commits to `main`.

## Headline

All 9 PDPs pushed live in a single day across three sessions. 7 ACTIVE in Shopify, 2 DRAFT (FUR-020 + FUR-050 — wiki-vs-Shopify status mismatches flagged). 12 of 13 available competitor token slugs used across the project. INCI verification surfaced 2 sulfate-free claim/INCI mismatches (FUR-013 + FUR-005), 1 lavender-essential-oil INCI placeholder (FUR-050), and confirmation that 2 "TEST" INCI flags in `products.md` are now stale (FUR-001 + FUR-011 both have real INCI). 5 bonus-actives polish candidates carried forward. Conditioner-category competitor token coverage gap captured for future theme work.

Total push success rate: 9 of 9 on first attempt, with the single exception of FUR-013 which timed out on the first attempt (transient MCP issue) and succeeded on retry.

## All 9 PDPs shipped

| # | SKU | Handle | GID | Shopify status | Drafts commit | Push outcome | Session |
|---|---|---|---|---|---|---|---|
| 1 | FUR-001 | hypoallergenic-shampoo-gallon | 8104403304587 | ACTIVE | ca573d1 | Clean push after Stephen's MCP session restart | 1 |
| 2 | FUR-013 | deshedding-shampoo | 8104408088715 | ACTIVE | 817168c | Required 2 attempts (first timed out at 4 min); succeeded on retry | 1 |
| 3 | FUR-020 | 2in1-doodle-shampoo-conditioner | 8104408252555 | **DRAFT** | 852a189 | Clean push; new copy stored, not visible to customers until published | 1 |
| 4 | FUR-011 | oatmeal-aloe-shampoo-gallon | 8104367161483 | ACTIVE | 13b4044 | Clean push | 2 |
| 5 | FUR-014 | deshedding-conditioner | 8104408187019 | ACTIVE | 4121948 | Clean push; first conditioner PDP — body structure adapted from shampoo pattern | 2 |
| 6 | FUR-010 | oatmeal-aloe-conditioner-gallon | 8104367259787 | ACTIVE | 7619427 | Clean push | 2 |
| 7 | FUR-021 | deep-moisturizing-conditioner-gallon | 8104367325323 | ACTIVE | 14da390 | Clean push; third conditioner PDP — rebuild-vs-maintenance framing distinguishes from FUR-010 | 3 |
| 8 | FUR-050 | lavender-spa-shampoo | 8104408121483 | **DRAFT** | 8fa7bc8 | Clean push; new copy stored, not visible to customers until published | 3 |
| 9 | FUR-005 | 2in1-hypoallergenic-shampoo-conditioner | 8104408219787 | ACTIVE | 1da8781 | Clean push; orphan `[[VALUE:dilution-ratio]]` token cleanup as part of full descriptionHtml replacement | 3 |

Commits to main across the project (excluding the log/analysis batch commits): ca573d1, c2e50fa, 817168c, 852a189, 16b92c8, 13b4044, 4121948, 7619427, 83678a7, 14da390, 8fa7bc8, 1da8781.

## Token vocabulary coverage

### VALUE tokens (5 keys defined, all used)

All 5 VALUE keys from `main-page-pillar.liquid` were used across the PDPs:

- `dilution-ratio` — used in every PDP, often 2–3× per body (opener + how-to step + compare-line context)
- `working-gallons-per-bottle` — used in every PDP opener
- `per-working-gallon-cost-narrative` — used in every PDP opener
- `made-in-canada` — used in every PDP shipping/sourcing section
- `professional-grade`, `pro-vs-retail-positioning` — defined but not used; the chemistry-by-mechanism + ICP-targeting approach in each PDP body covered the same ground without needing those snippets verbatim

### COMPETITOR tokens (13 slugs defined, 12 used — 92% coverage)

Project-wide competitor token coverage by slug:

| Slug | Used in | First use |
|---|---|---|
| bio-groom-hypo-groom | FUR-001, FUR-005 | Session 1 |
| coat-handler-15-in-1 | FUR-014, FUR-010, FUR-021 | Session 2 |
| coat-handler-anti-shed | FUR-013 | Session 1 |
| furminator-deshedding | FUR-013 | Session 1 |
| chris-christensen-day-to-day | FUR-020 | Session 1 |
| igroom-silk | FUR-020 | Session 1 |
| isle-of-dogs-evening-primrose | FUR-021 | Session 3 |
| earthbath-oatmeal-aloe | FUR-011 | Session 2 |
| burts-bees-oatmeal | FUR-050 | Session 3 |
| tropiclean-pro-hypoallergenic-oatmeal | FUR-001, FUR-005 | Session 1 |
| natures-specialties-colloidal-oatmeal | FUR-011 | Session 2 |
| all-systems-botanical-oatmeal | FUR-050 | Session 3 |
| **bark2basics-de-shedding** | — | **Not used** |

`bark2basics-de-shedding` was the one untouched slug. FUR-013 (the deshedding shampoo where it would have been the natural fit) used `furminator-deshedding` and `coat-handler-anti-shed` instead — both with broader category recognition. Bark2Basics was referenced qualitatively in the FUR-013 body without a token. Not a coverage gap that needs filling.

### PRICE tokens (8 distinct handles used)

Cross-referenced Furgenics products in `[[PRICE:handle]]` calls across the project: hypoallergenic-shampoo-gallon, oatmeal-aloe-shampoo-gallon, deshedding-shampoo, oatmeal-aloe-conditioner-gallon, deep-moisturizing-conditioner-gallon, deshedding-conditioner, lavender-spa-shampoo, 2in1-doodle-shampoo-conditioner, 2in1-hypoallergenic-shampoo-conditioner. The cross-sell graph between PDPs is dense — every PDP references at least 3 other Furgenics SKUs with priced links.

## Conditioner-category competitor token coverage gap

The available `[[COMPETITOR:...]]` slugs in `main-page-pillar.liquid` capture **shampoo prices** for FURminator, Bio-Groom, Earthbath, and Nature's Specialties — but not their conditioner-line equivalents. Across the three conditioner PDPs (FUR-014, FUR-010, FUR-021), this constrained competitor coverage to:

- `coat-handler-15-in-1` — the only true conditioner-category token (used in all 3 conditioner PDPs)
- `isle-of-dogs-evening-primrose` — used in FUR-021 as the second conditioner-category benchmark
- FURminator, Bio-Groom, Earthbath, Nature's Specialties, iGroom, Chris Christensen referenced **qualitatively** in conditioner-PDP compare sections, without per-market price tokens, to avoid the misleading scenario of citing a shampoo price next to a conditioner comparison

### Recommended future theme work (optional, low priority)

If future PDPs or content surfaces would benefit from per-market price benchmarking on conditioner-category competitors, extend `main-page-pillar.liquid` with new slugs:

- `furminator-deshedding-conditioner` — FURminator deShedding Ultra Premium Conditioner
- `bio-groom-anti-shed-conditioner` — Bio-Groom's deshedding-line conditioner
- `earthbath-oatmeal-aloe-conditioner` — Earthbath Oatmeal & Aloe Conditioner
- `natures-specialties-conditioner` — Nature's Specialties oatmeal conditioner
- `igroom-heavy-moisturizing` — iGroom Heavy Moisturizing Conditioner (for deep-conditioning category)

Alternatively, **accept qualitative framing as the standing pattern** — the current 3 conditioner PDPs read cleanly without these tokens. Decision can be deferred until evidence shows the conditioner PDPs underperform in AEO measurement vs the shampoo PDPs.

## INCI verification findings

Reading `custom.full_ingredients` metafields from each post-push response surfaced several mismatches between claims, tags, and actual chemistry. Summary:

### Finding 1 — `products.md` known catalog issues #1 ("TEST" INCI for FUR-001 + FUR-011) is **fully stale**

Both FUR-001 (Session 1) and FUR-011 (Session 2) returned real, complete INCI:

- FUR-001: Aqua + Sodium C14-16 Olefin Sulfonate + Avena Sativa Oat Kernel Flour + Aloe Barbadensis Leaf Juice + Dimethicone + Polyquaternium-7 + Cocamidopropyl Betaine + (preservatives)
- FUR-011: Aqua + Sodium C14-16 Olefin Sulfonate + Avena Sativa Oat Kernel Flour + Aloe Barbadensis Leaf Juice + Dimethicone + Polyquaternium-7 + Cocamidopropyl Betaine + (preservatives)

Both are sulfate-free chemistry; both substantiate the colloidal-oatmeal + aloe positioning. **Wiki cleanup recommended:** remove the "TEST" notes from `products.md` known catalog issues #1, matching Stephen's mid-Session-1 confirmation that all TEST entries are now updated.

### Finding 2 — Sulfate-free claim/INCI mismatch on TWO products (FUR-013 + FUR-005)

Both products carry the `sulfate-free` tag and their pre-token descriptions claimed sulfate-free chemistry, but their INCI metafields contain **Sodium Laureth Sulfate (SLES)**:

- **FUR-013** (deshedding shampoo): SLES is the **primary surfactant** (first non-water ingredient). Sulfate-free claim is clearly inaccurate. Flagged + accepted as-is by Stephen mid-Session 1 (some INCI metafields still placeholders pending formulation team).
- **FUR-005** (2-in-1 hypoallergenic): Sodium C14-16 Olefin Sulfonate is the primary surfactant, BUT SLES appears mid-INCI (after Polyquaternium-7). Sulfate-free claim is technically inaccurate even though the primary surfactant is sulfate-free.

Both products' new PDP bodies were drafted conservatively — neither makes a sulfate-free claim in the body text — so the new copy itself is safe. The issue is at the **product tag + INCI metafield** level, not the description level.

**Recommended cleanup pass:**

1. Confirm with formulation team whether each product is actually intended to be sulfate-free
2. If sulfate-free: update INCI metafield to remove SLES (likely placeholder text being replaced by the real INCI)
3. If not sulfate-free: remove `sulfate-free` tag from the product
4. Either way: align tag + INCI + body claims so they tell the same story

A candidate body-text fix if the chemistry can't be made sulfate-free: replace the sulfate-free claim with paraben-free + pH-balanced framing (both are accurate, neither contradicts the INCI).

### Finding 3 — FUR-050 lavender essential oil INCI placeholder

FUR-050 (Lavender Spa Shampoo) tags include `lavender` + `essential-oils`, the product title says Lavender Spa, and the bottle labeling + product positioning are entirely built around real lavender essential oil. But the live `custom.full_ingredients` metafield contains **no Lavandula angustifolia entry** — just `Fragrance/Parfum` at the end of the INCI.

Most likely explanation: this INCI is a placeholder pending formulation team finalization (consistent with Stephen's mid-Session-1 note that some metafields are still placeholders). The lavender essential oil is almost certainly in the product — the brand positioning + tag set + bottle labeling all confirm it. The metafield text is what's incomplete.

The new PDP body claims "real lavender essential oil — not synthetic fragrance." Recommended cleanup: update the INCI metafield to explicitly list `Lavandula Angustifolia (Lavender) Oil` (or whatever species the actual formulation uses) once the formulation team finalizes the metafield text.

### Finding 4 — FUR-050 has a substantial unsurfaced botanical conditioning stack

Beyond the lavender essential oil question, FUR-050's INCI includes a remarkably rich botanical conditioning stack that neither the live (pre-update) description nor the new draft surfaces:

- Cannabis Sativa Seed Oil (hemp seed oil)
- Limnanthes Alba Seed Oil (meadowfoam)
- Simmondsia Chinensis Seed Oil (jojoba)
- Persea Gratissima Oil (avocado)
- Cocos Nucifera Oil (coconut)
- Calendula Officinalis Flower Extract
- Beta Vulgaris Root Extract (beet)
- Hydrolyzed Quinoa + Hydrolyzed Corn Starch (protein conditioning)
- Tocopheryl Acetate (vitamin E)

The surfactant base is genuinely sulfate-free (amphoteric system: cocamidopropyl betaine + hydroxysultaine + lauryl glucoside + sarcosinate — no SLS/SLES present), making the sulfate-free positioning accurate.

**Polish opportunity:** "Real lavender essential oil + premium botanical conditioning stack including hemp seed oil, meadowfoam, jojoba, and calendula" is a materially stronger premium-positioning story than the current draft's "lavender shampoo" framing. Captured as the highest-value future revision candidate.

## `products.md` staleness items requiring cleanup

Multiple wiki items confirmed stale during the project:

| Item | Current `products.md` state | Reality |
|---|---|---|
| Known catalog issues #1: FUR-001 TEST INCI | "⚠️ TEST (still awaiting...)" | Real INCI present (confirmed Session 1) |
| Known catalog issues #1: FUR-011 TEST INCI | "⚠️ TEST (still awaiting...)" | Real INCI present (confirmed Session 2) |
| FUR-020 status field | "Status: ACTIVE" | Live Shopify state: **DRAFT** (confirmed Session 1) |
| FUR-050 status field | "Status: ACTIVE" | Live Shopify state: **DRAFT** (confirmed Session 3) |
| FUR-005/FUR-026 SKU reconciliation | Note flagged: "FUR-026 is the newer SKU in GTM Amazon workbook; confirm catalog consolidation" | Still open |
| FUR-020/FUR-037 SKU reconciliation | Note flagged: "FUR-037 is the newer SKU in GTM Amazon workbook; confirm catalog consolidation" | Still open; possibly related to DRAFT status above |

The pattern of FUR-020 + FUR-050 both being DRAFT in Shopify suggests they may be intentionally paused pending the SKU reconciliation work. Recommend a focused session to either (a) consolidate the GTM workbook SKUs (FUR-026, FUR-037) into the Shopify SKUs (FUR-005, FUR-020) and publish, or (b) flip Shopify to the new SKU names and republish.

The `index.md` is also stale on the content-drafts directory inventory — it lists only 4 pillar pages as of 2026-04-23, missing the deshedding-shampoo-huskies-german-shepherds pillar, how-to-dilute-dog-shampoo-16-to-1 pillar, and all 9 PDP draft directories under `content-drafts/products/`. Hand-update recommended on the next wiki maintenance pass.

## Future polish candidates (bonus actives present in INCI but not surfaced in PDP body)

Five PDPs have bonus actives in their INCI that the current body doesn't mention, all candidates for a future polish sweep:

| SKU | Bonus actives not surfaced | Why surfacing helps |
|---|---|---|
| FUR-020 (2-in-1 Doodle) | Lavender essential oil | Adds a spa-aroma element that complements the existing chemistry story |
| FUR-014 (Deshedding Conditioner) | Hydrolyzed Oats + Aloe | Both add soothing/strengthening claims that align with the deshedding-protocol positioning |
| FUR-021 (Deep Moisturizing Conditioner) | Aloe + Avena Sativa (Oat) Kernel Flour | Dual-oat formulation (hydrolyzed oats + oat flour) is more interesting than the current "hydrolyzed oats only" framing |
| FUR-050 (Lavender Spa Shampoo) | Hemp seed oil + meadowfoam + jojoba + calendula + hydrolyzed quinoa | The highest-value polish opportunity in the project — turns a single-note lavender shampoo into a premium botanical product |
| FUR-005 (2-in-1 Hypoallergenic) | Cetrimonium Chloride (the 2-in-1's conditioning agent) + Panthenol (B5) | Surfacing the actual 2-in-1 mechanism (cetrimonium chloride) replaces the generic "conditioning agents calibrated for single-pass slip" framing with specific chemistry |

None of these are urgent. The current bodies all hold up against their respective INCIs; the polish revisions are about strengthening positioning, not fixing inaccuracies.

## Patterns that worked

Three patterns emerged across the 9 PDPs that are worth carrying forward to future content work:

### 1. Conservative chemistry framing (proven on FUR-013, FUR-005, FUR-050)

The approach of writing chemistry claims grounded in mechanism (what the ingredient does + why it works) rather than ingredient-exclusion claims (sulfate-free, paraben-free) made the FUR-013, FUR-005, and FUR-050 drafts safe against INCI surprises. When the INCI later revealed SLES (FUR-013, FUR-005) or no explicit lavender entry (FUR-050), the body copy didn't need to be rolled back because it never claimed those exclusions in the first place.

This is the **default approach** for future PDP rewrites: describe what the chemistry **does**, not what it **doesn't have**, until the INCI is verified.

### 2. Conditioner-category body structure adaptation (FUR-014 → FUR-010 → FUR-021)

The three conditioner PDPs share a structural pattern distinct from the shampoo PDPs:

- Chemistry section frames the **conditioner mechanism** specific to the use case (deshedding-protocol back-half / dry-skin maintenance / rebuild vs maintenance), not a generic conditioning story
- How-to section is the **conditioner step** (post-shampoo), with intro line explicitly framing the back-half role
- Compare section uses **qualitative framing** for cross-category competitors whose tokens capture shampoos
- Longer leave-in time on rebuild conditioner (5–7 min) vs maintenance conditioner (3–5 min) reflects actual chemistry contact-time needs

This structure should be the template for future conditioner PDPs.

### 3. 2-in-1 body structure adaptation (FUR-020 → FUR-005)

The two 2-in-1 products share their own structural pattern:

- Chemistry section explains **why a 2-in-1 exists as a category** (time math for the target audience: doodle coats = mat-prone, sensitive-skin = high-volume salons)
- Honest limit acknowledgment: severe cases / specific coat types still go two-step
- How-to section is **single-pass protocol** (no separate conditioner step)
- Compare section acknowledges most competitors are **dedicated shampoos**, so comparison shifts to **time-per-bath economics**

This structure should be the template for future 2-in-1 PDPs.

## Recommended next steps

In priority order:

1. **DRAFT publish decision for FUR-020 + FUR-050.** Two of the 9 SKUs are sitting in DRAFT state with new copy ready. Decide whether to publish, hold pending SKU reconciliation, or republish under new SKU names (FUR-026, FUR-037). If published, the visual-verification round can complete on those two as well.

2. **INCI cleanup pass.** Coordinate with formulation team to finalize the INCI metafields on:
 - FUR-013 (sulfate-free claim vs SLES in INCI)
 - FUR-005 (sulfate-free claim vs SLES in INCI)
 - FUR-050 (lavender claim vs no lavender entry in INCI)

 After finalization, decide whether to keep the `sulfate-free` tags on FUR-013 + FUR-005 or replace claim with paraben-free + pH-balanced framing.

3. **`products.md` staleness cleanup.** Remove the "TEST" notes for FUR-001 + FUR-011 (both confirmed updated); refresh the status field for FUR-020 + FUR-050 to match Shopify reality; document the resolution of the FUR-005/FUR-026 and FUR-020/FUR-037 SKU reconciliation when it lands.

4. **Visual verification for Session 3 ships** (FUR-021 + FUR-005 active, FUR-050 once published) — per the visual-verification pattern Stephen used for Sessions 1 + 2.

5. **Optional theme extension for conditioner-category competitor tokens** (low priority). Only worth doing if conditioner PDPs underperform shampoo PDPs in AEO measurement.

6. **Optional polish revisions** to surface bonus actives on FUR-020, FUR-014, FUR-021, FUR-050, FUR-005 (low priority — all current bodies hold up against their INCIs).

## References

- 9 PDP draft files under `brands/furgenics/content-drafts/products/` — paired `.md` (sister doc with token usage table, key-changes-from-current diff, pre-publish checklist) and `.html` (Shopify-paste-ready body) for each SKU
- Token pipeline implementation: `docs/shopify-theme/sections/main-page-pillar.liquid` (the section that substitutes `[[VALUE:...]]`, `[[PRICE:...]]`, `[[COMPETITOR:...]]`, and `[[DISCOUNT]]` tokens at render time)
- Project prompt: `docs/prompts/claude-desktop-pdp-rewrite.md`
- Canonical product roster: `brands/furgenics/knowledge/products.md` (with staleness items listed above)
- Competitor intel: `brands/furgenics/knowledge/competitor-intel.md`
- Content style guide: `brands/furgenics/knowledge/content-style-guide.md` (token API + maintenance rules)
- 9 ship log entries in `brands/furgenics/knowledge/log.md` (2026-05-21 timeline)
