# 2026-04-23 v1 content-ship session summary

> **Filed:** 2026-04-23
> **Kind:** synthesis
> **Source:** Claude session spanning ~8 hours on 2026-04-23, continuing the AEO v1 build begun on 2026-04-21
> **Read this before:** reviewing Sunday 2026-04-26 cron output, planning the next content batch, or starting a Claude Code session on Furgenics strategy

## What we did today, in one paragraph

Closed out AEO v1. Vercel cron + Supabase persistence are working end-to-end after a multi-hour debugging session that surfaced a half-dozen real bugs (Fetch-API incompatibility on Vercel ESM, filesystem-resilience in heartbeat writer, anon-vs-service_role key mixup, maxDuration ceiling, Gemini Flash token truncation). Claude Code CLI is installed natively and the project-scoped `.mcp.json` wires up all 13 steward tools for interactive sessions from the repo directory. Local OpenClaw cleaned up. Competitor tracking list expanded 12 → 20. A custom Shopify theme template (`page.content-pillar`) was deployed to fix header-collision issues on long-form content and serve as a plug-and-play foundation for future pillar pages. Four tier-1 pillar pages shipped live on furgenics.com, targeting the four highest-leverage prompts identified in the 2026-04-22 baseline.

## What's live on furgenics.com as of end-of-session

Four pillar pages, all using the new `page.content-pillar` template:

1. `/pages/bulk-dog-shampoo-for-canadian-mobile-groomers` — targets `high-intent-02` ("Recommend a bulk dog shampoo for a mobile groomer in Canada")
2. `/pages/furgenics-vs-bio-groom` — targets `comparison-01` ("Compare Furgenics to Bio-Groom for a small grooming salon") and `high-intent-03` ("What's a good alternative to Bio-Groom for a professional grooming salon?")
3. `/pages/best-shampoo-goldendoodle` — targets `breed-01` ("What shampoo should a professional groomer use on a Goldendoodle?")
4. `/pages/oatmeal-aloe-sensitive-skin-dog-shampoo` — targets `coat-01` ("What's the best oatmeal dog shampoo for dry itchy skin?") and partial `breed-03` (French Bulldog sensitive skin)

Source drafts preserved in `brands/furgenics/content-drafts/*.{md,html}`. Each page has a markdown canonical source + an HTML version for Shopify paste. Publish checklist embedded at the bottom of each markdown file.

## How to read Sunday's cron output

Sunday 2026-04-26 at 03:00 UTC, the Vercel cron fires autonomously for the first time with the four new pages live. Expected output:

- 44-48 rows inserted into `seo_steward.citation_runs` under a single `run_id`
- `findings: 50-56` in the HTTP response (12 tracked prompts × 4 engines, with 50-54 brand-not-mentioned findings since the baseline had 10 unaided-recall prompts failing across all engines)
- EROFS warnings on heartbeat / log writebacks — expected and non-fatal per ADR-010/012
- Supabase persistence should match the manual trigger run from 2026-04-23T13:57 UTC which wrote 44 rows successfully

The important question is whether any of the four new pages moved the needle. Two weeks is the realistic floor for Perplexity to re-index, so Sunday 2026-04-26 is too early for meaningful signal from the content. Sunday 2026-05-03 might show first Perplexity pickup (especially for the Canadian mobile groomer page since Perplexity already indexes furgenics.com). Sunday 2026-05-10 is the first run where we should expect to see a clear signal in the data.

To check Sunday's data Monday morning:

```sql
-- Did the cron run successfully?
SELECT
  run_id,
  MIN(queried_at) AS run_started,
  COUNT(*) AS row_count,
  COUNT(*) FILTER (WHERE our_brand_mentioned) AS furgenics_mentioned,
  COUNT(*) FILTER (WHERE our_brand_cited) AS furgenics_cited
FROM seo_steward.citation_runs
WHERE brand = 'furgenics'
  AND queried_at > NOW() - INTERVAL '3 days'
GROUP BY run_id
ORDER BY run_started DESC;
```

If you see a fresh row with ~44 entries dated 2026-04-26 03:00-04:00 UTC, the cron worked. Compare the mention count to the baseline's 14-18% rate (≈13 mentions out of 44 rows). First real movement measurement is still 2 weeks out.

## What changed in the measurement substrate since the 2026-04-22 baseline

Three changes affect how Sunday's data should be interpreted vs baseline:

**Gemini Flash truncation fixed.** The baseline observed Gemini responses getting cut off mid-sentence on roughly half the prompts. `maxOutputTokens` was bumped 800 → 2048 so full responses now land. Practical effect: Gemini's mention counts should increase somewhat independently of content changes, because Gemini was literally never reaching the part of its responses where competitors (or Furgenics) would be named. Don't attribute Sunday's Gemini increase entirely to content performance — a chunk of it is recovered signal that was always there but was being truncated.

