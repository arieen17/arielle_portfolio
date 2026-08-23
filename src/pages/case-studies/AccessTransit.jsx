import { Link } from "react-router-dom";
import CoverPlaceholder from "../../components/CoverPlaceholder";
import EntryNav from "../../components/EntryNav";
import MarginNote from "../../components/MarginNote";
import StickyNote from "../../components/StickyNote";

const insights = [
  {
    n: "01",
    headline:
      "Riders don't need accessible routes. They need confidence a route stays accessible.",
    evidence:
      "Bendix's compounding elevator failures were each individually \"accessible\" on paper. The trip still failed.",
    implication: "Show reliability over time, not a binary accessible/not-accessible flag.",
  },
  {
    n: "02",
    headline:
      "Some barriers are behavioral, not infrastructural, and infrastructure-status tools can't see them.",
    evidence:
      "Missed stop announcements and audio-only alerts have nothing to do with elevator uptime.",
    implication:
      "A broader taxonomy than \"physical access,\" and a path for rider-reported issues alongside agency data.",
  },
  {
    n: "03",
    headline:
      "The extra cross-checking riders do is unpaid labor, and it's invisible to anyone who doesn't have to do it.",
    evidence:
      "A non-disabled rider checks one app. A rider with accessibility needs routinely checks two or three, as a matter of course.",
    implication:
      "Success is measured by how much manual checking the product removes, not how much data it shows.",
  },
  {
    n: "04",
    headline: "The in-journey rider and the remote caregiver trust different signals.",
    evidence:
      "A caregiver can't personally adapt mid-trip, so live status alone means little without a track record to weigh it against.",
    implication:
      "Distinct trust signals for in-journey riders (live status) versus remote planners (reliability history).",
  },
  {
    n: "05",
    headline: "Individual complaints are pattern-blind at the agency level.",
    evidence:
      "Five unrelated-looking reports at one station over a month don't surface as one systemic issue until someone happens to notice.",
    implication:
      "AI pattern detection across reports, flagged for a human to verify, not another single-ticket queue.",
  },
];

const personas = [
  {
    role: "Primary",
    name: "The Independent Rider",
    quote:
      "When I'm planning a trip, I want to know every part of the journey is accessible and reliable, so I can travel without unexpected barriers.",
  },
  {
    role: "Secondary",
    name: "The Caregiver",
    quote:
      "When I'm arranging a trip for someone I'm responsible for, I want to trust the plan will hold without me there to adapt it.",
  },
  {
    role: "System user",
    name: "The Transit Accessibility Manager",
    quote:
      "When accessibility problems occur repeatedly, I want to identify the pattern automatically, so my team can prioritize repairs.",
  },
];

const riderMVP = [
  "Accessibility profile",
  "AI journey planning & recommendation",
  "“Why this route?” explanation",
  "Live disruption handling",
  "Issue reporting",
];

const agencyMVP = [
  "Accessibility dashboard & issue map",
  "Issue detail view",
  "AI pattern detection & prioritization",
];

const flowSteps = [
  { src: "/images/able/extract-01.png", caption: "1 · on track" },
  { src: "/images/able/extract-02.png", caption: "2 · disruption detected" },
  { src: "/images/able/extract-03.png", caption: "3 · alternative + why" },
  { src: "/images/able/extract-04.png", caption: "4 · confirmed" },
];

const aiTable = [
  {
    capability: "Route reasoning",
    output: "One recommended route, not a ranked list",
    control: "Rider can request alternatives or edit their profile",
  },
  {
    capability: "Disruption analysis",
    output: "Impact assessment + alternative route",
    control: "Rider chooses whether to accept",
  },
  {
    capability: "Report categorization",
    output: "Suggested issue category",
    control: "Rider can edit before submitting",
  },
  {
    capability: "Pattern detection",
    output: "Candidate systemic issue, flagged",
    control: "Agency staff verifies before any action",
  },
];

const findings = [
  {
    title: "The “Why this route?” link was easy to miss",
    finding:
      "Two of five participants nearly skipped the core trust mechanism entirely, because it read as a plain text link beneath the route card.",
    change:
      "Converted it into a bordered, button-styled affordance attached directly to the route card. Both participants noticed it unprompted in a follow-up pass.",
  },
  {
    title: "A bare reliability percentage lacked context",
    finding:
      "“71% uptime” told one participant a number, not whether that number was good or bad.",
    change:
      "Paired the percentage with a plain-language qualifier, “below average reliability for a BART elevator,” and follow-up participants correctly read station risk on the first pass.",
  },
];

