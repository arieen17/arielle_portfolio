import { useEffect, useState } from "react";

const taglines = [
  "Coffee Enthusiast ☕",
  "Sketchbook Hoarder ✏️",
  "Late-Night Debugger 🐛",
  "Sticky Note Addict 📌",
  "Curious by Default 🔍",
];

export default function TaglineRotator() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion || paused) return;

    let swapTimeout;
    const interval = setInterval(() => {
      setVisible(false);
      swapTimeout = setTimeout(() => {
        setIndex((i) => (i + 1) % taglines.length);
        setVisible(true);
      }, 300);
    }, 2200);
    return () => {
      clearInterval(interval);
      clearTimeout(swapTimeout);
    };
  }, [paused]);

  return (
    <p
      className="font-mono text-[13px] text-ink-soft mt-3"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      filed under:{" "}
      <span
        className={`text-indigo transition-opacity duration-300 motion-reduce:transition-none ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {taglines[index]}
      </span>
    </p>
  );
}
