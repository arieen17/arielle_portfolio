# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary audience is hiring managers and recruiters at companies, screening candidates for product design or design-engineering roles. They land on the site to quickly evaluate whether to reach out — this is a fast-scan evaluation context, not a leisurely read.

## Product Purpose

A personal portfolio for Arielle Haryanto, a product designer and engineer. It exists to get a hiring manager to reach out. Success means a visitor can, within seconds, believe she can both design an interface and ship the code behind it.

## Positioning

The core differentiator is the design + engineering hybrid: she designs the interface and ships the code, rather than handing off between roles. This dual capability is the pitch the site is built to prove, not just state.

## Evidence on Hand

The three featured projects (Everwood, Reneal IEO, R'ATE) and their employer/client context, tags, and years in `src/data/projects.js` are real and fixed. Contact links (LinkedIn, GitHub, email) in `src/components/Hero.jsx` and `src/components/Footer.jsx` are real and fixed.

**8dge is on temporary hold, not deleted.** Pulled from the live site because it read as more of a software-engineering internship than product/UI-UX work, which is what this portfolio is positioned around. Its full case study still exists at `src/pages/case-studies/EightDge.jsx` and is factually complete and real — it's just unrouted (no `/work/8dge` route in `App.jsx`) and removed from `projects.js`, so it doesn't appear anywhere on the live site and that URL now 404s. Nothing about it was factually wrong; don't restore it without being asked, and don't delete the file either — it's a hold, not a rejection.

Reneal IEO is real, writer-supplied content (`src/pages/case-studies/Reneal.jsx`), covering an actively in-progress project (a nonprofit WordPress site being redesigned solo in Figma and rebuilt in Framer, started Sept 2025) — its own "status"/"what I'm learning" results framing exists specifically because the work isn't finished yet; do not backfill a "what shipped" claim until it actually ships. R'ATE is also real, writer-supplied content (`src/pages/case-studies/Rate.jsx`), sourced from the team's actual CS180: Software Engineering final report (UC Riverside, a 4-person team, Sept–Dec 2025, demoed at course end) — a food-rating app, not the "hiring platform for scaling startups" the placeholder data originally described; that placeholder was pure filler and has been fully replaced. Teammates' names are deliberately omitted from R'ATE's copy per an explicit request — describe the team by size/role only, never by name, without asking first. Everwood and R'ATE both have real images now. `public/images/everwood/` holds `cover.png` (marketing cover, used as both `projects.js`'s `cover` field and the page's own hero `CoverPlaceholder`), `hi-fi.png` (the full screen-flow sheet, rendered as a plain figure rather than the cropped cover slot — see DESIGN.md's note on why), `appcover.png` and "design system.png" (supporting inline images in Overview and Design Decisions), and `user personas.png` (the source for the transcribed Mark Ramos / Maria Gonzalez persona cards — the image itself isn't embedded, its content was transcribed into real HTML for legibility/responsiveness). Everwood's page also embeds the actual interactive Figma prototype (a real, writer-provided embed URL) as a live iframe, not a static image. `public/images/rate/` holds `ratecover.png` (marketing cover, same dual use as Everwood's), `ratehifi.png` (full screen flow, same plain-figure treatment as Everwood's `hi-fi.png` after the same upscale-blur fix), `lofi.png` (the low-fidelity wireframe sheet, inline in Design Decisions), and `draft.png` (the Beli/Pinterest/color-palette competitive-research reference, inline in Research). Cover/screenshot images are still missing for Reneal; `CoverPlaceholder` supports a real `image` prop for whenever screenshots exist for it too, so its cover renders the honest placeholder state until then. There is no tooling available to extract an image from a chat attachment into a project asset file directly — a screenshot only becomes usable once the writer saves the actual file into the repo (as happened for both Everwood and R'ATE, via their own `public/images/<slug>/` folders) and a path is wired in; sharing a reference image in chat alone isn't sufficient by itself. **Before wiring a new screenshot into either `CoverPlaceholder` cover slot, check its natural pixel dimensions first** — a multi-panel contact sheet with a native width or aspect ratio far from the slot's 16:9 box will get cropped and upscaled into visible blur; use the plain-figure pattern instead for anything that isn't a genuine wide banner image. The About paragraph (`src/components/Skills.jsx`) is real, writer-supplied copy, not a placeholder. `src/pages/CaseStudy.jsx` (the generic draft template) currently has no project assigned to it, since both Reneal and R'ATE graduated to bespoke pages — it remains in place for whatever the next draft project is.

## Product Principles

- Prove the design+engineering hybrid through the craft of the site itself, not just the copy claiming it.
- Never let unfinished content masquerade as finished; an honest "draft" state is preferred over fabricated case-study prose.
- Optimize for a fast, low-friction scan — a hiring manager should form a judgment within seconds, not minutes.
- Preserve the "field journal" visual identity as an accent and frame, not as the organizing structure for the work itself — the case-study content should read as a crisp professional document first.