const swatches = [
  { name: "ink", hex: "#1E2A3A" },
  { name: "primary", hex: "#3E6690" },
  { name: "mint", hex: "#7FB99A" },
  { name: "coral", hex: "#D97A5F" },
  { name: "bg", hex: "#EAF2F8" },
];

const outcomes = [
  { label: "North star", value: "Successful accessible journeys completed" },
  { label: "Product signal", value: "Manual cross-checking reduction (Insight 3's real cost)" },
  { label: "Guardrail", value: "AI recommendation error rate" },
];

export default function AccessTransit() {
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
            ENTRY 01 · 2026 · SOLO CASE STUDY
          </p>
          <h1 className="font-serif text-4xl md:text-6xl leading-[0.98] max-w-2xl">
            AccessTransit
          </h1>
          <p className="mt-4 text-lg md:text-xl text-ink-soft max-w-xl italic">
            an accessibility-aware transit journey planner
          </p>
          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-5 max-w-2xl">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-1.5">
                year
              </p>
              <p className="text-[14px] text-ink">2026</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-1.5">
                format
              </p>
              <p className="text-[14px] text-ink">Solo case study, research through working code</p>
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
              <p className="text-[14px] text-ink">Research, strategy, UX/UI design &amp; front-end engineering</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Product design", "UX/UI", "Applied AI"].map((tag) => (
              <span
                key={tag}
                className="font-mono text-[11px] px-2.5 py-1 border border-indigo/30 text-indigo rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-8 text-[17px] leading-relaxed text-ink font-medium max-w-2xl">
            An accessibility-aware journey planner for Bay Area transit, built
            to answer a question no existing app really does: not just
            whether a route is accessible, but whether it will still be
            accessible by the time you get there. SF Bay Area, BART / Muni.
            Mobile app + agency web dashboard.
          </p>
        </div>
      </header>

      <CoverPlaceholder
        label="cover image"
        accent="indigo"
        image="/images/able/extract-08.png"
        imageAlt="Final high-fidelity mobile screens and the agency web dashboard, side by side, in the Soft Signal design system"
        className="w-full max-w-sm mx-auto aspect-[1100/2037] my-10"
      />

      {/* 01 — The problem */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-16 border-b border-line grid md:grid-cols-[180px_1fr] gap-8 md:gap-10">
        <div>
          <h2 className="font-mono text-[11px] text-ink-faint normal-case">01 · the problem</h2>
          <MarginNote accent="indigo" className="mt-8">
            Not accessible or not, but accessible right now
          </MarginNote>
        </div>
        <div className="max-w-2xl text-[16px] leading-relaxed text-ink-soft space-y-5">
          <p>
            Transit agencies track elevator status, step-free routes,
            platform gaps. That information exists. What doesn't exist is a
            system built around how a rider with accessibility needs actually
            decides whether a journey is possible, and what to do when it
            stops being possible halfway through.
          </p>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-1.5">
              business problem
            </p>
            <p>
              Accessibility data is scattered across five-plus disconnected
              channels per agency.
            </p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-1.5">
              user problem
            </p>
            <blockquote className="border-l border-indigo/40 pl-4 italic font-serif text-lg">
              "I don't just need the fastest route. I need to know I can
              complete the journey."
            </blockquote>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-1.5">
              AI opportunity
            </p>
            <p>
              Reconcile fragmented, inconsistent data into personalized,
              explainable recommendations. For a rider with accessibility
              needs, a route isn't binary, accessible or not. It's accessible
              right now, for this trip, under these conditions, and that
              distinction is where most existing transit apps fail.
            </p>
          </div>
        </div>
      </section>

      {/* 02 — Research */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-16 border-b border-line grid md:grid-cols-[180px_1fr] gap-8 md:gap-10">
        <div>
          <h2 className="font-mono text-[11px] text-ink-faint normal-case">02 · research</h2>
          <MarginNote accent="indigo" className="mt-8">
            Grounded in real accounts, not assumptions
          </MarginNote>
        </div>
        <div className="max-w-2xl text-[16px] leading-relaxed text-ink-soft space-y-5">
          <p>
            Before touching a single wireframe, I researched the actual Bay
            Area system this would need to work within: BART's published
            elevator-outage protocol, SFMTA's complaint process, and, most
            importantly, real accounts from disabled riders and advocates,
            on the record.
          </p>
          <div>
            <blockquote className="border-l border-indigo/40 pl-4 italic font-serif text-lg">
              "I sat in my wheelchair at Powell Station wondering if the
              elevator doors would open at all. They didn't."
            </blockquote>
            <p className="font-mono text-[11px] text-ink-faint mt-2">
              Paul Bendix, wheelchair user, describing a rush-hour BART
              commute in a first-person account for the SF Examiner
            </p>
          </div>
          <p>
            Bendix described backtracking between three separate downtown
            BART stations in one trip before giving up and rolling down
            Market Street. Separately, the Powell St BART/Muni elevator sat
            broken from 2001 until a 2024 federal ADA settlement finally
            forced repairs, more than two decades. Transbay Coalition
            organizer Carter Lavin put it plainly: "a broken elevator is a
            choice."
          </p>
          <p>
            Five to eight interviews are typical for a portfolio timeline. I
            couldn't recruit real participants in the time available, so I
            ran discussion-guide interviews as clearly disclosed synthetic
            sessions, built directly on top of these real accounts rather
            than invented from scratch, then affinity-mapped the results.
          </p>
          <figure className="border border-line">
            <img
              src="/images/able/extract-00.png"
              alt="Affinity map clustering research observations into four themes: accessibility information, reliability, planning, and trust"
              className="w-full h-auto"
            />
            <figcaption className="font-mono text-[11px] text-ink-faint px-4 py-3 border-t border-line">
              Exhibit A · affinity map, seven interviews clustered into four themes
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 03 — Key insights */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-16 border-b border-line grid md:grid-cols-[180px_1fr] gap-8 md:gap-10">
        <div>
          <h2 className="font-mono text-[11px] text-ink-faint normal-case">03 · key insights</h2>
          <MarginNote accent="indigo" className="mt-8">
            Five insights, five consequences
          </MarginNote>
        </div>
        <div className="max-w-2xl space-y-4">
          {insights.map((item) => (
            <div key={item.n} className="border border-line bg-cream p-4">
              <div className="flex gap-3">
                <span className="font-mono text-[13px] text-indigo font-medium shrink-0">
                  {item.n}
                </span>
                <div>
                  <p className="text-[15px] text-ink font-medium">{item.headline}</p>
                  <p className="text-[14px] text-ink-soft leading-relaxed mt-1.5">
                    {item.evidence}
                  </p>
                  <p className="text-[13px] text-ink-soft leading-relaxed mt-1.5">
                    <span className="font-medium text-ink">Implication:</span> {item.implication}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 04 — Personas & jobs to be done */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-16 border-b border-line grid md:grid-cols-[180px_1fr] gap-8 md:gap-10">
        <div>
          <h2 className="font-mono text-[11px] text-ink-faint normal-case">
            04 · personas &amp; jobs to be done
          </h2>
          <MarginNote accent="indigo" className="mt-8">
            Three jobs, not five demographics
          </MarginNote>
        </div>
        <div className="max-w-2xl">
          <p className="text-[16px] leading-relaxed text-ink-soft mb-6">
            Each persona represents a distinct job, not just a distinct
            disability.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {personas.map((p) => (
              <div key={p.name} className="border border-line bg-cream p-4">
                <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-2">
                  {p.role}
                </p>
                <p className="font-serif text-lg leading-snug mb-2">{p.name}</p>
                <p className="font-hand text-lg text-indigo-soft leading-snug">
                  "{p.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — Product strategy & the system */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-16 border-b border-line grid md:grid-cols-[180px_1fr] gap-8 md:gap-10">
        <div>
          <h2 className="font-mono text-[11px] text-ink-faint normal-case">
            05 · product strategy &amp; the system
          </h2>
          <MarginNote accent="indigo" className="mt-8">
            Trimmed the MVP without cutting the story
          </MarginNote>
        </div>
        <div className="max-w-2xl text-[16px] leading-relaxed text-ink-soft space-y-6">
          <p>
            An honest MVP list ran to seven rider features and five agency
            features. I trimmed it to five and three, merging rather than
            cutting, so every job to be done and all three core flows below
            are still covered end to end, but at a scope a portfolio
            timeline could actually finish at real quality instead of
            skimming twelve features shallowly.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-2">
                rider MVP
              </p>
              <ul className="list-disc list-outside pl-4 space-y-1.5 text-[14px]">
                {riderMVP.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-2">
                agency MVP
              </p>
              <ul className="list-disc list-outside pl-4 space-y-1.5 text-[14px]">
                {agencyMVP.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <p>
            The loop that matters most: a rider's report becomes agency
            pattern data, becomes a prioritized fix, becomes a resolution
            notice back to the riders affected, closing a loop that today
            dead-ends at a ticket number.
          </p>
        </div>
      </section>

      {/* 06 — Information architecture */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-16 border-b border-line grid md:grid-cols-[180px_1fr] gap-8 md:gap-10">
        <div>
          <h2 className="font-mono text-[11px] text-ink-faint normal-case">
            06 · information architecture
          </h2>
          <MarginNote accent="indigo" className="mt-8">
            Organized around the moment
          </MarginNote>
        </div>
        <div className="max-w-2xl text-[16px] leading-relaxed text-ink-soft space-y-6">
          <p>
            Mobile IA separates planning from being mid-journey, since
            Insight 1 showed those are genuinely different mental states
            with different needs. Web IA is flat and dashboard-first, since
            the Accessibility Manager's job is breadth, not navigation
            depth.
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-3">
                mobile
              </p>
              <ul className="font-mono text-[13px] text-ink-soft space-y-2">
                <li>Home</li>
                <li>Plan → Route options → Why this route?</li>
                <li>Journey (live) → Alert → Alternatives</li>
                <li>Report → Type → Location → Description</li>
                <li>Profile → Accessibility settings</li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-3">
                web (agency)
              </p>
              <ul className="font-mono text-[13px] text-ink-soft space-y-2">
                <li>Dashboard</li>
                <li className="pl-4">→ Overview</li>
                <li className="pl-4">→ Issue map</li>
                <li className="pl-4">→ Issue detail</li>
                <li className="pl-4">→ AI-detected patterns</li>
                <li className="pl-4">→ Prioritization queue</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 07 — Core flows */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-16 border-b border-line grid md:grid-cols-[180px_1fr] gap-8 md:gap-10">
        <div>
          <h2 className="font-mono text-[11px] text-ink-faint normal-case">07 · core flows</h2>
          <MarginNote accent="indigo" className="mt-8">
            The hardest interaction, first
          </MarginNote>
        </div>
        <div className="max-w-2xl text-[16px] leading-relaxed text-ink-soft space-y-6">
          <p>
            Three flows matter most: Plan, Disruption, and Report → Resolve.
            Disruption is the one that proves the product's value, it's the
            direct answer to Bendix's real story, so it's the one I
            prototyped and tested first, before any visual design pass.
          </p>
          <div className="space-y-3">
            <div className="border border-line bg-cream p-4">
              <p className="text-[14px]">
                <span className="font-medium text-ink">Flow A, Plan</span> ·
                destination → one AI-recommended route → why this route →
                start journey
              </p>
            </div>
            <div className="border border-line bg-cream p-4">
              <p className="text-[14px]">
                <span className="font-medium text-ink">Flow B, Disruption</span> ·
                outage detected → AI impact assessment → one alternative,
                with reasoning → confirm → continue
              </p>
            </div>
            <div className="border border-line bg-cream p-4">
              <p className="text-[14px]">
                <span className="font-medium text-ink">Flow C, Report → Resolve</span> ·
                rider reports → AI categorizes → agency reviews AI-flagged
                pattern → resolved → rider notified
              </p>
            </div>
          </div>
          <p>
            This is Bendix's compounding-elevator story, turned into the
            product doing his mental math for him automatically instead of
            leaving him to work it out alone, mid-commute.
          </p>
        </div>
      </section>

      <figure className="border-y border-line bg-cream-card py-10">
        <div className="max-w-3xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {flowSteps.map((step) => (
            <div key={step.caption}>
              <img
                src={step.src}
                alt={`Flow B, disruption handling, step: ${step.caption}`}
                className="w-full h-auto border border-line"
              />
              <p className="font-mono text-[11px] text-ink-faint text-center mt-2">
                {step.caption}
              </p>
            </div>
          ))}
        </div>
        <figcaption className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft text-center mt-6">
          the disruption flow, prototyped first
        </figcaption>
      </figure>

      {/* 08 — AI strategy */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-16 border-b border-line grid md:grid-cols-[180px_1fr] gap-8 md:gap-10">
        <div>
          <h2 className="font-mono text-[11px] text-ink-faint normal-case">08 · ai strategy</h2>
          <MarginNote accent="indigo" className="mt-8">
            Where AI helps, where a human stays in control
          </MarginNote>
        </div>
        <div className="max-w-2xl text-[16px] leading-relaxed text-ink-soft space-y-6">
          <p>
            I defined what the AI actually does before drawing a single
            AI-related screen. Every capability has a human checkpoint;
            nowhere does it act unilaterally on something that affects
            whether a rider completes a trip safely.
          </p>
          <div className="border border-line overflow-x-auto">
            <table className="w-full text-[13px] border-collapse">
              <thead>
                <tr className="border-b border-line bg-cream-card">
                  <th className="text-left font-mono text-[11px] uppercase tracking-wide text-indigo-soft px-3 py-2">
                    Capability
                  </th>
                  <th className="text-left font-mono text-[11px] uppercase tracking-wide text-indigo-soft px-3 py-2">
                    Output
                  </th>
                  <th className="text-left font-mono text-[11px] uppercase tracking-wide text-indigo-soft px-3 py-2">
                    Human control
                  </th>
                </tr>
              </thead>
              <tbody>
                {aiTable.map((row, i) => (
                  <tr key={row.capability} className={i < aiTable.length - 1 ? "border-b border-line" : ""}>
                    <td className="px-3 py-2.5 text-ink font-medium align-top">{row.capability}</td>
                    <td className="px-3 py-2.5 text-ink-soft align-top">{row.output}</td>
                    <td className="px-3 py-2.5 text-ink-soft align-top">{row.control}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Every AI output answers four questions in the same place, every
            time: where this came from, how confident it is, what could be
            wrong, and what the rider can do about it. When the AI is simply
            wrong, the recovery path is Flow B itself, an immediate
            alternative, not a disclaimer screen. The AI is judged by
            whether a rider ends up somewhere safely, not by how confident
            it sounds.
          </p>
        </div>
      </section>

      {/* 09 — Exploration */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-16 border-b border-line grid md:grid-cols-[180px_1fr] gap-8 md:gap-10">
        <div>
          <h2 className="font-mono text-[11px] text-ink-faint normal-case">09 · exploration</h2>
          <MarginNote accent="indigo" className="mt-8">
            Ugly boxes first, color last
          </MarginNote>
        </div>
        <div className="max-w-2xl text-[16px] leading-relaxed text-ink-soft space-y-6">
          <p>
            Low-fidelity wireframes came before any visual design, and
            deliberately included the bad states, not just the happy path:
            no accessible route available, stale data warnings, GPS
            unavailable, conflicting reports between the agency and recent
            riders.
          </p>
          <figure className="border border-line">
            <img
              src="/images/able/extract-05.png"
              alt="Low-fidelity gray-box wireframes including edge and error states"
              className="w-full h-auto"
            />
            <figcaption className="font-mono text-[11px] text-ink-faint px-4 py-3 border-t border-line">
              Exhibit B · a sample of the low-fidelity wireframe set, including explicit failure states
            </figcaption>
          </figure>
          <p>
            Color came after the interaction model was tested, not before. I
            explored two directions before landing on the final one: a more
            restrained, wayfinding-inspired set, and a cuter, rounder pastel
            direction that ultimately felt more true to the product's
            actual promise, confidence and reassurance, not just data.
          </p>
          <figure className="border border-line">
            <img
              src="/images/able/extract-06.png"
              alt="Three restrained color direction explorations"
              className="w-full h-auto"
            />
            <figcaption className="font-mono text-[11px] text-ink-faint px-4 py-3 border-t border-line">
              considered · wayfinding-inspired directions
            </figcaption>
          </figure>
          <figure className="border border-line">
            <img
              src="/images/able/extract-07.png"
              alt="Two pastel color direction explorations"
              className="w-full h-auto"
            />
            <figcaption className="font-mono text-[11px] text-ink-faint px-4 py-3 border-t border-line">
              considered · pastel directions, one chosen
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 10 — Usability testing & iteration */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-16 border-b border-line grid md:grid-cols-[180px_1fr] gap-8 md:gap-10">
        <div>
          <h2 className="font-mono text-[11px] text-ink-faint normal-case">
            10 · usability testing &amp; iteration
          </h2>
          <MarginNote accent="indigo" className="mt-8">
            What didn't work, and what changed
          </MarginNote>
        </div>
        <div className="max-w-2xl">
          <p className="text-[16px] leading-relaxed text-ink-soft mb-6">
            Five simulated sessions across three tasks surfaced two findings
            worth acting on immediately.
          </p>
          <div className="space-y-4">
            {findings.map((f) => (
              <div key={f.title} className="border border-line bg-cream p-4">
                <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-2">
                  before → finding → after
                </p>
                <p className="text-[15px] text-ink font-medium mb-1.5">{f.title}</p>
                <p className="text-[14px] text-ink-soft leading-relaxed mb-2">{f.finding}</p>
                <p className="text-[14px] text-ink-soft leading-relaxed">
                  <span className="font-medium text-ink">Change:</span> {f.change}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11 — Visual design system */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-16 border-b border-line grid md:grid-cols-[180px_1fr] gap-8 md:gap-10">
        <div>
          <h2 className="font-mono text-[11px] text-ink-faint normal-case">
            11 · visual design system
          </h2>
          <MarginNote accent="indigo" className="mt-8">
            Soft Signal, but WCAG AA first
          </MarginNote>
        </div>
        <div className="max-w-2xl text-[16px] leading-relaxed text-ink-soft space-y-6">
          <p>
            Powder blue and warm coral, rounded shapes, Quicksand headlines
            over Nunito body text. Chosen deliberately over my own
            portfolio's existing theme, so this project reads as its own
            product.
          </p>
          <div className="flex flex-wrap gap-5">
            {swatches.map((s) => (
              <div key={s.name} className="flex flex-col items-center gap-2">
                <span
                  className="block w-12 h-12 rounded border border-line"
                  style={{ backgroundColor: s.hex }}
                  aria-hidden="true"
                />
                <span className="font-mono text-[11px] text-ink-faint">{s.name}</span>
              </div>
            ))}
          </div>
          <p>
            A real revision, not just a spec: the first pass used a lighter
            blue and coral that felt right but measured below WCAG AA when I
            actually checked, 3.16:1 for white text on the button blue
            against a 4.5:1 requirement, and just 2.56:1 on the coral
            disruption alert, the one screen where legibility matters most.
            Both were darkened within the same hue family; the corrected
            blue measures 5.01:1 and the corrected coral measures 5.00:1.
          </p>
          <p>
            Every status (alert, confirmed, step-free) pairs an icon and a
            text label with its color, never color alone, directly
            answering Insight 2. Minimum touch target is 44×44px regardless
            of visual size, and every hover state has a tap or focus
            equivalent.
          </p>
        </div>
      </section>

      {/* 12 — Responsive system */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-16 border-b border-line grid md:grid-cols-[180px_1fr] gap-8 md:gap-10">
        <div>
          <h2 className="font-mono text-[11px] text-ink-faint normal-case">
            12 · responsive system
          </h2>
          <MarginNote accent="indigo" className="mt-8">
            Action on mobile, information on web
          </MarginNote>
        </div>
        <div className="max-w-2xl text-[16px] leading-relaxed text-ink-soft space-y-5">
          <p>
            A rider needs three answers fast: where am I, what do I do next,
            is my route still accessible. An Accessibility Manager needs
            breadth: what's happening across the network, where problems
            cluster, what to prioritize. Same tokens, same components,
            different density, shown together in the cover image above:
            Exhibit C, the final mobile screens and the agency dashboard,
            side by side.
          </p>
        </div>
      </section>

      {/* 13 — Engineering */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-16 border-b border-line grid md:grid-cols-[180px_1fr] gap-8 md:gap-10">
        <div>
          <h2 className="font-mono text-[11px] text-ink-faint normal-case">13 · engineering</h2>
          <MarginNote accent="indigo" className="mt-8">
            A real app, not another mockup
          </MarginNote>
        </div>
        <div className="max-w-2xl text-[16px] leading-relaxed text-ink-soft space-y-5">
          <p>
            I built the disruption flow and the agency dashboard as an
            actual React and Tailwind app, verified with a production build
            and an automated click-through of both flows before calling it
            done. This is where the "Design Engineer" side of the brief
            gets proven, not claimed.
          </p>
          <div className="space-y-4">
            <div>
              <p className="font-mono text-[14px] text-ink font-medium">routeEngine.js</p>
              <p className="text-[14px] text-ink-soft leading-relaxed mt-1">
                Computes the route recommendation and the "why," and runs
                the same four-tier fallback logic BART's own outage protocol
                describes, automatically, when a station fails mid-journey.
              </p>
            </div>
            <div>
              <p className="font-mono text-[14px] text-ink font-medium">patternDetection.js</p>
              <p className="text-[14px] text-ink-soft leading-relaxed mt-1">
                Groups open reports by station and category and flags
                anything crossing a threshold within a 30-day window, always
                awaiting human review, never auto-actioned.
              </p>
            </div>
          </div>
          <p>
            Submit a report on the rider side, switch to the agency
            dashboard, and the pattern detector recomputes live. The
            report-to-pattern loop from Flow C is functional, not just
            described.
          </p>
        </div>
      </section>

      {/* 14 — Outcomes */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-16 border-b border-line grid md:grid-cols-[180px_1fr] gap-8 md:gap-10">
        <div>
          <h2 className="font-mono text-[11px] text-ink-faint normal-case">14 · outcomes</h2>
          <MarginNote accent="indigo" className="mt-8">
            Metrics tied to research, not feature counts
          </MarginNote>
        </div>
        <div className="max-w-2xl">
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {outcomes.map((o) => (
              <div key={o.label} className="border border-line bg-cream p-4">
                <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-1.5">
                  {o.label}
                </p>
                <p className="text-[14px] text-ink leading-relaxed">{o.value}</p>
              </div>
            ))}
          </div>
          <p className="text-[16px] leading-relaxed text-ink-soft">
            Disruption recovery rate, the share of journeys that hit a
            mid-trip failure and reach an AI-recommended alternative rather
            than going fully manual, is the single metric that would prove
            or disprove Flow B, the flow built directly around Bendix's
            story.
          </p>
        </div>
      </section>

      {/* 15 — Reflection */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-16 grid md:grid-cols-[180px_1fr] gap-8 md:gap-10">
        <h2 className="font-mono text-[11px] text-ink-faint normal-case">15 · reflection</h2>
        <div className="max-w-2xl text-[16px] leading-relaxed text-ink-soft space-y-8">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-2">
              what I learned
            </p>
            <p>
              Grounding a portfolio project in real, documented accounts
              (court filings, first-person op-eds, an agency's own
              published outage protocol) produced sharper design decisions
              than invented user needs ever could. The strongest insight in
              this whole project, that riders are doing unpaid
              reliability-checking labor, only surfaced because Bendix's
              real story was specific enough to notice it in.
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-2">
              what I'd do next
            </p>
            <p>
              Recruit real interviews to replace the disclosed synthetic
              sessions, particularly with Deaf and low-vision riders, whose
              needs (information format, not physical access) this version
              had to infer secondhand. I'd also load-test the "one
              recommendation, not a list" decision against a wider group; it
              tested well with five participants, not enough to be
              confident it generalizes.
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-2">
              if this were real
            </p>
            <p>
              I'd partner directly with BART and SFMTA's accessibility teams
              from day one instead of working from their public
              documentation. Their internal outage protocol already
              contains most of the fallback logic this product surfaces;
              the real unlock is a data-sharing relationship, not a smarter
              model.
            </p>
          </div>
        </div>
      </section>

      <StickyNote accent="indigo">
        "Grounding this in real, documented accounts produced sharper design
        decisions than invented user needs ever could. The strongest
        insight in the whole project only surfaced because a real story was
        specific enough to notice it in."
      </StickyNote>

      <EntryNav slug="accesstransit" />
    </article>
  );
}
