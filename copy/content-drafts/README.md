# Furgenics content-drafts

Shopify-destined pillar page drafts. Each page has two files:

- **`<slug>.md`** &mdash; canonical markdown source. Human-readable, git-diffable, edited in Cursor or Claude Code.
- **`<slug>.html`** &mdash; HTML version for pasting into Shopify's code view. Regenerated from the .md whenever the markdown changes.

## Why two files

Shopify's rich-text editor doesn't parse markdown syntax &mdash; pasting raw markdown renders `##` and `**` as literal characters. The HTML file is the actually-paste-ready version. We keep the markdown as canonical because:

- Git diffs are cleaner on markdown than on HTML
- The markdown serves as a source of truth that non-technical team members can edit
- HTML can be regenerated from markdown via pandoc or similar if we ever automate this

For now, the HTML is hand-converted. Future work: automate via `npm run build:content` that regenerates all .html from .md.

## Templates

- **`_template.md`** &mdash; structural template with required sections (opening answer block, economics, competitor comparison, FAQ). Includes a publish checklist and AEO quality self-check at the bottom.
- **`_template.html`** &mdash; matching HTML scaffold with placeholder text. Copy and rename to start a new page.

## Workflow for a new pillar page

1. **Identify the target prompt** from `brands/furgenics/prompts/tracked.json`. Every pillar page should target at least one of the 12 tracked prompts.

2. **Copy the templates** to the new slug:
   ```bash
   cp _template.md new-slug.md
   cp _template.html new-slug.html
   ```

3. **Fill in the markdown first.** This is the canonical content &mdash; focus on getting the argument right.

4. **Regenerate the HTML** from the markdown. For now, hand-convert preserving every semantic structure. The template shows the pattern.

5. **Review both files in Cursor** before publishing.

6. **Paste into Shopify admin** using the HTML code view (`<>` button in the editor toolbar).

7. **Fill in SEO metadata** per the publish checklist in the .md file.

8. **Add a hero image** at 400-500px width. Use a gallon product shot where possible.

9. **Set Visibility = Visible** and save.

10. **Log the publish event** in `brands/furgenics/knowledge/log.md` as a `ship` entry:
    ```markdown
    ## [2026-04-23] ship - published /pages/<slug> targeting <prompt-ids>
    ```

## Current inventory

| Slug | Status | Target prompts | Published |
|------|--------|----------------|-----------|
| canadian-mobile-groomers | Published | high-intent-02 | 2026-04-23 |
| _template | Template | - | n/a |

(Add new rows as pages are drafted.)

## Quality bar

Before publishing any page, verify against the AEO quality self-check at the bottom of the .md file. Common failure modes to avoid:

- **Buried answer.** Direct answer must be in the first 150 words. If the reader has to scroll to find out what you recommend, the page underperforms in AEO.
- **Marketing language.** Phrases like "industry-leading", "revolutionary", "unparalleled" signal to LLMs that a page is promotional rather than informational. Use concrete facts instead.
- **Dishonest competitor comparisons.** LLMs detect when a brand comparison hand-waves competitors. Be specific about where each competitor wins &mdash; trust compounds across the whole content library.
- **No numbers.** AEO engines reward parseable facts. Every pillar page should have 5+ concrete numbers (prices, ratios, timings, counts).
- **No structured lists.** Bullets and numbered lists are scannable for both humans and crawlers.
- **Missing FAQ.** The FAQ section captures long-tail prompt variations. Skip it and you miss half the indexing potential.

## See also

- `brands/furgenics/knowledge/icp.md` &mdash; ICP definition, grounds every page in strategy
- `brands/furgenics/knowledge/target-queries.md` &mdash; tracked prompt list
- `brands/furgenics/knowledge/products.md` &mdash; canonical SKU data for pricing and positioning
- `brands/furgenics/knowledge/competitor-intel.md` &mdash; competitor profiles for comparison sections
- `brands/furgenics/knowledge/analyses/furgenics-aeo-baseline-2026-04-22.md` &mdash; the baseline synthesis identifying tier-1 content bets
