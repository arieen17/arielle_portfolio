---
target: arielle-portfolio (whole site)
total_score: 26
max_score: 28
na_heuristics: 5,7,10
p0_count: 0
p1_count: 1
timestamp: 2026-08-19T23-21-49Z
slug: arielle-portfolio-whole-site
---
Method: dual-agent (A: a3babebdd5ac9ebbd · B: ac257be023645ab2e) — third run today, after six fixes from round 2.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 4/4 | Scroll ribbon, section tabs, hover/press feedback all present |
| 2 | Match Between System & Real World | 4/4 | Dateline, filing language, honest draft states |
| 3 | User Control and Freedom | 3/4 | Splash hint's visible window was too short before auto-advance — fixed this round |
| 4 | Consistency and Standards | 4/4 | Strong token discipline across every page checked |
| 5 | Error Prevention | n/a | Static site, no user input to validate — a stricter reading than the last two runs used (they credited Contact's honest form-warning here); noted, not overridden |
| 6 | Recognition Rather Than Recall | 4/4 | Persistent nav, entry numbers, no memory burden |
| 7 | Flexibility and Efficiency | n/a | Not applicable on a Persuade-mode portfolio |
| 8 | Aesthetic and Minimalist Design | 3/4 | Restrained overall; 8dge's next-steps block had grown to visually outweigh its own results — addressed this round |
| 9 | Error Recovery | 4/4 | On-brand 404, reached correctly on bad slugs |
| 10 | Help and Documentation | n/a | Not applicable to this surface |

**Total: 26/28 (92.9%) — Excellent**, on a narrower applicable set than the last two runs (3 heuristics marked n/a here vs. 2 previously). Not directly comparable score-to-score with the prior 28/32 runs; see the trend line below for the honest version of this comparison.

## Design Specificity Verdict

**LLM assessment:** Unchanged in the ways that matter — the journal system stays load-bearing (entry pins, dog-ear folds tied to real card corners, book spine, scroll ribbon, margin notes that restate rather than invent), and the copy stays voice-consistent and fact-grounded. Not a template with a journal skin.

**Deterministic scan:** 18 CLI findings (down from 19 last round — one more advisory finding resolved as a side effect of this round's fixes), same shape as every prior run: font-size cluster mostly inside the documented 13–17px prose window, two rgba colors and one radius still plausibly intentional.

**Browser overlay:** Consistent with prior runs — tiny-text clustering on Everwood/8dge, plus recurring `wide-tracking`, `line-length`, and `all-caps-body` flags that have appeared in every run so far without resolving into a real defect on inspection (the all-caps ones match the system's own deliberately-uppercase Label pattern; the line-length one on Everwood was already explicitly evaluated and deferred in an earlier polish pass as invasive/subjective).

## Overall Impression

Every fix from round 2 re-verified clean: cover-placeholder contrast passes 5.04:1 or 4.70:1 everywhere Assessment B sampled it (grid, 8dge, Reneal, R'ATE), the About bio renders correctly, both dog-ear elements are `transform`-only, the image plumbing exists in source, the splash hint is wired to the right state, and all six of 8dge's next-steps bullets have their bold lead-ins. A genuinely fresh pass by Assessment A then found four smaller things the round-2 fixes had, in one case literally, missed a sibling instance of, and introduced in another — the kind of finding that only shows up once the bigger issues are out of the way.

## What's Working

1. **The contrast fix held everywhere it was supposed to** — independently re-verified by Assessment B across all four Entries-grid cards, both 8dge captions, and both draft pages. Consistent, no regressions.
2. **8dge's bold lead-ins genuinely improved scanability** — confirmed live, `font-weight: 500` on the lead span vs `400` on the rest, exactly as designed.
3. **The About bio and the six accumulated fixes together give the site a noticeably more finished feel** — no draft markers left on the two most-visited routes (Home, About).

## Priority Issues (all fixed and verified during this run)

**[P1 — fixed] Hero's own decorative photo placeholder had the same contrast bug**
Assessment A caught it live: `Hero.jsx`'s `<CoverPlaceholder hideTape className="w-full aspect-[4/5]" />` — the desktop hero's right-side photo, the single most prominent slot on the homepage — never got an `accent` prop, so it was the one remaining `text-ink-faint`-on-`cream-card` instance (3.56:1, failing) after round 2's fix touched every other call site. Independently confirmed in source and fixed: added `accent="indigo"`, now measures 5.04:1, verified live.

**[P2 — fixed] Speculative content had grown to visually outweigh delivered results on 8dge**
Round 2's bold-lead-in fix made the 6-item "next steps" list easier to scan but also visually heavier than the "what shipped"/"what came back" paragraphs above it — on a page whose job is proving shipped work, the most visual weight was landing on unbuilt ideas. Fixed by reducing the list to 14px (was inheriting 16px), keeping every real item intact rather than cutting content to solve a weight problem — verified live (`14px` vs. the shipped paragraph's `16px`).

**[P3 — fixed] Generic case-study template repeated the card summary verbatim**
`CaseStudy.jsx`'s "Context" section was special-cased to show `project.summary` — the exact sentence a visitor had just read on the Entries-grid card seconds earlier — instead of the same generic "still needs writing" prompt used for its other two sections. Read as filler, not an honest "not yet" state. Fixed by removing the special case; all three sections now render their own generic prompt uniformly. Verified live.

**[P3 — fixed] Splash hint had almost no visible window**
The reinstated "tap to open" hint finished fading in at 2400ms, but the idle auto-advance fired at 2800ms — only ~400ms of settled visibility before the whole block started fading out, undermining the point of adding it. Fixed by moving the auto-advance fallback from 2800ms to 4200ms, giving the hint roughly 1800ms of real, readable time. Anyone who interacts proceeds immediately regardless — this only affects the idle-fallback path.

## Persona Red Flags

All three named by Assessment A trace directly to the issues above and are now resolved: the time-pressed hiring manager's first-screen contrast problem (Hero photo caption), the engineering-minded reviewer's speculative-content-first read on 8dge, and the low-vision visitor's one remaining sub-AA instance. No new red flags to report this round.

## Minor Observations

- Assessment A noted Browser-pane screenshots clipped at custom viewport widths above ~600px during its pass — confirmed via `getBoundingClientRect` that actual site layout was unaffected; a repeat of the tooling artifact already characterized in the harden pass, not a site bug.
- The recurring overlay flags (`wide-tracking`, `line-length`, `all-caps-body`) have now appeared identically across all three critique runs today without resolving into a real defect on inspection each time — worth treating as background noise rather than re-investigating every round.

## Questions to Consider

1. Structural/accessibility issues are now clear across three consecutive runs — is it worth a fourth critique pass chasing the remaining mechanical advisory findings (font-size micro-drift, the two rgba colors), or has this line of work hit diminishing returns for now?
2. The image capability exists everywhere now, but zero real screenshots do — is sourcing even one real, rough screenshot for Everwood or 8dge a better use of the next session than further design-system polish?
