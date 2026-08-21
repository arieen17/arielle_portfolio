import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header className="border-b border-line bg-ruled">
      <div className="max-w-content mx-auto pl-6 pr-6 sm:pr-14 md:pl-10 md:pr-20 py-5 flex items-center justify-between">
        <Link
          to="/"
          className="font-serif text-lg tracking-tight hover:text-indigo transition-colors"
        >
          Arielle Haryanto
        </Link>
        <nav className="flex items-center gap-6 font-mono text-[13px] text-ink-soft">
          <Link
            to="/work"
            className="link-underline [--link-underline-offset:-4px] -my-2 py-2 hover:text-ink transition-colors"
          >
            work
          </Link>
          <Link
            to="/about"
            className="link-underline [--link-underline-offset:-4px] -my-2 py-2 hover:text-ink transition-colors"
          >
            about
          </Link>
          <Link
            to="/contact"
            className="link-underline [--link-underline-offset:-4px] -my-2 py-2 hover:text-ink transition-colors"
          >
            contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
