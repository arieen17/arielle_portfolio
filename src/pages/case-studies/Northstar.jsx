import { Link } from "react-router-dom";
import CoverPlaceholder from "../../components/CoverPlaceholder";
import EntryNav from "../../components/EntryNav";
import MarginNote from "../../components/MarginNote";
import StickyNote from "../../components/StickyNote";

const timeline = [
  {
    window: "0–2h",
    label: "Chaos phase: the initial shock",
    body: "A period of intense unpredictability, where agencies receive fragmented reports.",
    bar: "#E3A9A5",
    chip: "#F5DEDC",
    text: "#A6564F",
  },
  {
    window: "2–6h",
    label: "Assessment begins: information gap",
    body: "Initial assessment is fragmented, relying on unofficial or partial data to identify the scope of the problem.",
    bar: "#E8BE94",
    chip: "#F6E6D3",
    text: "#A46A2E",
  },
  {
    window: "6–12h",
    label: "Coordination gaps: fragmented response",
    body: "Different responding teams work without a unified plan, causing duplication of effort and wasted resources.",
    bar: "#DFCB8E",
    chip: "#F3EED3",
    text: "#93802C",
  },
  {
    window: "12–24h",
    label: "Partial coverage: limited resource allocation",
    body: "Resources can't reach all affected areas, especially the more isolated and less monitored ones.",
    bar: "#A9C9A6",
    chip: "#DFECDD",
    text: "#4F7C55",
  },
  {
    window: "24–48h",
    label: "Critical window: time sensitivity",
    body: "A limited timeframe where action is most effective; missing it can lead to irreversible consequences.",
    bar: "#AEB7C4",
    chip: "#E2E6EB",
    text: "#54606E",
  },
];

const aiComponents = [
  {
    title: "Computer vision",
    body: "Assessing damage and impact from satellite and drone imagery, and crowdsourced reports.",
  },
  {
    title: "Priority algorithms",
    body: "AI-driven algorithms that help prioritize those in most need amid chaos and uncertainty.",
  },
  {
    title: "Natural language processing",
    body: "Extracting information from text and flagging duplicate reports.",
  },
  {
    title: "Predictive models",
    body: "Flood paths, aftershocks, disease risk, and supply depletion.",
  },
];

const impactStats = [
  { value: "30–40%", caption: "faster response times: earlier coordination and AI prioritization cuts critical delays" },
  { value: "2–4x", caption: "more lives saved: simulated systems show a significant reduction in preventable deaths" },
  { value: "$1B+", caption: "economic loss reduction: even a 1% improvement on $100B in wildfire damage is $1B saved" },
  { value: "Zero", caption: "duplicated aid efforts: real-time coordination eliminates wasted resources across agencies" },
];

const contributions = [
  {
    title: "Research",
    body: "Framed the disaster-response problem and backed the pitch with market and impact statistics.",
  },
  {
    title: "Design & prototype",
    body: "Designed and built the Mission Control, Map, Ops Log, and AI Optimizer screens in Figma Make.",
  },
  {
    title: "Pitch narrative",
    body: "Wrote and structured the pitch deck, from problem framing through the ask, for the final judged round.",
  },
];

const keyLearnings = [
  {
    title: "Speed forces clarity",
    body: "Turning a real disaster-response problem into a single judged pitch meant cutting every idea that didn't directly serve the coordinate-in-real-time story.",
  },
  {
    title: "Feedback is the next draft",
    body: "The judges' questions were the material to sharpen: where they pushed hardest is exactly where Northstar needs the most work next.",
  },
];

