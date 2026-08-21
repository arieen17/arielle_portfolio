import DraftText from "../components/DraftText";

export default function Contact() {
  return (
    <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28">
      <p className="font-mono text-[11px] text-indigo tracking-[0.16em] mb-4">
        FIELD NOTES · GET IN TOUCH
      </p>
      <h1 className="font-serif text-4xl md:text-5xl mb-6">Contact</h1>
      <p className="text-[17px] leading-relaxed text-ink-soft max-w-lg mb-8">
        Have a project, a role, or just a question? The fastest way to reach
        me is directly.
      </p>

      <div className="flex flex-wrap gap-4 mb-10">
        <a
          href="https://www.linkedin.com/in/arielle-haryanto/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded font-mono text-[13px] border border-line px-4 py-2 transition-colors hover:bg-indigo hover:border-indigo hover:text-cream active:scale-[0.97] duration-150 ease-out motion-reduce:active:scale-100"
        >
          linkedin ↗
        </a>
        <a
          href="https://github.com/arieen17"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded font-mono text-[13px] border border-line px-4 py-2 transition-colors hover:bg-indigo hover:border-indigo hover:text-cream active:scale-[0.97] duration-150 ease-out motion-reduce:active:scale-100"
        >
          github ↗
        </a>
        <a
          href="mailto:arielleharyanto@gmail.com"
          className="inline-flex items-center gap-2 rounded font-mono text-[13px] border border-line px-4 py-2 transition-colors hover:bg-indigo hover:border-indigo hover:text-cream active:scale-[0.97] duration-150 ease-out motion-reduce:active:scale-100"
        >
          email ↗
        </a>
        <a
          href="/Arielle_Haryanto_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded font-mono text-[13px] border border-line px-4 py-2 transition-colors hover:bg-indigo hover:border-indigo hover:text-cream active:scale-[0.97] duration-150 ease-out motion-reduce:active:scale-100"
        >
          resume ↗
        </a>
      </div>

      <DraftText className="max-w-md">
        A proper contact form is on the way. For now, email is the most
        direct route.
      </DraftText>
    </div>
  );
}
