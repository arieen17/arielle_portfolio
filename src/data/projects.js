// Real project data. 8dge was pulled (SWE-internship-heavy, not product/UI-UX
// fit for this portfolio) — its case study stays at src/pages/case-studies/EightDge.jsx,
// unrouted, as a temporary hold rather than deleted.
export const projects = [
  {
    slug: "northstar",
    entry: "01",
    name: "Northstar",
    tagline: "AI-powered disaster response coordination",
    title: "Northstar: AI-powered disaster response coordination",
    context: "2026 · AI Tech Venture Challenge",
    summary:
      "A coordination platform that gives first responders unified, AI-prioritized information during a disaster's critical first 48 hours. Won 1st place overall.",
    tags: ["Product design", "AI/UX", "Figma Make"],
    year: "2026",
    draft: false,
    cover: "/images/northstar/northstarcover.png",
  },
  {
    slug: "everwood",
    entry: "02",
    name: "Everwood",
    tagline: "intergenerational story sharing",
    title: "Everwood: intergenerational story sharing",
    context: "2026 · Rice Designathon",
    summary:
      "A reciprocal story archive where elders and youth share memories, photos, and voice notes across generations. It breaks down language and comfort barriers along the way.",
    tags: ["Product design", "Social impact", "Accessibility"],
    year: "2026",
    accent: "terracotta",
    draft: false,
    cover: "/images/everwood/cover.png",
  },
  {
    slug: "reneal",
    entry: "03",
    name: "Reneal IEO",
    tagline: "nonprofit site redesign",
    title: "Reneal IEO: nonprofit site redesign",
    context: "2025 · Nonprofit serving educators",
    summary:
      "A nonprofit's WordPress site, redesigned in Figma and rebuilt in Framer: still in progress.",
    tags: ["UX", "UI", "Figma", "Framer"],
    year: "2025",
    draft: false,
    cover: "/images/reneal/cover.png",
  },
  {
    slug: "rate",
    entry: "04",
    name: "R'ATE",
    tagline: "a dish-level food rating app for UC Riverside",
    title: "R'ATE: a dish-level food rating app for UC Riverside",
    context: "2025 · CS180 Software Engineering",
    summary:
      "A food-rating app that lets UCR students rate individual dishes instead of whole restaurants, built with a 4-person team over a semester.",
    tags: ["UI/UX", "React Native", "Node.js"],
    year: "2025",
    draft: false,
    cover: "/images/rate/ratecover.png",
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);

export const getAdjacentProjects = (slug) => {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return { prev: null, next: null };
  return {
    prev: i > 0 ? projects[i - 1] : null,
    next: i < projects.length - 1 ? projects[i + 1] : null,
  };
};
