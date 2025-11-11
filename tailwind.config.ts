import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        border: "var(--border)",
        card: "var(--card)",
      },
      boxShadow: {
        glow: "0 10px 40px rgba(0, 245, 212, 0.18)",
      },
      transitionTimingFunction: {
        "soft-spring": "cubic-bezier(0.2, 0.8, 0.2, 1)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
