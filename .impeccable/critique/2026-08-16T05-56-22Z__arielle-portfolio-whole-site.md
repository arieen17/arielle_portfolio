---
target: arielle-portfolio (whole site)
total_score: 22
max_score: 36
na_heuristics: 10
p0_count: 2
p1_count: 2
timestamp: 2026-08-16T05-56-22Z
slug: arielle-portfolio-whole-site
---
Method: dual-agent (A: a461fac1df58b018e · B: a22762341e92016e4)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3/4 | Scroll ribbon and hover/focus states are well done; intro splash and auto-rotating tagline give no way to know they'll change/stop |
| 2 | Match System / Real World | 3/4 | Strong "field journal" metaphor; undercut by unexplained third-person "she" voice throughout |
| 3 | User Control and Freedom | 3/4 | No skip control on `IntroCover`; otherwise back/navigation behavior is standard |
| 4 | Consistency and Standards | 3/4 | Strong token consistency; `CaseStudy.jsx` section labels ("Context/Process/Outcome") are `<p>` tags, not headings, breaking document structure |
| 5 | Error Prevention | 1/4 | `getProject(slug) ?? projects[0]` silently renders the wrong project for any bad `/work/:slug`; no catch-all route |
| 6 | Recognition Rather Than Recall | 3/4 | Labels are consistently descriptive (entry numbers, context lines, tags) |
| 7 | Flexibility and Efficiency | 2/4 | No next/prev navigation between case studies; must back out to `/#work` and reselect every time |
| 8 | Aesthetic and Minimalist Design | 3/4 | Polished shell, but literal "Placeholder" strings and a "cover image" text box are visible in production |
| 9 | Error Recovery | 1/4 | No error states anywhere; bad slugs fail silently; external links open in-tab with no warning |
| 10 | Help and Documentation | n/a | Simple browsing site with no features complex enough to need documentation |
| **Total** | | **22/36** | **Acceptable (61%)** |

## Design Specificity Verdict

**LLM assessment**: The visual *system* is genuinely bespoke — a "field journal" concept (ruled-paper background, paper-grain noise, a dog-ear fold that grows on card hover, a bookmark-shaped scroll-progress ribbon, "Entry 01/02," margin-note asides) executed with real craft in `ProjectCard.jsx`, `ScrollRibbon.jsx`, and `index.css`. This is not a generic template shell — typographic system (Fraunces serif / IBM Plex Mono / Work Sans) and the accent palette are deliberate, coherent choices. But every content slot that would prove *this designer's* work — all four project summaries, all case-study body copy, the about blurb, the rotating tagline — is unedited placeholder text, live in production. The site is specific in form but anonymous in substance, and for a hiring-facing portfolio the substance is the half that actually persuades.

**Deterministic scan**: The CLI static scan (`detect.mjs` over `src/`) returned 0 findings — it reads HTML/CSS-shaped markup and doesn't meaningfully parse JSX component source, so this is a scan-coverage gap, not evidence of cleanliness. The browser dynamic scan (run against the rendered DOM on both `/` and `/work/everwood`) is the real signal and corroborates the LLM review directly: it flagged `low-contrast` text at 2.8:1 (`#6c87a6` on `#e4dfd1`, 1 instance) and 3.3:1 (`#8c887e` on `#fbf7f1`, 6 instances on home / 5 on the case study) — both below the 4.5:1 AA minimum, matching Assessment A's `ink-faint`/`indigo-soft` finding almost exactly by hex value. It also independently caught `tiny-text` (11px body copy, 4-5 instances per route) and `layout-transition` (a `transition: height` rule, 1-2 instances) — a jank-prone animation pattern the LLM review didn't flag. No false positives identified in the detector output.

**Visual overlays**: Browser-side script injection succeeded on both routes; findings above are read directly from the injected detector's console output rather than a persistent visible overlay (no `[Human]`-tab overlay was part of this run).

## Overall Impression

This is a portfolio with a real point of view and above-average execution craft, held back by two things that matter enormously more than they would on an ordinary marketing site: the content that's supposed to *be* the pitch is entirely placeholder, and a cluster of small accessibility/robustness gaps (contrast, tiny text, silent 404s) undercut the "I sweat the details" message the visual design is trying to send. The biggest opportunity is closing that gap between the polish of the chrome and the polish of the content it's framing.

## What's Working

1. **The field-journal concept is genuinely authored, not templated.** Ruled-paper background, paper-grain noise, the dog-ear fold on card hover, and the bookmark-shaped scroll progress indicator form a cohesive, memorable metaphor rarely seen in template-derived portfolios.
2. **Typographic system is deliberate.** Fraunces serif for display, IBM Plex Mono for labels, Work Sans for body creates real editorial hierarchy instead of a default single-typeface stack.
3. **Primary accent color and focus states are accessible by construction.** The indigo accent measures ~8:1 against the cream background (exceeds AAA), and explicit `focus-visible` outlines are defined — more deliberate keyboard-accessibility handling than most portfolio sites bother with. This makes the contrast failures elsewhere read as an oversight on secondary tokens, not a systemic blind spot.

## Priority Issues

