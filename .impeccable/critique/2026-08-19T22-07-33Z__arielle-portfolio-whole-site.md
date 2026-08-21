---
target: arielle-portfolio (whole site)
total_score: 28
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
timestamp: 2026-08-19T22-07-33Z
slug: arielle-portfolio-whole-site
---
Method: dual-agent (A: ae7c1f74b1b0786fd · B: a56a0e85fc2da51d9)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3/4 | Scroll ribbon and hover states give strong feedback; the intro splash's click-to-proceed interaction gives no hint that it's interactive at all |
| 2 | Match Between System & Real World | 3/4 | Case-study language is genuinely specific to a real designer-engineer; the tagline rotator's stock quirks ("Coffee Enthusiast," "Late-Night Debugger") pull the other way |
| 3 | User Control and Freedom | 4/4 | EntryNav prev/next, working back-navigation, no traps anywhere |
| 4 | Consistency and Standards | 4/4 | Typography, hover inversion, and label sizing hold rigorously across every page tested |
| 5 | Error Prevention | 3/4 | The non-interactive "resume · coming soon" pill shares the exact bordered-pill shape of the three real CTAs beside it, inviting a mis-tap |
| 6 | Recognition Rather Than Recall | 4/4 | Persistent nav, no memory burden across pages |
| 7 | Flexibility and Efficiency | n/a | No power-user path expected on a scan-and-decide portfolio |
| 8 | Aesthetic and Minimalist Design | 3/4 | Restrained on Home/Work; a newly-confirmed real contrast failure on 8dge (below) and dense case-study header metadata both cost this a point |
| 9 | Error Recovery | 4/4 | On-brand 404, unknown slugs route correctly, drafts never masquerade as broken |
| 10 | Help and Documentation | n/a | Not applicable to this surface |

**Total: 28/32 (87.5%) — Good**, trending toward Excellent.

## Design Specificity Verdict

**LLM assessment:** The journal conceit is genuinely load-bearing, not decorative — the book spine, scroll ribbon, dog-eared cards, and pin/photo-corner mounts all point at one coherent "print pinned into a notebook" idea, and the Everwood/8dge case studies (real survey stats, verbatim judge quotes with original em dashes, ERD-first engineering narrative) are concrete proof of the design+engineering pitch that couldn't be swapped into an unrelated portfolio. Specificity breaks down in two places: `TaglineRotator.jsx`'s five taglines are stock developer-portfolio filler despite the lead-in phrase being reworked away from the travel-passport reference, and `About.jsx` — the one route named for personal context — renders nothing beyond what Home already shows.

**Deterministic scan:** 20 CLI findings (all advisory) — 17 font-size, 2 undocumented color, 1 undocumented radius — same shape as the prior critique's characterization: most of the font-size cluster falls inside DESIGN.md's own stated 13–17px prose window, and the two rgba colors (a washi-tape hatch gradient, an intro-sweep highlight) and the 2px focus-ring radius remain plausibly intentional micro-exceptions, not drift. The browser overlay's recurring "cream-palette," "repeating-stripes-gradient," and "overused-font (fraunces)" flags on every page are the detector's generic pattern heuristics firing against choices DESIGN.md makes deliberately and by name — false positives, not findings.

One overlay flag is real and new, though: **`layout-transition` fired on every page**, and tracing it to source confirms it — `EntryNav.jsx:26` and `ProjectCard.jsx:33` both animate `transition-[width,height,border-width]` on the dog-ear fold's hover-grow state, directly animating `width`/`height`. This violates the system's own named rule ("Don't use `transition: all` or animate layout-triggering properties like `height`") verbatim. It's a real rule violation on two of the site's most-repeated hover interactions, even though the element is small enough that the practical performance cost is negligible.

**Browser overlay:** Injection succeeded on all 5 pages tested. Tiny-text findings cluster on Everwood (7) and 8dge (5-6), consistent with the CLI scan. One finding independently confirmed by direct contrast measurement, below.

## Overall Impression

This continues to be well-considered, specific work — the score climbed from 23/32 to 28/32 without any changes made between the two runs, which itself says the last critique's snapshot had already been fully acted on. What's left is smaller and more scattered: one real, newly-discovered accessibility bug: 8dge's cover placeholders never activate their own accent color and fall through to a neutral tone that fails contrast on its background, plus two genuine content/structure gaps (About's emptiness, Skills' chunking) that no prior audit/polish/harden pass was scoped to catch because they're judgment calls, not mechanical defects.

## What's Working

1. **The Everwood/8dge case studies are the strongest evidence on the site.** Real StatBar percentages, verbatim quotes with original punctuation preserved, and an honest "what I'd do differently" reflection — this is rare, and it's exactly the kind of concrete proof a hiring manager scanning in seconds needs.
2. **The dog-ear/pin/photo-corner card system reads as one physical object**, not competing motifs — tilt, corner mounts, and pin all reinforce the same idea rather than stacking unrelated decoration.
3. **Draft and error states stay in voice** ("This page isn't in the journal," paperclip + "draft" label) instead of defaulting to generic copy — most portfolios miss this.

## Priority Issues

