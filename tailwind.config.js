/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F5F0E9",
          card: "#D9CBC2",
        },
        ink: {
          DEFAULT: "#201F1C",
          soft: "#5F5C54",
          faint: "#6B675E",
        },
        indigo: {
          DEFAULT: "#3C507D",
          deep: "#112250",
          tint: "#E3E7ED",
          soft: "#4B5E87",
        },
        gold: {
          DEFAULT: "#7D5E30",
          tint: "#E0C58F",
        },
        terracotta: {
          DEFAULT: "#A34526",
          deep: "#7A3319",
          tint: "#F3E4D9",
          soft: "#7F4630",
        },
        line: "#E7DDD5",
      },
      fontFamily: {
        serif: ["'Fraunces'", "Georgia", "serif"],
        sans: ["'Bricolage Grotesque'", "system-ui", "sans-serif"],
        mono: ["'Space Mono'", "ui-monospace", "monospace"],
        hand: ["'Caveat'", "cursive"],
      },
      maxWidth: {
        content: "1160px",
      },
    },
  },
  plugins: [],
};
