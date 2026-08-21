import { Link } from "react-router-dom";
import CoverPlaceholder from "../../components/CoverPlaceholder";
import EntryNav from "../../components/EntryNav";
import MarginNote from "../../components/MarginNote";
import StickyNote from "../../components/StickyNote";

export default function Reneal() {
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
            ENTRY 02 · 2025 · RENEAL IEO
          </p>
          <h1 className="font-serif text-4xl md:text-6xl leading-[0.98] max-w-2xl">
            Reneal IEO
          </h1>
          <p className="mt-4 text-lg md:text-xl text-ink-soft max-w-xl italic">
            nonprofit site redesign
          </p>
          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-5 max-w-2xl">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-1.5">
                year
              </p>
              <p className="text-[14px] text-ink">2025</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-1.5">
                format
              </p>
              <p className="text-[14px] text-ink">Ongoing, started Sept 2025</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-1.5">
                team
              </p>
              <p className="text-[14px] text-ink">Solo</p>
            </div>
            <div className="max-w-[220px]">
              <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-1.5">
                my role
              </p>
              <p className="text-[14px] text-ink">Research, UI design &amp; Figma → Framer build</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {["UX", "UI", "Figma", "Framer"].map((tag) => (
              <span
                key={tag}
                className="font-mono text-[11px] px-2.5 py-1 border border-indigo/30 text-indigo rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-8 text-[17px] leading-relaxed text-ink font-medium max-w-2xl">
            A solo project, still in progress: redesigning a nonprofit's
            outdated WordPress site in Figma, rebuilding it in Framer, and
            learning to translate board feedback into concrete design
            decisions along the way.
          </p>
        </div>
      </header>

      <CoverPlaceholder
        label="cover image"
        accent="indigo"
        className="w-full aspect-video border-x-0"
      />

      {/* 01 — Overview */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-16 border-b border-line grid md:grid-cols-[180px_1fr] gap-8 md:gap-10">
        <div>
          <h2 className="font-mono text-[11px] text-ink-faint normal-case">01 · overview</h2>
          <MarginNote accent="indigo" className="mt-8">
            IT support for schools in developing countries
          </MarginNote>
        </div>
        <div className="max-w-2xl text-[16px] leading-relaxed text-ink-soft space-y-5">
          <p>
            Reneal International Education Outreach (Reneal IEO) is a
            nonprofit that provides technology support, IT expertise,
            computer hardware and software, and learning resources to
            students, parents, teachers, and school administrators, aiming
            to expand education opportunities in schools in developing
            countries.
          </p>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-1.5">
              the problem
            </p>
            <p>
              Reneal's site was still running on WordPress, built years
              earlier: a dense blue-and-green template, a stock hero photo
              carrying its caption in a dark overlay box, and a footer
              split across several disconnected blocks. It needed a full
              redesign, and a move off WordPress entirely.
            </p>
          </div>
        </div>
      </section>

      {/* 02 — Process */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-16 border-b border-line grid md:grid-cols-[180px_1fr] gap-8 md:gap-10">
        <div>
          <h2 className="font-mono text-[11px] text-ink-faint normal-case">
            02 · process
          </h2>
          <MarginNote accent="indigo" className="mt-8">
            "More modern" was the recurring note
          </MarginNote>
        </div>
        <div className="max-w-2xl text-[16px] leading-relaxed text-ink-soft space-y-5">
          <p>
            Two threads ran alongside each other: looking at how other
            modern nonprofits present themselves online, and sitting down
            with the Reneal board directly to understand what they wanted
            the new site to say.
          </p>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-1.5">
              what the board wanted
            </p>
            <p>
              A more modern look and feel, and a defined color concept to
              replace the old site's saturated, uncoordinated palette.
            </p>
          </div>
        </div>
      </section>

      {/* 03 — Where it stands */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-16 grid md:grid-cols-[180px_1fr] gap-8 md:gap-10">
        <h2 className="font-mono text-[11px] text-ink-faint normal-case">
          03 · where it stands
        </h2>
        <div className="max-w-2xl text-[16px] leading-relaxed text-ink-soft space-y-8">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-2">
              status
            </p>
            <p>
              Still in progress. Design and build are both being handled
              solo, moving the site from WordPress into Figma and Framer.
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-2">
              what I'm learning
            </p>
            <p>
              Working directly with stakeholders, in this case the board,
              has been its own kind of design work: understanding what
              they picture when they say "modern," and explaining the
              reasoning behind a design choice clearly enough that it
              actually lands.
            </p>
          </div>
        </div>
      </section>

      <StickyNote accent="indigo">
        "Working with a board for the first time taught me almost as much
        as the redesign itself: understanding what people mean when they
        say 'modern,' and learning to explain a design choice clearly
        enough that it actually lands."
      </StickyNote>

      <EntryNav slug="reneal" />
    </article>
  );
}
