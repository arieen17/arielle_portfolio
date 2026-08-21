# Arielle Haryanto — Portfolio (Field Journal theme)

React + Vite + Tailwind CSS rebuild of the portfolio, themed around a "field journal" —
projects presented as dated, numbered journal entries.

## Stack
- React 19 + Vite
- Tailwind CSS (custom theme in `tailwind.config.js`: cream/ink/plum palette, plus per-case-study accents)
- React Router (`/`, `/work/:slug`)
- Fonts: Fraunces (headlines), Work Sans (body), IBM Plex Mono (tags/labels)

## Getting started
```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
```

## Structure
```
src/
  components/   Nav, Hero, ProjectCard, Skills, Footer
  pages/        Home, CaseStudy (template for all 4 projects)
  data/         projects.js — placeholder content, swap in real copy + images
  index.css     Tailwind + ruled-paper texture utility
tailwind.config.js  design tokens: cream / ink / plum / terracotta, font families
```

## What's placeholder right now
- Case study copy (Context / Process / Outcome sections) — currently generic placeholder text
- Project cover images — currently gray placeholder boxes with a label
- About/skills blurb text
- Only one case study template exists; it's shared by all 4 projects via `/work/:slug` —
  duplicate/extend once real content is ready, or keep it as one dynamic template and just
  fill in `src/data/projects.js`

## Next steps
- Swap placeholder content + images per project in `src/data/projects.js`
- Build out `reneal` and `talentbridge`-style variations if content differs structurally
- Consider adding page transitions / scroll reveals once content is final
