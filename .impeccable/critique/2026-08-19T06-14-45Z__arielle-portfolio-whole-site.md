---
target: arielle-portfolio (whole site)
total_score: 23
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
timestamp: 2026-08-19T06-14-45Z
slug: arielle-portfolio-whole-site
---
Method: dual-agent (A: ac9ae9b3909745ea2 · B: a652ee10ad836d65a)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3/4 | Scroll ribbon + section tabs give strong positional feedback; the `mailto:` email actions give no confirmation state either way |
| 2 | Match Between System & Real World | 4/4 | Journal metaphor genuinely maps throughout (entry numbers *are* the IA); 8dge's ERD-first framing is specific evidence, not generic "built with React" copy |
| 3 | User Control and Freedom | 3/4 | Intro splash is click/key-skippable; no permanent "don't show again" beyond session storage |
| 4 | Consistency and Standards | 2/4 | Draft `CaseStudy.jsx` omits the metadata/tags row real case studies show, despite `projects.js` already having that data; `email` is an `<a>` in Hero/Footer but a `<button>` in Contact.jsx; detector independently found 67 font-size values off the documented type ramp |
| 5 | Error Prevention | 3/4 | 404 state is well-branded and on-voice; drafts never masquerade as broken |
| 6 | Recognition Rather Than Recall | 3/4 | Entry numbers/dates/tags stay visible via section tabs; nothing forces recall of a prior screen |
| 7 | Flexibility and Efficiency | n/a | Persuade/Experience-mode surface — no power-user path expected on a portfolio |
| 8 | Aesthetic and Minimalist Design | 2/4 | Restrained overall, but the detector found 5 real WCAG AA contrast failures (4.0–4.46:1 against a 4.5:1 requirement) on terracotta label/note text on Everwood, plus a very tall, near-empty "high-fidelity screens · coming soon" placeholder that reads as dead space rather than a considered gap |
| 9 | Error Recovery | 3/4 | 404 recovers gracefully with a clear on-brand CTA; no other error states exist to test yet |
| 10 | Help and Documentation | n/a | Portfolio surface — no help system expected |

Total: 23/32 (72%) — Good. (8 heuristics scored; 7 and 10 marked n/a as mode-inapplicable to a Persuade/Experience-mode portfolio.)

## Design Specificity Verdict

**LLM assessment:** Not a template with journal stickers bolted on. The composition is load-bearing to the concept — entry numbers drive the actual URL/IA structure, the book spine and scroll ribbon are structural fixed chrome unique to a "bound book" reading, and case-study content (ERD-before-UI decisions, a real terracotta stat band with survey bar charts, verbatim judge quotes, an honest "what I'd do differently") is specific to this person's actual working process. DESIGN.md's own anti-reference section (explicitly steering away from a travel-passport portfolio it once resembled) shows real editorial judgment, not trend-chasing.

**Deterministic scan:** 69 findings, all advisory severity — 67 font-size-off-ramp, 1 undocumented color, 1 undocumented radius. On inspection, most of the font-size cluster (13–17px) falls inside DESIGN.md's own stated "body text ranges 13–17px" prose window — likely false positives against the system as actually documented, just not exact frontmatter-token matches. A real subset (9px/10px/12px on `MarginNote.jsx`, the case-study header metadata grid, and `ProjectCard.jsx`) falls below the system's own documented 11px label floor — that part is genuine drift, not noise. The color/radius findings are both plausibly intentional (an animation sweep gradient; a focus-ring radius) rather than bugs.

**Browser overlay:** Injection succeeded on all 5 pages tested (home, Everwood, 8dge, Reneal, About). It independently found and cross-validated the same undersized-text elements the CLI scan flagged, plus something the CLI scan can't see: 5 actual WCAG AA contrast failures — terracotta-soft (#9c5a3d) at 4.0:1 on the line-border color and 4.3:1 on cream-card, and terracotta (#b5502e) at 4.46:1 on paper — all below the 4.5:1 threshold normal-size text requires. These concentrate on Everwood's margin notes and stat-band captions.

## Overall Impression

