import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const sections = [
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
];

export default function SectionTabs() {
  const [navVisible, setNavVisible] = useState(true);

  useEffect(() => {
    const header = document.querySelector("header");
    if (!header) return;
    const observer = new IntersectionObserver(
      ([entry]) => setNavVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed left-4 top-6 z-40 hidden lg:flex flex-col gap-3 transition-[opacity,transform] duration-200 ease-out motion-reduce:transition-none ${
        navVisible
          ? "opacity-0 -translate-x-2 pointer-events-none"
          : "opacity-100 translate-x-0"
      }`}
      aria-hidden={navVisible}
      aria-label="Jump to section"
    >
      {sections.map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          tabIndex={navVisible ? -1 : 0}
          className="group relative bg-indigo-tint border border-indigo/20 hover:bg-indigo hover:border-indigo focus-visible:bg-indigo focus-visible:border-indigo focus-visible:outline-none pl-4 pr-5 pt-3.5 pb-2.5 transition-[background-color,border-color,transform] duration-200 hover:translate-x-0.5 motion-reduce:transition-colors"
          style={{ clipPath: "polygon(8px 0, 100% 0, 100% 100%, 0 100%, 0 8px)" }}
        >
          <span className="font-mono text-[11px] uppercase tracking-wide text-indigo transition-colors group-hover:text-cream">
            {label}
          </span>
        </Link>
      ))}
    </div>
  );
}
