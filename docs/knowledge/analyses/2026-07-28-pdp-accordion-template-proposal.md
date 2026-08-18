# PDP accordion template — one unified, purchase-decision-ordered accordion

> Filed: 2026-07-28  ·  Kind: brief
> Source: Stephen request 2026-07-28 — "product pages are dense with text… build an accordion after the initial description using the headers; reconcile with the existing metafield accordion; reorder for purchase decisions" (task 1 of 2)
> Related: [products.md](../products.md), [content-style-guide.md](../content-style-guide.md), [schema-state.md](../schema-state.md), [icp.md](../icp.md), [2026-05-27-token-substitution-extraction-and-faq-architecture.md](./2026-05-27-token-substitution-extraction-and-faq-architecture.md)

## The problem

Reviewed live on 2026-07-28 (`/products/deshedding-shampoo`, `/products/hypoallergenic-shampoo-gallon`). Every gallon PDP currently stacks three content bands:

| Band | Source | Rendered as |
|---|---|---|
| 1. Description | `product.description` (token-substituted in `sections/main-product.liquid`) | ~700 words of open text: answer-first opener + five `<h2>` sections |
| 2. Metafield accordion | Six theme collapsible rows reading `custom.*` metafields | Features & Benefits · Ingredients · Professional Groomer Size · Ready to Use or Dilutes 16:1 · Directions of Use · Coat Type |
| 3. FAQ accordion | `custom.faqs` metafield via `snippets/furgenics-product-faqs.liquid` + FAQPage JSON-LD | 11–12 collapsible Q&As |

The description text is doing real SEO/AEO work (the 2026-05-21 rewrites were deliberate), but as UX it's a wall: a shopper has to scroll past ~700 words to reach the buy-relevant facts, and then hits a *second* accordion that partially repeats what they just scrolled past:

- "How to dilute and use…" (description) ⊃ "Directions of Use" + "Ready to Use or Dilutes 16:1" (metafield rows)
- "When to use…" (description) ⊃ "Coat Type" (metafield row)
- "Why the chemistry works" (description) ≈ a deeper "Features & Benefits" (metafield row)
- The opener already states dilution economics, duplicating "Professional Groomer Size" + "Ready to Use or Dilutes 16:1"

## Options considered

**A. Split the description at `<h2>` boundaries in Liquid, server-side (recommended).** A new snippet takes the already-token-substituted description, keeps everything before the first `<h2>` visible, and renders each `<h2>` section as a native `<details>/<summary>` row. The Ingredients row is injected from `custom.full_ingredients` so the page has one unified accordion. Row order = document order of the H2s, so ordering stays a *content* decision in the canonical drafts, not theme logic.
- Pros: zero content migration (works for all 9 SKUs the day it ships); the description stays the single canonical surface with tokens already working; content stays fully in the DOM (SEO-safe); descriptions without H2s (samples) render unchanged.
- Cons: Liquid string-splitting requires one convention — plain-text H2s (all current drafts comply).

**B. Migrate each description section into its own metafield and use the theme's collapsible-tab blocks.** Rejected: 9 SKUs × 5 sections of migration, fragments the canonical description that tokens/drafts/PRs are built around, and expands the `custom.*` metafield surface we've already flagged for cleanup (products.md "Dormant unstructured metafields").

**C. Client-side JS that wraps rendered H2s into an accordion.** Rejected as primary: layout shift on load, and rendering-dependent indexing. Acceptable fallback only if theme-code access were blocked.

**Recommendation: A**, plus retiring the redundant metafield rows in the theme editor so bands 1 and 2 merge into one accordion.

## The recommended template

