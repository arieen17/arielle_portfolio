// A fixed left-edge binding, mirroring the ScrollRibbon on the right —
// the two together read as a bound book, not just a page floating on cream.
export default function BookSpine() {
  return (
    <div
      className="fixed left-0 top-0 h-full w-4 z-40 pointer-events-none hidden sm:block bg-indigo-deep shadow-[2px_0_10px_rgba(0,0,0,0.25)]"
      aria-hidden="true"
    >
      <div className="h-full flex flex-col justify-evenly items-center py-10">
        {Array.from({ length: 18 }).map((_, i) => (
          <div key={i} className="w-1.5 h-px bg-gold-tint/60" />
        ))}
      </div>
    </div>
  );
}
