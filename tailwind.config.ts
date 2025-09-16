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
        background: "#ffffff",
        foreground: "#ffffff",
        primary: "#051E33",
        secondary: "#596b82",
        tertiary: "#1e76bf",
        accent: "#d2ae6d",
        neutral: "#e7eaee",
        headerText: "#f3f6fa",

        /* Metal colors */
        'gold': "hsl(var(--gold))",
        'platinum': "hsl(var(--platinum))",
        'titanium': "hsl(var(--titanium))",
        'silver': "hsl(var(--silver))",
        'stainless': "hsl(var(--stainless))",

         /* Tag colors */
        'tag-sale': "hsl(var(--tag-sale))",
        'tag-sale-bg': "hsl(var(--tag-sale-bg))",
        'tag-new': "hsl(var(--tag-new))",
        'tag-new-bg': "hsl(var(--tag-new-bg))",
        'tag-toprated': "hsl(var(--tag-toprated))",
        'tag-toprated-bg': "hsl(var(--tag-toprated-bg))",
      },
      backgroundImage: {
        'gradient-tri-gold': 'conic-gradient(from 0deg, #ffb9a2 0deg 120deg, #cbc6c0 120deg 240deg, #ffb91d 240deg 360deg)',
      },
      fontFamily: {
        'cinzel': ['Cinzel', 'serif'],
        'figtree': ['Figtree', 'sans-serif'],
        'quiche': ['Quiche Display', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      screens: {
      xs: "450px",
      md1: "920px",
    },
    keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    
  },
  plugins: [],
};
export default config;
