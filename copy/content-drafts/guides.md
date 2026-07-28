# Grooming Guides hub page — `/pages/guides`

> **Hub page draft for `/pages/guides`** — the "All Guides" landing under the new "Guides" nav dropdown. Routes traffic to all 6 published pillars and the Groomer Program.
>
> _Drafted by Claude Desktop at `content/drafts/furgenics-guides-hub-page.md` (commit `e70a121`, 2026-05-21). Reviewed, content-fixed, and converted to paste-ready HTML by Claude Code 2026-05-22. File moved to canonical drafts location `brands/furgenics/content-drafts/guides.{md,html}` for consistency with the other pillar drafts._

---

## Meta + technical

- **URL:** `/pages/guides` (recommended — cleanest, works as the "All guides" item in the new Guides dropdown nav)
- **Template:** `page.content-pillar` (token pipeline runs; nothing breaks if the page body has no tokens, and the pillar's H2/typography styling is appropriate for this content)
- **Page title (drives H1):** `Grooming Guides for Professional Salons` (Claude Desktop's original — good for AEO target queries)
- **SEO title (≤60 chars):** `Grooming Guides for Pro Salons | Furgenics`
- **Meta description (≤155 chars):** `Practical grooming guides for working salons: shampoo selection by breed, 16:1 dilution math, deshedding protocols, sensitive-skin formulations.`
- **Canonical:** `https://furgenics.com/pages/guides`
- **hreflang:** not needed — single URL serves both markets
- **Schema:** Optional — `ItemList` schema linking to each pillar could improve AEO discovery, but not required for initial publish.
- **Indexing:** indexable

---

## Content fixes applied to Claude Desktop's draft

| Original (e70a121) | Fixed in this version |
|---|---|
| Section header: "Bulk Dog Shampoo for Canadian Mobile Groomers" | "Bulk Dog Shampoo for Mobile Groomers" — matches the universal v2.2 framing of the pillar (we generalized the pillar from CA-only on 2026-05-21). URL link unchanged for SEO equity. |
| "Mobile groomers in Canada face a specific set of problems" | "Mobile groomers face a specific set of problems" — universal |
| "Shipping windows from our Vaughan, Ontario facility" (bullet) | "Shipping from Vaughan, Ontario (Canadian orders) and our US fulfillment partner (US orders)" — honest about dual fulfillment |
| Dilution-guide section: "roughly $1.50 per working gallon at Furgenics pricing" | Replaced with `[[VALUE:per-working-gallon-cost-narrative]]` token ("roughly the cost of a cup of coffee per working gallon at pro dilution") — Markets-neutral, matches the dilution pillar's own per-bath cost section |
| Dilution-guide section: "seventeen working gallons" | Replaced with `[[VALUE:working-gallons-per-bottle]]` token — consistent with the pillar |
| "16:1 dilution" / "16:1 concentrate" mentions (3 places — lead, dilution section, Bio-Groom section) | Replaced with `[[VALUE:dilution-ratio]]` token where it reads naturally |
| Groomer Program CTA: "ships eight 8oz sample bottles to qualifying professional salons, mobile groomers, and grooming schools across Canada and the United States" | Updated to Path B dual-offer reality: "ships a free 8oz sample pack to qualifying Canadian groomers (shipped from Vaughan, Ontario) and a first-order gallon discount to qualifying US groomers (US fulfillment doesn't handle non-revenue samples)" |

No structural changes — Claude Desktop's content is otherwise good as written.

---

## Body HTML

See sibling file `guides.html` for paste-ready version.

Structure:
1. Lead paragraph (3 paragraphs total — positions Furgenics + the editorial stance + the Vaughan, ON manufacturing note)
2. 6 pillar sections, each: H2 → ~80 word summary → "What's inside" 4-bullet list → link to the pillar
3. "Test Furgenics on your bench" CTA → Groomer Program link

NO `<h1>` in body — section template renders H1 from Page Title.

---

## Pre-publish checklist for Stephen

- [ ] **In Shopify admin → Pages → New page**:
  - [ ] Page title: `Grooming Guides for Professional Salons`
  - [ ] Page handle (URL): set to `guides` so final URL is `/pages/guides` (Shopify defaults to `grooming-guides-for-professional-salons`; override to `guides` in the URL edit field)
  - [ ] Template: `content-pillar`
  - [ ] SEO title: `Grooming Guides for Pro Salons | Furgenics`
  - [ ] Meta description: `Practical grooming guides for working salons: shampoo selection by breed, 16:1 dilution math, deshedding protocols, sensitive-skin formulations.`
  - [ ] Source view (`</>`) → paste full body from `guides.html`
  - [ ] Visibility: Visible
  - [ ] Save
- [ ] **Verify on `/en-ca/`:**
  - Page renders correctly, all 6 pillar links resolve
  - `[[VALUE:dilution-ratio]]` renders as "16:1 concentrate" in the lead + dilution section + Bio-Groom section
  - `[[VALUE:working-gallons-per-bottle]]` renders as the phrase in dilution section
  - `[[VALUE:per-working-gallon-cost-narrative]]` renders as the cup-of-coffee phrase in dilution section
  - No raw `[[TOKEN]]` text visible anywhere
- [ ] **Verify on `/en-us/`:**
  - Same content (no Furgenics prices on this page, so currency rendering isn't relevant)
  - Cross-market language reads naturally to a US visitor
- [ ] **Add to nav:** Online Store → Navigation → Main menu → "Guides" dropdown → add "All Guides" item linking to `/pages/guides` (plus the 6 individual pillar links as already planned)
- [ ] **Submit to GSC** for indexing
- [ ] **Future enhancement:** Consider adding `ItemList` JSON-LD schema for the 6 pillars to help answer engines discover the full guides library in one crawl

---

## Future enhancements (not blocking publish)

- **Hero image** at the top: hub-page-specific photography (currently no image — clean structural design works fine without one)
- **Filter / category UI** if the guide count grows past ~10: split into "Breed guides" / "Technique guides" / "Comparison guides" sections
- **"Newest guide" callout** at the top once we have a rolling publish cadence
- **ItemList JSON-LD** for AEO discovery of the full library
- **Related guides** linking at the bottom of each pillar → back to this hub

---

## Cross-references

- `market-map.md` — the 6 pillars this hub covers map to clusters: high-intent-01 (Bio-Groom comparison), high-intent-02 (bulk mobile), breed-01 (Goldendoodle), breed-02 (Deshedding), coat-01 (Oatmeal & Aloe sensitive skin), how-to-01 (Dilution)
- `content-style-guide.md` — token API + maintenance rules
- 6 pillar drafts under `brands/furgenics/content-drafts/` — all referenced from this hub

## Change log

- **2026-05-21** — Original markdown draft by Claude Desktop at `content/drafts/furgenics-guides-hub-page.md` (commit e70a121).
- **2026-05-22** — Reviewed by Claude Code. Three content fixes applied (Bulk Mobile Groomers section generalized to universal both-markets; dilution `$1.50` specific dollar replaced with token; Groomer Program CTA updated for Path B dual-offer reality). Token usage added (`[[VALUE:dilution-ratio]]`, `[[VALUE:working-gallons-per-bottle]]`, `[[VALUE:per-working-gallon-cost-narrative]]`). Paste-ready HTML version created. File moved from `content/drafts/` to `brands/furgenics/content-drafts/` for convention consistency.
