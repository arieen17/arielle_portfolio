import { Link } from "react-router-dom";
import CoverPlaceholder from "../../components/CoverPlaceholder";
import StatBar from "../../components/StatBar";
import EntryNav from "../../components/EntryNav";
import MarginNote from "../../components/MarginNote";
import StickyNote from "../../components/StickyNote";

const framingPreference = [
  { label: "Media Library", value: 40 },
  { label: "Personal Journal", value: 40 },
  { label: "Social Platform", value: 20 },
];

const featurePreference = [
  { label: "Audio / Video Recording", value: 85.7 },
  { label: "Photo Digitization", value: 74.6 },
  { label: "Writing", value: 46 },
];

const affinityClusters = [
  {
    theme: "Connection",
    notes: [
      { text: "“I want to feel connected to my family.”", bg: "bg-terracotta-tint", rotate: "rotate-1" },
      { text: "Generations struggle to find meaningful things to talk about", bg: "bg-cream-card", rotate: "-rotate-1" },
    ],
  },
  {
    theme: "Reciprocity",
    notes: [
      { text: "No generation is “the expert”", bg: "bg-cream-card", rotate: "rotate-1" },
      { text: "Elders teach history and skills; younger relatives teach tech and culture", bg: "bg-terracotta-tint", rotate: "-rotate-1" },
    ],
  },
  {
    theme: "Conversation facilitation",
    notes: [
      { text: "People often don’t know what to ask their grandparents", bg: "bg-terracotta-tint", rotate: "-rotate-1" },
      { text: "Suggested prompts, for both generations, could start it", bg: "bg-cream-card", rotate: "rotate-1" },
    ],
  },
  {
    theme: "Heritage & identity",
    notes: [
      { text: "Reframed from “ethnicity” to a broader “what shaped you”", bg: "bg-cream-card", rotate: "-rotate-1" },
      { text: "Traditions, places, languages, values, skills", bg: "bg-terracotta-tint", rotate: "rotate-1" },
    ],
  },
  {
    theme: "Memory preservation",
    notes: [
      { text: "“I want this to still exist when I’m gone.”", bg: "bg-terracotta-tint", rotate: "rotate-1" },
      { text: "Important family knowledge can disappear when someone passes away", bg: "bg-cream-card", rotate: "-rotate-1" },
    ],
  },
  {
    theme: "Discovery",
    notes: [
      { text: "Surfacing who in the family already knows what you want to learn", bg: "bg-cream-card", rotate: "rotate-1" },
      { text: "Grandma knows cooking. Grandchild knows video editing. Teach each other.", bg: "bg-terracotta-tint", rotate: "-rotate-1" },
    ],
  },
];

const designDecisions = [
  {
    title: "Single interface for all ages",
    body: "Rather than building separate experiences for older and younger users, the UI is designed for older users first. Designing for constraints improved it for everyone.",
  },
  {
    title: "Public and private controls",
    body: "Individual posts can be marked private, or kept entirely in Journal mode: a personal reflection space that never enters the shared archive.",
  },
  {
    title: "Multimedia forms",
    body: "Photos, text, and voice notes are all valid ways to contribute. Older users tend to lean toward speaking, younger users toward text. The format shouldn't be the barrier.",
  },
  {
    title: "Built-in translation",
    body: "Text and voice transcriptions are translated automatically, preserving the original recording while making the story understandable across languages — a direct answer to Maria's most common frustration: constantly serving as translator between her parents and her kids.",
  },
  {
    title: "Built-in accessibility",
    body: "Four font sizes, a high-contrast mode, screen reader support, and adjustable UI density. Designing for older generations first made the whole app more usable.",
  },
];

