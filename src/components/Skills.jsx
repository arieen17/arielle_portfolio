const groups = [
  {
    label: "design",
    items: [
      "User research",
      "Visual design",
      "Interaction design",
      "Design systems",
      "Usability testing",
    ],
  },
  {
    label: "engineering",
    items: ["React", "Full-stack development", "ERD / UML", "C#", "Figma → code"],
  },
];

export default function Skills() {
  return (
    <section id="about" className="border-t border-line">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28">
        <p className="font-mono text-[11px] text-indigo tracking-wide mb-4">
          MARGIN NOTES · ABOUT
        </p>
        <h2 className="font-serif text-3xl md:text-4xl max-w-xl leading-tight">
          Comfortable moving between a whiteboard and a codebase.
        </h2>
        <p className="mt-6 max-w-xl text-ink-soft">
          Design and web development have always pulled at her in equal
          measure, and UI/UX is where the two meet. A computer science
          background lets her solve real problems for real people while
          keeping the result intuitive and accessible. She's always
          learning, bouncing ideas around with others, and working toward
          becoming a designer and engineer who actually bridges that gap
          rather than picking one side.
        </p>

        <div className="mt-14 grid md:grid-cols-2 gap-10">
          {groups.map((group) => (
            <div key={group.label}>
              <p className="font-mono text-[11px] text-ink-faint mb-4 italic">
                tools reached for: {group.label}
              </p>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-[15px] border-b border-line pb-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="font-hand text-xl text-ink-soft rotate-[-1deg] mt-8">
          (still adding to this list...)
        </p>
      </div>
    </section>
  );
}
