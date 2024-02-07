import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        INTER: ["--INTER", ...fontFamily.sans],
      },
      colors: {
        WHITE: "#F8F8F8",
        GRAY: "#E9E9E9",
        BLACK: "#222",
        BLACK2: "#3E3E3E",
        BLACK3: "#4D4D4D",
        LIGHTBLACK: "#272727",
        OPAQUE: "rgba(0, 0, 0, 0.6)",
        ACCENT: "#AAEEC4",
        NAV: "rgba(77, 77, 77, 0.85)",
      },
      gridTemplateColumns: {
        ABOUT: "20% auto",
        THIRTEE: "30% auto",
        TWO: "repeat(2, 1fr)",
        THREE: "repeat(3, 1fr)",
      },
    },
  },
  plugins: [],
};
export default config;