export default function Everwood() {
  return (
    <article>
      <header className="border-y border-line bg-ruled">
        <div className="max-w-content mx-auto px-6 md:px-10 pt-8 pb-16 md:pt-10 md:pb-20">
          <Link
            to="/work"
            className="link-underline font-mono text-[13px] text-ink-faint hover:text-terracotta transition-colors"
          >
            ← back to journal
          </Link>
          <p className="font-mono text-[11px] text-terracotta-soft mb-4 mt-10">
            ENTRY 01 · 2026 · RICE DESIGNATHON
          </p>
          <h1 className="font-serif text-4xl md:text-6xl leading-[0.98] max-w-2xl">
            Everwood
          </h1>
          <p className="mt-4 text-lg md:text-xl text-ink-soft max-w-xl italic">
            intergenerational story sharing
          </p>
          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-5 max-w-2xl">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-terracotta-soft mb-1.5">
                year
              </p>
              <p className="text-[14px] text-ink">2026</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-terracotta-soft mb-1.5">
                format
              </p>
              <p className="text-[14px] text-ink">Rice Designathon</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-terracotta-soft mb-1.5">
                team
              </p>
              <p className="text-[14px] text-ink">2 members</p>
            </div>
            <div className="max-w-[220px]">
              <p className="font-mono text-[11px] uppercase tracking-wide text-terracotta-soft mb-1.5">
                my role
              </p>
              <p className="text-[14px] text-ink">
                research, UI design, prototype
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Product design", "Social impact", "Accessibility"].map((tag) => (
              <span
                key={tag}
                className="font-mono text-[11px] px-2.5 py-1 border border-terracotta-soft/40 text-terracotta rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-8 text-[17px] leading-relaxed text-ink font-medium max-w-2xl">
            Built with one teammate for the Rice Designathon — I owned
            research, UI design, and the prototype. A 68% survey stat
            reshaped the brief mid-process, and two judges independently
            flagged the same next-step gap.
          </p>
        </div>
      </header>

      <CoverPlaceholder
        label="cover image"
        accent="terracotta"
        sticker
        image="/images/everwood/cover.png"
        imageAlt="The Everwood app cover: a home feed of journal entries and a story detail screen with translation, next to the Everwood wordmark and the tagline 'where generations grow together'"
        className="w-full aspect-video border-x-0"
      />

      {/* 01 — Overview */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-16 border-b border-line grid md:grid-cols-[180px_1fr] gap-8 md:gap-10">
        <div>
          <h2 className="font-mono text-[11px] text-ink-faint normal-case">01 · overview</h2>
          <MarginNote className="mt-8">
            Built for the Rice Designathon
          </MarginNote>
        </div>
        <div className="max-w-2xl text-[16px] leading-relaxed text-ink-soft space-y-5">
          <p>
            Every generation holds stories the next one may never hear, not from
            indifference, but from distance, uncertainty, and unasked questions.
            Immigration histories, traditions, rituals, and quiet lessons disappear
            with time. Everwood creates a shared, open space where those stories
            can be told and carried forward, in any format, in any language.
          </p>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-terracotta-soft mb-1.5">
              the problem
            </p>
            <p>
              No existing platform enables two-way, multimedia cultural exchange
              across generations with proper language accessibility.
            </p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-terracotta-soft mb-1.5">
              the solution
            </p>
            <p>
              A reciprocal story archive of photos, voice notes, and journals,
              where elders and youth contribute side by side. Each entry adds a
              new ring to a growing archive, built on lived experience.
            </p>
          </div>
          <figure className="border border-line">
            <img
              src="/images/everwood/appcover.png"
              alt="Two Everwood screens: a masonry feed of family stories in multiple languages, mixing text, photos, and audio, and a discover screen with curated collections and media-type filters"
              className="w-full h-auto"
            />
            <figcaption className="font-mono text-[11px] text-ink-faint px-4 py-3 border-t border-line">
              the feed and discover screens
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Stat band */}
      <section className="bg-terracotta-deep border-b border-line">
        <div className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-16 grid sm:grid-cols-2 gap-10">
          <div>
            <p className="font-serif text-5xl md:text-6xl text-cream leading-none">40%</p>
            <p className="font-mono text-[11px] text-terracotta-tint mt-3">
              of ~6,700 languages spoken today are at risk of disappearing (UNESCO)
            </p>
          </div>
          <div>
            <p className="font-serif text-5xl md:text-6xl text-cream leading-none">68%</p>
            <p className="font-mono text-[11px] text-terracotta-tint mt-3">
              of survey respondents cited language barriers or discomfort as the
              key reason they don't share stories across generations
            </p>
          </div>
        </div>
      </section>

      {/* 02 — Research */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-16 border-b border-line grid md:grid-cols-[180px_1fr] gap-8 md:gap-10">
        <div>
          <h2 className="font-mono text-[11px] text-ink-faint normal-case">
            02 · research &amp; discovery
          </h2>
          <MarginNote className="mt-8">
            68%, the stat that shaped the brief
          </MarginNote>
        </div>
        <div className="max-w-2xl text-[16px] leading-relaxed text-ink-soft space-y-8">
          <p>
            Research combined a competitive analysis of existing platforms, a
            survey distributed to 63 participants ages 18–50, and secondary
            research pulling from UNESCO data on endangered languages. Two
            dominant barriers surfaced across every interview.
          </p>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <p className="font-serif text-lg mb-1">Which experience did users want?</p>
              <p className="text-[13px] text-ink-faint mb-3">63 responses</p>
              <div className="space-y-3">
                {framingPreference.map((row) => (
                  <StatBar key={row.label} {...row} colorClass="bg-terracotta" />
                ))}
              </div>
            </div>
            <div>
              <p className="font-serif text-lg mb-1">What features mattered most?</p>
              <p className="text-[13px] text-ink-faint mb-3">63 responses, multi-select</p>
              <div className="space-y-3">
                {featurePreference.map((row) => (
                  <StatBar key={row.label} {...row} colorClass="bg-terracotta-soft" />
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <blockquote className="border-l border-terracotta-soft pl-4 italic font-serif text-lg">
              "Language barriers — many idioms and humor don't translate well
              across languages, especially where limited language proficiency
              exists. This makes connection a bit more difficult at times."
            </blockquote>
            <blockquote className="border-l border-terracotta-soft pl-4 italic font-serif text-lg">
              "There's also a bit of a generational gap in communication styles,
              which can make it awkward to know how or when to bring things up."
            </blockquote>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-terracotta-soft mb-3">
              user personas
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="border border-line p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-terracotta-tint font-serif text-lg text-terracotta"
                    aria-hidden="true"
                  >
                    M
                  </span>
                  <div>
                    <p className="font-serif text-lg leading-tight">Mark Ramos</p>
                    <p className="font-mono text-[11px] text-ink-faint">
                      19 · Los Angeles, CA
                    </p>
                  </div>
                </div>
                <p className="text-[13px] leading-relaxed text-ink-soft mb-3">
                  Second-generation American, attends art school and wants to
                  work in media. Doesn't know much about his Filipino
                  heritage.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {["Filipino", "2nd-gen American", "Art student"].map((trait) => (
                    <span
                      key={trait}
                      className="font-mono text-[11px] px-2 py-0.5 border border-terracotta-soft/40 text-terracotta rounded"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4 pt-4 border-t border-line">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wide text-ink-faint mb-1.5">
                      goals
                    </p>
                    <ul className="list-disc list-outside pl-4 space-y-1 text-[13px] text-ink-soft">
                      <li>Learn Tagalog to connect with his grandfather</li>
                      <li>Capture his grandfather's immigration story</li>
                      <li>Connect to his culture through art and food</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wide text-ink-faint mb-1.5">
                      frustrations
                    </p>
                    <ul className="list-disc list-outside pl-4 space-y-1 text-[13px] text-ink-soft">
                      <li>Nowhere to keep his grandfather's story and heritage</li>
                      <li>No platform tied to his own cultural interests</li>
                    </ul>
                  </div>
                </div>
                <blockquote className="border-l border-terracotta-soft pl-3 italic font-serif text-[15px]">
                  "My grandpa and I sit in the same room looking at our
                  phones. I want to talk to him about his history but I don't
                  know how to start."
                </blockquote>
              </div>
              <div className="border border-line p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-terracotta-tint font-serif text-lg text-terracotta"
                    aria-hidden="true"
                  >
                    M
                  </span>
                  <div>
                    <p className="font-serif text-lg leading-tight">Maria Gonzalez</p>
                    <p className="font-mono text-[11px] text-ink-faint">
                      56 · New Orleans, LA
                    </p>
                  </div>
                </div>
                <p className="text-[13px] leading-relaxed text-ink-soft mb-3">
                  Born in Honduras, immigrated to the US at 12. Grew up
                  translating for her parents; put herself through college
                  and became a teacher to give back to her community.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {["Hispanic", "Immigrated at 12", "Teacher"].map((trait) => (
                    <span
                      key={trait}
                      className="font-mono text-[11px] px-2 py-0.5 border border-terracotta-soft/40 text-terracotta rounded"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4 pt-4 border-t border-line">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wide text-ink-faint mb-1.5">
                      goals
                    </p>
                    <ul className="list-disc list-outside pl-4 space-y-1 text-[13px] text-ink-soft">
                      <li>Help her kids understand both sides of their identity</li>
                      <li>Preserve her family's immigration journey</li>
                      <li>Keep cultural customs alive beyond her generation</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wide text-ink-faint mb-1.5">
                      frustrations
                    </p>
                    <ul className="list-disc list-outside pl-4 space-y-1 text-[13px] text-ink-soft">
                      <li>Constantly serving as translator between generations</li>
                      <li>Feels disconnected despite working hard to provide</li>
                    </ul>
                  </div>
                </div>
                <blockquote className="border-l border-terracotta-soft pl-3 italic font-serif text-[15px]">
                  "My parents don't understand my kids' American experiences,
                  and my kids don't appreciate my parents' sacrifices."
                </blockquote>
              </div>
            </div>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-terracotta-soft mb-3">
              competitive landscape
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="border border-line p-4">
                <p className="font-serif text-lg mb-2">StoryCorps</p>
                <p className="text-[13px] leading-relaxed">
                  Guided prompts and archival storage. Strong for one-time
                  documentation, but single-session rather than an ongoing
                  exchange. No multimedia or translation.
                </p>
              </div>
              <div className="border border-line p-4">
                <p className="font-serif text-lg mb-2">Telloom</p>
                <p className="text-[13px] leading-relaxed">
                  A private family hub with categorized prompts. Limited to one
                  family, video only. No language accessibility or multimedia.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-terracotta-soft mb-3">
              affinity map
            </p>
            <p className="text-[15px] leading-relaxed mb-6">
              Clustering the interview and survey notes around what people
              felt, struggled with, and wanted to do surfaced one
              throughline: this isn't just a place to archive stories, it's
              a two-way exchange where both generations teach and learn.
            </p>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
              {affinityClusters.map((cluster) => (
                <div key={cluster.theme} className="relative pl-6 border-l-2 border-terracotta-soft">
                  <div className="inline-block -ml-8 -rotate-2 bg-terracotta px-3.5 py-2 shadow-sm mb-3">
                    <p className="font-mono text-[10px] uppercase tracking-wide text-terracotta-tint mb-0.5">
                      theme
                    </p>
                    <p className="font-serif text-base text-cream leading-tight">
                      {cluster.theme}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {cluster.notes.map((note) => (
                      <div
                        key={note.text}
                        className={`${note.rotate} ${note.bg} px-3 py-2.5 shadow-sm max-w-[170px]`}
                      >
                        <p className="text-[13px] leading-snug text-ink">{note.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pl-4 border-l border-terracotta-soft space-y-1.5">
              <p className="font-serif italic text-[15px]">
                "Tell me about your past." → "Let's teach each other something."
              </p>
              <p className="font-serif italic text-[15px]">
                "Preserve family history." → "Create family history together."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Design decisions */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-16 border-b border-line grid md:grid-cols-[180px_1fr] gap-8 md:gap-10">
        <h2 className="font-mono text-[11px] text-ink-faint normal-case">
          03 · design decisions
        </h2>
        <div className="max-w-2xl space-y-6">
          {designDecisions.map((decision, i) => (
            <div key={decision.title} className="grid grid-cols-[28px_1fr] gap-4">
              <p className="font-mono text-[11px] text-terracotta pt-0.5">
                0{i + 1}
              </p>
              <div>
                <p className="font-serif text-lg mb-1">{decision.title}</p>
                <p className="text-[15px] leading-relaxed text-ink-soft">
                  {decision.body}
                </p>
              </div>
            </div>
          ))}
          <figure className="border border-line">
            <img
              src="/images/everwood/design system.png"
              alt="Everwood's design system: the green/cream/brown color palette, navigation bar states, the wordmark and logo, text-size and high-contrast accessibility toggles, collage layout templates, and a language-switcher component"
              className="w-full h-auto"
            />
            <figcaption className="font-mono text-[11px] text-ink-faint px-4 py-3 border-t border-line">
              design system
            </figcaption>
          </figure>
        </div>
      </section>

      <figure className="border-y border-line bg-cream-card py-10">
        <img
          src="/images/everwood/hi-fi.png"
          alt="The full Everwood screen flow: onboarding and sign-up, home and search, journal and post creation, profile, and accessibility settings including font size and high-contrast mode"
          className="mx-auto max-w-2xl w-full h-auto"
        />
        <figcaption className="font-mono text-[11px] uppercase tracking-wide text-terracotta-soft text-center mt-6">
          high-fidelity screens
        </figcaption>
      </figure>

      {/* 04 — Prototype */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-16 border-b border-line grid md:grid-cols-[180px_1fr] gap-8 md:gap-10">
        <h2 className="font-mono text-[11px] text-ink-faint normal-case">
          04 · prototype
        </h2>
        <div className="max-w-2xl">
          <p className="text-[16px] leading-relaxed text-ink-soft mb-5">
            The full clickable prototype, built in Figma.
          </p>
          <div className="relative aspect-video border border-line">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://embed.figma.com/proto/GYOSbPKVesBwZkT0Xm9Npg/Everwood?page-id=0%3A1&node-id=15-77&viewport=-592%2C-1190%2C0.37&scaling=scale-down&content-scaling=fixed&starting-point-node-id=15%3A77&hotspot-hints=0&embed-host=share"
              allowFullScreen
              title="Everwood interactive prototype"
            />
          </div>
          <a
            href="https://embed.figma.com/proto/GYOSbPKVesBwZkT0Xm9Npg/Everwood?page-id=0%3A1&node-id=15-77&viewport=-592%2C-1190%2C0.37&scaling=scale-down&content-scaling=fixed&starting-point-node-id=15%3A77&hotspot-hints=0&embed-host=share"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline font-mono text-[13px] text-terracotta mt-3 inline-block"
          >
            open in Figma ↗
          </a>
        </div>
      </section>

      {/* 05 — Where AI fit in */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-16 border-b border-line grid md:grid-cols-[180px_1fr] gap-8 md:gap-10">
        <h2 className="font-mono text-[11px] text-ink-faint normal-case">
          05 · where ai fit in
        </h2>
        <div className="max-w-2xl text-[16px] leading-relaxed text-ink-soft space-y-4">
          <p>
            AI played a support role, not a replacement for judgment. Early on,
            Claude helped survey the competitive landscape faster than manual
            search alone, surfacing platforms like StoryCorps and Telloom for
            deeper analysis.
          </p>
          <p>
            Later, AI translation tools let the team prototype what multilingual
            content would actually look like inside the interface, translating
            a sample story into Spanish to see how the translation fit within
            the design, rather than guessing.
          </p>
        </div>
      </section>

      {/* 05 — Results */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-16 grid md:grid-cols-[180px_1fr] gap-8 md:gap-10">
        <h2 className="font-mono text-[11px] text-ink-faint normal-case">
          06 · results &amp; next steps
        </h2>
        <div className="max-w-2xl text-[16px] leading-relaxed text-ink-soft space-y-8">
          <p>
            Everwood shipped as a working prototype for the designathon, then
            went in front of two judges and a small group of test users for
            feedback.
          </p>

          <div className="space-y-4">
            <p className="font-mono text-[11px] uppercase tracking-wide text-terracotta-soft">
              what came back
            </p>
            <blockquote className="border-l border-terracotta-soft pl-4 italic font-serif text-lg">
              "The research is clear and relevant, especially around language
              barriers, discomfort with sharing, and the preference for
              private or journal-like experiences... I'd love to see more
              detail around how users discover, respond to, or build on each
              other's stories over time to deepen connection."
              <footer className="mt-2 font-mono text-[11px] not-italic text-ink-faint">
                designathon judge
              </footer>
            </blockquote>
            <blockquote className="border-l border-terracotta-soft pl-4 italic font-serif text-lg">
              "I'd love to see more clarity on the specific incentives for
              older users — what makes this more seamless than a manual
              workaround like posting to Facebook? [And] since long-form
              story translations require significant effort to consume, how
              might you make the content more digestible?"
              <footer className="mt-2 font-mono text-[11px] not-italic text-ink-faint">
                designathon judge
              </footer>
            </blockquote>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-terracotta-soft mb-2">
              next steps
            </p>
            <p className="mb-3">
              Both judges converged on the same gap: the archive was easy to
              understand at a high level, but thin on the ongoing, interactive
              layer (how a story gets discovered, responded to, and built on
              by someone else) and on making long, translated stories fast
              to skim rather than a wall of text. The next iteration would
              focus there:
            </p>
            <ul className="list-disc list-outside pl-5 space-y-2">
              <li>
                Short-form "response" entries: a voice note or photo replying
                directly to an existing story, so threads of connection form
                instead of a flat, one-directional archive.
              </li>
              <li>
                A lighter scan layer on top of long translated entries: a
                pull-quote or short summary in the feed, with the full story
                just a tap away, so consuming the archive can match the pace
                of a normal social feed without losing the depth underneath.
              </li>
              <li>
                A clearer, stated answer to "why this instead of a voice memo
                posted to Facebook" for older users: the app's real
                advantages (a shared multi-generational archive, built-in
                translation, private/journal modes) need to be said plainly,
                not just built in and left implicit.
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-terracotta-soft mb-2">
              what I'd do differently
            </p>
            <p>
              The first-round survey questions were too general. A sharper
              second round (genuinely specific follow-up questions once the
              first pass of answers came in, rather than treating one survey
              as the whole research phase) would likely have surfaced the
              interactivity and discoverability gaps the judges caught while
              there was still time to design for them, instead of finding out
              after the prototype was built.
            </p>
          </div>
        </div>
      </section>

      <StickyNote accent="terracotta">
        "Designing for older users first, not as an afterthought but as
        the starting point, turned out to make the whole thing easier to
        use. That's the one lesson from Everwood I keep carrying into
        everything else."
      </StickyNote>

      <EntryNav slug="everwood" />
    </article>
  );
}
