---
name: Arielle Haryanto — Field Journal Portfolio
description: A working field journal documenting product design and engineering work, one entry per project.
colors:
  paper: "#F5F0E9"
  paper-card: "#D9CBC2"
  ink: "#201F1C"
  ink-soft: "#5F5C54"
  ink-faint: "#6B675E"
  line: "#E7DDD5"
  indigo: "#3C507D"
  indigo-deep: "#112250"
  indigo-tint: "#E3E7ED"
  indigo-soft: "#4B5E87"
  gold: "#7D5E30"
  gold-tint: "#E0C58F"
  terracotta: "#A34526"
  terracotta-deep: "#7A3319"
  terracotta-tint: "#F3E4D9"
  terracotta-soft: "#7F4630"
typography:
  display:
    fontFamily: "'Fraunces', Georgia, serif"
    fontSize: "clamp(2.5rem, 13vw, 76px)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "'Fraunces', Georgia, serif"
    fontSize: "clamp(1.875rem, 5vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1
  title:
    fontFamily: "'Fraunces', Georgia, serif"
    fontSize: "22px"
    fontWeight: 400
    lineHeight: 1.3
  body:
    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Space Mono', ui-monospace, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.02em"
  interactive-mono:
    fontFamily: "'Space Mono', ui-monospace, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.4
  hand:
    fontFamily: "'Caveat', cursive"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.25
rounded:
  DEFAULT: "4px"
spacing:
  container-x-sm: "24px"
  container-x-lg: "40px"
  section-y-sm: "80px"
  section-y-lg: "112px"
components:
  button-primary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.DEFAULT}"
    padding: "8px 16px"
  button-primary-hover:
    backgroundColor: "transparent"
    textColor: "{colors.indigo}"
    typography: "{typography.label}"
    rounded: "{rounded.DEFAULT}"
    padding: "8px 16px"
  entry-title:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
  draft-label:
    textColor: "{colors.ink-faint}"
    typography: "{typography.label}"
---

# Design System: Arielle Haryanto — Field Journal Portfolio

## Overview

**Creative North Star: "The Working Notebook"**

The site reads as a designer's own working notebook — a lab notebook or field-research log kept while doing the work, not a travel journal or a passport of places visited. That distinction is load-bearing: an early pass drew visual inspiration from a travel-passport-themed portfolio (kavnishah.com — flags, stamps, "places visited"), and two mechanics (a rotating "also a—" personality tagline, a book-page-turn intro splash) landed close enough to that reference to read as derivative. Both were reworked (see Components) to point the metaphor back at *work documented*, not *places visited*, independent of color. The journal motifs (entry numbers, margin notes, a dog-ear fold, ruled paper, a bookmark-shaped scroll marker, a washi-tape accent on cover images, a paperclip on draft copy, a handwritten sticky note) are the frame around the work — evoking a notebook actually used, not the organizing structure for the work itself. Case-study content reads as a crisp, professional document first; the journal conceit is the container, not the content hierarchy.

The palette is indigo-blue paired with a warm terracotta pop, on warm paper: two considered colors, not a saturated brand wash — closer to a ship's log or field-research ledger (ink-blue for the system, rust for emphasis) than a corporate palette. Components are quiet and considered — thin hairline borders, minimal shadow, restrained hover states. Confidence comes from restraint, not decoration.

**Key Characteristics:**
- Indigo is the shell's structural accent (links, labels, system chrome); terracotta is the sitewide *pop* accent, used sparingly for emphasis and warmth wherever a moment calls for it — not confined to one entry
- Scrapbook texture in small, controlled doses — a washi-tape strip, a torn-paper reveal, a paperclip, one handwritten sticky note — sophisticated rather than craft-table cute; one or two such moments per surface, not a running motif
- A fourth "hand" font (Caveat) exists only for genuine handwritten moments (a sticky note), never for real UI text or body copy
- Personality lives in voice, not iconography: emoji appear only as content (taglines, asides), never standing in for the icon system
- The hero opens as a direct, first-person greeting ("Hi, I'm Arielle.") rather than a third-person title card — everywhere else stays in the system's usual observational voice; the greeting is one deliberate, warmer exception at the top of the page, not a tone shift for the whole site
- Serif display type for content headings, monospace for all metadata/system labels
- Depth from 1px hairline borders and paper texture (a dot-journal grid by default, ruled lines as an accent), not shadows — with a short, named list of physical-object shadow exceptions
- Journal motifs as accent (numbers, margin notes, dog-ear, ribbon, photo-corner mounts), never as content structure
- Unfinished content marked honestly (a "draft" label + paperclip + placeholder treatment), never faked as finished

**Anti-reference.** Travel/passport iconography (flags, stamps, "countries collected," luggage-tag motifs) is explicitly out of scope — that territory belongs to the site this once drew inspiration from. If a future idea reaches for a flag, stamp, or passport-page device, it's drifting back toward the wrong reference; reach for lab-notebook/archive language instead (a filed tab, a specimen label, a research log entry, a sticky note).

## Colors

The shell runs on a sapphire-and-gold palette (sourced from a real jewelry/watch mood board — Sapphire, Royal Blue, Quicksand, Swan Wing, Shellstone), reading as a ship's-log or ledger kept in good materials rather than a corporate brand wash. Terracotta remains Everwood's own project-specific accent, earned by its content, unrelated to this palette.

### Primary (structural)
- **Sapphire** (`#3C507D`, token `indigo`): the shell's structural color — nav, footer, hero, and the "Entries" list default to it. Links, active/hover states, small labels ("FIELD NOTES", entry numbers), the scroll-ribbon. 7:1 against paper. Never a large fill.
- **Royal Blue** (`#112250`, token `indigo-deep`): the darkest step, used for the intro splash's torn panels and the ribbon's swallow-tail tip shadow. 13.5:1 against paper.
- **Sapphire Soft** (`#4B5E87`, token `indigo-soft`): a muted step for secondary mono labels ("ENTRY 01 · ...", "Field journal, ..."). ≥4.8:1 against both paper and line.
- **Sapphire Tint** (`#E3E7ED`, token `indigo-tint`): a pale wash for text selection, decorative underlines, and the washi-tape accent.

### Secondary (sitewide pop accent)
- **Bronze** (`#7D5E30`, token `gold`): the text/border-safe half of "Quicksand" — used wherever a moment wants warmth without heritage-specific meaning (the Button `accent` variant, the ribbon's gilded edge trim and stitch marks). 5.3:1 against paper.
- **Quicksand** (`#E0C58F`, token `gold-tint`): the literal light gold swatch from the mood board. Too low-contrast for text (1.7:1) — background-fill and trim use only, always paired with dark (`ink`) text on top when it fills a surface.

### Everwood-only accent (unrelated to the shell palette)
- **Terracotta** (`#A34526`) and its `deep`/`soft`/`tint` steps: still Everwood's own warm-rust accent, chosen for its heritage/rootedness theme. Confined to the Everwood entry and its case-study page. `DEFAULT` and `soft` were both darkened from their original mood-board values (`#B5502E` → `#A34526`, `#9C5A3D` → `#7F4630`) after an audit measured real text set in them failing WCAG AA — `soft` in particular is Everwood's primary label color (used on every section subheading and the Margin Notes), so the fix was to the token itself rather than a scattered set of one-off overrides. Both new values are verified ≥4.5:1 against every background they actually render on: paper, `line`, `terracotta-tint`, and `cream-card` (the last one via `CoverPlaceholder`'s terracotta-accented caption text, easy to miss since it's a different component than the one that surfaced the bug).

### Neutral
- **Paper** (`#F5F0E9`, "Swan Wing"): the base background — a warmer, slightly grayer cream than before.
- **Paper Card** (`#D9CBC2`, "Shellstone"): a richer warm taupe for "recessed" fills (cover placeholders, dog-ear fold) and the torn-edge seam.
- **Ink** (`#201F1C`): primary text color. Warm near-black, never pure black — left untouched by the palette refresh for body-text legibility.
- **Ink Soft** (`#5F5C54`): secondary body text — descriptions, taglines, case-study prose.
- **Ink Faint** (`#6B675E`): tertiary/metadata text — dates, tags, footer copyright, draft labels. ≥4.5:1 at 11px.
- **Line** (`#E7DDD5`): a blend of Swan Wing and Shellstone — all hairline borders, dividers, and the ruled-paper stripe.

### Named Rules
**The Two-Accent Rule.** The shell carries exactly two saturated colors: Sapphire (structural) and Bronze/Quicksand (pop). A third saturated hue on the shell is drift; route new shell emphasis through one of these two.

**Color Follows Content.** A project only earns its own accent (like Everwood's terracotta) in the Entries list once it has real content — color signals "this one is real," not decoration. Projects still in draft stay on the shell's neutral default. This doesn't mean every real project gets a *new* unique hue, though — the Two-Accent Rule still caps the palette at two saturated colors sitewide. Reneal and R'ATE both use the shell's default indigo rather than inventing a third accent; terracotta stays specifically Everwood's, earned by its own heritage/rootedness theme, not a template every "real" project repeats.

## Typography

**Display Font:** Fraunces (with Georgia, serif fallback)
**Body Font:** Bricolage Grotesque (with system-ui fallback)
**Label/Mono Font:** Space Mono (with ui-monospace fallback)
**Hand Font:** Caveat (with cursive fallback) — reserved for genuine handwritten moments only: the Sticky Note component on case studies, and a single small margin aside on the home page's Skills section ("(still adding to this list...)"). One instance per page, per the One-Hand Rule below. (Dancing Script is a separate, further-scoped exception used only by the Intro Splash — see its Components entry.)

**Character:** A warm literary serif for anything that's actually content (names, titles, headlines) against a characterful variable grotesque for body prose and a distinctive typewriter-style monospace for every piece of system metadata. Bricolage Grotesque and Space Mono replaced Work Sans and IBM Plex Mono for the same reason Fraunces was kept: the earlier pairing (a warm serif + a neutral grotesque + a clean dev-tool mono) had become one of the most recognizable "AI-generated editorial site" formulas by 2025 — distinctive individually, generic as a trio. Fraunces stayed because it wasn't the problem; the two workhorse fonts sitting next to it were. Caveat adds a fourth, narrowly-scoped voice: an actual hand, for the rare moment something should look genuinely scrawled rather than typeset.

### Hierarchy
- **Display** (400, clamp(2.75rem, 13vw, 88px), leading 0.95): the single hero headline only ("Hi, I'm Arielle."). One per site.
- **Headline** (400, ~30–60px, leading 1): section headings ("Entries", "Comfortable moving...") and the case-study entry title (project name).
- **Title** (400, 22px, leading 1.3): component-level headings — the project title inside each entry card.
- **Body** (400, 16px, leading 1.6, italic used for emphasis/asides): all prose. Body text ranges 13–17px depending on context (card summary vs. hero intro), always Bricolage Grotesque, never below 13px for actual prose.
- **Label** (400, 11px, leading 1.4, tracked, often uppercase): every piece of *static* metadata — entry numbers, dates, tags, section eyebrows ("01 · overview"), the "draft" tag, footer copyright, stat captions, design-decision numbering. Always Space Mono. This is a hard floor, not a starting point — nothing sits below it. Verified at 11px against every background it renders on.
- **Interactive Mono** (400, 13px, Space Mono): nav-style links specifically — Nav's work/about/contact, Footer's email/linkedin/github, every case-study "← back to journal", external reference links (e.g. Courtsite), and Entry Card's "Read entry →". One step up from Label because these are actionable, not just informational; a typeset pass caught this role drifting to an undocumented, inconsistent 12px in several places (Footer's links, "Read entry →", the back-links) while Nav itself had always been 13px — collapsed back onto one size.
- **Hand** (600, 1.5rem+, leading 1.25): the sticky-note margin note only. Never used for anything a visitor needs to read reliably (no labels, no CTAs, no body prose) — handwriting fonts trade legibility for character, so its use stays decorative and optional.

### Named Rules
**The Serif-Announces, Mono-Labels Rule.** Fraunces is reserved for actual content headings. Space Mono is reserved for metadata and system labels, always small and often uppercase/tracked. Bricolage Grotesque carries all body prose. Never mix the roles — a metadata label in Fraunces, or a heading in mono, breaks the journal/typewriter logic the whole system depends on. This rule caught a real bug: `ProjectCard`'s tag pills (visible on Home and `/work`, the site's most-trafficked surface) were missing `font-mono` entirely and silently rendering in Bricolage Grotesque — a typeset pass found it by comparing the same tag styling on a case-study page (correctly mono) against the Entries grid (not).

