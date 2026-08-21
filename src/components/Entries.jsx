import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import { projects } from "../data/projects";

// Small, controlled tilt per card — an alternating scatter, not randomized,
// so a page reload never looks different twice.
const rotations = [-1.5, 1, -1, 1.5];

export default function Entries() {
  return (
    <section id="work" className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28">
      <Reveal>
        <div className="mb-10 md:mb-12">
          <p className="font-mono text-[11px] text-indigo tracking-[0.16em] mb-4">
            FIELD NOTES · SELECTED WORK
          </p>
          <h2 className="font-serif text-4xl md:text-5xl">
            <span className="entries-underline">Entries</span>
          </h2>
        </div>
      </Reveal>
      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12 md:gap-x-10 md:gap-y-14">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 70} className="h-full">
            <ProjectCard
              project={project}
              rotate={rotations[i % rotations.length]}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
