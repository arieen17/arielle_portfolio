// The one full-size handwritten reflection at the end of a case study —
// always the writer's real reflection, never invented. A distinct component
// from MarginNote (its smaller, repeatable sibling for in-section callouts)
// even though both use the same tinted-paper-and-Caveat treatment.
export default function StickyNote({ children, accent = "terracotta", className = "" }) {
  const tint = accent === "terracotta" ? "bg-terracotta-tint" : "bg-indigo-tint";
  const label = accent === "terracotta" ? "text-terracotta-soft" : "text-indigo-soft";

  return (
    <div className={`max-w-content mx-auto px-6 md:px-10 py-16 md:py-20 ${className}`}>
      <div className={`inline-block max-w-sm -rotate-2 ${tint} px-6 py-5 shadow-sm`}>
        <p className={`font-mono text-[11px] uppercase tracking-wide ${label} mb-2`}>
          sticky note
        </p>
        <p className="font-hand text-2xl leading-snug text-ink">{children}</p>
      </div>
    </div>
  );
}
