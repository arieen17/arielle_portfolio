import { Link } from "react-router-dom";
import { getAdjacentProjects } from "../data/projects";

const accentText = {
  terracotta: "group-hover:text-terracotta",
};

const accentBorder = {
  terracotta: "hover:border-terracotta-soft",
};

function NavCard({ project, direction }) {
  const accentClass = accentText[project.accent] ?? "group-hover:text-indigo";
  const borderClass = accentBorder[project.accent] ?? "hover:border-indigo";
  const isNext = direction === "next";

  return (
    <Link
      to={`/work/${project.slug}`}
      className={`group relative flex-1 bg-cream border border-line px-6 py-6 overflow-hidden transition-colors ${borderClass} ${
        isNext ? "text-right" : "text-left"
      }`}
    >
      {/* dog-ear fold, corner matches the direction of travel; grown via transform scale, not border-width, so the hover state never animates a layout property */}
      <span
        className={`pointer-events-none absolute top-0 w-0 h-0 border-t-[22px] border-t-cream-card shadow-sm scale-[0.7273] transition-transform duration-300 ease-out group-hover:scale-100 ${
          isNext
            ? "right-0 border-l-[22px] border-l-transparent origin-top-right"
            : "left-0 border-r-[22px] border-r-transparent origin-top-left"
        }`}
        aria-hidden="true"
      />
      <p className="font-mono text-[11px] uppercase tracking-wide text-ink-faint mb-2">
        {isNext ? (
          <>
            next entry{" "}
            <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transition-none">
              →
            </span>
          </>
        ) : (
          <>
            <span className="inline-block transition-transform duration-300 ease-out group-hover:-translate-x-1 motion-reduce:transition-none">
              ←
            </span>{" "}
            previous entry
          </>
        )}
      </p>
      <p
        className={`font-serif text-xl leading-snug text-ink transition-colors ${accentClass}`}
      >
        {project.name}
      </p>
      <p className="font-mono text-[11px] text-ink-faint mt-1">
        Entry {project.entry}
      </p>
    </Link>
  );
}

export default function EntryNav({ slug }) {
  const { prev, next } = getAdjacentProjects(slug);
  if (!prev && !next) return null;

  return (
    <nav
      aria-label="Journal entry navigation"
      className="max-w-content mx-auto px-6 md:px-10 pb-16 md:pb-20 flex flex-col sm:flex-row gap-4"
    >
      {prev ? <NavCard project={prev} direction="prev" /> : <div className="flex-1" />}
      {next ? <NavCard project={next} direction="next" /> : <div className="flex-1" />}
    </nav>
  );
}
