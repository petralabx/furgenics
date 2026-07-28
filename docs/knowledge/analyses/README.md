# Furgenics — filed analyses

> Durable answers to substantive queries. Karpathy's principle: _"good answers can be filed back into the wiki as new pages. A comparison you asked for, an analysis, a connection you discovered — these are valuable and shouldn't disappear into chat history."_

## When to file an analysis here

File via `filePage(brand, 'analyses/<slug>.md', content)` when ANY of these apply:

- The answer required reading 4+ wiki pages to synthesize
- The answer produces a new connection not already captured elsewhere
- Stephen asked for a deliverable ("write this up", "give me the comparison")
- The answer will likely be referenced again in future sessions

## When NOT to file

- Quick factual lookups ("what's the SKU for Deep Moisturizing Conditioner?") — no filing needed; the fact is already in `products.md`.
- Ad-hoc comments or one-off observations — go in chat, log as `query` type in `log.md` if worth remembering, don't create a page.

## Page template

```markdown
# <Title>

> Filed: <ISO>  ·  Kind: <query | synthesis | comparison | brief>
> Source: <1-liner, e.g. "Stephen asked in 2026-04-21 session">
> Related: [page.md](../page.md), [other.md](../other.md)

<body>

## Sources & references

- <citation>
- <citation>
```

## Also

- Slug = kebab-case, short. `bio-groom-positioning-comparison.md`, not `analysis-of-bio-groom-vs-furgenics-v1.md`.
- After filing: `upsertIndexEntry` adds the analysis to the Analyses table in `index.md`, and `appendWikiLog` logs it with type `query`.
