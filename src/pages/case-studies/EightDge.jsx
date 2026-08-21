import { Link } from "react-router-dom";
import CoverPlaceholder from "../../components/CoverPlaceholder";
import EntryNav from "../../components/EntryNav";
import MarginNote from "../../components/MarginNote";
import StickyNote from "../../components/StickyNote";

const designDecisions = [
  {
    title: "ERD before anything else",
    body: "The entity-relationship diagram came first, mapping facilities, vendors, courts, customers, and bookings before any screen was designed, so the data model was settled before the UI had to react to it.",
  },
  {
    title: "Conflict-free scheduling",
    body: "The core of the system: no two customers can book the same court and time slot, and vendors can block off their own availability without it silently colliding with an active booking.",
  },
  {
    title: "A cart-based booking flow",
    body: "Rather than confirming one slot at a time, customers can hold multiple court/time selections at once before checking out, closer to shopping for several items than filling out one form per booking. This was the hardest piece to get right.",
  },
  {
    title: "Full-stack ownership",
    body: "React on the front end, C# on the back end, architected and built end to end, from the ERD through the shipped system.",
  },
];

export default function EightDge() {
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
            ENTRY 02 · 2025 · 8DGE INTERNSHIP
          </p>
          <h1 className="font-serif text-4xl md:text-6xl leading-[0.98] max-w-2xl">
            8dge
          </h1>
          <p className="mt-4 text-lg md:text-xl text-ink-soft max-w-xl italic">
            a booking platform for sports facilities across Malaysia
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
              <p className="text-[14px] text-ink">Summer internship, June–Sept</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-1.5">
                team
              </p>
              <p className="text-[14px] text-ink">Solo, reporting to my manager</p>
            </div>
            <div className="max-w-[220px]">
              <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-1.5">
                my role
              </p>
              <p className="text-[14px] text-ink">ERD, UI/UX design &amp; full-stack build</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {["UI/UX", "React", "C#"].map((tag) => (
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
        className="w-full aspect-video border-x-0"
      />

      {/* 01 — Overview */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-16 border-b border-line grid md:grid-cols-[180px_1fr] gap-8 md:gap-10">
        <div>
          <h2 className="font-mono text-[11px] text-ink-faint normal-case">01 · overview</h2>
          <MarginNote accent="indigo" className="mt-8">
            A summer internship at 8dge
          </MarginNote>
        </div>
        <div className="max-w-2xl text-[16px] leading-relaxed text-ink-soft space-y-5">
          <p>
            8dge is a software solutions company based in Malaysia. I interned
            there over the summer of 2025, and spent it building a booking
            platform for sports facilities: courts, halls, and other
            bookable spaces across venues like malls and sports centers.
          </p>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-1.5">
              the problem
            </p>
            <p>
              Facility booking in Malaysia was fragmented: each venue tended
              to run its own outdated, separate system, with no single place
              for customers to browse or book across sport types and
              locations, and no shared tooling for the facilities themselves
              to manage it.
            </p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-1.5">
              the solution
            </p>
            <p>
              A unified booking platform with two sides: facility holders
              managing their own courts and availability, and customers
              booking across multiple sports and venues in one place.
            </p>
          </div>
        </div>
      </section>

      {/* 02 — Research */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-16 border-b border-line grid md:grid-cols-[180px_1fr] gap-8 md:gap-10">
        <div>
          <h2 className="font-mono text-[11px] text-ink-faint normal-case">
            02 · research &amp; requirements
          </h2>
          <MarginNote accent="indigo" className="mt-8">
            Spec-driven, not discovery-driven
          </MarginNote>
        </div>
        <div className="max-w-2xl text-[16px] leading-relaxed text-ink-soft space-y-6">
          <p>
            This project was requirements-driven rather than research-driven:
            8dge handed down the specification for what the platform
            needed to do. My own research layer was competitive: looking at
            existing booking platforms already live in Malaysia to understand
            the landscape I was designing into.
          </p>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-3">
              competitive landscape
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="border border-line p-4">
                <p className="font-serif text-lg mb-2">Courtsite</p>
                <p className="text-[13px] leading-relaxed mb-2">
                  An established Malaysian court-booking platform: the
                  closest existing comparison for this project.
                </p>
                <a
                  href="https://www.courtsite.my/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline font-mono text-[13px] text-indigo"
                >
                  courtsite.my ↗
                </a>
              </div>
              <div className="border border-line p-4">
                <p className="font-serif text-lg mb-2">The single-sport pattern</p>
                <p className="text-[13px] leading-relaxed">
                  Most other booking sites reviewed were built for one sport
                  only, badminton or pickleball most often, with no way to
                  book across sport types, venues, or multiple slots in a
                  single transaction. That gap was part of the case for a
                  unified system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Design decisions */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-16 border-b border-line grid md:grid-cols-[180px_1fr] gap-8 md:gap-10">
        <h2 className="font-mono text-[11px] text-ink-faint normal-case">
          03 · design &amp; build decisions
        </h2>
        <div className="max-w-2xl space-y-6">
          {designDecisions.map((decision, i) => (
            <div key={decision.title} className="grid grid-cols-[28px_1fr] gap-4">
              <p className="font-mono text-[11px] text-indigo pt-0.5">0{i + 1}</p>
              <div>
                <p className="font-serif text-lg mb-1">{decision.title}</p>
                <p className="text-[15px] leading-relaxed text-ink-soft">
                  {decision.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CoverPlaceholder
        label="high-fidelity screens"
        accent="indigo"
        className="w-full aspect-video border-x-0"
      />

      {/* 04 — Where AI fit in */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-16 border-b border-line grid md:grid-cols-[180px_1fr] gap-8 md:gap-10">
        <h2 className="font-mono text-[11px] text-ink-faint normal-case">
          04 · where ai fit in
        </h2>
        <div className="max-w-2xl text-[16px] leading-relaxed text-ink-soft">
          <p>
            The cart-based booking flow was the trickiest part of the system:
            holding multiple court and time-slot selections at once without
            letting them silently conflict with someone else's booking.
            Cursor helped work through that edge-case logic alongside the
            ERD, rather than replacing the design decisions underneath it.
          </p>
        </div>
      </section>

      {/* 05 — Results */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-16 grid md:grid-cols-[180px_1fr] gap-8 md:gap-10">
        <h2 className="font-mono text-[11px] text-ink-faint normal-case">
          05 · results &amp; next steps
        </h2>
        <div className="max-w-2xl text-[16px] leading-relaxed text-ink-soft space-y-8">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-2">
              what shipped
            </p>
            <p>
              The platform shipped and is still used as a base within 8dge
              today: the version built that summer is the foundation the
              company has continued building on since.
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-2">
              what came back
            </p>
            <p>
              Feedback was that it was well geared toward both customers and
              facility vendors. The open question that came back was scale:
              what it would take to support multiple independent vendors at
              once, rather than the single-vendor shape it was built around.
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-2">
              next steps
            </p>
            <p className="mb-3">
              The vendor-scaling question points at a real next phase:
              proposed directions, not built yet.
            </p>
            <ul className="list-disc list-outside pl-5 space-y-2 text-[14px]">
              <li>
                <span className="font-medium text-ink">Vendor-neutral facility discovery</span>: a
                marketplace layer where customers browse across many
                independent vendors, rather than one.
              </li>
              <li>
                <span className="font-medium text-ink">Self-serve vendor onboarding</span>, letting
                a new facility set up its own courts and availability
                without engineering involvement each time.
              </li>
              <li>
                <span className="font-medium text-ink">Per-vendor staff permissions</span>, since
                multiple vendors means multiple businesses, each needing its
                own admin access rather than shared credentials.
              </li>
              <li>
                <span className="font-medium text-ink">Vendor-side analytics</span>, surfacing
                booking and utilization data back to each facility, not just
                the customer-facing side of the system.
              </li>
              <li>
                <span className="font-medium text-ink">Per-vendor payment routing</span>: if several
                independent businesses sit behind one platform, payments
                likely need to split or route per vendor rather than one
                flat destination.
              </li>
              <li>
                <span className="font-medium text-ink">Revisiting the ERD</span> to make "vendor" a
                first-class, repeatable entity throughout the data model,
                not an assumed singular.
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-2">
              what I'd do differently
            </p>
            <p>
              I'd revisit the ERD more continuously throughout the build,
              rather than treating it as a one-time step before design
              began, checking it against the system's real pathways as new
              edge cases came up along the way.
            </p>
          </div>
        </div>
      </section>

      <StickyNote accent="indigo">
        "The hardest problems weren't the screens, they were the data
        model underneath them. 8dge is where I learned to treat the ERD
        as a living document, not a step you finish before the real work
        starts."
      </StickyNote>

      <EntryNav slug="8dge" />
    </article>
  );
}
