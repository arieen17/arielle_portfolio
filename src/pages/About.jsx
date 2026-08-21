import Skills from "../components/Skills";

export default function About() {
  return (
    <div className="pt-12">
      <div className="max-w-content mx-auto px-6 md:px-10 mb-12 md:mb-16">
        <p className="font-mono text-[11px] text-indigo tracking-[0.16em] mb-4">
          FIELD NOTES · ABOUT
        </p>
        <h1 className="font-serif text-4xl md:text-5xl">About Me</h1>
        <p className="mt-3 text-lg text-ink-soft italic">
          The creator behind the computer!
        </p>
      </div>
      <div className="max-w-content mx-auto px-6 md:px-10 flex flex-col sm:flex-row gap-8 sm:gap-10 items-center">
        <div className="w-64 md:w-80 shrink-0 relative -rotate-2 mx-auto sm:mx-0">
          <img
            src="/images/me/me_dog.JPG"
            alt="Arielle Haryanto, Class of 2026, with her dog"
            className="w-full aspect-[3/4] object-cover border border-line"
          />
          <span className="absolute top-1 left-1 w-3.5 h-3.5 border-t-2 border-l-2 border-indigo" aria-hidden="true" />
          <span className="absolute top-1 right-1 w-3.5 h-3.5 border-t-2 border-r-2 border-indigo" aria-hidden="true" />
          <span className="absolute bottom-1 left-1 w-3.5 h-3.5 border-b-2 border-l-2 border-indigo" aria-hidden="true" />
          <span className="absolute bottom-1 right-1 w-3.5 h-3.5 border-b-2 border-r-2 border-indigo" aria-hidden="true" />
          <span
            className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-indigo shadow-sm ring-1 ring-black/10"
            aria-hidden="true"
          />
        </div>
        <p className="text-[16px] leading-relaxed text-ink-soft max-w-md">
          Design got to me first, sketching layouts before I understood what
          CSS even was. Computer science pulled harder not long after, and I
          liked the discipline of building something that either works or
          doesn't. These days I move between the two: user research and
          wireframes some days, full-stack builds the next, with UI/UX
          sitting right where they meet. I'm finishing my degree at UC
          Riverside in 2026, still adding to the list below, and always glad
          to talk through an idea with someone who sees it differently than
          I do.
        </p>
      </div>
      <Skills hideBio />
    </div>
  );
}
