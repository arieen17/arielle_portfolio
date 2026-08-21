import { useEffect, useRef, useState } from "react";

// Front cover, then two ruled pages underneath — each rotates a touch less
// and a beat later than the one before it, so the whole thing cascades open
// like riffling through the first few pages, not one flat panel swinging.
const layers = [
  { rotate: -100, duration: 950, delay: 0 },
  { rotate: -94, duration: 880, delay: 160 },
  { rotate: -88, duration: 820, delay: 300 },
];

const script = { fontFamily: "'Dancing Script', cursive" };

export default function IntroCover() {
  const [write, setWrite] = useState(false);
  const [opening, setOpening] = useState(false);
  const [hidden, setHidden] = useState(false);
  const openingRef = useRef(false);
  const autoOpenTimer = useRef(null);
  const hideTimer = useRef(null);

  const finish = () => {
    setHidden(true);
    sessionStorage.setItem("journal-opened", "1");
  };

  const startOpening = () => {
    if (openingRef.current) return;
    openingRef.current = true;
    clearTimeout(autoOpenTimer.current);
    setOpening(true);
    hideTimer.current = setTimeout(finish, 1600);
  };

  const handleInteract = () => {
    if (!openingRef.current) startOpening();
    else finish();
  };

  useEffect(() => {
    // Skip the intro on internal navigations within the same tab session.
    if (sessionStorage.getItem("journal-opened")) {
      setHidden(true);
      return;
    }
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) {
      setHidden(true);
      sessionStorage.setItem("journal-opened", "1");
      return;
    }

    let raf = requestAnimationFrame(() => {
      raf = requestAnimationFrame(() => setWrite(true));
    });
    autoOpenTimer.current = setTimeout(startOpening, 4200);
    const onKey = () => handleInteract();
    window.addEventListener("keydown", onKey);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(autoOpenTimer.current);
      clearTimeout(hideTimer.current);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className="fixed inset-0 z-[100] cursor-pointer"
      style={{ perspective: "2200px" }}
      aria-hidden="true"
      onClick={handleInteract}
    >
      {layers.map((layer, i) => {
        const isCover = i === 0;
        return (
          <div
            key={i}
            className={`absolute inset-0 origin-left transition-transform ${
              isCover ? "bg-indigo-deep" : "bg-ruled border-l border-line"
            }`}
            style={{
              zIndex: layers.length - i,
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
              transform: opening ? `rotateY(${layer.rotate}deg)` : "rotateY(0deg)",
              transitionDuration: `${layer.duration}ms`,
              transitionDelay: opening ? `${layer.delay}ms` : "0ms",
              transitionTimingFunction: "cubic-bezier(0.65, 0, 0.35, 1)",
              boxShadow: isCover
                ? "10px 0 32px rgba(0,0,0,0.3)"
                : "6px 0 18px rgba(0,0,0,0.15)",
            }}
          >
            {isCover && (
              <>
                {/* page-block edge: the closed pages' thickness, seen along the right side */}
                <div className="absolute right-0 top-10 bottom-10 w-1 flex flex-col justify-between opacity-50">
                  {Array.from({ length: 12 }).map((_, j) => (
                    <div key={j} className="h-px bg-cream/70" />
                  ))}
                </div>

                {/* a light sweep across the cover as it turns, selling the paper material */}
                <div
                  className="absolute inset-0 transition-opacity"
                  style={{
                    background:
                      "linear-gradient(100deg, transparent 30%, rgba(255,255,255,0.14) 50%, transparent 70%)",
                    opacity: opening ? 1 : 0,
                    transitionDuration: `${layer.duration}ms`,
                    transitionDelay: opening ? `${layer.delay}ms` : "0ms",
                  }}
                />

                <div className="flex h-full items-center justify-center px-6">
                  <div
                    className="text-center transition-opacity duration-300"
                    style={{ opacity: opening ? 0 : 1 }}
                  >
                    <p
                      className="font-mono text-[11px] tracking-[0.2em] text-indigo-tint/70 mb-4"
                      style={{
                        opacity: write ? 1 : 0,
                        transition: "opacity 400ms ease-out",
                      }}
                    >
                      FIELD JOURNAL
                    </p>
                    <p className="text-2xl text-indigo-tint/90 mb-1">
                      <span
                        style={{
                          ...script,
                          fontWeight: 600,
                          display: "inline-block",
                          clipPath: write ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
                          transition: "clip-path 650ms cubic-bezier(0.65, 0, 0.35, 1) 300ms",
                        }}
                      >
                        Welcome to
                      </span>
                    </p>
                    <h2 className="text-5xl md:text-6xl leading-[1.5] py-2 text-cream">
                      <span
                        className="inline-block -rotate-1"
                        style={{
                          ...script,
                          fontWeight: 700,
                          clipPath: write ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
                          transition: "clip-path 850ms cubic-bezier(0.65, 0, 0.35, 1) 900ms",
                        }}
                      >
                        Arielle's Journal
                      </span>
                    </h2>
                    <div className="mt-6 mx-auto w-10 h-[2px] bg-indigo-tint/40" />
                    <p
                      className="mt-5 font-mono text-[10px] text-indigo-tint/45"
                      style={{
                        opacity: write ? 1 : 0,
                        transition: "opacity 500ms ease-out 1900ms",
                      }}
                    >
                      tap to open
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
