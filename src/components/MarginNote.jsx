// A short handwritten aside, sized to sit in a case-study's label column.
// Unlike other Caveat moments (capped at one per page), Margin Notes are
// allowed to repeat within a single case study — see DESIGN.md.
export default function MarginNote({ children, accent = "terracotta", className = "" }) {
  const tint = accent === "terracotta" ? "bg-terracotta-tint" : "bg-indigo-tint";
  const label = accent === "terracotta" ? "text-terracotta-soft" : "text-indigo-soft";

  return (
    <div className={`hidden md:block ${className}`}>
      <div className={`inline-block -rotate-2 ${tint} px-3 py-2.5 shadow-sm max-w-[168px]`}>
        <p className={`font-mono text-[11px] uppercase tracking-wide ${label} mb-1`}>
          margin note
        </p>
        <p className="font-hand text-lg leading-snug text-ink">{children}</p>
      </div>
    </div>
  );
}
