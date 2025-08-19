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
      },
      fontFamily: {
        'cinzel': ['Cinzel', 'serif'],
        'figtree': ['Figtree', 'sans-serif'],
        'quiche': ['Italiana', 'serif'],
        'proxima': ['Proxima Nova', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      screens: {
      xs: "450px",
      md1: "920px",
    },
    },
    
  },
  plugins: [],
};
export default config;
