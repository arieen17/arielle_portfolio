import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="max-w-content mx-auto px-6 md:px-10 py-28 md:py-36 text-center">
      <p className="font-mono text-[11px] text-indigo tracking-wide mb-4">
        ENTRY NOT FOUND
      </p>
      <h1 className="font-serif text-3xl md:text-4xl mb-4">
        This page isn't in the journal.
      </h1>
      <p className="text-ink-soft max-w-md mx-auto mb-8">
        The entry you're looking for doesn't exist, or the link may be out of
        date.
      </p>
      <Link
        to="/"
        className="font-mono text-[13px] border border-line px-4 py-2 rounded hover:bg-indigo hover:border-indigo hover:text-cream active:scale-[0.97] transition-[color,background-color,border-color,transform] duration-150 motion-reduce:transition-colors"
      >
        ← back to the journal
      </Link>
    </div>
  );
}