**[P0] Every content surface is placeholder copy, live in production**
Why it matters: this is a Persuade-mode site whose entire job is proving competence; there is currently zero evidence of actual design work anywhere past the hero.
Fix: do not share this URL until real case-study content replaces every placeholder string in `src/data/projects.js`, `CaseStudy.jsx`'s sections, and `Skills.jsx`'s about paragraph; if it must go live sooner, gate it rather than presenting finished-looking chrome around empty content.
Suggested command: $impeccable harden (content/edge-case readiness), then $impeccable clarify for the copy itself once real material exists.

**[P0] Case studies have no images at all**
Why it matters: for a designer's portfolio, visuals are the primary evidence of craft — a text-only case study can't demonstrate visual/interaction design ability. `CaseStudy.jsx` currently renders a bordered box with the literal text "cover image" instead of any visual.
Fix: add at least a hero shot and 2-3 in-flow visuals per case study before treating any entry as done.
Suggested command: $impeccable harden, once real assets are available.

**[P1] Small-text color tokens fail WCAG AA contrast, confirmed by the detector**
Why it matters: `ink-faint` (#8c887e, ~3.3:1) and `indigo-soft` (#6c87a6, ~2.8:1) both fall below the 4.5:1 AA minimum, and the detector independently found them applied at 11px sizes — compounding the failure. This is sitewide and hits metadata visitors rely on to orient: entry dates, tags, footer copyright, case-study section labels.
Fix: darken both tokens (e.g. shift `ink-faint` toward `#6B675E` and `indigo-soft` toward `#4F6A8C`) and re-test at the actual 11-12px sizes in use.
Suggested command: $impeccable audit, then $impeccable polish.

**[P1] No error handling for bad case-study URLs**
Why it matters: `CaseStudy.jsx`'s `getProject(slug) ?? projects[0]` silently renders Everwood's content for any unknown slug, and `App.jsx` has no catch-all route — a mistyped or shared bad link shows wrong content under a wrong URL with zero indication anything went wrong.
Fix: add a `*` route rendering a real not-found state, and have `CaseStudy` redirect/404 when `getProject(slug)` returns undefined instead of falling back silently.
Suggested command: $impeccable harden.

**[P2] Auto-rotating tagline has no pause control and ignores reduced motion**
Why it matters: `TaglineRotator.jsx` cycles every 2.2s indefinitely with no stop/pause affordance; it, `IntroCover.jsx`'s flip, and `Reveal.jsx`'s fade/slide none check `prefers-reduced-motion`. Fails WCAG 2.2.2 (Pause, Stop, Hide) and is a real problem for vestibular-sensitive visitors. It also directly competes with the fixed H1 for attention in the first seconds on the page (cognitive-load violation).
Fix: respect `prefers-reduced-motion` sitewide, and give the tagline a pause-on-hover/focus behavior at minimum.
Suggested command: $impeccable animate.

## Persona Red Flags

**Jordan (first-timer / hiring manager)**: Clicks "Read entry →" on Everwood expecting proof of skill, lands on a page whose Context/Process/Outcome sections and cover image are all literal placeholder text/boxes — no way to judge actual competence, likely bounces in under 15 seconds. The rotating tagline ("Coffee Enthusiast," "Sketchbook Hoarder," "Late-Night Debugger") reads as joke filler at the exact moment Jordan is trying to form a professional judgment.

**Sam (accessibility-dependent)**: Navigating by heading inside any case study finds only one H1 — "Context/Process/Outcome" are `<p>` tags with no heading landmarks. Separately, and now confirmed by direct measurement rather than estimate: `ink-faint`/`indigo-soft` text renders at 2.8:1 and 3.3:1 contrast (both below 4.5:1 AA) at 11px sizes, sitewide — entry dates, tags, footer copyright, case-study section labels.

**Riley (stress-tester)**: Typing `/work/anything-made-up` doesn't 404 — it silently shows the Everwood case study under the wrong URL. Clicking "linkedin ↗" or "github ↗" navigates the tab away from the portfolio entirely (no `target="_blank"`), with no easy way back except browser history.

## Minor Observations

- The entire site is narrated in third person ("what she learned," "her working practice") rather than first person — unusual for a personal portfolio and worth a deliberate decision either way.
- No next/prev navigation between case studies; visitors must return to `/#work` and reselect each time.
- `IntroCover` shows a full-page splash with no skip button on first visit per session — brief (1.5s) so low severity, but still a forced delay with no escape hatch.
- Nav "contact" is a bare `mailto:` link with no fallback (copyable email text) for users without a configured mail client.
- Detector additionally flagged a `transition: height` rule (1-2 instances) — animating `height` triggers layout/reflow rather than running on the compositor; low severity today but worth swapping for a `transform`/`clip-path`-based approach if that transition becomes more prominent.

## Questions to Consider

- If every project write-up currently reads "Placeholder — a two-line note on the problem...", what is a hiring manager actually evaluating today — the design system, or the designer?
- The whole site refers to Arielle in third person — is that a deliberate "journal kept about her" conceit, or unedited placeholder voice that never got changed to "I"?
- With zero images across all four case studies, is the text-only aesthetic a genuine point of view, or is it currently masking that there's no visual design work to show yet?
