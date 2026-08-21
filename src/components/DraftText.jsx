// Wraps copy that hasn't been written yet so it reads as an intentional
// margin note, not finished prose or a bug.
export default function DraftText({ children, className = "" }) {
  return (
    <div className={className}>
      <p className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide text-ink-faint mb-1.5">
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="-rotate-12 shrink-0"
          aria-hidden="true"
        >
          <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
        </svg>
        draft
      </p>
      <p className="italic text-ink-soft">{children}</p>
    </div>
  );
}
