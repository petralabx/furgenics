# Karpathy's LLM-wiki pattern, applied to plx-aeo-steward

> Filed: 2026-04-21T22:30:00Z  ·  Kind: synthesis  
> Source: Ingestion of [`sources/external-research/articles/2026-04-21-karpathy-llm-wiki.md`](../../sources/external-research/articles/2026-04-21-karpathy-llm-wiki.md) during the Phase G session.  
> Related: [../schema-state.md](../schema-state.md), [../optimization-log.md](../optimization-log.md), [/CLAUDE.md](../../../../CLAUDE.md), [/docs/wiki-schema.md](../../../../docs/wiki-schema.md), [/docs/architecture-decisions.md](../../../../docs/architecture-decisions.md)

## Why this page exists

The plx-aeo-steward repo uses Karpathy's "LLM maintains a wiki" pattern as its architectural foundation. ADR-001 cites it; ADR-010 aligns the whole repo structure to it explicitly. This page is the durable synthesis: **what the pattern actually says, what we adopted, what we adapted, and what we deliberately skipped.** Future sessions asking "why is the repo shaped this way?" should read this page first.

## What Karpathy's pattern says

Three layers:

1. **Raw sources** — immutable documents you curate. The LLM reads; never writes.
2. **Wiki** — LLM-generated, LLM-maintained markdown. Cross-linked, summarized, living.
3. **Schema** — the config doc (`CLAUDE.md` or `AGENTS.md`) that tells the LLM how the wiki is organized and what operations to run.

Three operations:

1. **Ingest** — a new source arrives; LLM reads it, files a summary, updates every relevant entity/concept page, logs the event.
2. **Query** — you ask a question; LLM reads index → relevant pages → synthesizes an answer. **Substantive answers get filed back as wiki pages.**
3. **Lint** — periodic health check: contradictions, staleness, orphans, coverage gaps, missing cross-references.

Two special files per wiki:

- `index.md` — content-oriented catalog. Every page listed with link + summary.
- `log.md` — chronological append-only timeline with greppable prefix `## [DATE] type | title`.

The crux of the idea: the wiki is a **compounding artifact.** Every ingest and every query makes it richer. The LLM's job is the bookkeeping — updating cross-references, maintaining consistency across 15 files in one pass — because humans abandon wikis when maintenance cost grows faster than value.

## What we adopted, as-is

At the repo level (shared across brands):

- `/CLAUDE.md` — the schema layer's entry point. Tells any fresh LLM session how the repo is organized and what to do.
- `/docs/wiki-schema.md` — the formal spec CLAUDE.md points to.

Per brand (`brands/<brand>/`):

- `sources/` — raw immutable layer. Machine-written (`audit-reports/`, `citation-runs/` via `src/knowledge/archiver.ts`) and human-curated (`external-research/`).
- `knowledge/` — the wiki. Contains `index.md`, `log.md`, `analyses/`, and the pre-existing topic pages.
- `knowledge/log.md` — uses the exact Karpathy prefix: `## [ISO_DATETIME] type | title`. Greppable via `grep "^## \[" log.md | tail -20`.
- `knowledge/analyses/` — the "file query answers back" directory. This page is the first inhabitant.

Operations:

- **Ingest** — two automated pathways (`runFullAudit` and `runCitationTrackerAudit` both archive raw JSON + update the wiki + append log) and one manual pathway (human drops file in `external-research/`, asks LLM to integrate).
- **Query** — same session flow Karpathy describes: heartbeat → index → pages → answer. Substantive answers land in `analyses/` via `fileAnalysis`.
- **Lint** — `npm run knowledge:lint <brand>` invokes the LLM-linter in `src/knowledge/linter.ts`. Checks contradictions, staleness, voice drift, coverage gaps.

## What we adapted

**Multi-brand.** Karpathy's original pattern is single-domain — one wiki for one knowledge base. plx-aeo-steward runs four brands. We replicate the three layers per brand (each gets its own `sources/` and `knowledge/`) but the schema layer (CLAUDE.md + wiki-schema.md + ADRs) is shared because the conventions are universal. This is the right call — the wiki *contents* differ by brand (Furgenics products are not 1 Hour After products), but the *shape* is identical.

