// Real project data. 8dge was pulled (SWE-internship-heavy, not product/UI-UX
// fit for this portfolio) — its case study stays at src/pages/case-studies/EightDge.jsx,
// unrouted, as a temporary hold rather than deleted. Reneal is on the same kind
// of hold: still genuinely in progress and the weakest entry as written, staying
// at src/pages/case-studies/Reneal.jsx until it has a real outcomes section to show.
export const projects = [
  {
    slug: "accesstransit",
    entry: "01",
    name: "AccessTransit",
    tagline: "an accessibility-aware transit journey planner",
    title: "AccessTransit: an accessibility-aware transit journey planner",
    context: "2026 · Solo case study",
    summary:
      "A journey planner for Bay Area transit riders with accessibility needs, built to answer not just whether a route is accessible, but whether it'll still be accessible by the time you get there.",
    tags: ["Product design", "UX/UI", "Applied AI"],
    year: "2026",
    draft: false,
    cover: "/images/able/extract-08.png",
    coverFit: "contain",
  },
  {
    slug: "northstar",
    entry: "02",
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
    coverFit: "contain",
  },
  {
    slug: "everwood",
    entry: "03",
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
