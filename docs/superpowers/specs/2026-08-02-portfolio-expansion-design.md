# Portfolio expansion — grouped project bands + 7 new projects

**Date:** 2026-08-02
**Status:** Approved

## Problem

The site ships 5 project cards in a flat grid: one feature card followed by two
hardcoded rows of two. The work has outrun the page. Seven projects are missing,
two of the five that exist are now wrong, and a flat grid of 12 cards reads as an
undifferentiated dump rather than a curated body of work.

Specifically:

- **Missing:** airframe-lab, teensy-tinyllm, dermis, and four pieces of school
  work (ME406 inverse kinematics, ME571 data-driven dynamical systems, ME583
  trailer EKF, EE460 spacecraft control).
- **Stale:** the `destify` card describes a v0 trip organizer under the wrong
  name; the product is now Destified and has moved on to award-travel deal
  comparison. The `carta` card predates Carta's shift toward documentation
  auditing.
- **Structural:** `site-page.tsx` selects cards with `others.slice(0, 2)` and
  `others.slice(2, 4)`, which silently drops any project past the fifth.

## Goals

1. Every current project is represented, accurately.
2. Twelve cards read as three deliberate groups, not one long list.
3. Adding project thirteen is a data edit, not a component edit.
4. Nothing on the public site violates the dermis disclosure constraint.

## Non-goals

- No redesign of the card, modal, or any other section. The visual language is
  settled; this extends it.
- No filtering, sorting, search, or client-side interaction beyond the existing
  modal.
- No changes to publications, patents, or contact.

## Design

### Data model

`Project` gains a group axis, and `SiteData` gains the band definitions:

```ts
export type ProjectGroup = "elementrailer" | "oss" | "research";

// Project gains:
group: ProjectGroup;

// SiteData gains:
projectGroups: { id: ProjectGroup; label: string }[];
```

Band membership and band order both live in data. The component maps over
`projectGroups` and filters `projects` by `group`, so reordering bands or moving
a project between them never touches TSX.

### Rendering

`site-page.tsx` replaces the two hardcoded `slice` rows with a map over
`projectGroups`. Within a band:

- The `elementrailer` band renders its `feature: true` project full-width, then
  the remainder 2-up.
- The `oss` band renders 2-up.
- The `research` band renders 4-up using a new compact variant.

A `ProjectBand` header precedes each band, echoing the existing
`v2-section__head` grid (90px mono gutter, hairline rule, right-aligned mono
count) so the bands read as part of the established system rather than as a new
component:

```
// ELEMENTRAILER ──────────────────────────────────────────  02 ITEMS
```

### Card variants

Three variants of the existing `ProjectCard`, selected by prop — no new
component, no duplicated markup:

| Variant | Used by | Treatment |
|---|---|---|
| `feature` | ET Gen-0 | Existing. Unchanged. |
| default | Elementrailer, OSS bands | Existing. Unchanged. |
| `compact` | Research band | New. 4-up grid, reduced media aspect, title stepped down, summary line-clamped to 3 lines. |

Card numbering becomes **index within band**, not index within the full array.
The coursework band reads `01 / 05 · CONTROLS`, which is meaningful, rather than
`09 / 12`, which is not.

### Content

Twelve cards:

**Elementrailer** — ET Gen-0 (feature), MVP · VCU. Both unchanged.

**Open Source & Tools** — Carta (refreshed for the doc-audit direction),
teensy-tinyllm (new), Destified (rewritten and renamed from Destify),
airframe-lab (new, deliberately minor, no repo link — the repo is private),
dermis (placeholder only, see Constraints).

**Research & Coursework** — ERAU Capstone (moved from the flat list), ME406
inverse kinematics, ME583 trailer EKF, ME571 data-driven dynamical systems,
EE460 spacecraft control.

The ME583 EKF work sits in Research rather than Elementrailer. It is a graduate
course final project that used the trailer as its plant; it reads stronger as
controls work than as a product artifact, and grouping it with Elementrailer
would overstate its role in the product.

### Supporting copy

- Section subtitle: "Twelve projects across vehicle hardware, embedded firmware,
  controls, and developer tooling — some in production, some on the bench, some
  coursework I still stand behind." The existing line claims all five are
  shipping, which will not be true of twelve.
- Education: the M.S. date changes from `May 2026` to `Dec 2025` — coursework was
  completed a quarter early, with commencement in May 2026 — and the note records
  both facts.
- `stack` is reviewed against the new project set for anything it now omits.

### Images

New cards without imagery fall back to the existing `placeholder-img` treatment,
which is already styled and needs no work. Where the source trees contain usable
artifacts — generated plots under `trailer-dynamics/outputs/`, Simulink captures
in the EE460 model folder, MATLAB animation frames from ME406 — those are copied
into `public/images` and used instead. Real output beats a placeholder; a
placeholder beats a stock image.

## Constraints

**dermis is under a hard disclosure bar.** `dermis/NOTICE.md` states that no
public disclosure of any kind may occur before a provisional patent application
is filed, and identifies this as a project constraint rather than a preference.
The card therefore carries title, years, role, and a deliberately non-enabling
summary. No drag-reduction figures, no method, no geometry, no CFD detail, no
repo link. This is the single hardest rule in this change.

**airframe-lab and the school repos are private.** airframe-lab stays private and
its card carries no link. ME571 and ME583 are to be made public, but only after a
review pass for grades, instructor solutions, and classmates' names — and only
with explicit confirmation before the visibility flip. Until that lands, their
cards carry no link either. A card that links to a 404 is worse than a card that
links nowhere.

**Accuracy over impressiveness.** teensy-tinyllm in particular has been verified
against a NumPy oracle and under emulation, but has never run on physical
hardware — nobody has soldered the PSRAM. The copy must not imply otherwise.
Every number on the site traces to a file in a source tree.

## Approach to content generation

Project copy is drafted by a two-stage agent workflow: one survey agent per
source tree returning structured copy, then a fact-checking agent per project
that re-reads the source, verifies each number and capability claim against a
real file, and deletes what it cannot support. Agents are read-only with respect
to the source trees. Repo cleanup is sequenced separately, after the site work,
and gated on explicit confirmation.

## Testing

There is no test suite in this repo, and this change adds no logic worth one.
Verification is:

1. `npm run build` succeeds — this catches the type error if any project is
   missing its `group` field, which is the one mistake the type system can catch
   for us.
2. `npm run lint` clean.
3. Visual check at desktop, tablet, and mobile widths: all 12 cards render,
   bands are correctly populated, the compact variant does not overflow, and no
   band is empty.
4. Grep the built output for the dermis disclosure terms to confirm none leaked.

## Risks

- **Compact variant at 4-up may crowd on smaller laptops.** Mitigated by
  stepping to 2-up below 1100px and 1-up below 700px, matching the existing
  breakpoints in `globals.css`.
- **Agent-authored copy may drift toward marketing voice.** Mitigated by the
  verification stage and by a read-through before commit.
- **Twelve cards is a long section.** Accepted. The bands are what make it
  legible; if it still reads long once assembled, the research band is the
  candidate for collapsing to a text list, and that is a follow-up.