**Label vs. Interactive Mono.** The two roles are 2px apart and both Space Mono, which is deliberate — they should read as the same *family* of small system text, just distinguished by whether the text does something when clicked. Don't reach for a third mono size; if something doesn't cleanly fit either role, that's a sign to reconsider what it's for, not to add a size.

**Exception: the Hero dateline.** "Field journal — {month year}" at the top of Hero is mono but deliberately *not* uppercase or letter-spaced like every other mono label on the site. Tracked-out ALL-CAPS mono sitting above a big headline is a widely recognized AI-generated-portfolio "eyebrow" pattern on its own, independent of which specific mono typeface fills it — swapping the font alone (IBM Plex Mono → Space Mono, an earlier fix) didn't fully solve that read, because the tell is the *treatment*, not the *face*. The Hero line is styled instead as a literal dateline — sentence case, no tracking — the same idea real diary/letter dateheads use, which happens to fit the journal metaphor better anyway. Section eyebrows elsewhere ("FIELD NOTES — SELECTED WORK", "ENTRY 01 · ...") keep the uppercase/tracked treatment, since there they're doing categorical-label work, not date-stamping — don't generalize this exception to those.

**The One-Hand Rule (revised).** Caveat is still never used for real UI text or body copy, and still appears at most once on non-case-study pages (e.g. Home's Skills aside). On case-study pages specifically, the Margin Note pattern (see Components) is allowed to repeat — a project with enough real content to annotate earns more than one aside. This was a deliberate loosening of the original "one Caveat instance per page, full stop" rule, made on direct positive feedback about the sticky-note style; it's a repeatable structural device now, not a single decorative spice.

## Layout

A single centered content column (`max-width: 1160px`), generous section rhythm (80px mobile / 112px desktop vertical padding between major sections), and consistent horizontal container padding (24px mobile / 40px desktop). Case-study sections use a two-column grid on desktop (`180px` label column + flexible content column, 32–40px gap), collapsing to a single stacked column on mobile. The "Skills" section uses a two-column grid on desktop, one column on mobile. Content is left-aligned throughout; nothing centers except the one-time intro splash and the not-found state.

**Ribbon clearance.** `Nav` and `Footer` use asymmetric container padding — `pl-6 md:pl-10` on the left (matching every other section) but `pr-6 sm:pr-14 md:pr-20` on the right — so their right-aligned content (nav links, footer email/linkedin/github) never sits under the fixed Scroll Ribbon. Verified with real `getBoundingClientRect()` measurements: ≥40px of clear gap between the rightmost link and the ribbon at both the `sm` (700px) and `md`+ (934px+) breakpoints. Any future right-aligned fixed header/footer content needs this same extra padding, not the sitewide default.

### Information Architecture
Home stays a single scrollable page (Hero → Entries → Skills/About) — nothing was removed from it. `/work`, `/about`, and `/contact` are **additional** standalone routes carrying the same content (`Entries` and `Skills` are shared components, imported by both Home and their dedicated pages), plus a new `Contact` page. Nav and the section tabs link to these real routes rather than `/#work` / `/#about` anchors. This is deliberately additive, not a migration — Home was already tested and working; duplicating the render target was lower-risk than restructuring it. Revisit if the duplication itself starts to feel redundant rather than useful for deep-linking.

**Scroll reset on navigation.** `ScrollToTop` (mounted once in `App.jsx`, inside `BrowserRouter`) calls `window.scrollTo({ top: 0, behavior: "instant" })` on every `pathname` change via `useLocation`. React Router doesn't reset scroll position between route changes the way a real page load does — without this, navigating from partway down one page (Home's Entries section, an EntryNav "next entry" link) would land on the new page still scrolled to the same pixel offset instead of at its top. `behavior: "instant"` deliberately overrides the sitewide `scroll-behavior: smooth` (set on `html` in `index.css`) for this one reset — a smooth-animated scroll-to-top on every navigation would read as a strange delay before a new page appears, not a fresh start.

**One `<h1>` per route, even when routes share components.** `Work` and `About` render the shared `Entries`/`Skills` components, whose own top-level heading is an `<h2>` (correct when embedded inside Home, which already has its own `<h1>` from `Hero`). Rendered standalone at `/work` or `/about`, that left both routes with no page-level heading at all — a real heading-hierarchy gap an audit caught. Fixed with a `sr-only` `<h1>` in `Work.jsx`/`About.jsx` specifically: visible, on-brand `<h2>` stays the visual headline; screen-reader users get a proper landmark; Home never ends up with two `<h1>`s since `Work`/`About` are separate routes, never rendered alongside `Hero`.

**8dge is on hold, not deleted.** Pulled by the writer's own call — it read as more of a software-engineering internship than product/UI-UX work, which doesn't fit this portfolio's positioning. `src/pages/case-studies/EightDge.jsx` still exists, fully real and complete, but `App.jsx` no longer imports it or routes `/work/8dge` to it (that URL now correctly falls through to `NotFound`), and its entry was removed from `projects.js` rather than just marked `draft`. The remaining three projects' `entry` numbers and each bespoke page's hardcoded "ENTRY 0X" header text were renumbered to close the gap (01 Everwood, 02 Reneal, 03 R'ATE) rather than leaving 8dge's old "02" as a skipped number. Every design-system pattern that originated on 8dge (the accent-contrast fix, the bolded-bullet-lead-ins pattern, its Sticky Note) stays documented in its own section since the code and the lesson are both still real — only the live example moved. Don't restore the route or delete the file without being asked; this is a hold, not a resolved decision either way.

## Elevation & Depth

The system is flat by default. Depth and separation come from 1px hairline borders (`line` token) and paper texture — not drop shadows. Every shadow in the system is a named exception standing in for a real physical object resting on or torn from the page — never a general-purpose elevation device.

### Site-wide Texture: Dot Journal
The `<body>` element carries `.bg-dot-grid` (a faint `radial-gradient` of 1px dots, `rgba(107,103,94,0.35)`, 24px grid) as its base texture, continuous top to bottom across every page — a bullet/dot-journal grid rather than lined notebook paper, deliberately: it reads as considered and current (the way people actually keep field notebooks now) rather than school-ruled, and it tiles perfectly behind every section without the seam risk a per-section ruled background would have at each new component's boundary. `.bg-ruled` (the horizontal rule-line texture) is kept as a *contrast* texture for specific emphasis bands only — the site header (`Nav`), the Hero section, and case-study headers — so a ruled band reads as a distinct "page" stitched into the dotted journal, not the default surface everywhere. Any surface that sets its own opaque background (a card, the terracotta stat band, the intro cover) naturally occludes the dots beneath it — no extra z-index management needed.

