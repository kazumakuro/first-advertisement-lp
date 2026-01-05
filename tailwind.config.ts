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
        primary: {
          50: "#FFF5F7",
          100: "#FFE4E9",
          200: "#FFCCD6",
          300: "#FFB6C1",
          400: "#FFA0B0",
          500: "#FF8FA3",
          600: "#FF6B88",
          700: "#FF4D75",
          800: "#FF2F62",
          900: "#E6004C",
        },
        secondary: {
          50: "#FFFEF5",
          100: "#FFFACD",
          200: "#FFF9B8",
          300: "#FFF4B0",
          400: "#FFF29E",
          500: "#FFEF8C",
          600: "#FFE66B",
          700: "#FFD94A",
          800: "#FFC929",
          900: "#E6B100",
        },
        accent: {
          50: "#F0FFF4",
          100: "#C6F6D5",
          200: "#B0E0D4",
          300: "#A8E6CF",
          400: "#8DD9BF",
          500: "#72CCAF",
          600: "#4DB89D",
          700: "#2A9D8F",
          800: "#168776",
          900: "#047857",
        },
        cream: {
          50: "#FFFEF0",
          100: "#FFF8E7",
          200: "#FFF4DC",
          300: "#FFF0D1",
          400: "#FFECC6",
          500: "#FFE8BB",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
