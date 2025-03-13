import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        // DEFAULT: ['20px', '20px']
        DEFAULT: ['26px', '20px'],
        "base": ['26px', '20px'],
        // '3xl': '2rem',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        DEFAULT: "24px"
      }
    },
  },
  plugins: [],
} satisfies Config;
