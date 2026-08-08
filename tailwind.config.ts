import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#172033",
        muted: "#5c6576",
        line: "#e7e2d8",
        paper: "#fbfaf7",
        navy: "#0f2746",
        gold: "#c99632",
        sage: "#53766a",
        coral: "#be5b45"
      },
      boxShadow: {
        soft: "0 24px 70px rgba(15, 39, 70, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
