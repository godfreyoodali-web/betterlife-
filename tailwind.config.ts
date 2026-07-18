import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#16202B",
        paper: "#ECEAE2",
        paperlight: "#F5F3EC",
        pine: "#1F6F54",
        pinedark: "#154C39",
        gold: "#C99A2E",
        rust: "#B4472A",
        line: "#D8D3C4",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "ledger-lines":
          "repeating-linear-gradient(to bottom, transparent, transparent 2.15rem, rgba(22,32,43,0.06) 2.15rem, rgba(22,32,43,0.06) calc(2.15rem + 1px))",
      },
    },
  },
  plugins: [],
};
export default config;
