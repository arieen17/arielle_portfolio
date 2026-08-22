export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-content mx-auto pl-6 pr-6 sm:pr-14 md:pl-10 md:pr-20 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="font-mono text-[11px] text-ink-faint">
          © {new Date().getFullYear()} Arielle Haryanto
        </p>
        <div className="flex gap-5 font-mono text-[13px] text-ink-soft">
          <a
            href="mailto:arielleharyanto@gmail.com"
            className="link-underline [--link-underline-offset:6px] -my-2 py-2 hover:text-indigo transition-colors"
          >
            email
          </a>
          <a
            href="https://www.linkedin.com/in/arielle-haryanto/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline [--link-underline-offset:6px] -my-2 py-2 hover:text-indigo transition-colors"
          >
            linkedin
          </a>
          <a
            href="https://github.com/arieen17"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline [--link-underline-offset:6px] -my-2 py-2 hover:text-indigo transition-colors"
          >
            github
          </a>
        </div>
      </div>
    </footer>
  );
}