This is a well-considered, specific piece of design work with real restraint (the Two-Accent Rule visibly holds across every page tested) and a genuinely strong signature moment (Everwood's stat band). The gap isn't concept or craft — it's that the system's own stated rules (contrast targets, the 11px label floor, "drafts stay honest") aren't fully met in practice on a few concentrated spots, and the "draft" honesty pattern doesn't yet extend as far as it claims to (the generic case-study template is thinner than its "just unwritten prose" framing implies).

## What's Working

1. The terracotta stat band on Everwood (40%/68%, real bar-chart breakdowns of 63 survey responses) is the single strongest proof-of-hybrid moment on the site — real data, styled entirely in-system, no external-chart-library look.
2. The Two-Accent Rule holding in practice, not just on paper — verified across Home, /work, and both real case studies; nothing reaches for a third hue.
3. Honest draft treatment (paperclip + "draft" label + placeholder cover) never once reads as a bug — unusual discipline for a portfolio under pressure to look "done."

## Priority Issues

**[P1] Real WCAG AA contrast failures on terracotta label/note text**
Why it matters: Five measured instances (4.0–4.46:1, against the 4.5:1 normal-text requirement) on Everwood's margin notes and stat captions are a genuine accessibility defect, not a subjective read — and they sit on exactly the labels DESIGN.md claims are verified for contrast.
Fix: Darken terracotta-soft/terracotta a step for text use, or reserve the current values for borders/fills only and introduce a text-safe darker step.
Suggested command: $impeccable audit

**[P1] GitHub missing from the Contact page**
Why it matters: Hero and Footer both show linkedin/github/email; Contact.jsx only offers email + linkedin. For a design+engineering hybrid pitch, GitHub is the primary artifact proving the engineering half — and Contact is a page a recruiter could land on directly from a resume link, bypassing Home entirely.
Fix: Add the GitHub pill to Contact.jsx's button row, matching Hero's three-link set.
Suggested command: $impeccable polish

**[P1] Draft case studies are structurally thinner than real ones, not just content-thinner**
Why it matters: CaseStudy.jsx (Reneal, R'ATE) never renders the year/format/team/role metadata row or tags pills that Everwood.jsx/EightDge.jsx show — even though projects.js already has real tags and year data for both. This makes drafts read as a lesser template, which undercuts the "draft" label's own credibility.
Fix: Render the metadata/tags row in CaseStudy.jsx from the same real data; leave only the prose sections as DraftText.
Suggested command: $impeccable harden

**[P2] Label/note text sized below the system's own 11px floor**
Why it matters: MarginNote.jsx uses 9px labels; the case-study header metadata grid uses 10px labels. DESIGN.md states labels are "always 11px" and verified at that size — the smallest, most contrast-sensitive text on the page is sized below the system's own stated minimum, compounding the contrast issue above on the same elements.
Fix: Bump both to the documented 11px floor.
Suggested command: $impeccable typeset

**[P2] Sticky Note / Margin Note conflation, inconsistent case-study endings**
Why it matters: DESIGN.md documents a distinct "Sticky Note" component for the end-of-case-study reflection, separate from "Margin Note" — but Everwood.jsx implements this inline and labels it "margin note," and 8dge has no closing reflection at all. The two real case studies end with different emotional weight, and the design system doc doesn't match what's shipped.
Fix: Either build the documented StickyNote as its own component and use it consistently, or update DESIGN.md to match reality; add a closing reflection to 8dge for parity.
Suggested command: $impeccable document

## Persona Red Flags

**Sam (accessibility-dependent, keyboard/screen-reader user):** Tab order and focus rings work correctly (visible indigo ring, verified). But the contrast failures above land directly in Sam's path — margin notes and stat captions are exactly the kind of secondary-but-real content a low-vision user needs to read, and they currently fail AA. Contact's email control is also a <button> (via onClick) rather than the <a href="mailto:"> used elsewhere, so a screen reader announces it inconsistently from the rest of the site.

**Riley (stress-tester):** /nonexistent-page produces a solid, on-brand 404. But navigating directly to /work/reneal (a plausible link after seeing "Reneal IEO" in a card) surfaces the thinner draft template from the P1 above — exactly the inconsistency this persona exists to catch.

**Casey (distracted, mobile, low patience):** The intro splash's idle auto-advance (2800ms) plus 1600ms hide costs ~4.4s before content is reachable if the user doesn't proactively tap. Once past it, mobile layout itself held up well at 375px — nav didn't wrap, CTA pills reflowed cleanly, entry cards stacked single-column, and the stat band remained legible.

## Minor Observations

- No console errors on any of the 5 pages tested; all network requests returned 200 on spot-check.
- Email affordance is implemented two different ways (<a href="mailto:"> vs. <button onClick>) — worth standardizing on the anchor pattern while touching Contact for the GitHub fix above.
- The "high-fidelity screens · coming soon" placeholder on Everwood is unusually tall relative to other CoverPlaceholder instances — reads as dead space rather than an intentional gap.
- The em-dash-free rule holds correctly in first-person prose sitewide; verbatim quotes correctly retain their original dashes.
- index.css:25's 2px radius (focus-ring outline) and IntroCover.jsx:114's sweep-gradient color are both plausibly intentional, not drift — low priority to chase.

## Questions to Consider

1. What if "draft" projects showed their real tags/metadata but visually muted, instead of omitting a whole row — would that read as more honest than the current all-or-nothing treatment?
2. What if the Sticky Note reflection were mandatory on every real case study, the way the four-part results vocabulary already is — would that close the Everwood/8dge peak-end gap structurally rather than case by case?
3. Is a book-opening intro animation, however well-crafted, worth ~4 seconds of delay for a hiring manager whose stated goal is a sub-few-seconds scan?
