import Skills from "../components/Skills";

export default function About() {
  return (
    <div className="pt-12">
      <h1 className="sr-only">About Arielle</h1>
      <div className="max-w-content mx-auto px-6 md:px-10 flex flex-col sm:flex-row gap-8 sm:gap-10 items-start">
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
          I've always loved both design and web development, and UI/UX is
          where those worlds collide. With a computer science background, I
          get to solve real problems for real people while making things
          feel intuitive and accessible. 🪻 I'm all about learning, growing,
          and bouncing ideas around with others. My goal is to become a
          designer and engineer who actually bridges the gap between
          beautiful design and solid code.
        </p>
      </div>
      <Skills hideBio />
    </div>
  );
}