export default function Northstar() {
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
            ENTRY 01 · 2026 · AI TECH VENTURE CHALLENGE
          </p>
          <h1 className="font-serif text-4xl md:text-6xl leading-[0.98] max-w-2xl">
            Northstar
          </h1>
          <p className="mt-4 text-lg md:text-xl text-ink-soft max-w-xl italic">
            AI-powered disaster response coordination
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
              <p className="text-[14px] text-ink">AI Tech Venture Challenge</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-1.5">
                team
              </p>
              <p className="text-[14px] text-ink">3 people</p>
            </div>
            <div className="max-w-[220px]">
              <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-1.5">
                my role
              </p>
              <p className="text-[14px] text-ink">Product design, pitch narrative &amp; prototype</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Product design", "AI/UX", "Figma Make"].map((tag) => (
              <span
                key={tag}
                className="font-mono text-[11px] px-2.5 py-1 border border-indigo/30 text-indigo rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-8 text-[17px] leading-relaxed text-ink font-medium max-w-2xl">
            Built with a 3-person team over the course of a pitch competition —
            Northstar took 1st place overall at the AI Tech Venture Challenge
            2026, an AI coordination platform designed to give first
            responders the right information instantly during a disaster's
            critical first 48 hours.
          </p>
        </div>
      </header>

      <CoverPlaceholder
        label="cover image"
        accent="indigo"
        image="/images/northstar/northstarcover.png"
        imageAlt="The Northstar Mission Control dashboard: active incidents, deployed units, civilians evacuated, and zones contained, for a coordinated disaster response"
        className="w-full max-w-2xl mx-auto aspect-[925/733] my-10"
      />

      {/* 01 — Overview */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-16 border-b border-line grid md:grid-cols-[180px_1fr] gap-8 md:gap-10">
        <div>
          <h2 className="font-mono text-[11px] text-ink-faint normal-case">01 · overview</h2>
          <MarginNote accent="indigo" className="mt-8">
            A light in the dark
          </MarginNote>
        </div>
        <div className="max-w-2xl text-[16px] leading-relaxed text-ink-soft space-y-5">
          <p>
            Natural disasters, earthquakes, floods, wildfires, are a
            recurring, critical issue in California, and{" "}
            <span className="font-semibold text-ink">
              the cost of poor coordination during these events is measured
              in lives and resources, not just dollars
            </span>
            . Northstar is an AI-powered disaster response coordination
            platform built to close that gap: giving first responders{" "}
            <span className="marker-highlight">
              the right information instantly
            </span>
            , when every second counts.
          </p>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-1.5">
              the problem
            </p>
            <p>
              The first 48 hours after a disaster are{" "}
              <span className="font-semibold text-ink">
                the most critical window for saving lives
              </span>
              , but the agencies responding to it, government, nonprofits,
              and volunteers, work from{" "}
              <span className="marker-highlight">
                fragmented, duplicated data
              </span>{" "}
              with no shared, prioritized view of what's actually happening
              on the ground.
            </p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-3">
              a user persona
            </p>
            <div className="border border-line bg-cream p-5">
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-tint font-serif text-lg text-indigo"
                  aria-hidden="true"
                >
                  M
                </span>
                <div>
                  <p className="font-serif text-lg leading-tight">Maria Rodriguez</p>
                  <p className="font-mono text-[11px] text-ink-faint">
                    38 · Riverside, CA
                  </p>
                </div>
              </div>
              <p className="text-[14px] leading-relaxed text-ink-soft mb-3">
                An emergency response coordinator with 10+ years of
                experience, working under{" "}
                <span className="font-semibold text-ink">
                  intense time pressure
                </span>{" "}
                to make decisions from scattered sources: emergency calls,
                field reports, satellite imagery, social media. Reports are
                often incomplete or contradictory, and sorting through them
                by hand costs time she doesn't have.
              </p>
              <p className="font-hand text-lg text-indigo-soft leading-snug mb-4">
                "When a disaster happens, I don't need more information, I
                need the right information, prioritized and actionable."
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {["10+ years in EM", "Multi-agency coordination", "Works under time pressure"].map((trait) => (
                  <span
                    key={trait}
                    className="font-mono text-[11px] px-2 py-0.5 border border-indigo/30 text-indigo rounded"
                  >
                    {trait}
                  </span>
                ))}
              </div>
              <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-line">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wide text-ink-faint mb-2">
                    goals
                  </p>
                  <ul className="list-disc list-outside pl-4 space-y-1.5 text-[13px] text-ink-soft">
                    <li>Quickly identify the most urgent incidents</li>
                    <li>Give first responders accurate, actionable information</li>
                    <li>Coordinate resources across teams and agencies</li>
                    <li>Reduce response time and prevent duplicated effort</li>
                    <li>Decide confidently despite incomplete information</li>
                  </ul>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wide text-ink-faint mb-2">
                    frustrations
                  </p>
                  <ul className="list-disc list-outside pl-4 space-y-1.5 text-[13px] text-ink-soft">
                    <li>Information scattered across systems and channels</li>
                    <li>Reports are incomplete, outdated, or contradictory</li>
                    <li>Manually sorting incoming information costs time</li>
                    <li>Hard to tell which incidents need attention first</li>
                    <li>Limited real-time visibility into how things develop</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — The first 48 hours */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-16 border-b border-line grid md:grid-cols-[180px_1fr] gap-8 md:gap-10">
        <div>
          <h2 className="font-mono text-[11px] text-ink-faint normal-case">
            02 · the first 48 hours
          </h2>
          <MarginNote accent="indigo" className="mt-8">
            How existing disaster response unfolds
          </MarginNote>
        </div>
        <div className="max-w-2xl space-y-4">
          {timeline.map((step) => (
            <div
              key={step.window}
              className="grid grid-cols-[64px_1fr] gap-4 border border-line border-l-4 bg-cream p-4"
              style={{ borderLeftColor: step.bar }}
            >
              <div>
                <span
                  className="inline-block font-mono text-[12px] font-medium px-2 py-1 rounded"
                  style={{ backgroundColor: step.chip, color: step.text }}
                >
                  {step.window}
                </span>
              </div>
              <div>
                <p className="text-[15px] text-ink font-medium">{step.label}</p>
                <p className="text-[14px] text-ink-soft leading-relaxed mt-1">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scale-of-the-problem stat band */}
      <section className="bg-indigo-deep border-b border-line">
        <div className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-16 grid sm:grid-cols-3 gap-10">
          <div>
            <p className="font-serif text-4xl md:text-5xl text-cream leading-none">90%</p>
            <p className="font-mono text-[11px] text-indigo-tint mt-3">
              of disaster deaths occur in developing regions (UNDRR)
            </p>
          </div>
          <div>
            <p className="font-serif text-4xl md:text-5xl text-cream leading-none">$200–300B+</p>
            <p className="font-mono text-[11px] text-indigo-tint mt-3">
              in annual economic losses from natural disasters (Swiss Re / UNDRR)
            </p>
          </div>
          <div>
            <p className="font-serif text-4xl md:text-5xl text-cream leading-none">72hrs</p>
            <p className="font-mono text-[11px] text-indigo-tint mt-3">
              the critical survival window after an earthquake (ReliefWeb)
            </p>
          </div>
        </div>
      </section>

      {/* 03 — How Northstar uses AI */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-16 border-b border-line grid md:grid-cols-[180px_1fr] gap-8 md:gap-10">
        <div>
          <h2 className="font-mono text-[11px] text-ink-faint normal-case">
            03 · how northstar uses ai
          </h2>
          <MarginNote accent="indigo" className="mt-8">
            Data in, priority out
          </MarginNote>
        </div>
        <div className="max-w-2xl text-[16px] leading-relaxed text-ink-soft space-y-6">
          <p>
            Northstar pulls from satellite and drone imagery, social media,
            911 and emergency calls, IoT sensors and weather feeds,
            crowdsourced reports, and cell tower activity, then runs{" "}
            <span className="font-semibold text-ink">
              that firehose of raw signal
            </span>{" "}
            through four AI components to turn it into{" "}
            <span className="marker-highlight">
              a single, prioritized picture
            </span>{" "}
            responders can act on.
          </p>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
            {aiComponents.map((item) => (
              <div key={item.title} className="border-l-2 border-indigo/30 pl-4">
                <p className="text-[15px] text-ink font-medium">{item.title}</p>
                <p className="text-[14px] text-ink-soft leading-relaxed mt-1">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <figure className="border-y border-line bg-cream-card py-10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          <img
            src="/images/northstar/units.png"
            alt="The Units &amp; Assets screen, listing field teams like FIRE-7 and RESCUE-1 with their status, location, and contact actions"
            className="w-full h-auto border border-line"
          />
          <img
            src="/images/northstar/aioptimizer.png"
            alt="The AI Resource Optimizer, suggesting optimal unit deployments like MED-2 to Santa Monica Mountains with a 97% match score"
            className="w-full h-auto border border-line"
          />
          <img
            src="/images/northstar/opslog.png"
            alt="The Ops Log screen, showing tactical field communications from units like FIRE-7 and RESCUE-3 in real time"
            className="w-full h-auto border border-line"
          />
        </div>
        <figcaption className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft text-center mt-6">
          high-fidelity screens
        </figcaption>
      </figure>

      {/* Impact stat band */}
      <section className="bg-indigo-deep border-b border-line">
        <div className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-16 grid sm:grid-cols-2 gap-10">
          {impactStats.map((stat) => (
            <div key={stat.caption}>
              <p className="font-serif text-4xl md:text-5xl text-cream leading-none">
                {stat.value}
              </p>
              <p className="font-mono text-[11px] text-indigo-tint mt-3">
                {stat.caption}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 04 — Results & reflections */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-16 grid md:grid-cols-[180px_1fr] gap-8 md:gap-10">
        <h2 className="font-mono text-[11px] text-ink-faint normal-case">
          04 · results &amp; reflections
        </h2>
        <div className="max-w-2xl space-y-10">
          <div className="flex items-start gap-4 border border-indigo/30 bg-indigo-tint p-5">
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream text-indigo"
              aria-hidden="true"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2l2.9 6.26L21 9.27l-4.5 4.39L17.8 21 12 17.77 6.2 21l1.3-7.34L3 9.27l6.1-1.01L12 2z" />
              </svg>
            </span>
            <div>
              <p className="text-[15px] text-ink font-medium mb-1">
                Awarded 1st place overall
              </p>
              <p className="text-[14px] text-ink-soft leading-relaxed">
                Northstar{" "}
                <span className="marker-highlight">
                  won 1st place overall
                </span>{" "}
                at the AI Tech Venture Challenge 2026, hosted by The Product
                Club at UCR. Huge thanks to judges Sid Nair, Nathan
                Trueblood, Travis Johnson, Aaron Saltzman, and Sanjoy
                Moulik, Ph.D. for their time and feedback.
              </p>
            </div>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-3">
              my contributions
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {contributions.map((item) => (
                <div key={item.title} className="border border-line bg-cream p-4">
                  <p className="text-[15px] text-ink font-medium mb-1.5">
                    {item.title}
                  </p>
                  <p className="text-[13px] text-ink-soft leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-3">
              key learnings
            </p>
            <div className="space-y-3">
              {keyLearnings.map((item) => (
                <div key={item.title} className="border border-line bg-cream p-4">
                  <p className="text-[15px] text-ink font-medium mb-1">
                    {item.title}
                  </p>
                  <p className="text-[14px] text-ink-soft leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-2">
              the prototype
            </p>
            <p className="text-[16px] leading-relaxed text-ink-soft">
              The interactive prototype was built in Figma Make.{" "}
              <a
                href="https://northstarai.figma.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-indigo"
              >
                northstarai.figma.site ↗
              </a>
            </p>
          </div>
        </div>
      </section>

      <StickyNote accent="indigo">
        "This was incredibly rewarding, hearing so many innovative ideas from
        fellow participants and turning a real problem into something
        judges could react to in a single pitch. With their feedback, we can
        take Northstar further."
      </StickyNote>

      <EntryNav slug="northstar" />
    </article>
  );
}
