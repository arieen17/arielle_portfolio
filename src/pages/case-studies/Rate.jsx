import { Link } from "react-router-dom";
import CoverPlaceholder from "../../components/CoverPlaceholder";
import EntryNav from "../../components/EntryNav";
import MarginNote from "../../components/MarginNote";

const designDecisions = [
  {
    title: "Dish-level ratings",
    body: "The core differentiator: rating individual menu items, each with its own photo and review, instead of a restaurant as a whole the way Yelp does — directly answering Maya's top frustration: restaurant ratings are too general to trust for what she'll actually order.",
  },
  {
    title: "Map, simplified",
    body: "The original plan used custom pins on an interactive map. Building that proved too costly, so it pivoted to a list of campus restaurants with interactive panels linking out to Google Maps for navigation, saving roughly two weeks against the original build.",
  },
  {
    title: "Gamification, kept lean",
    body: "Profiles carry XP and tiers to encourage participation, but the original scope for badges and progression was deliberately simplified given time, prioritizing the core rating, map, and recommendation features first.",
  },
  {
    title: "Cutting email verification",
    body: "UCR's mail servers filtered out confirmation emails from senders they didn't recognize, ours included. Email verification was dropped in favor of a simple \".edu\" domain check on signup: an imperfect but practical tradeoff.",
  },
];

const testStats = [
  { value: "462", caption: "automated tests across the frontend and backend" },
  { value: "100%", caption: "passing, across all 43 test suites on both sides" },
  { value: "86.89%", caption: "statement coverage on the frontend (263/263 tests)" },
  { value: "85.16%", caption: "statement coverage on the backend (199/199 tests)" },
];