**[P1] 8dge's Cover Placeholder caption/icon fails WCAG AA contrast**
Why it matters: Measured directly — `text-ink-faint` (#6B675E) on `cream-card` (#D9CBC2) computes to **3.56:1**, below the 4.5:1 requirement for this 11px text. Root cause traced to source: `CoverPlaceholder.jsx`'s `accentText` map only defines a `terracotta` entry (`accentText = { terracotta: "text-terracotta-soft" }`); Everwood's two placeholders explicitly pass `accent="terracotta"` and pass at 4.70:1, but 8dge's two placeholders (`EightDge.jsx:85` and `:203`) pass no `accent` prop at all, so they silently fall through to the neutral default and fail. This is a real, confirmed, previously-undetected bug — every prior contrast pass this session targeted the terracotta tokens specifically and never exercised this component's un-accented path.
Fix: Add `indigo: "text-indigo"` to `CoverPlaceholder.jsx`'s `accentText` map — verified indigo DEFAULT reaches 5.04:1 on `cream-card` (indigo-soft only reaches 4.08:1 and would still fail) — then pass `accent="indigo"` on both of 8dge's `<CoverPlaceholder>` calls.
Suggested command: $impeccable audit

**[P1] About page duplicates Home with no new content**
Why it matters: Confirmed in source — `About.jsx` is exactly `<Skills/>` plus an `sr-only` h1, rendering the identical component already visible on Home. A hiring manager who clicks "about" specifically to learn who Arielle is beyond the project list gets nothing they haven't already scrolled past, plus a still-unwritten draft bio paragraph.
Fix: Give the route a reason to exist independent of Home — even a short, real 2-sentence bio (not draft) would do more for the "design+engineering hybrid" pitch than a permanently-empty placeholder at the one page named for personal context.
Suggested command: $impeccable layout

**[P2] Skills lists exceed the system's own chunking ceiling**
Why it matters: Confirmed in source — `Skills.jsx`'s design and engineering lists both hold 5 items against the ≤4-per-group cognitive-load guideline, in the component most likely to be skimmed rather than read carefully.
Fix: Trim each list to 4, or split into two visually distinct sub-groups.
Suggested command: $impeccable distill

**[P2] Dog-ear fold hover animates width/height directly**
Why it matters: `EntryNav.jsx:26` and `ProjectCard.jsx:33` both use `transition-[width,height,border-width]` on their hover-grow state — a direct violation of DESIGN.md's own named rule against animating layout-triggering properties, caught by the mechanical detector's `layout-transition` flag on every single page and confirmed by source inspection. Performance impact is negligible at this element's size, but it's a real, repeated exception to a rule the system states as absolute.
Fix: Rebuild the grow effect with `transform: scale()` on the border-triangle instead of animating `width`/`height`/`border-width` directly, or explicitly document it as a named micro-exception if the border-triangle technique can't cleanly support a transform-based version.
Suggested command: $impeccable optimize

**[P3] Intro splash's click-to-proceed affordance is invisible**
Why it matters: DESIGN.md documents cutting the "tap anywhere to open" hint deliberately, but for a site whose own Product Principles state a hiring manager should judge it "within seconds, not minutes," an unlabeled interactive splash risks a visitor simply waiting out the ~4.4s idle fallback instead of skipping it.
Fix: A minimal, low-key affordance (a subtle pulse, a small "→" ghost) that doesn't break the "closed book" illusion but signals interactivity.
Suggested command: $impeccable clarify

## Persona Red Flags

**Sam (accessibility-dependent, low-vision/screen-reader user):** Lands directly on the newly-confirmed contrast failure — 8dge's "cover image · coming soon" and "high-fidelity screens · coming soon" captions are exactly the kind of secondary-but-real content Sam needs to read, and they fail AA on this page specifically while the identical pattern passes on Everwood.

**Jordan (confused first-timer):** Hits the intro splash cold and watches "FIELD JOURNAL / Welcome to / Arielle's Journal" write itself on with no instruction that clicking advances it — may sit through the full idle fallback wondering if the page loaded correctly.

**Riley (deliberate stress-tester):** Clicks into Reneal or R'ATE — 2 of the site's 4 entries — and lands on the generic `CaseStudy.jsx` template with three DraftText placeholders. Both are honestly labeled, but Riley also notices these are the *older* projects (2025/2024) sitting next to the *newer*, fully-real ones (2026/2025) — an odd recency-inverted signal worth being aware of even though nothing here is dishonest.

## Minor Observations

- `TaglineRotator.jsx`'s five taglines are generic personality-quirk filler despite the lead-in phrase being reworked to escape the travel-passport reference — the frame changed, the content genre didn't.
- The "resume · coming soon" pill shares the exact bordered-pill shape, size, and row position as the three real CTA pills beside it in both Hero and Contact — this is a deliberate, documented choice (matching the eventual real link's visual slot), but on a fast mobile scan it reads as clickable until actually focused on.
- Footer is the least considered surface on the site — functionally correct, but no signature journal motif closes the page the way Hero/Entries open it.
- `ProjectCard.jsx`'s `accentClasses` map hardcodes only `terracotta`, same brittleness pattern as `CoverPlaceholder`'s — correct today under the Two-Accent Rule, but worth a shared fix if either map needs to grow again.
- The case-study prose reading measure (~87ch on Everwood) still exceeds the ~75ch guideline — already surfaced and explicitly deferred in an earlier polish pass as invasive/subjective; not re-flagging as new, just noting it's still there.

## Questions to Consider

1. What if the About page's honesty (draft bio) is actually costing more than it protects — would a short, real 2-sentence bio written now do more for the hybrid-designer pitch than a permanently-empty draft route?
2. Is the splash's hidden affordance optimizing for craft-review elegance over the site's own stated "seconds, not minutes" audience need?
3. What if Reneal and R'ATE were pulled from the primary Entries grid until they have real content, rather than sitting one click away from the two strongest pieces of evidence on the site?