Case-study pages fold their "← back to journal" link into the top of the ruled header itself (same `bg-ruled` element as the entry title, just above it) rather than a separate plain div above the header — that earlier version left a one-line gap of dot texture between the ruled Nav and the ruled header, breaking the band in two. Folding it in keeps a single continuous ruled surface from the Nav bar down through the entry title.

A third, near-invisible layer sits above everything (`.paper-grain`, `fixed inset-0 pointer-events-none z-50` in `App.jsx`): an SVG fractal-noise texture at 3.5% opacity with `mix-blend-mode: multiply`, unifying every surface underneath with a consistent paper-fiber grain regardless of what's rendered below it. Deliberately the highest z-index element in the system yet completely inert (`pointer-events-none`) — a print-material finish over the whole viewport, not a decorative layer competing for attention.

### Named Rules
**Dots-as-Default, Rules-as-Accent.** The dot grid is the ambient page texture; `.bg-ruled` is reserved for the handful of places already documented as ruled (site Nav, Hero, case-study header, the ruled ribbon-tab styling). Don't add a new ruled-paper instance outside those without good reason — it dilutes the "ruled = a distinct page" read.

### Shadow Vocabulary
- **Dog-ear lift** (`box-shadow: 0 1px 2px rgba(0,0,0,0.05)` via Tailwind `shadow-sm`): the tiny fold triangle on each entry card, only visible on hover.
- **Bookmark tail lift** (`shadow-sm`): the scroll-ribbon's hanging notch marker.
- **Book cover shadow** (`10px 0 32px rgba(0,0,0,0.3)`): the intro splash's cover, reserved exclusively for that one-time entrance.
- **Sticky-note lift** (`shadow-sm`): the handwritten margin note — a small paper square that reads as physically stuck to the page, not floating UI.

- **Spine edge** (`shadow-[2px_0_10px_rgba(0,0,0,0.25)]`): the fixed Book Spine's right edge, selling it as a bound gutter the page sits in rather than a flat color bar.
- **Pin lift** (`shadow-sm` + `ring-1 ring-black/10`): the small pin holding each Entry Card to the page.

These six are exhaustive. A shadow anywhere else in the system is drift, not a seventh exception.

### Named Rules
**The Borders-Not-Shadows Rule.** Depth is conveyed by hairline borders and paper texture, not elevation. A new component reaching for `box-shadow` to separate itself from the page is working against the system unless it's a genuine physical-object exception like the ones above; reach for a `border-t`/`border-b` divider instead.

## Shapes

