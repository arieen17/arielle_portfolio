import { Link, useParams } from "react-router-dom";
import { getProject } from "../data/projects";
import CoverPlaceholder from "../components/CoverPlaceholder";
import DraftText from "../components/DraftText";
import EntryNav from "../components/EntryNav";
import NotFound from "./NotFound";

const sections = [
  {
    tab: "Context",
    body: "Set up the problem: who the client/team was, what they needed, and why it mattered.",
  },
  {
    tab: "Process",
    body: "Walk through research, key decisions, and any constraints worth naming.",
  },
  {
    tab: "Outcome",
    body: "What shipped, and what it changed for users or the business.",
  },
];

export default function CaseStudy() {
  const { slug } = useParams();
  const project = getProject(slug);

  if (!project) return <NotFound />;

  return (
    <article>
      <header className="border-y border-line bg-ruled">
        <div className="max-w-content mx-auto px-6 md:px-10 pt-8 pb-16 md:pt-10 md:pb-20">
          <Link
            to="/work"
            className="link-underline font-mono text-[13px] text-ink-faint hover:text-indigo transition-colors"
          >
            ← back to journal
          </Link>
          <p className="font-mono text-[11px] text-indigo-soft mb-4 mt-10">
            ENTRY {project.entry} · {project.context}
          </p>
          <h1 className="font-serif text-4xl md:text-6xl leading-[0.98] max-w-2xl">
            {project.name}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-ink-soft max-w-xl italic">
            {project.tagline}
          </p>
          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-5 max-w-2xl">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-1.5">
                year
              </p>
              <p className="text-[14px] text-ink">{project.year}</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[11px] px-2.5 py-1 border border-indigo/30 text-indigo rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      <CoverPlaceholder
        label="cover image"
        accent="indigo"
        image={project.cover}
        imageAlt={project.cover ? `${project.name} cover` : ""}
        className="w-full aspect-video border-x-0"
      />

      {sections.map((section, i) => (
        <div
          key={section.tab}
          className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-16 border-b border-line last:border-b-0 grid md:grid-cols-[180px_1fr] gap-8 md:gap-10"
        >
          <h2 className="font-mono text-[11px] text-ink-faint normal-case">
            0{i + 1} · {section.tab.toLowerCase()}
          </h2>
          <div className="max-w-2xl text-[16px] leading-relaxed">
            <DraftText>{section.body}</DraftText>
          </div>
        </div>
      ))}

      <div className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20">
        <DraftText className="max-w-xl">
          <span className="font-serif not-italic text-xl">
            A small aside on what she learned or would try differently next
            time.
          </span>
        </DraftText>
      </div>

      <EntryNav slug={project.slug} />
    </article>
  );
}
