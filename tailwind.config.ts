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
      },
    },
  },
  plugins: [],
};
export default config;
