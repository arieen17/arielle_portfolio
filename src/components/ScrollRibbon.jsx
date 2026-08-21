import { useEffect, useState } from "react";

export default function ScrollRibbon() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);
      ticking = false;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 right-4 md:right-8 h-full w-0 z-40 pointer-events-none hidden sm:block"
      aria-hidden="true"
    >
      {/* thin trailing thread from the top, tracing where the ribbon has been */}
      <div
        className="absolute top-0 left-0 h-full w-px -translate-x-1/2 bg-indigo/40 transition-[clip-path] duration-150 ease-out motion-reduce:transition-none"
        style={{ clipPath: `inset(0 0 ${(1 - progress) * 100}% 0)` }}
      />

      {/* the ribbon tab, fixed size, sliding down the thread to mark the current position */}
      <div
        className="absolute left-0 w-6 h-16 -translate-x-1/2 bg-indigo shadow-sm transition-[top] duration-150 ease-out motion-reduce:transition-none"
        style={{
          top: `calc(${progress * 100}% - 18px)`,
          clipPath: "polygon(0 0, 100% 0, 100% 82%, 50% 100%, 0 82%)",
        }}
      >
        {/* gilded edge trim */}
        <div className="absolute inset-y-0 left-0 w-[1.5px] bg-gold-tint" />
        <div className="absolute inset-y-0 right-0 w-[1.5px] bg-gold-tint" />
        {/* fold crease */}
        <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-indigo-deep/30" />
        {/* stitch marks near the top */}
        <div className="absolute top-2 left-1/2 h-px w-2.5 -translate-x-1/2 bg-gold-tint/70" />
        <div className="absolute top-4 left-1/2 h-px w-2.5 -translate-x-1/2 bg-gold-tint/70" />
      </div>
    </div>
  );
}
