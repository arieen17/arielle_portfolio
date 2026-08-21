import { useId } from "react";

// Image slot for a project cover that hasn't been shot/exported yet.
// Reads as an intentional "not yet" state, not a broken image.
const accentText = {
  terracotta: "text-terracotta-soft",
  indigo: "text-indigo",
};

const accentBorder = {
  terracotta: "border-terracotta-soft",
  indigo: "border-indigo",
};

export default function CoverPlaceholder({
  label = "cover",
  compact = false,
  accent = null,
  sticker = false,
  hideTape = false,
  image = null,
  imageAlt = "",
  className = "",
}) {
  const patternId = `cover-hatch-${useId()}`;
  const iconTextClass = accentText[accent] ?? "text-ink-faint";
  const stickerBorderClass = accentBorder[accent] ?? "border-indigo";

  return (
    <div
      className={`relative overflow-hidden border border-line bg-cream-card ${className}`}
    >
      {!compact && !hideTape && (
        <div
          className="absolute -top-2 left-10 -rotate-3 w-16 h-5 bg-indigo-tint/80 border border-indigo-tint z-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(47,76,115,0.08) 0, rgba(47,76,115,0.08) 2px, transparent 2px, transparent 6px)",
          }}
          aria-hidden="true"
        />
      )}

      {image ? (
        <img src={image} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <>
          <svg
            className="absolute inset-0 h-full w-full text-line"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id={patternId}
                width="10"
                height="10"
                patternTransform="rotate(45)"
                patternUnits="userSpaceOnUse"
              >
                <line x1="0" y1="0" x2="0" y2="10" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${patternId})`} opacity="0.5" />
          </svg>

          <div className="relative flex h-full w-full flex-col items-center justify-center gap-2 px-4 text-center">
            <svg
              width={compact ? 18 : 28}
              height={compact ? 18 : 28}
              viewBox="0 0 28 28"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              className={iconTextClass}
              aria-hidden="true"
            >
              <rect x="1.5" y="4.5" width="25" height="19" rx="1.5" />
              <circle cx="9" cy="11" r="2.25" />
              <path d="M2.5 20.5l6.5-6.5 4 4 5-6 8.5 8.5" />
            </svg>
            {!compact && (
              <span className={`font-mono text-[11px] uppercase tracking-wide ${iconTextClass}`}>
                {label} · coming soon
              </span>
            )}
          </div>
        </>
      )}

      {!compact && sticker && (
        <div
          className={`sticker-badge absolute bottom-3 right-3 z-10 flex h-12 w-12 rotate-[9deg] items-center justify-center rounded-full border-2 border-dashed bg-cream ${stickerBorderClass}`}
          aria-hidden="true"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className={iconTextClass}
          >
            <path d="M12 2l2.9 6.26L21 9.27l-4.5 4.39L17.8 21 12 17.77 6.2 21l1.3-7.34L3 9.27l6.1-1.01L12 2z" />
          </svg>
        </div>
      )}
    </div>
  );
}
