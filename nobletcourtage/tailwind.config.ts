import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderWidth: {
      "3": "3px"
    },
    gridTemplateColumns: {
      "cols3auto" : "auto auto auto"
    },
    gridRow: {
      "row1": "1",
    },
    gridColumn: {
      "col1": "1",
    },
    extend: {
      fontFamily: {
        body: ["var(--font-lora)"],
        display: ["var(--font-mulish)"],
      },
      height: {
        "50": "50px",
      },
    },
  },
  plugins: [],
};
export default config;