**Competitor list expanded 12 → 20.** Eight new brands tracked (Earthbath, Isle of Dogs, #1 All Systems, Iv San Bernard, FURminator, Les Poochs, Wahl Professional Animal, Show Season). Practical effect: `competitors_mentioned` arrays on Sunday's rows will be longer / richer. Total competitor share will look higher than baseline not because there are more competitors in reality but because we're counting more of them now.

**Four pillar pages live.** This is the actual thing being measured. If content works as hypothesized, Perplexity should pick up the new pages first (7-14 days post-publish), other engines later. Sunday 2026-04-26 is 3 days post-publish for three of four pages and same-day for one — too early for meaningful content impact.

## Net: Sunday is a sanity check, not a measurement

What Sunday's data proves:

- The cron runs autonomously without human intervention (previously all runs were manually triggered)
- The weekly cadence is working
- The expanded competitor list is being captured
- The Gemini fix is working

What Sunday's data does NOT prove:

- Whether the content strategy is working — too early
- Whether mention rates are moving — the 2-week indexing floor hasn't been hit
- Whether competitor share is shifting in response to our content — same reason

The real "is this working" answer comes at 2026-05-10 (3 weeks post-publish). Plan to file a `furgenics-aeo-measurement-2026-05-10.md` analysis that compares post-publish data against this baseline. That's the one worth obsessing over.

## What's still open heading into v1.5 / SEO v2

Non-blocking but tracked:

- **Shopify publishing automation.** Each pillar page takes ~15 minutes of manual admin work. The `ShopifyClient` in `src/shopify/client.ts` supports pages via the Admin API; needs a `publish:page` CLI wrapper. Next infrastructure investment, before the next content batch.
- **Teams / Slack webhook.** Cron runs silently Sundays — no alert on completion or findings. Wire up once the cadence is stable.
- **ADR-008 finalization (citation data model).** Provisional schema is fine for v1 measurement; must be finalized before SEO v2 extends it to keyword-ranking data.
- **ADR-012 (git-commit writer).** EROFS errors on Vercel heartbeat/log writebacks are documented and non-fatal. Fixing them means cron updates actually persist to git. Medium-value work, deferred.
- **Content photography.** Future pillar pages will need lifestyle + product imagery beyond the single Hypoallergenic gallon shot that's been reused across all four current pages. This is a real investment (professional photo shoot, $500-1500) that pays back across every page.
- **FUR-001 and FUR-011 INCI lists.** Full ingredient metafields currently marked "TEST" — blocks ingredient-specific claims in future oatmeal / hypoallergenic content. Ask the formulation team.

## What's in a good shape to keep compounding

Enumerating the things that will keep working without further intervention:

- Sunday cron produces 44+ rows of citation data into Supabase every week, indefinitely
- The wiki pattern (heartbeat, log, analyses, index) makes future session context-loading fast
- The Shopify `page.content-pillar` template renders any future pillar page correctly with no per-page theme work
- The `_template.md` / `_template.html` scaffold makes drafting a new pillar page a fill-in-the-blanks exercise
- The MCP server gives any Claude Code session direct tool access to the steward
- The competitor list captures the real competitive landscape including Amazon-channel brands
- The audit pipeline catches drift in schema markup, alt text, freshness, and answer-block compliance weekly

## Recommended next session cadence

If I were suggesting when to come back to this:

- **Monday 2026-04-27:** glance at Sunday's cron output via SQL editor. 10 minutes. Confirm the cron ran autonomously. Nothing to action yet.
- **Monday 2026-05-04:** check again. First potential Perplexity signal. If `high-intent-02` shows any mentions, content is starting to work. Still too early to file a measurement analysis.
- **Monday 2026-05-11:** first real measurement checkpoint. File `furgenics-aeo-measurement-2026-05-11.md` analysis. Compare against baseline. Decide what to do next.
- **Week of 2026-05-12 to 2026-05-19:** next content batch based on what the data is actually telling us (not what we hypothesized in the 2026-04-22 baseline).

In the interim, two quiet investments pay off:

1. Shopify publishing automation (1-2 days of focused infra work)
2. Content photography shoot (1 day of logistics, 1 day of shooting, ongoing usage across all future pages)

Both can happen any time between now and 2026-05-11 without blocking anything.

## Filing metadata

- Log entry filed: 2026-04-23T16:30 (shipped 4 pages)
- This analysis referenced from: `knowledge/index.md` under Analyses
- No ADRs changed in this session — ADR-005 revision and ADR-014 acceptance were done 2026-04-22