export default function Rate() {
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
            ENTRY 03 · 2025 · CS180 SOFTWARE ENGINEERING
          </p>
          <h1 className="font-serif text-4xl md:text-6xl leading-[0.98] max-w-2xl">
            R'ATE
          </h1>
          <p className="mt-4 text-lg md:text-xl text-ink-soft max-w-xl italic">
            a dish-level food rating app for UC Riverside
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
              <p className="text-[14px] text-ink">4-month team project, Sept–Dec</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-1.5">
                team
              </p>
              <p className="text-[14px] text-ink">4 people, CS180 Software Engineering</p>
            </div>
            <div className="max-w-[220px]">
              <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-1.5">
                my role
              </p>
              <p className="text-[14px] text-ink">Scrum master &amp; test engineer, UI/UX design, frontend</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {["UI/UX", "React Native", "Node.js"].map((tag) => (
              <span
                key={tag}
                className="font-mono text-[11px] px-2.5 py-1 border border-indigo/30 text-indigo rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-8 text-[17px] leading-relaxed text-ink font-medium max-w-2xl">
            Built with a 4-person team over one semester for CS180 — I owned
            UI/UX design and the frontend build. All 5 proposed features
            shipped, backed by 462 automated tests at 85%+ coverage, and
            demoed at course end.
          </p>
        </div>
      </header>

      <CoverPlaceholder
        label="cover image"
        accent="indigo"
        image="/images/rate/ratecover.png"
        imageAlt="The R'ATE cover: the bear mascot and wordmark with the tagline 'rate what you ate!', next to two phone screens showing the home feed of top-rated dishes and a review detail page"
        className="w-full aspect-video border-x-0"
      />

      {/* 01 — Overview */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-16 border-b border-line grid md:grid-cols-[180px_1fr] gap-8 md:gap-10">
        <div>
          <h2 className="font-mono text-[11px] text-ink-faint normal-case">01 · overview</h2>
          <MarginNote accent="indigo" className="mt-8">
            Rating dishes, not restaurants
          </MarginNote>
        </div>
        <div className="max-w-2xl text-[16px] leading-relaxed text-ink-soft space-y-5">
          <p>
            R'ATE is a food-rating app built for UC Riverside students,
            developed over a semester with a four-person team for CS180:
            Software Engineering. Apps like Yelp rate a restaurant as a
            whole, but students often only like some of what's on the menu.
            R'ATE lets students rate individual dishes instead, building a
            community-driven picture of what's actually worth ordering
            across campus.
          </p>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-1.5">
              the problem
            </p>
            <p>
              Finding good food near UCR meant sorting through broad,
              restaurant-level reviews that said nothing about which
              specific items were worth ordering. Students ended up
              disappointed by dishes a restaurant's overall rating never
              warned them about, or missed better options entirely.
            </p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-1.5">
              my role
            </p>
            <p>
              Scrum master and test engineer for the team, splitting tasks
              and tracking progress, alongside UI/UX design and frontend
              development: the low-fidelity wireframes and high-fidelity
              mockups were mine, then most of the frontend build in React
              Native, integrated with the backend as features came online.
            </p>
          </div>
        </div>
      </section>

      {/* 02 — Research */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-16 border-b border-line grid md:grid-cols-[180px_1fr] gap-8 md:gap-10">
        <div>
          <h2 className="font-mono text-[11px] text-ink-faint normal-case">
            02 · research
          </h2>
          <MarginNote accent="indigo" className="mt-8">
            Beli, for how people already rank food with friends
          </MarginNote>
        </div>
        <div className="max-w-2xl text-[16px] leading-relaxed text-ink-soft space-y-6">
          <p>
            Research started with a persona, then a competitive scan of
            existing food and restaurant apps. Pinterest fed the visual
            side: moodboarding a color direction before any screen was
            drawn, then carrying it through from the earliest
            low-fidelity wireframes into the final high-fidelity mockups.
          </p>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-3">
              a user persona
            </p>
            <div className="border border-line p-5">
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-tint font-serif text-lg text-indigo"
                  aria-hidden="true"
                >
                  M
                </span>
                <div>
                  <p className="font-serif text-lg leading-tight">Maya Chen</p>
                  <p className="font-mono text-[11px] text-ink-faint">
                    20 · Riverside, CA
                  </p>
                </div>
              </div>
              <p className="text-[14px] leading-relaxed text-ink-soft mb-3">
                A busy UCR student who eats out 3–5 times a week and enjoys
                trying new restaurants with friends, but often struggles to
                decide what to order. She leans on Yelp, Google Maps,
                TikTok, and Instagram to find food, but restaurant-wide
                ratings don't tell her whether a specific dish is actually
                worth ordering.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {["3rd-year", "Business Administration", "Eats out 3–5x/week"].map((trait) => (
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
                    <li>Find good food quickly without wasting money</li>
                    <li>Discover new restaurants and dishes around UCR</li>
                    <li>Know which specific menu items students recommend</li>
                    <li>Get recommendations based on her personal tastes</li>
                    <li>See what foods are currently popular around campus</li>
                    <li>Share photos and reviews of dishes she enjoys</li>
                  </ul>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wide text-ink-faint mb-2">
                    frustrations
                  </p>
                  <ul className="list-disc list-outside pl-4 space-y-1.5 text-[13px] text-ink-soft">
                    <li>Restaurant ratings are too general</li>
                    <li>A 4.5-star restaurant can still have disappointing dishes</li>
                    <li>
                      Reviews are often outdated or focus on the restaurant
                      rather than individual meals
                    </li>
                    <li>
                      Doesn't want to scroll through dozens of reviews to
                      find food recommendations
                    </li>
                    <li>Has difficulty deciding what to order</li>
                    <li>
                      Doesn't always trust influencer or sponsored food
                      recommendations
                    </li>
                    <li>Doesn't want to waste $15–20 on a meal she won't like</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-3">
              competitive landscape
            </p>
            <div className="border border-line p-4 max-w-sm">
              <p className="font-serif text-lg mb-2">Beli</p>
              <p className="text-[13px] leading-relaxed">
                A social, friend-based restaurant-ranking app: the closest
                existing comparison for what R'ATE wanted to do, just one
                level down, at the dish rather than the restaurant.
              </p>
            </div>
          </div>
          <figure className="border border-line">
            <img
              src="/images/rate/draft.png"
              alt="Research references: Beli's app screens (feed, map discovery, reserve/recs), Pinterest food photography for visual inspiration, and the navy/terracotta/gold color palette explored for R'ATE"
              className="w-full h-auto"
            />
            <figcaption className="font-mono text-[11px] text-ink-faint px-4 py-3 border-t border-line">
              competitive research &amp; color exploration
            </figcaption>
          </figure>
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
          <figure className="border border-line">
            <img
              src="/images/rate/lofi.png"
              alt="R'ATE's low-fidelity wireframes: login/signup, home, map, review detail, create-review, profile, and discover, blocked out before any visual design"
              className="w-full h-auto"
            />
            <figcaption className="font-mono text-[11px] text-ink-faint px-4 py-3 border-t border-line">
              low-fidelity wireframes
            </figcaption>
          </figure>
        </div>
      </section>

      <figure className="border-y border-line bg-cream-card py-10">
        <img
          src="/images/rate/ratehifi.png"
          alt="The full R'ATE screen flow: login/signup, home, map, a review detail page, create-review flow, profile with XP progress, and the discover feed"
          className="mx-auto max-w-2xl w-full h-auto"
        />
        <figcaption className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft text-center mt-6">
          high-fidelity screens
        </figcaption>
      </figure>

      {/* Testing stat band */}
      <section className="bg-indigo-deep border-b border-line">
        <div className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-16 grid sm:grid-cols-2 gap-10">
          {testStats.map((stat) => (
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

      {/* 04 — Results */}
      <section className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-16 grid md:grid-cols-[180px_1fr] gap-8 md:gap-10">
        <h2 className="font-mono text-[11px] text-ink-faint normal-case">
          04 · results
        </h2>
        <div className="max-w-2xl text-[16px] leading-relaxed text-ink-soft space-y-8">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-2">
              what shipped
            </p>
            <p>
              All five core features from the original proposal shipped:
              dish- and restaurant-level ratings, an interactive map with
              GPS navigation, review and photo posting, gamified profiles,
              and AI-personalized food recommendations. R'ATE was demoed at
              the end of the course.
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-2">
              the code
            </p>
            <p>
              Frontend and backend are both public.{" "}
              <a
                href="https://github.com/arieen17/leftovers"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-indigo"
              >
                github.com/arieen17/leftovers ↗
              </a>
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-indigo-soft mb-2">
              what I'd do differently
            </p>
            <p>
              The hardest part wasn't writing code alone, it was making
              sure the frontend and backend agreed on what data they were
              sending each other; we got better at communicating that
              upfront as the project went on, but not fast enough to avoid
              a lot of early back and forth. I'd also test the backend
              continuously as we built it next time, rather than mostly at
              the end: the bugs we caught late would have been much faster
              to catch as they happened.
            </p>
          </div>
        </div>
      </section>

      <EntryNav slug="rate" />
    </article>
  );
}
