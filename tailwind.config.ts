import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        sand: "#f7f3ee",
        ink: "#161616",
        stone: "#6f6b65",
        accent: "#b67a45",
        accentDark: "#8f5f34",
        surface: "#fffdfa",
        line: "#e7ded2"
      },
      boxShadow: {
        soft: "0 20px 50px rgba(22, 22, 22, 0.08)"
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top left, rgba(182, 122, 69, 0.22), transparent 32%), radial-gradient(circle at 80% 0%, rgba(22, 22, 22, 0.08), transparent 22%)"
      },
      fontFamily: {
        sans: ["var(--font-manrope)"],
        display: ["var(--font-cormorant)"]
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        rise: "rise 0.7s ease-out both"
      }
    }
  },
  plugins: []
};

export default config;