**Machine-structured sources.** Karpathy assumes text-heavy sources (articles, papers). Our primary sources are JSON audit reports and citation-run results. The archiver handles them mechanically (no LLM-mediated summarization needed on ingest) — they land in `sources/audit-reports/` or `sources/citation-runs/` as structured blobs. Wiki pages that cite them link via `log.md` entries. External-research sources (Karpathy's original case) stay conversational — human drops them, LLM summarizes and integrates.

**Class A / B / C.** Karpathy's pattern assumes one agent owning the whole wiki. We split into tiers (ADR-009): Class A is fully automated (append-only logs, idempotent-replace blocks), Class B is agent-proposed + human-approved (not yet built), Class C is human-only (brand voice, strategy). This is a concession to the fact that we're writing to a commercial brand's knowledge base — not all content is safe to regenerate unsupervised.

**Marker-bounded auto-regions.** Karpathy's agent owns entire files. Our Class A writers own only `<!-- AUTO-{APPEND,UPDATED}:<key>:START/END -->` blocks within files. The rest is human-editable. This lets us share a file between human narrative and machine-generated tables (see `optimization-log.md`, `target-queries.md`).

**Durable raw layer that mirrors Supabase.** Karpathy's sources are the primary record. Ours have a partner — `seo_steward.citation_runs` in Supabase — which is the canonical queryable store. The `sources/` JSONs are the git-tracked mirror. Redundant but cheap, and ADR-008's schema is provisional, so the raw JSON is durable across schema changes.

## What we deliberately skipped

**Obsidian tooling.** Karpathy uses Obsidian as the IDE (graph view, Dataview, Marp plugin, Web Clipper). We use GitHub + Cursor. Our wiki is small enough (~10K tokens per brand) that graph view wouldn't reveal anything we don't already see. When it matters, we can adopt it later; for now, no action needed.

**qmd / search tooling.** Karpathy mentions qmd (hybrid BM25/vector search) as an optional addition once the wiki grows. At ~10 markdown files per brand, a `grep` is faster than any indexed search. Not adopting.

**YAML frontmatter.** Karpathy mentions it in the Dataview tip. We don't use it today. If we ever need programmatic metadata extraction (e.g., auto-regenerate index.md from file frontmatter instead of hand-maintaining Core Pages), this becomes the natural addition. Noted but skipped.

**Image handling.** Karpathy has detailed advice for downloading images locally. Our sources are JSON + markdown; images aren't central. Skipping the whole chapter.

**Full LLM-mediated ingest flow.** Karpathy's ingest has the LLM reading a source, *discussing takeaways with you*, then updating 10-15 pages. For audit and citation runs we skip the discussion step — the data is too structured to benefit from it, and the automation runs unsupervised on Vercel cron. For external-research ingest (like the one that produced this page) we keep the conversational flow.

## Key quotes worth remembering

Karpathy, on why this works better than RAG:

> _"the LLM is rediscovering knowledge from scratch on every question. There's no accumulation. … the wiki is a persistent, compounding artifact."_

On the LLM's job:

> _"The tedious part of maintaining a knowledge base is not the reading or the thinking — it's the bookkeeping. … LLMs don't get bored, don't forget to update a cross-reference, and can touch 15 files in one pass."_

On query answers becoming wiki pages:

> _"good answers can be filed back into the wiki as new pages. A comparison you asked for, an analysis, a connection you discovered — these are valuable and shouldn't disappear into chat history."_

This page is that principle in action.

## What this means operationally for PLX

Sessions should end differently than they used to.

**Before ADR-010:** Stephen asks a question. Claude reads the wiki, synthesizes an answer, types it into chat. Answer disappears when Stephen closes the chat. Next week, similar question asked — Claude rediscovers the same synthesis from scratch.

**After ADR-010:** Stephen asks a question. Claude reads the wiki, synthesizes an answer. If the answer is substantive (4+ pages synthesized, or explicit deliverable request), Claude calls `fileAnalysis(brand, { slug, content, title, kind, source })`. This writes the page to `knowledge/analyses/`, adds a bullet to `knowledge/index.md`'s analyses block, appends a `query` entry to `knowledge/log.md`. Next week, similar question asked — Claude reads index.md first, sees the existing analysis, reads it, and builds on top of it rather than starting over.

That compounding is the entire point.

## Open questions for future sessions

1. When should `fileAnalysis` be triggered automatically vs by explicit request? Current heuristic in `CLAUDE.md` ("4+ pages synthesized, or explicit write-up request") is a starting point, not a rule. Refine with experience.
2. Should analyses get tagged with the related `target-queries.md` prompt IDs they relate to? Would enable "what have we synthesized about `high-intent-01`?" style queries.
3. Structural linter (ADR-014) is not built yet. Without it, `index.md` and the actual `knowledge/` directory can drift silently. Likely the next thing to build.

## Sources & references

- [`sources/external-research/articles/2026-04-21-karpathy-llm-wiki.md`](../../sources/external-research/articles/2026-04-21-karpathy-llm-wiki.md) — verbatim source clipping of Karpathy's doc.
- [`/docs/wiki-schema.md`](../../../../docs/wiki-schema.md) — the formal spec adapting the pattern to this repo.
- [`/docs/architecture-decisions.md`](../../../../docs/architecture-decisions.md), ADR-001 and ADR-010 — the decisions that put this pattern in force.
- [`/CLAUDE.md`](../../../../CLAUDE.md) — the schema layer's entry point; what every fresh LLM session reads first.
