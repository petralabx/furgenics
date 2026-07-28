# Furgenics knowledge base

> Navigation guide for humans. For the LLM's orientation, see `/CLAUDE.md` and `/docs/wiki-schema.md`.

## Start here

If you want to know **what's happening** with Furgenics, read these in order:

1. [`../heartbeat.md`](../heartbeat.md) — always-current context anchor, regenerated each audit
2. [`log.md`](./log.md) — chronological timeline of everything the system has done
3. [`optimization-log.md`](./optimization-log.md) — what content we've shipped and whether it moved the needle

## Content catalog

[`index.md`](./index.md) is the LLM-maintained catalog. Use it as a table of contents.

## Core pages

| Page | Purpose | Who owns it |
|---|---|---|
| [`products.md`](./products.md) | Canonical Furgenics product roster, SKUs, ingredients, positioning | Mostly LLM, Class B approval for semantic changes |
| [`brand-voice.md`](./brand-voice.md) | Voice rules, forbidden terms, tone guardrails | **Humans only (Class C)** |
| [`target-queries.md`](./target-queries.md) | AEO prompts we're tracking + latest citation metrics | Strategy: human. Metrics block: LLM (AUTO-UPDATED). |
| [`schema-state.md`](./schema-state.md) | What structured data is deployed in the theme right now | LLM keeps in sync with `config.json` |
| [`competitor-intel.md`](./competitor-intel.md) | Tracked competitors, positioning, what they're winning on | Mostly LLM, Class B for strategic section |
| [`faq-corpus.md`](./faq-corpus.md) | Master FAQ — source for the Furgenics FAQPage schema | LLM can expand; humans tune tone |
| [`optimization-log.md`](./optimization-log.md) | Every change we've made, auto-fix + ship log | LLM appends auto-fixes; humans append ships |

## Filed analyses

Substantive answers the LLM has written in response to queries live in [`analyses/`](./analyses/). They're durable — future sessions read them as if they were any other wiki page. See `analyses/README.md` for the filing rule.

## Raw sources

Immutable artifacts (audit reports, citation runs, external research) live outside `knowledge/` in `../sources/`. The LLM references them from this wiki but does not modify them.

## Reading order for a fresh session

1. `../heartbeat.md`
2. `index.md` (this directory)
3. `log.md | tail -20`
4. Whatever specific pages the task calls for

Keep reads minimal. The wiki is structured so you rarely need more than 3-4 pages per task.

---

_Last updated: 2026-04-21 (Phase G / ADR-010)_
