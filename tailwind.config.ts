import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        paper: "hsl(40, 30%, 97.5%)",
        paperTransparent: "hsla(40, 30%, 97.5%, 80%)",
      },
    },
  },
  plugins: [],
};
export default config;
