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

## 2026-08-05 — session log convention added

- **Who:** Stephen + Cursor
- **PR:** pending
- **Done:** Added this file; wired start/end-of-session discipline into `AGENTS.md`
- **Next:** Colleagues pull `main`, read latest entries before starting; append an entry with each meaningful PR
- **Watch:** Steward (`plx-aeo-steward/brands/furgenics/`) remains upstream for machine-maintained wiki pages until repointed; soft MC compliance — operator PRs do not need `MC-Checkout`
