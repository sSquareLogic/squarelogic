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
        WHITE: "#F2F2F2",
        BLACK: "#181818",
        GRAY: "rgba(0, 0, 0, 0.6)",
        ACCENT: "#AAEEC4",
        NAV: "rgba(77, 77, 77, 0.85)",
      },
      gridTemplateColumns: {
        ABOUT: "40% 60%",
        TWO: "repeat(2, 1fr)",
        THREE: "repeat(3, 1fr)",
      },
    },
  },
  plugins: [],
};
export default config;