**Visible zone (unchanged):** buy box, then the answer-first opener (~50 words: what it is, who it's for, dilution economics). This is the AEO answer block — it must not move into the accordion.

**Unified accordion (new), ordered by the groomer's purchase-decision sequence** (per icp.md — a salon owner/mobile groomer evaluating a switch):

| # | Row | Source | Why this position |
|---|---|---|---|
| 1 | When to use / coat types & breeds *(default-open)* | description §"When to use…" (absorbs `custom.coat_type` row) | First question: "is this right for the dogs on my bench?" |
| 2 | How it compares to alternatives | description §"How it compares…" | Second: "does the math beat what I use now?" — competitor + price tokens live here |
| 3 | How to dilute and use | description §"How to dilute and use…" (absorbs "Directions of Use", "Ready to Use or Dilutes 16:1", "Professional Groomer Size" rows) | Third: "does it fit my workflow?" — the 7-step protocol supersedes the generic directions |
| 4 | Full ingredients (INCI) | `custom.full_ingredients` metafield (injected by the snippet) | INCI transparency is a stated differentiator vs Coat Handler et al.; pros check this before buying |
| 5 | Why the chemistry works | description §"Why…" | Credibility deep-dive for the already-interested reader |
| 6 | Shipping, sourcing & the Groomer Program | description §"Shipping, sourcing…" | Logistics close: fulfillment, samples/first-order discount, `[[DISCOUNT]]`, contact |

**Retired rows:** "Features & Benefits" (one-line Amazon-style bullet, fully covered by the visible opener), "Professional Groomer Size", "Ready to Use or Dilutes 16:1", "Directions of Use", "Coat Type" — remove those collapsible-tab blocks from the product template in the theme editor once the accordion ships. The underlying metafields stay (Amazon listings and future surfaces still read them); only the PDP rows go.

**FAQ accordion:** stays as its own band (different content type, feeds FAQPage JSON-LD). Secondary improvement, same ordering principle applied per-SKU inside `custom.faqs`: purchase-blockers first (dilution ratio, breed fit, competitor comparison, discount), logistics tail last (shipping, returns, wholesale). The shared 5-question tail already sits last on the SKUs reviewed, so this is mostly confirming the 3–5 product-specific openers lead with fit + economics.

## SEO/AEO guardrails (how this maintains SEO)

1. **Nothing is deleted or hidden from crawlers.** All copy remains server-rendered in the DOM; Google indexes collapsed-accordion content at full weight under mobile-first indexing. This is a restructure, not a content cut.
2. **Heading outline unchanged.** H2s stay real `<h2>` elements (inside `<summary>`, valid per the HTML spec). No heading-text changes → no keyword churn.
3. **Answer-first opener stays visible** — the AEO answer block that the citation runs depend on is untouched.
4. **FAQPage JSON-LD and the token pipeline untouched** — the snippet runs *after* token substitution, so `[[PRICE]]`/`[[VALUE]]`/`[[COMPETITOR]]`/`[[DISCOUNT]]` behavior is identical.
5. **Anchor ids per row** (handleized heading) + hash auto-open, so any existing deep links or sitelinks keep resolving to open content.
6. Expected upside, not just parity: less pogo-sticking and a shorter path to the buy-relevant rows should help engagement signals.

## Implementation state (this PR) and rollout

**Shipped in this repo:**
- `site/theme/snippets/description-accordion.liquid` — the snippet (opener + H2-split accordion + INCI injection + anchors; no-op on H2-less descriptions).
- Exemplar content reorder: `copy/content-drafts/products/deshedding-shampoo.{md,html}` — sections reordered to the template order above (pure move, plus one compliance fix, see finding 2 below).

**Remaining rollout (theme + Shopify access required, in order):**
1. Pull the live `sections/main-product.liquid`, confirm the substituted-description variable name, and wire `{% render 'description-accordion', description_html: …, product: product %}` in place of the direct output. (Guardrail: verify against live theme, don't guess — the file lives in the steward repo / live theme, not here.)
2. Remove the five retired collapsible-tab blocks from the product template in the theme editor (keep the FAQ section).
3. Restyle the snippet's neutral CSS to match the theme's collapsible-tab look if desired (class names are stable).
4. Reorder the remaining 8 PDP description drafts to the template order (mechanical H2-section moves, no copy changes) and push via the usual `update-product` path. Rollout order suggestion: FUR-013 (exemplar) → FUR-001 → remaining ACTIVE SKUs → DRAFT SKUs (FUR-050, FUR-020).
5. Verify each on `/en-ca/` and `/en-us/`: tokens resolve inside collapsed rows, INCI row present at position 4, FAQ band intact, Rich Results Test still passes (Product, FAQ, Breadcrumbs).
6. Log the ship in `optimization-log.md` (change type `theme-change` + `pdp-rewrite`) with expected-impact notes, per the workflow.

## Findings from the 2026-07-28 live review (defects, filed here for visibility)

1. **Unsubstituted token live on FUR-001.** `/products/hypoallergenic-shampoo-gallon` renders raw `[[PRICE:oatmeal-aloe-shampoo-gallon]]` in the "How it compares" section. The handle *is* in the style guide's supported list, so either the live `token-substitution.liquid` is missing that handle or the body has a typo the snippet doesn't match. Needs a live-theme + live-body check.
2. **FUR-013 description still claims "sulfate-free"** while its own Ingredients row lists Sodium Laureth Sulfate, and the claim was removed brand-wide pending INCI cleanup. Fixed in the v3 exemplar draft (claim dropped from the chemistry section); the other 8 drafts should get the same sweep during rollout step 4. (FUR-005's accepted-gap phrasing is a separate, human decision — see products.md issue 9.)
3. **Compare-at price renders below sale price.** Both PDPs reviewed show "Regular price ~~$18.04 USD~~ Sale price $34.99 USD" — a struck-through price *lower* than the sale price. Looks like a stale/misconfigured `compare_at_price`. Merchandising fix in Shopify admin, outside this repo, but it undermines the value story on every PDP.
4. **Wiki price divergence.** products.md carries $24.99 CAD baseline; live US market shows $34.99 USD. Not corrected here per AGENTS.md (steward copy canonical for machine-maintained data; flag, don't overwrite) — flagging for the next products.md sync.

## Sources & references

- Live PDPs fetched 2026-07-28: furgenics.com `/products/deshedding-shampoo`, `/products/hypoallergenic-shampoo-gallon`
- `knowledge/content-style-guide.md` — token pipeline + 4-surface architecture the snippet slots into
- `knowledge/products.md` — metafield inventory (`custom.full_ingredients`, `custom.directions`, `custom.coat_type`, …) and known catalog issues 9/10
- `knowledge/schema-state.md` — FAQPage/Product JSON-LD state that must survive the restructure
- `knowledge/icp.md` — purchase-decision sequence grounding the row order
- Google Search Central guidance: content in collapsed/accordion UI is fully indexed under mobile-first indexing
