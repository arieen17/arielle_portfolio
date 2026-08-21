export default function StatBar({ label, value, colorClass = "bg-terracotta" }) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-1.5">
        <span className="font-mono text-[11px] text-ink-soft">{label}</span>
        <span className="font-mono text-[11px] text-ink-faint">{value}%</span>
      </div>
      <div className="h-1.5 w-full bg-line/60 overflow-hidden">
        <div className={`h-full ${colorClass}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
