import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: { "2xl": "1320px" }
    },
    extend: {
      colors: {
        background: "#0A0A0A",
        foreground: "#FAFAFA",
        muted: { DEFAULT: "#1A1A1A", foreground: "#A3A3A3" },
        border: "#262626",
        input: "#262626",
        ring: "#00FF85",
        accent: { DEFAULT: "#00FF85", foreground: "#0A0A0A" },
        primary: { DEFAULT: "#00FF85", foreground: "#0A0A0A" },
        secondary: { DEFAULT: "#1A1A1A", foreground: "#FAFAFA" },
        destructive: { DEFAULT: "#ef4444", foreground: "#FAFAFA" },
        card: { DEFAULT: "#0F0F0F", foreground: "#FAFAFA" },
        popover: { DEFAULT: "#0F0F0F", foreground: "#FAFAFA" }
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-archivo-black)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"]
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.375rem"
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" }
        }
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out forwards",
        marquee: "marquee 40s linear infinite"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
