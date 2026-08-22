import { Link } from "react-router-dom";
import CoverPlaceholder from "./CoverPlaceholder";

const accentClasses = {
  terracotta: {
    number: "text-terracotta",
    title: "group-hover:text-terracotta",
    link: "text-terracotta",
    corner: "border-terracotta-soft",
    pin: "bg-terracotta",
  },
};

const defaultAccent = {
  number: "text-indigo",
  title: "group-hover:text-indigo",
  link: "text-indigo",
  corner: "border-indigo",
  pin: "bg-indigo",
};

export default function ProjectCard({ project, rotate = 0 }) {
  const accent = accentClasses[project.accent] ?? defaultAccent;

  return (
    <Link
      to={`/work/${project.slug}`}
      className="entry-photo-card group relative flex h-full flex-col bg-cream border border-line p-3 pb-6"
      style={{ "--card-rotate": `${rotate}deg` }}
    >
      {/* page-fold, top-right corner of the card itself; grown via transform scale, not border-width, so the hover state never animates a layout property */}
      <span
        className="pointer-events-none absolute top-0 right-0 w-0 h-0 border-t-[20px] border-l-[20px] border-t-cream-card border-l-transparent shadow-sm origin-top-right scale-[0.8] transition-transform duration-300 ease-out group-hover:scale-100"
        aria-hidden="true"
      />

      {/* pin, holding the card to the page */}
      <span
        className={`absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full shadow-sm ring-1 ring-black/10 ${accent.pin}`}
        aria-hidden="true"
      />

      <div className="relative">
        <CoverPlaceholder
          hideTape
          accent={project.accent ?? "indigo"}
          image={project.cover}
          imageAlt={project.cover ? `${project.name} cover` : ""}
          imageFit={project.coverFit}
          className="w-full aspect-[4/3]"
        />
        {/* photo-corner mounts, like a print pinned into an album */}
        <span className={`absolute top-1 left-1 w-3.5 h-3.5 border-t-2 border-l-2 ${accent.corner}`} aria-hidden="true" />
        <span className={`absolute top-1 right-1 w-3.5 h-3.5 border-t-2 border-r-2 ${accent.corner}`} aria-hidden="true" />
        <span className={`absolute bottom-1 left-1 w-3.5 h-3.5 border-b-2 border-l-2 ${accent.corner}`} aria-hidden="true" />
        <span className={`absolute bottom-1 right-1 w-3.5 h-3.5 border-b-2 border-r-2 ${accent.corner}`} aria-hidden="true" />
      </div>

      <div className="flex-1 flex flex-col pt-4 px-1">
        <div className="flex items-center gap-2 mb-1.5 font-mono text-[11px] text-ink-faint">
          <span className={accent.number}>{project.entry}</span>
          <span aria-hidden="true">·</span>
          <span>{project.context}</span>
        </div>
        <h3
          className={`font-serif text-[19px] leading-snug transition-[color,font-weight] group-hover:font-medium ${accent.title}`}
        >
          {project.title}
        </h3>
        {project.draft && (
          <p className="font-mono text-[11px] uppercase tracking-wide text-ink-faint mt-1.5">
            draft
          </p>
        )}
        <p className="text-[15px] text-ink-soft leading-relaxed mt-2">
          {project.summary}
        </p>
        <div className="flex-1" />
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-3">
          {project.tags.map((tag, i) => (
            <span key={tag} className="flex items-center gap-2">
              <span className="font-mono text-[11px] text-ink-soft">{tag}</span>
              {i < project.tags.length - 1 && (
                <span className="text-line" aria-hidden="true">
                  ·
                </span>
              )}
            </span>
          ))}
        </div>
        <span
          className={`inline-flex items-center gap-1 font-mono text-[13px] mt-3 ${accent.link}`}
        >
          <span className="relative">
            Read entry
            <span
              className="pointer-events-none absolute left-0 -bottom-0.5 h-px w-full bg-current origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
              aria-hidden="true"
            />
          </span>
          <span
            className="transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transition-none"
            aria-hidden="true"
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
