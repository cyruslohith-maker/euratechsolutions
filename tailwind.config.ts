import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        eura: {
          black: "#09090B",
          charcoal: "#18181B",
          white: "#FFFFFF",
          border: "#E4E4E7",
          muted: "#71717A",
          "muted-dark": "#3F3F46",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      backgroundImage: {
        "grid-eura": `
          linear-gradient(to right, rgba(228,228,231,0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(228,228,231,0.08) 1px, transparent 1px)
        `,
        "grid-eura-light": `
          linear-gradient(to right, rgba(9,9,11,0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(9,9,11,0.05) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        "slide-in": "slideIn 0.5s ease-out forwards",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-16px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
