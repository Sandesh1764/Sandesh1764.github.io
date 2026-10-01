import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f7f7f5",
          100: "#eeeee9",
          200: "#d9d9d0",
          300: "#b8b8ab",
          400: "#8f8f82",
          500: "#6f6f64",
          600: "#58584f",
          700: "#474741",
          800: "#2f2f2b",
          900: "#1c1c19",
          950: "#111110",
        },
        accent: {
          DEFAULT: "#1e4d6b",
          soft: "#2a6a8f",
          muted: "#d7e4ec",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "Times New Roman", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
        content: "72rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(17,17,16,0.04), 0 8px 24px rgba(17,17,16,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