Square, hairline-bordered surfaces are the default — sections, cards, and dividers do not use rounded corners. The one radius value in the system (`4px`, Tailwind's default `rounded`) appears only on small interactive controls: buttons and the cover-placeholder thumbnail. Signature custom shapes carry the journal's physicality: a dog-ear fold (a CSS border-triangle in the top-right corner of each entry card, growing on hover), the scroll ribbon (see below), torn-paper edges (see `.torn-edge-top`), and the Sticker's dashed-circle stamp edge.

### Scroll Ribbon (redesigned)
A fixed-size ribbon tab (24px × 64px, gold-trimmed edges, center fold crease, two stitch marks, deep swallow-tail notch) that **slides down** the right edge as the page scrolls, its tip landing on the current scroll position — plus a thin 1px `indigo/40` thread tracing from the very top of the page down to the tab, via the same `clip-path: inset()` progress technique used elsewhere (never an animated `height`). The thread reads as the string a ribbon bookmark is tied to; the tab is the visible marker at the end of it — both readable at once, rather than choosing between "trail" and "discrete marker." At `progress: 0` the tab sits mostly in view (`top: -18px` against its own 64px height, ~70% visible) so it reads as a bookmark from the very first scroll, not just a sliver.

The scroll listener is `requestAnimationFrame`-throttled (a `ticking` flag guards against queuing more than one pending frame) rather than calling `setProgress` directly on every raw `scroll` event — an audit caught the untethered version as the one motion-driving code path in the system that didn't follow the rAF-batched discipline everything else uses. The visible behavior is identical; the fix is purely about not re-rendering on every pixel of scroll.

### Book Spine (signature component)
`BookSpine`, mounted globally (`App.jsx`) alongside the Scroll Ribbon: a fixed, full-height `indigo-deep` strip (16px, `hidden sm:block`) along the far-left viewport edge, with a column of short `gold-tint/60` stitch marks down its center — a sewn-binding read — and the Spine-edge shadow exception giving it a gutter. Answers "the page feels plain in color" directly: it's the single largest flat-color surface in the system, always on screen. Paired with the ribbon on the right, the two fixed edges read as a bound book the page sits inside, not a flat sheet floating on cream. `SectionTabs` shifts its fixed position from `left-0` to `left-4` to sit flush against the spine's right edge — the "Work"/"About" tabs now read as poking out *from* the binding, not colliding with it.

### Entry Card Pin (signature accent)
A small solid-color circle (`w-3 h-3 rounded-full`, the card's own accent — indigo by default, terracotta on Everwood) centered on each Entry Card's top edge, half overlapping it (`-top-1.5`), with the Pin-lift shadow exception. Reads as a pushpin holding the photo to a corkboard page — a second, independent accent from the photo-corner mounts (different location, different material metaphor: mounted vs. pinned), not a duplicate of the same motif.

### Hero Photo (signature accent)
A `hidden lg:block` tilted (`-rotate-3`) `CoverPlaceholder` with the same photo-corner-mount treatment and pin as the Entry Card grid, positioned absolute on the Hero's right side, vertically centered. Fills what was empty space on wide screens and pulls the Entries grid's "photo pinned into the journal" language up into the Hero itself, rather than introducing a new visual idea just for that gap. `indigo` accent (Hero is shell-level, not a specific project — never `terracotta`, which stays Everwood-only per the Two-Accent Rule). Hidden below `lg` since there's no spare width to give it once the CTAs wrap. Sized `w-72 xl:w-96` (previously `w-64 xl:w-72`, and `w-52 xl:w-60` before that) and positioned `right-16 xl:right-28` — grown twice on direct request, since a low-resolution source photo read as too small even after the first bump.

**Real photo, not a placeholder.** `CoverPlaceholder` takes `image`/`imageAlt` props that swap in a real `<img>` (rendered `object-cover` inside the same frame) in place of the hatched "coming soon" placeholder, while keeping every decorative layer (corner mounts, pin, `hideTape`, accent color) unchanged — the placeholder-to-real-photo swap was the one-line change the component's prop API was always designed for. The Hero slot now renders `/images/me/arielle.JPG`, a real headshot, via this prop.

### About Page Photo & Dual Bio
`About.jsx` gives the `/about` route its own point of difference from Home rather than just being Home's Skills section on its own page: a real photo (`/images/me/me_dog.JPG`, a graduation photo) sits beside a first-person bio paragraph, in a `flex flex-col sm:flex-row` layout (stacked on mobile, side-by-side at `sm:` and up). The photo reuses the same "pinned into the journal" corner-mount-plus-pin treatment as the Hero photo and Entry cards (hand-rolled here rather than through `CoverPlaceholder`, since there's no placeholder state to fall back to), tilted `-rotate-2` and sized `w-64 md:w-80` — the same "started too small for a real photo" correction the Hero photo went through.

**Two bios, not a duplicate.** Home's shared `Skills` component already carries a third-person bio paragraph, and rendering `Skills` unmodified on `/about` would put that same paragraph directly under a *second*, first-person one — redundant rather than additive. `Skills` takes a `hideBio` boolean prop (default `false`) that suppresses just that paragraph; `About.jsx` passes `<Skills hideBio />` so the route shows its own first-person bio up top and only the skills lists below, while Home's `<Skills />` call is untouched and keeps showing its original third-person version.

### Hover & Emphasis Pass
A general polish pass across the site's interactive elements, applying one consistent motion vocabulary rather than one-off treatments per component:
- **`.link-underline` (reusable utility):** a hover/focus underline that wipes in via `clip-path` (not `transform: scaleX`, staying inside the system's animatable-properties rule), colored with `currentColor` so it always matches whatever hover color the link already uses. Applied to Nav links, Footer links, the Nav wordmark's hover state, and the case-study "← back to journal" link — anywhere plain text is a nav-style link outside a card. Its `::after` positions at `bottom: var(--link-underline-offset, -2px)` — a CSS custom property, not a hardcoded value — specifically so a link that adds vertical padding for a bigger tap target (Nav/Footer's `-my-2 py-2`) can compensate by setting `[--link-underline-offset:-10px]` on that same element, keeping the underline pinned tight to the text instead of drifting down with the padding. Links without the padding just fall through to the `-2px` default.
- **Arrow nudges:** "Read entry →" (Entry Card) and "next entry →" / "← previous entry" (EntryNav) each animate their arrow glyph `translate-x` a few pixels in its direction of travel on hover — a small, standard "this will take you somewhere" cue, `transform`-only.
- **EntryNav border accent:** the previous/next cards gain a `hover:border-{accent}` (indigo or the target project's own accent) in addition to the existing title color change and growing dog-ear — the whole card now visibly responds, not just the text.
- **SectionTabs pull-out:** tabs nudge `translate-x-0.5` on hover, reading as pulling slightly further out from the Book Spine they're anchored to.
- **Hero CTA press:** the linkedin/github/email pills gained `active:scale-[0.97]` (the same press feedback the Button component already uses), so every bordered pill/button in the system now confirms a press consistently.
- **One emphasis bold:** the Hero subhead sets "what's technically feasible" in `font-medium text-ink` against the surrounding `text-ink-soft` — a single, sparing weight-based emphasis rather than a system-wide bolding habit. Entry Card titles also pick up `group-hover:font-medium` alongside their existing hover color change, echoing the same idea at card scale.
All of the above stay within the existing motion rules — `transform`/`opacity`/`clip-path` only, `cubic-bezier(0.23, 1, 0.32, 1)` or `ease-out`, and `motion-reduce:` variants (or bare `transition: none` under the reduced-motion media query) wherever something moves.

### Entrance Animations (signature pattern)
On load, Hero's eyebrow/headline/subhead/tagline/CTAs each fade up (`opacity 0→1`, `translateY(14px)→0`, 700ms `cubic-bezier(0.23, 1, 0.32, 1)`) in a staggered sequence (0/80/160/240/320ms) — the page settling into place rather than popping in all at once. The "Entries" section heading gets its own one-time `clip-path` wipe-in underline (`.entries-underline`, 600ms, 300ms delay) — the same wipe mechanic `.link-underline` uses on hover, but playing once on mount instead of on interaction. On scroll, `Reveal` (`src/components/Reveal.jsx`) wraps a section in an `IntersectionObserver` that fades and slides content up (`opacity`/`translateY(16px)→0`, 700ms ease-out) the first time it enters the viewport, then disconnects — used on the Entries grid, staggered 70ms per card (`delay={i * 70}`) so cards settle in left-to-right rather than all at once. All three skip cleanly under `prefers-reduced-motion`.

### Named Rule: Inverse Hover
Bordered/outline buttons and button-like pill links (the Button component's `default`/`accent` variants, the Hero social pills, the Contact page's linkedin/github/email pills) invert on hover — background fills with the element's own accent color, text flips to `cream` — rather than only recoloring the border and text. `solid` (already filled at rest) keeps its darken-on-hover instead, since it has no transparent state to invert from; `ghost` keeps a color-only hover, since a heavy fill would contradict its explicitly de-emphasized, tertiary role. New bordered/pill-style interactive elements should default to the inverse-fill pattern unless they have a specific reason (like `ghost`) not to.

**Contact page parity with Hero.** Contact's linkedin/github/email pills are hand-rolled `<a>` tags matching Hero's exact classes, not the `Button` component — consistent with Hero and Footer, which also skip `Button` for these specific social/contact links. A polish pass found two real gaps here: GitHub was missing entirely (Hero and Footer both show it; Contact only had linkedin + email), and `email` was a `<button onClick={() => window.location.href = "mailto:..."}>` instead of a plain `<a href="mailto:...">` — same destination, but a screen reader announces a `<button>` differently than a link, and it's the one contact affordance implemented differently from every other mailto link on the site. Both fixed: all three Contact pills are now real anchors, github included.

### Journal Cursor
`a` and `button` elements get a custom pointer: a small hand-drawn pencil (inline SVG, `gold-tint` eraser cap, `cream`/`indigo` shaft, `ink` tip), rotated to point down-left with its hotspot at the tip, falling back to the system `pointer` cursor if the image fails to load. One more ambient "this is a journal" detail that costs nothing in layout and doesn't compete with any content.

### Torn Edge (reusable utility)
A shared `.torn-edge-top` Tailwind utility (defined once in `index.css`, a 29-point jagged `clip-path` polygon with irregular tooth depth and spacing — a real tear, not a uniform sawtooth) stands in for a hand-torn paper edge wherever a section boundary wants more presence than a hairline rule. Used on the **Hero → Entries seam on the home page** — a `paper-card` (Shellstone)-filled, 28px-tall strip sitting right where the hero's CTAs end and "FIELD NOTES — SELECTED WORK" begins. It needs real height and a color distinct from the surrounding paper to read clearly; the first pass (16px, plain paper-on-paper) was too subtle to spot — this is the fix. The intro splash uses its own matching hand-drawn (not machine-regular) tear shape for the same reason. Reuse `.torn-edge-top` rather than hand-writing a new jagged polygon per instance — one vocabulary, applied where a seam earns it, not on every divider.

## Components

Buttons, cards, and labels are quiet and considered: thin borders, minimal shadow, restrained hover states. Confidence through restraint, not decoration.

**A note on `shadcn`.** `npx shadcn@latest init` generates Tailwind v4 CSS-first output (`@theme`, `@utility`, `border-border`) regardless of a project's detected Tailwind version — it broke this v3 project's build on first run. `shadcn`, `@fontsource-variable/geist`, and `tw-animate-css` were removed after init; only `@base-ui/react`, `class-variance-authority`, `clsx`, `tailwind-merge`, and `lucide-react` were kept (all v3-safe, framework-agnostic). Do not re-run `shadcn add` directly into `index.css` — hand-add new primitives the same way Button/Card/Dialog were built, styled against this file's tokens.

### Buttons
`src/components/ui/button.jsx` — a `cva`-driven component with four variants, all sharing the same shape language:
- **Shape:** square corners with a subtle 4px radius (`rounded`), `8px 16px` padding (`sm`: `px-3 py-1.5`), 13px mono label type (Interactive Mono; `sm`: 11px, the Label floor, since the `sm` variant is currently unused anywhere in the app — kept in the ramp for whenever a smaller button is needed, updated to match the two-role split rather than left at its old undocumented 12px).
- **`default`:** transparent background, `ink` text, `line` border. Hover shifts border/text to `indigo` (or the page's active accent).
- **`solid`:** filled `indigo` background, `cream` text, `indigo` border. Hover darkens to `indigo-deep`. Reserved for a page's single primary action (e.g. a Dialog's Confirm).
- **`accent`:** transparent, `gold` (bronze) border and text, filling with `gold-tint` (Quicksand) and `ink` text on hover — the sitewide pop accent, for a page's secondary emphasis action.
- **`ghost`:** no border, `ink-soft` text going to `ink` on hover — for tertiary actions (e.g. a Dialog's Cancel).
- **Press feedback (all variants):** `active:scale-[0.97]`, 150ms ease-out, per Emil Kowalski's button guidance — confirms the interface heard the press. Disabled under `motion-reduce`.

### Card
`src/components/ui/card.jsx` — `Card` / `CardHeader` / `CardTitle` / `CardDescription` / `CardContent` / `CardFooter`. Square corners, `line` border, `cream-card` background, no shadow at rest — the same restrained surface language as the Entry Card, generalized for reuse (dialogs, future content blocks) rather than the Entries-list-specific version.

### Dialog
`src/components/ui/dialog.jsx` — built on Base UI's `Dialog` primitive (`@base-ui/react`), styled to the shell, not shadcn's default theme. Centered (never origin-aware to a trigger — per Emil's guidance, modals stay centered), plain `ink/40` backdrop with **no blur** (glass-as-decoration is banned by the craft floor), square corners, `line` border, no shadow. Entrance/exit use CSS `[data-starting-style]` / `[data-ending-style]` (Base UI's animation contract) rather than `@starting-style` alone, since exit needs the same hook: `opacity 0 → 1` and `scale(0.95) → scale(1)`, 200ms, the system's established `cubic-bezier(0.23, 1, 0.32, 1)` ease-out. Backdrop fades only, same duration. Both no-op under `prefers-reduced-motion`.

### Entry Card accent (theming hook)
`ProjectCard` reads an optional `project.accent` field (`"terracotta"`, etc.) and, when set, recolors the entry number, dog-ear-adjacent hover title, and "Read entry →" link to that accent instead of the shell default indigo. Unset entries stay indigo. This is how terracotta "pops once in a while" in the Entries list without every row competing for attention.

### Intro Splash (signature component, write-on title + cascading book-open)
A one-time entrance, now user-paced rather than a fixed watch-and-wait: three stacked layers — the `indigo-deep` cover plus two `bg-ruled` (ruled-paper) pages underneath — rotate open on the same left edge like riffling through the first few pages of a real book. Each layer opens a touch less and a beat later than the one before it (`rotateY(-100°/-94°/-88°)`, delays `0/160/300ms`, durations `950/880/820ms`). Real `perspective` (2200px) on the parent, `transform-style: preserve-3d`, `backface-visibility: hidden` so no layer's reverse face flashes mid-turn. Each layer carries an explicit `z-index` (`layers.length - i`, cover highest) — without it, later DOM siblings paint over earlier ones regardless of transform, which silently hid the cover text behind the ruled pages at rest; this is a real bug this system hit once, worth guarding against in any future absolutely-positioned sibling stack.

**Write-on title.** The cover's title writes itself onto the page rather than fading in as a static block: "FIELD JOURNAL" (mono label) fades in, then "Welcome to" on its own line and the large, `-rotate-1`-tilted "Arielle's Journal" on the line beneath it each reveal left-to-right via a `clip-path: inset()` wipe (staggered `300ms`/`900ms` delays, `650ms`/`850ms` durations) — the same wipe technique as `.entries-underline` elsewhere, reused rather than reaching for a new mechanic (a true per-letter SVG stroke-path animation was considered and rejected as disproportionate effort for a one-time splash). Each line is a block-level wrapper (`p`/`h2`) around an `inline-block` span — the wrapper forces the two phrases onto separate lines, while the inner span still shrinks to the text's own width so the clip-path wipe tracks the actual glyphs rather than the full container. The `h2` wrapper uses generous `leading-[1.5]` plus vertical padding rather than a tight display-heading line-height — Dancing Script's tall ascenders and descenders (the loop on a capital "J", the tail on a lowercase "l") clip against the line box at anything tighter, which is exactly what happened at `leading-[1.15]` before this fix. The title itself is set in **Dancing Script** (Google Font, weights 500/600/700), not the system's Caveat — a deliberately more elegant, connected script for a one-time "book cover" moment, distinct from Caveat's everyday-handwriting role at the Sticky Note/Margin Note. This is a second, scoped exception to the One-Hand Rule (which otherwise caps the site to one hand-lettered font, Caveat): the splash is never on screen at the same time as a page's own hand-font moment, so introducing a fifth font here doesn't create competition on any real page. **Hint text (reinstated).** An earlier pass cut the "tap anywhere to open" line since the interaction wasn't being surfaced/taught explicitly. A critique flagged the resulting silence as being in tension with the site's own "seconds, not minutes" scan goal for a first-time visitor who has no signal that clicking advances the sequence — the fallback timer alone costs up to ~4.4s. A quieter version came back instead of the original: `"tap to open"` at 10px mono, `indigo-tint/45` (deliberately low-contrast, well under body-text weight), fading in 500ms after the title's own write-on finishes (`1900ms` delay) so it never competes with or precedes the primary reveal. Still just a hint, not an instruction block — it doesn't explain the mechanic, only signals that one exists.

**Font-load race (real bug, fixed).** The Google Fonts `<link>` for Dancing Script (and every other webfont) uses `display=swap`, which paints text in a fallback font immediately and swaps to the real font whenever it finishes loading — including mid-flight, if that happens to land while the `clip-path` wipe on "Arielle's Journal" is still animating. A font swap changes the span's glyph metrics (an `inline-block`, sized to its own content) while `clip-path` is transitioning against that same box, which can leave the final reveal looking like it stopped short right on the last character — reported as "the l is cut off" on a live visit, and reproduced by forcing the write-on to fire before confirming the font had loaded. Fixed at the root: the write-on sequence (and the `autoOpenTimer` that follows it) no longer starts on the next two animation frames unconditionally — it now waits on `document.fonts.ready` first (raced against an 800ms timeout, so a slow or failed font load can't hang the intro indefinitely), guaranteeing Dancing Script is already stable before any `clip-path` transition begins. Apply the same pattern to any future animation whose timing depends on a webfont's final metrics rather than assuming `display=swap` fonts are safe to animate against immediately.

**Click (or any key) to proceed, not a fixed watch.** The sequence no longer forces a single fixed watch-then-auto-open: the first click/keypress calls `startOpening()` immediately, whatever the write-on has reached; a second click/keypress (once already opening) calls `finish()` to skip straight to the site. A generous idle fallback still auto-advances (open at `4200ms`, hidden `1600ms` after opening starts) so an inactive visitor, a crawler, or someone who doesn't realize they can interact still reaches the real page. `openingRef` (a ref, not state) guards `startOpening` against double-firing from a stray double click or the fallback timer racing a real click. Skips automatically under `prefers-reduced-motion` and on repeat visits within a session (`sessionStorage`). The fallback delay moved from `2800ms` to `4200ms` when the hint text was reinstated (see above) — at `2800ms` the hint's own fade-in (complete at `2400ms`) had only ~400ms of full visibility before auto-advance began fading the whole block back out, which defeated the point of adding it. `4200ms` gives it roughly 1800ms of settled, readable time.

An earlier version used two torn-paper panels tearing apart horizontally instead of a page-turn, specifically to avoid one mechanic (a flat single-panel `rotateY`) that read too close to a reference site. This version returns to a book-opening motion on explicit request, but keeps real depth (page-block edge, light sweep, proper 3D perspective) that a flat flip never had — the differentiation is in the craft, not in avoiding the concept.

### Tagline Rotator (signature component)
A rotating one-line aside under the hero subhead, each entry paired with a single emoji: `"filed under — {tagline}"`. Pauses on hover, respects `prefers-reduced-motion`. The lead-in phrase is deliberately not a "but I'm also a—" personality-trait framing; it stays in archive/filing language to match the working-notebook metaphor.

### Washi Tape (signature accent)
A small rotated strip (`indigo-tint`, subtle diagonal texture, `-rotate-3`) overlapping the top edge of full-size Cover Placeholders only — reads as a photo taped into a notebook. Never appears on compact thumbnails, and never more than once per surface.

### Paperclip (signature accent)
A small line-icon paperclip precedes the "draft" label on every Draft Text block — the visual equivalent of clipping a placeholder page into a binder until the real one is ready. Always paired with the "draft" label; never used decoratively on finished content.

### Sticky Note (signature component)
`src/components/StickyNote.jsx` — the full-size handwritten reflection at the end of a case study: a rotated (`-rotate-2`) paper square in the page's active accent tint (e.g. `terracotta-tint` on Everwood), `shadow-sm` for physical lift, and the quote itself set in Caveat (`font-hand`, ~24px, 600 weight), labeled "sticky note." Always the writer's real reflection, never invented — same honesty rule as Draft Text. This is now a real, standalone component (an `accent` prop mirroring `MarginNote`'s) rather than markup inlined into `Everwood.jsx` — a polish pass caught it implemented inline and labeled "margin note," which collided with the actual `MarginNote` component's own on-page label and left DESIGN.md documenting a component that didn't exist as one. 8dge's Sticky Note used this same pattern before that case study went on hold (see Information Architecture).

**Not every case study gets one.** R'ATE originally had a Sticky Note too, but its quote was a near-verbatim restatement of the "what I'd do differently" paragraph directly above it on the same page — the writer flagged the redundancy and it was removed rather than forced into saying something different just to justify the component's presence. The Sticky Note earns its place by adding a reflection the page hasn't already stated; when a case study's real "what I'd do differently" content already covers that ground on its own, skip the Sticky Note rather than echo it. R'ATE's results section now ends on that paragraph directly, straight into `EntryNav`.

### Margin Note (signature component)
`src/components/MarginNote.jsx` — a smaller sibling of the Sticky Note, sized to sit in a case-study section's 180px label column (`max-w-[168px]`, `text-lg` Caveat instead of `text-2xl`, `-rotate-2`, same tinted-paper-and-shadow treatment, an `accent` prop for terracotta/indigo tint). Its own "margin note" mono label is `text-[11px]`, matching the sitewide label floor — it launched at 9px (a genuine undersized-text bug caught by audit) and was corrected rather than kept as a deliberately smaller sub-label; there is no documented exception for labels below 11px anywhere in the system. Where the Sticky Note is the one big reflection at the end, Margin Notes are short, repeatable glossary-style callouts placed next to the section they annotate — a key term, a stat, an event name — surfacing something already true elsewhere on the page rather than adding new claims. This is what makes repeating them safe under the honesty rule: they restate, they don't invent. `hidden md:block` — the 180px label column doesn't exist below `md`, so they're skipped on mobile rather than squeezed in.

### Case-Study TL;DR (header, PM/UX-portfolio pattern)
Every case study now carries a single-paragraph synthesis line at the bottom of its header (`text-[17px] font-medium text-ink`, `max-w-2xl`) — role + the one most compelling real fact, compressed into a sentence or two a hiring manager reads in the first five seconds. Not a new claim: it restates facts the rest of the page already establishes in more detail (Everwood: the 68% stat and the judges' independently-converging feedback; R'ATE: the shipped feature count and the real test-coverage numbers; Reneal: the honest "still in progress" status). Added specifically because this is a load-bearing pattern in professional PM/UX portfolios and directly serves PRODUCT.md's own stated principle ("a hiring manager should form a judgment within seconds, not minutes") — the header metadata already covers *who/when/what*, but nothing previously answered *why should I keep reading* that fast. Write one for any future case study; keep it to what the rest of the page already proves, never a new unverified claim smuggled in through the summary line.

### Insight → Decision Traceability
Everwood and R'ATE each have one design decision explicitly tied back to the specific persona frustration it answers, written directly into that decision's own body text rather than as a separate callout: Everwood's "Built-in translation" names Maria's "constantly serving as translator" frustration; R'ATE's "Dish-level ratings" names Maya's "ratings are too general" frustration. This is deliberately not done for every decision on either page — only genuinely clean, unforced links earned the connection; the other decisions on both pages don't have an equally direct, defensible tie to a stated persona frustration, and manufacturing one for each just to look thorough would be exactly the kind of unverified claim the honesty rule exists to prevent. When a future case study has both a real persona and real decisions, look for at most one or two genuinely clean links like this rather than wiring up all of them.

### Case-Study Results Vocabulary (shared pattern)
Everwood's finished-project results section sets the canonical shape: **what shipped / what came back** (or a single merged status-plus-feedback paragraph when there's no separate shipped moment) **/ next steps / what I'd do differently**. "Next steps" content is explicitly framed as proposed ideas, not built work, wherever it includes anything beyond what the writer directly confirmed — matching the honesty rule Draft Text and Margin Notes already follow. R'ATE adapts this rather than repeating it verbatim — **what shipped / the code / what I'd do differently** — since a team project with a public GitHub repo has a real "here's the code" moment neither Everwood nor the original four-part shape accounts for, and no external judge feedback to report as "what came back." Future finished case studies should start from Everwood's four-part vocabulary and adapt only where the project's real facts genuinely don't fit it, rather than inventing new section names for their own sake.

**In-progress variant.** Reneal (still actively being built as of this writing) doesn't fit the finished-project vocabulary above — there's no "what shipped" yet, and inventing one would violate the honesty rule this whole pattern exists to protect. Its results section uses **status / what I'm learning** instead: "status" states plainly that the work is ongoing rather than implying completion, and "what I'm learning" replaces the past-tense "what I'd do differently" with a present-tense reflection on the process so far. No "next steps" subsection, since none were confirmed beyond "still in progress" — an empty or speculative list would be worse than omitting the sub-heading entirely. Reuse this two-part variant for any other project documented mid-build; switch to the four-part finished vocabulary once it actually ships.

**Bolded bullet lead-ins.** Originated on 8dge's 6-bullet "next steps" list (the longest unbroken block on the site at the time) after a critique flagged it as the hardest single block to scan on a fast-evaluation surface: each bullet's natural lead phrase (up to its own colon or comma) wrapped in a `font-medium text-ink` span so it reads as a mini-label before the explanatory clause — the same idea as a definition list, without introducing a new component. 8dge is currently on hold (see Information Architecture), so this pattern has no live example on the site right now, but it stays documented for reuse on any future list that grows past ~4 unbroken bullets rather than restructuring into a new layout each time.

**Stat band, generalized.** Everwood's full-bleed number band (`bg-terracotta-deep`, large serif numbers, mono captions) was written as Everwood-specific at the time, but the pattern itself isn't tied to terracotta — R'ATE reuses it verbatim with `bg-indigo-deep` (`text-cream` numbers ≥12:1, `text-indigo-tint` captions ≥12:1, both re-verified) for its testing stats (462 tests, 100% passing, 86.89%/85.16% coverage). Any project with 2-4 genuinely strong, verifiable numbers earns this treatment — it's a shared pattern now, not an Everwood exception; pick `{accent}-deep` to match the page's own accent.

**Persona card (research artifact).** Everwood and R'ATE both feature real user personas sourced from the writer's own research deliverables, inside a single bordered card (the same `border border-line` container language as the competitive-landscape cards, just larger). Structure, top to bottom: an initial-letter avatar (a solid `{accent}-tint` circle, serif letter in `{accent}`, `aria-hidden` since the name text beside it already carries the information) next to name + short demographic line; a short bio; a row of small accent-bordered trait pills (the same pill language as project tags, `border-{accent}/30 text-{accent}`); a `border-t` divider; then a two-column **goals | frustrations** split; a closing verbatim quote in a `border-l` blockquote where the source material included one (Everwood's personas both have one; R'ATE's doesn't, and none was invented to fill the slot). This replaced an earlier, flatter version (bio paragraph → a single "core needs" list → quote, no frustrations, no avatar, no tags) after the writer asked for something more digestible and pointed at a denser reference layout — the restructure kept every real fact from the source (Everwood's redo specifically added back a "frustrations" list per persona that the first pass had dropped entirely) while translating the reference's rounded/illustrated visual language into this system's own square-cornered, hairline-bordered, mono-labeled one, rather than copying it wholesale. Goals/frustrations lists run over the sitewide ≤4 chunking guideline on both pages; kept in full rather than trimmed, same reasoning as Skills' 5-item lists — these are reference exhibits from real project deliverables, not decision points the visitor has to weigh. Reuse this exact card shape for any future case study with a real persona artifact to show.

**Team privacy.** R'ATE was a 4-person team project (CS180: Software Engineering), but only Arielle's own role is named anywhere in the copy — teammates are referred to only as "a four-person team," never by name, per an explicit request when the case study was written. Apply the same default to any future team-project case study unless told otherwise: describe team composition and what the writer owned, never name collaborators without asking first.

### Case-Study Header Metadata (reformatted)
The year/format/team/role block in a case-study header (`Everwood`, `EightDge`) is a `flex flex-wrap gap-x-10 gap-y-5` row — each item an 11px uppercase mono label (matching the sitewide label floor; it shipped at 10px and was corrected during an audit) in the page's accent color (`terracotta-soft` / `indigo-soft`) over a larger, full-contrast `text-ink` value — not the flat inline `label — value` mono row it started as. That earlier version packed everything into one wrapped line of `text-ink-soft` at 12px with no visual separation between fields, which read as flat and hard to scan once any value (like "my role") ran past a few words. A first fix moved to a `grid-cols-4` layout, which fixed the contrast/hierarchy problem but introduced a new one: equal fixed-width columns holding very different value lengths ("2026" vs. "Rice Designathon") left wildly uneven leftover whitespace per cell, so the row still read as unevenly spaced even though the grid gap itself measured perfectly even. Flex with content-sized items and a fixed *inter-item* gap fixes that — each field only takes the width its own value needs, so the visual gap between fields is actually consistent, not just the CSS `gap` value. The longest field ("my role") gets a `max-w-[220px]` cap so it wraps instead of stretching the row; on a long "team" value it may wrap to drop to its own line entirely via `flex-wrap` — expected, not a bug. A row of colored pill tags (`border-{accent}/30 text-{accent}`, pulled from the project's real tags) sits underneath as the "tools used" moment — the same accent-bordered pill language as the Button `accent` variant, reused rather than invented fresh.

**Lesson worth keeping:** equal-width grid columns are the wrong tool for a row of label/value pairs with naturally varying content length — they guarantee even *gutters*, not even *visual* spacing. Reach for content-sized flex items with a fixed gap instead whenever adjacent items' content lengths will vary a lot.

**Draft parity in the generic template.** `src/pages/CaseStudy.jsx` renders its own version of this same header pattern — a `year` field plus a row of real tag pills from `projects.js` — for whichever project is currently on it without a `format`/`team`/`role` yet to show. An audit caught an earlier version rendering *none* of this metadata despite the data already existing, which made drafts read as a structurally thinner template rather than honestly-unwritten content. The fix renders exactly what's real (`year`, `tags`) and stops there — it does not fabricate placeholder values for genuinely-unwritten fields. Both Reneal and R'ATE have since graduated to their own bespoke pages (below), so `CaseStudy.jsx` currently has no active project on it — it stays in place, ready for whatever's added to `projects.js` next as a draft.

The template's three `DraftText` body sections used to special-case the first one (`Context`) to show `project.summary` — the same sentence already visible on that project's Entries-grid card — instead of the generic "still needs writing" prompt the other two sections use. A critique caught this reading as filler rather than an honest "not yet" state, since a visitor clicking through reads the identical sentence they'd just scrolled past seconds earlier. All three sections now render the generic per-section prompt uniformly; `project.summary` stays where it belongs, on the card.

### Named Rule: No Em Dashes in Written Copy
The em dash (—) is gone from the site's own prose, labels, and section eyebrows — it's one of the most recognizable AI-generated-writing tells, on top of already being an AI-portfolio-formula tell as a typographic device (see the Hero-dateline exception above). Two different fixes cover two different roles the dash was playing:
- **Structural label separators** ("01 — overview", "FIELD NOTES — SELECTED WORK", "{label} — coming soon", case-study `ENTRY` lines) now use `·`, the same middle-dot the system already used for tag lists and the `ENTRY 01 · 2026 · Rice Designathon` pattern — one separator character sitewide, not two.
- **Mid-sentence prose dashes** (parenthetical asides, appositives) got individually rewritten per instance using whatever reads most naturally there: a period splitting one sentence into two, a colon introducing a definition or list, a comma, or parentheses for a true aside. No mechanical find-and-replace; each rewrite was judged on its own sentence.

**Exception: verbatim quotes stay untouched.** Genuine third-party quotes (the two designathon judges' feedback, the interview participant's line about idioms — all pasted in by the writer from real feedback, set in `blockquote` with quotation marks) keep their original em dashes exactly as given. Rewording a direct quote to fit a style rule misrepresents what was actually said; the honesty rule that governs Draft Text and Margin Notes cuts the same way here. Only the writer's *own* prose, labels, and a self-authored reflection quote (the Sticky Note, originally paraphrased from the writer's words rather than pasted verbatim) were fair game to rewrite. New case studies should quote real feedback verbatim, dash and all, and keep everything else dash-free.

### Resume Link
Now a real link (Hero CTAs, Contact), exactly where the placeholder pill used to sit — swapping it in was the one-line change the placeholder was always designed for: the real PDF lives at `public/Arielle_Haryanto_Resume.pdf` (served at that exact path by Vite's static file handling), and both instances are plain `<a href="/Arielle_Haryanto_Resume.pdf" target="_blank" rel="noopener noreferrer">resume ↗</a>` tags using the identical Inverse Hover pill classes as the linkedin/github/email links beside them, not a separate treatment. The paperclip glyph and `text-ink-faint`/`cursor-default` styling are gone along with the placeholder — a real, working link earns the same visual and interactive treatment as every other real CTA, not a diminished one.

**Inline, not a download.** `vercel.json` sets an explicit `Content-Disposition: inline` header on `/Arielle_Haryanto_Resume.pdf` specifically. Without it, some browsers (and Vercel's own default static-file handling in some cases) treat a linked PDF as a downloadable attachment rather than opening it in the browser's native PDF viewer — the goal here is the resume behaving like its own page (viewable at its own clean URL, shareable as a link), not a forced download. This header only takes effect on the actual Vercel deployment, not the local Vite dev server, since `vite dev`/`vite preview` don't read `vercel.json` at all — verifying this specific behavior requires checking the deployed site, not localhost. The PDF itself can be produced by any tool (Word, Google Docs export, Overleaf/LaTeX, Canva, etc.) — nothing about how it displays on the site depends on what authored it; this is purely a hosting/serving concern.

### Stat Bar (small component)
`src/components/StatBar.jsx` — a labeled horizontal bar (11px mono label + percentage, a 1.5px-tall `line/60` track filled to value% in the passed `colorClass`) for presenting a single research/survey datapoint. Used in Everwood's research-findings section (its "framing preference" breakdown: Media Library / Personal Journal / Social Platform). Square, no radius, matching the Borders-Not-Shadows flatness elsewhere.

### Sticker (signature accent)
A small circular "stamp" badge (`.sticker-badge`, 48px, dashed 2px border, rotated 9°, a simple line-drawn star) in the bottom-right corner of full-size Cover Placeholders, opt-in via the `sticker` prop. Reads as a physical stamp affixed to the page — a materials detail, not a cartoon sticker. No shadow (the dashed border alone carries the "affixed object" read without adding a fifth shadow exception).

### Entry Navigation (signature component)
`EntryNav` sits at the bottom of every case study (both the generic `CaseStudy` template and the bespoke `Everwood` page), offering "← previous entry" / "next entry →" cards computed from each project's position in `src/data/projects.js`. Each card sits on a solid `bg-cream` fill — not transparent — so the sitewide dot-grid texture doesn't show through and dilute the card's own edges; carries its own dog-ear fold (the same border-triangle trick as the Entry Card, mirrored to match its direction of travel); and picks up the target project's own accent color on hover, on both the title and the card's border. First/last entries only render the direction that exists — no dead-end arrow to nowhere.

### Section Tabs (signature component)
`SectionTabs`, mounted globally alongside the scroll ribbon, renders small file-index tabs ("Work", "About") fixed to the **left** edge of the viewport, flush against the Book Spine (`lg:` and up only — the ribbon already owns the right edge, and mobile has the nav for this). Each tab is a real index-tab shape — a `clip-path` corner cut at the top-left (`polygon(8px 0, 100% 0, 100% 100%, 0 100%, 0 8px)`), the notch facing the spine it grows out of — rather than the entry card's dog-ear fold; the two motifs read differently (a tab shape for navigation vs. a page-fold for content) and shouldn't be mixed. Filled `indigo-tint` at rest with an `indigo` label, inverting to solid `indigo` fill with `cream` text on hover/focus per the Inverse Hover rule — replacing an earlier `cream-card` (tan) fill that blended into the surrounding page and read as an unstyled smudge rather than a distinct tab, and put the tabs in the same indigo family as the Book Spine and Scroll Ribbon instead of a mismatched neutral. Links to the real `/work` / `/about` pages, same as the nav links.

**Appears only once the nav has scrolled out of view** (`IntersectionObserver` on the `<header>`, fading in/out via opacity + a small translate) — while the nav is on screen its own "work"/"about" links already do this job, so showing both at once would be redundant. `aria-hidden` and `tabIndex={-1}` are toggled alongside the visual state so it isn't keyboard-focusable while invisible.

### Cards (Entry / Project Card — photo-in-a-journal grid)
Entries moved from a stacked list of rows to a `grid sm:grid-cols-2` of small "photo" cards — each one reads as a print mounted into the journal, not a table row:
- **Tilt:** each card carries a small fixed rotation (`--card-rotate`, an alternating `[-1.5deg, 1deg, -1deg, 1.5deg]` sequence keyed by position — deliberate, not `Math.random()`, so a reload never looks different) via the `.entry-photo-card` CSS class. On hover/focus it settles to `rotate(0deg)` plus a 4px lift, 300ms `cubic-bezier(0.23, 1, 0.32, 1)` — picking the photo up to look at it straight. No-op under `prefers-reduced-motion`.
- **Photo-corner mounts:** four small L-shaped brackets (`border-t/l`, `border-t/r`, `border-b/l`, `border-b/r`, 2px, the card's accent color) sit just inside each corner of the cover image — a scrapbook photo-corner detail, done in hairline borders rather than a shape/shadow.
- **Pin:** see Entry Card Pin below — a solid accent-colored circle centered on the card's top edge, a second and independent accent from the corner mounts.
- **Page fold:** the existing dog-ear fold triangle stays, now anchored to the *card's own* top-right corner rather than the row's — the fold is the page holding the photo; the corner mounts are what's holding the photo to the page. Two related but distinct details, not a duplicate motif. The fold's hover-grow (16px → 20/22px) is built by scaling the whole border-triangle up with `transform: scale()` from the pinned corner (`origin-top-right`/`origin-top-left`), holding `border-width` fixed at its grown size throughout — not by animating `border-width`/`width`/`height` directly. A critique's mechanical detector caught the earlier version doing exactly that on both `ProjectCard.jsx` and `EntryNav.jsx`, a direct violation of the system's own "don't animate layout-triggering properties" rule; the transform-based version is visually identical at both ends of the transition.
- **Card surface:** `bg-cream` (lighter than the page's `paper-card` recesses), `border border-line`, generous bottom padding (`pb-6`) so it reads like a Polaroid's white strip beneath the image — no shadow at rest, matching the Borders-Not-Shadows Rule.
- **Content:** entry number + context line, serif title, optional draft label, two-line summary, tags, "Read entry →" — the same information as the old row, restacked to fit a card rather than a full-width line.

### Cover Placeholder (signature component)
An intentional "not yet" state for missing images: a `paper-card` surface with a faint diagonal hairline hatch (from the `line` token), a centered single-stroke image-frame icon, an 11px mono caption ("cover — coming soon"), and — opt-in via props — the washi-tape accent and the Sticker badge. A `hideTape` prop suppresses the tape strip specifically for the Entries grid cards, since those already carry their own signature accent (rotation + photo-corner mounts) — one scrapbook moment per surface, not two stacked on the same image. Case-study cover images keep the tape by default. Reads as a deliberate placeholder, never as a broken image.

**Accent theming.** The icon and caption take an optional `accent` prop (`accentText`/`accentBorder` maps) recoloring them to the page's own accent instead of the neutral `text-ink-faint` default — Everwood passes `accent="terracotta"`, 8dge and the generic `CaseStudy.jsx` template pass `accent="indigo"`, and `ProjectCard.jsx`'s Entries-grid thumbnails pass `project.accent ?? "indigo"`. A critique caught every un-accented instance (8dge's two case-study placeholders, plus three of the four Entries-grid cards — every project without a `project.accent` field in `projects.js` was silently falling through) failing WCAG AA: `text-ink-faint` on `cream-card` measures **3.56:1**, below the 4.5:1 floor for this 11px text. Everwood's terracotta-soft passes at 4.70:1 on the same background, which is why the bug went unnoticed on the one card that happened to have an explicit accent already. Fixed by adding an `indigo: "text-indigo"` entry to `accentText` (indigo DEFAULT measures 5.04:1 on `cream-card`; indigo-soft only reaches 4.08:1 and would still fail) and giving every un-accented call site an explicit `accent`. Any future project added to the Entries grid or a new case-study page needs an explicit `accent` wherever it renders a `CoverPlaceholder` — the neutral fallback is not contrast-safe on `cream-card` and should not be relied on silently.

**Real images.** An optional `image`/`imageAlt` prop pair renders a real `<img className="object-cover">` filling the box (the washi-tape and Sticker layers stay on top via `z-10`) instead of the hatched placeholder, falling back to the placeholder whenever `image` is falsy. A critique flagged that no code path existed anywhere to show a real cover photo — `projects.js` already carried a `cover` field on every project, but nothing read it, so dropping in a real screenshot once one exists would have needed new component work, not just an asset swap. `ProjectCard.jsx` and `CaseStudy.jsx` pass `image={project.cover}` through from the shared data model. `Everwood.jsx`/`EightDge.jsx`/`Rate.jsx` are bespoke pages that don't read `projects.js`, so their `CoverPlaceholder` calls take an `image` prop directly — Everwood and R'ATE both do now, on their hero cover slot (`public/images/everwood/cover.png`, `public/images/rate/ratecover.png`); `projects.js`'s own `cover` field for both also points at the same file so the Entries-grid thumbnail matches. 8dge's two placeholders never got real images before that case study went on hold; the code still supports them if it's ever brought back.

**When *not* to use `CoverPlaceholder`'s `image` prop.** `CoverPlaceholder` forces its content into a fixed `aspect-video` box via `object-cover`, which crops to fill and — critically — upscales whenever the box is larger than the image in its constraining dimension. This works well for genuine wide "cover" banners (Everwood's and R'ATE's `cover.png` are both native 1920×1080-ish, close to the box's own ratio, so no meaningful scaling happens). It actively hurts a multi-panel contact-sheet screenshot: Everwood's original `hi-fi.png` (883×821, near-square) and R'ATE's `ratehifi.png` (717×808, portrait) both got scaled up 1.4-1.75× and cropped top/bottom to fill the 16:9 box, which is exactly what produced the visible blur a later pass caught and fixed. The fix for both: drop `CoverPlaceholder` for these two images entirely and use a plain `<figure><img className="mx-auto max-w-2xl w-full h-auto" /><figcaption>...</figcaption></figure>` instead — natural aspect ratio preserved, and `max-w-2xl` (672px) caps the display width comfortably *under* both images' native width, so the browser only ever downscales, never upscales. **Before wiring any future screenshot into a `CoverPlaceholder` slot, check its natural dimensions against the ~1254×705 box the `aspect-video` class produces at full content width** — if the image's own aspect ratio is far from 16:9, or its native width is smaller than the box, reach for the plain-figure pattern instead of forcing it through the crop-and-fill treatment.

**Supporting images, inline.** Beyond the two `CoverPlaceholder` slots, a case study can drop a real image directly into its prose flow as a plain bordered `<figure>` (`border border-line`, natural aspect ratio via `w-full h-auto`, a `font-mono text-[11px] text-ink-faint` caption in a `figcaption` below a `border-t` divider) wherever a section has a real supporting visual and forcing it into the fixed `aspect-video` `CoverPlaceholder` shape would crop it awkwardly. Everwood uses this twice: the feed/discover screens in Overview, and the design-system reference sheet at the end of Design Decisions. Reach for this over another `CoverPlaceholder` when the image doesn't need the washi-tape/sticker treatment and isn't meant to read as *the* cover for that slot — a supporting exhibit, not a hero.

**Live prototype embed.** Everwood's "04 · prototype" section embeds the actual Figma prototype via `<iframe>` inside a `relative aspect-video border border-line` wrapper (`absolute inset-0 h-full w-full` on the iframe itself, so it scales with the container instead of carrying the embed's fixed 800×450 px), plus a plain "open in Figma ↗" link below using the same URL for anyone who'd rather view it full-size in its own tab. This is the site's first live, interactive (not just static-image) case-study artifact. Reuse the same aspect-ratio-wrapper technique for any future embedded prototype; keep the fallback link, since an iframe some visitors' browsers or network conditions might block shouldn't be the only way to reach the content.

**Affinity board (clustered sticky notes).** Everwood's research section renders its affinity map as a genuine clustered board, not a text list — six theme clusters in a `grid sm:grid-cols-2` layout, each a `border-l-2 border-terracotta-soft` rail (the same "connection" grammar the page's own blockquotes already use) with a tilted `bg-terracotta` header note pinned at the top (`-ml-8 -rotate-2`, overlapping the rail) and 2 raw-note stickies beneath it (`bg-terracotta-tint`/`bg-cream-card` alternating, each independently `rotate-1`/`-rotate-1`, `shadow-sm`), reading as an actual corkboard cluster rather than a bulleted summary. This replaced an even-shorter text-only version after the writer specifically asked for a Miro-style board with visible groupings — the rail is a deliberately simpler stand-in for hand-drawn connector lines: precise note-to-note arrows would need JS-measured coordinates or a canvas layer to stay accurate across breakpoints, while a rail is CSS-only and reads just as clearly as "these notes belong together" without the fragility. **Note text stays in the system's regular type (mono label + default body weight), not Caveat** — Everwood already carries 2 `MarginNote` instances plus the closing `StickyNote` before this board; extending the hand font to ~12 more small notes here would have diluted the "rare handwritten moment" the One-Hand Rule protects for real. Color/rotation/shadow alone carry the sticky-note identity, which happens to match how actual tools like Miro or FigJam render their own notes anyway — flat color, sans-serif, no handwriting. Note colors stay within Everwood's single earned accent (terracotta tint/soft/DEFAULT steps plus neutral `cream-card`) rather than reaching for a new hue for variety.

### Draft Text (signature component)
Marks unwritten copy honestly: a small paperclip icon plus an 11px uppercase mono "draft" label above italic `ink-soft` text. Used for Reneal's and R'ATE's case-study section bodies until real copy replaces it. Never presents unfinished content as finished, and never uses the literal word "Placeholder" inline with real-looking prose. The Skills section's About paragraph (`src/components/Skills.jsx`) used to be a `DraftText` instance; it now carries the writer's real, verbatim-sourced words and rendered as plain body prose instead — a critique flagged the standalone `/about` route as adding nothing beyond what Home already showed while that paragraph stayed unwritten, and the real text closes that gap. The **"tools reached for"** design/engineering lists directly beneath it stay at 5 items each rather than the sitewide 4-item chunking guideline — a critique flagged this too, but every item is a real, distinct skill (not a decision the visitor has to weigh, just a scannable list), and cutting one to hit the number exactly would delete a true fact to satisfy a soft heuristic. Left as-is on purpose; revisit only if a sixth real item needs adding.

### Navigation
- **Style:** bordered-bottom, ruled-paper header (`border-b border-line bg-ruled`, matching the Hero's texture), serif wordmark on the left, mono nav links on the right (13px, `ink-soft`, hover to `ink`).
- **States:** color transition plus the `.link-underline` wipe-in underline (see Hover & Emphasis Pass).
- **Tap targets:** the nav links and Footer's email/linkedin/github links carry `-my-2 py-2` — invisible padding that grows the clickable area to ~35.5px tall (up from ~19.5px bare text) without changing the row's visual footprint, since the negative margin cancels the padding's outward push. An audit flagged the un-padded originals as below the 44×44px touch-target guideline; this is a real improvement, not a full 44px, since the nav's visual density mattered more than hitting the number exactly on a text-only, non-primary nav. Fixed at the same time: the added padding pushes `.link-underline`'s `::after` (positioned `bottom: -2px` from the link's own box) away from the text by the padding amount, unless compensated — see the `.link-underline` utility entry for the `--link-underline-offset` variable that fixes this.
- **Mobile:** same single-row layout; no hamburger/collapse (the nav is only 3 items).

## Resilience

A hardening pass audited timer/observer cleanup, edge-case routing, keyboard navigation, and layout behavior under extreme content. Scoped to what actually applies to a static, backend-less portfolio — API-error handling, form validation, offline states, i18n/RTL, and rate limiting were all ruled out as not applicable per `PRODUCT.md`, not skipped by oversight.

- **Timer cleanup:** `TaglineRotator.jsx`'s rotation `useEffect` nests a 300ms `setTimeout` (the fade-swap delay) inside a 2200ms `setInterval`. Only the interval was cleared on cleanup or on hover-pause; the inner timeout could survive an unmount or pause mid-transition and still fire, flipping the visible tagline after the component thought it was paused. Fixed by tracking the timeout handle and clearing it alongside the interval.
- **`IntroCover.jsx`** had the same shape of bug at near-zero real impact: a nested `requestAnimationFrame` reassigned its own `raf` variable only for the outer frame, so the inner frame's callback (`setWrite(true)`) could theoretically outlive an unmount in the gap between the two frames. Fixed by reassigning `raf` inside the outer callback. `IntroCover` is a permanent App-root singleton that never actually unmounts in production (it renders `null` instead), so this was a correctness fix, not an observed bug.
- **`NotFound.jsx`** still had the old color-only link hover (`hover:border-indigo hover:text-indigo`) instead of the sitewide Inverse Hover pattern rolled out everywhere else — a page missed during that rollout since it's never reached by normal in-site navigation. Brought in line.
- **Edge-case routing verified:** unknown slugs (`/work/this-does-not-exist`) correctly fall through the `/work/:slug` → `CaseStudy.jsx` null-check to `<NotFound />`; wrong-case (`/work/Everwood`) and trailing-slash (`/work/everwood/`) variants resolve correctly (React Router's default case-insensitive matching), and the top-level `*` route catches everything else. No dead ends.
- **Keyboard navigation verified:** tab order on Home follows visual order exactly (wordmark → nav → hero CTAs → entry cards → footer links) with no traps and no skipped interactive elements; the resume placeholder pill is correctly excluded from tab order since it's non-interactive. Focus rings are visible on every stop tested.
- **Extreme-content resilience verified:** an injected multi-line, unbroken-word project title and an unusually long single-word tag both wrap within the entry card (`scrollWidth === clientWidth`, no overflow) rather than breaking the grid.
- **Narrow-width / zoom-adjacent behavior verified:** the Hero's decorative photo block (`hidden lg:block`) hides cleanly right at the `lg` breakpoint (1023px) with no partial-overlap zone against the headline; no horizontal overflow on a case-study page at that width either. (`document.body.style.zoom` was tried first as a zoom stand-in and produced a misleading overlap — that CSS property scales paint without shrinking `window.innerWidth`, so it doesn't reflow media queries the way real browser zoom does. Viewport-width resizing is the accurate stand-in; the zoom trick isn't.)

## Do's and Don'ts

### Do:
- **Do** keep Indigo to text, links, and small labels — never a large background fill.
- **Do** reach for Terracotta when a moment wants warmth or emphasis — it's a sitewide pop accent now, not locked to one entry.
- **Do** set every metadata/system label in Space Mono, uppercase where established, at 11px, tracked.
- **Do** separate content with 1px `line` borders rather than cards, shadows, or background-color blocks.
- **Do** treat journal motifs (entry numbers, margin notes, dog-ear fold, ruled paper, washi tape, paperclip, sticky note) as accents around the content; case-study sections use real headings and plain document hierarchy first.
- **Do** mark unfinished content with the Draft Text / Cover Placeholder pattern rather than shipping fabricated finished-looking copy.
- **Do** animate only `transform`, `opacity`, and `clip-path`; respect `prefers-reduced-motion` on any auto-playing or entrance motion.
- **Do** keep scrapbook touches (torn edges, tape, paperclip, sticky note) sparse and controlled — one signature moment per surface, materials-inspired rather than craft-table cute.
- **Do** keep the scroll-ribbon's position marker the same width as its track — a ribbon end, not a wider tag.
- **Do** reuse `.torn-edge-top` for future torn-paper seams rather than hand-writing a new jagged `clip-path` each time.
- **Do** style any future shadcn/Base UI component against this system's own tokens (`src/components/ui/`) — never import shadcn's default theme, default radius, or default shadows.
- **Do** let `.bg-dot-grid` on `<body>` be the site's only default texture; reach for `.bg-ruled` only in the places already documented as ruled, not as a second default.
- **Do** keep the Book Spine and Scroll Ribbon as the site's only two fixed viewport-edge elements — a matched pair, not a place to keep adding more fixed chrome.

### Don't:
- **Don't** introduce a third saturated color; route new emphasis through Indigo (structural) or Terracotta (pop).
- **Don't** add rounded corners above 4px to structural surfaces (sections, cards, dividers) — square, hairline-bordered edges are the system's signature.
- **Don't** use `transition: all` or animate layout-triggering properties like `height`.
- **Don't** let the field-journal conceit dictate case-study information architecture — it's the frame, not the structure.
- **Don't** reach for travel/passport iconography (flags, stamps, luggage tags, "countries visited") — that's the anti-reference this system deliberately moved away from.
- **Don't** use Caveat for more than one element per page, or for anything that must stay legible/functional.
