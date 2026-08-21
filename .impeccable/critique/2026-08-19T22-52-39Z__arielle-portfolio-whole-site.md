---
target: arielle-portfolio (whole site)
total_score: 28
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 1
timestamp: 2026-08-19T22-52-39Z
slug: arielle-portfolio-whole-site
---
Method: dual-agent (A: a4607d42b5a3c362f · B: adf5c9cf60447ffc1) — re-run after four fixes from the last critique.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3/4 | Intro splash's proceed interaction is still unannounced by design |
| 2 | Match Between System & Real World | 4/4 | ↑ from 3/4 — journal metaphor now reads as fully consistent |
| 3 | User Control and Freedom | 3/4 | Splash interaction not discoverable without trial, but never traps |
| 4 | Consistency and Standards | 4/4 | Inverse-hover, link-underline, mono-labels hold uniformly everywhere checked |
| 5 | Error Prevention | 3/4 | Contact honestly warns "a proper contact form is on the way" before any click |
| 6 | Recognition Rather Than Recall | 4/4 | No memory burden across pages |
| 7 | Flexibility and Efficiency | n/a | No power-user path expected on a Persuade-mode portfolio |
| 8 | Aesthetic and Minimalist Design | 4/4 | ↑ from 3/4 — the contrast fix and real About content both resolved |
| 9 | Error Recovery | 3/4 | 404 correctly styled and reached on bad slugs |
| 10 | Help and Documentation | n/a | Not applicable to this surface |

**Total: 28/32 (87.5%) — Good.** Same total as the last run, but not stagnation: heuristics 2 and 8 each moved up a full point (the contrast fix and the real About bio both landed exactly where the last critique said they would), offset by a genuinely new, more structural finding surfacing below — a fresh independent pass looking past the four just-fixed bugs found something the fixes themselves couldn't have caught.

## Design Specificity Verdict

**LLM assessment:** Unchanged from last time in the ways that matter — the journal system stays load-bearing (entry numbers keyed to real data, a dog-ear fold that now animates correctly, the book spine/scroll ribbon pair), and both real case studies stay specific (ERD-first framing, named competitor, verbatim quotes, honest reflections). All three targeted fixes confirmed correct in both source and live render.

**Deterministic scan:** 19 CLI findings (down from 20 — one advisory finding resolved as a side effect of these fixes), same shape as before: font-size cluster mostly inside DESIGN.md's documented 13–17px prose window, two rgba colors and one radius still plausibly intentional. Browser overlay findings are consistent with the last run (tiny-text clustering on Everwood/8dge).

**One explained discrepancy worth flagging:** the overlay's `layout-transition` flag still fired at a page level on every route, which looked like the animation fix hadn't landed. Assessment B traced this directly — a live DOM scan of every element's computed `transitionProperty` on the affected pages returned zero matches for `width`/`height` on both the `ProjectCard` and `EntryNav` dog-ear elements (both are `transform`-only now, exactly as fixed). This is a limitation of the injected overlay script itself (likely a static string scan against source rather than live computed styles), not an unresolved bug — the fix holds.

## Overall Impression

The three targeted fixes from the last round landed cleanly and are independently verified: 8dge's cover-placeholder contrast now measures 5.04:1 (was 3.56:1), the About page has real prose instead of a draft placeholder, and the dog-ear hover animation is provably `transform`-only now. What a fresh pass surfaces instead is bigger-picture: this portfolio's entire visual proof — every cover image, on every project, including the two finished case studies — has no code path to ever exist. That's not a missing asset, it's a missing capability.

## What's Working

1. **All three prior fixes verified correct, independently, by both assessments.** Not just "looks right" — actual computed contrast ratios and transition-property values confirm it.
2. **The Skills bio does real work for the site's core pitch.** "Design and web development have always pulled at her in equal measure... UI/UX is where the two meet" is specific and reinforces the design+engineering hybrid claim directly.
3. **The dog-ear fix is invisible in the right way** — same visual grow-on-hover, now built on a property that doesn't fight the system's own rules.

## Priority Issues

**[P1] No code path exists anywhere to render a real cover image**
Why it matters: `CoverPlaceholder.jsx` takes no image prop at all — I grepped the entire `src` tree for `project.cover`, `.cover`, and `<img` and found zero matches anywhere. Every project in `projects.js` carries a `cover: null` field that nothing ever reads. This means even once real screenshots exist for Everwood or 8dge, dropping them in requires new component plumbing, not just an asset swap — and right now, PRODUCT.md's "believe she can design an interface within seconds" goal rests entirely on prose, since every visual proof point is a hatched placeholder icon, including on the two *finished* case studies.
Fix: Add an optional `image` prop to `CoverPlaceholder` that renders a real `<img>` (with the existing washi-tape/sticker accents layered on top) when `project.cover` is set, falling back to the current placeholder only when it's genuinely absent.
Suggested command: $impeccable harden

**[P2] Intro splash's proceed interaction stays fully silent**
Why it matters: unchanged from the last critique — DESIGN.md documents cutting the hint deliberately, but a first-time visitor still has no signal that clicking advances faster than the ~2.8s auto-open, in tension with the site's own "seconds, not minutes" scan goal.
Fix: a subtle, low-contrast cue that doesn't compete with the write-on title.
Suggested command: $impeccable clarify

**[P3] 8dge's "next steps" list is the densest unbroken block on the site**
Why it matters: 6 bullets with no visual differentiation makes it the hardest single block to scan, on a page whose whole premise is fast evaluation.
Fix: bold the first few words of each bullet as a mini-label.
Suggested command: $impeccable typeset

## Persona Red Flags

**Fast-scanning hiring manager:** Opens 8dge — the project explicitly described as "still used as a base... today," the strongest outcome on the site — and hits `COVER IMAGE · COMING SOON` twice before any real prose. The strongest result has the weakest visual proof.

**Design-lead evaluator:** Reads Everwood's real survey data (the StatBar breakdowns) but never sees a single screen of the UI that data supposedly informed — the research is provably real, the design decisions it produced are not visible anywhere.

## Minor Observations

- Skills' two 5-item lists still exceed the 4-item chunking guideline — this is the same finding as last run, already evaluated and deliberately kept (documented in DESIGN.md: every item is a real, distinct skill, and cutting one to hit the number would delete a true fact for a soft heuristic). Not re-opening this one.
- `TaglineRotator` pauses on hover but has no focusable target, so it's mouse-only by necessity — not a bug, just a limit of the interaction.
- Zero console errors and zero layout overflow across every page and width checked, both assessments, both runs.

## Questions to Consider

1. Is a code path for real images worth building now, even with placeholder assets still in hand — so the capability exists the moment real screenshots are ready, rather than becoming a second scramble later?
2. What if Everwood and 8dge each got just one real, even rough, annotated screenshot before anything else on this list — would that move the needle further than any remaining motion or copy polish?
