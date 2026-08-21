import TaglineRotator from "./TaglineRotator";
import CoverPlaceholder from "./CoverPlaceholder";

export default function Hero() {
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

  return (
    <section className="relative overflow-hidden bg-ruled">
      <div
        className="torn-edge-top absolute -bottom-px left-0 z-10 h-7 w-full bg-cream-card"
        aria-hidden="true"
      />
      <div className="relative max-w-content mx-auto px-6 md:px-10 pt-20 pb-24 md:pt-28 md:pb-32">
        <p className="hero-eyebrow font-mono text-[13px] text-indigo-soft mb-6">
          Field journal, {today}
        </p>
        <h1 className="hero-headline font-serif leading-[0.95] tracking-tight max-w-3xl">
          Hi, I'm <span className="italic">Arielle.</span>
        </h1>
        <p className="hero-sub mt-8 max-w-lg text-[17px] leading-relaxed text-ink-soft">
          A designer &amp; engineer who bridges what looks right with{" "}
          <span className="font-medium text-ink">what's technically feasible</span>.
          Kept here as a running record of the work along the way.
        </p>
        <div className="hero-tagline">
          <TaglineRotator />
        </div>
        <div className="hero-ctas mt-9 flex flex-wrap items-center gap-4 font-mono text-[13px]">
          <a
            href="https://www.linkedin.com/in/arielle-haryanto/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-line px-4 py-2 rounded hover:bg-indigo hover:border-indigo hover:text-cream active:scale-[0.97] transition-[color,background-color,border-color,transform] duration-150 motion-reduce:transition-colors"
          >
            linkedin ↗
          </a>
          <a
            href="https://github.com/arieen17"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-line px-4 py-2 rounded hover:bg-indigo hover:border-indigo hover:text-cream active:scale-[0.97] transition-[color,background-color,border-color,transform] duration-150 motion-reduce:transition-colors"
          >
            github ↗
          </a>
          <a
            href="mailto:arielleharyanto@gmail.com"
            className="border border-line px-4 py-2 rounded hover:bg-indigo hover:border-indigo hover:text-cream active:scale-[0.97] transition-[color,background-color,border-color,transform] duration-150 motion-reduce:transition-colors"
          >
            email ↗
          </a>
          <a
            href="/Arielle_Haryanto_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-line px-4 py-2 rounded hover:bg-indigo hover:border-indigo hover:text-cream active:scale-[0.97] transition-[color,background-color,border-color,transform] duration-150 motion-reduce:transition-colors"
          >
            resume ↗
          </a>
        </div>
      </div>

      {/* balances the empty right side on wide screens — a photo pinned into the opening page */}
      <div className="hidden lg:block absolute right-16 xl:right-28 top-1/2 -translate-y-1/2 w-64 xl:w-72">
        <div className="relative -rotate-3">
          <CoverPlaceholder hideTape accent="indigo" className="w-full aspect-[4/5]" />
          <span className="absolute top-1 left-1 w-3.5 h-3.5 border-t-2 border-l-2 border-indigo" aria-hidden="true" />
          <span className="absolute top-1 right-1 w-3.5 h-3.5 border-t-2 border-r-2 border-indigo" aria-hidden="true" />
          <span className="absolute bottom-1 left-1 w-3.5 h-3.5 border-b-2 border-l-2 border-indigo" aria-hidden="true" />
          <span className="absolute bottom-1 right-1 w-3.5 h-3.5 border-b-2 border-r-2 border-indigo" aria-hidden="true" />
          <span
            className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-indigo shadow-sm ring-1 ring-black/10"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
