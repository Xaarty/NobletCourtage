import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'mini' : {"max": "450px"}
      },
      spacing: {
        "sm":"10px"
      },
      dropShadow: {
        "shadow1" : "5px 1px 4px 0 rgb(0, 0, 0, 0.75)"
      },
      fontFamily: {
        body: ["var(--font-lora)"],
        display: ["var(--font-mulish)"],
      },
      height: {
        "50": "50px",
        "100" : "100px"
      },
      width: {
        "84,6" : "84.6%"
      },
      marginBottom: {
        "5" : "5px"
      },
      padding: {
        "5" : "5px",
        "20" : "20px"
      },
      gap: {
        "5" : "5px",
        "21%" : "18%"
      },
      backgroundColor: {
        "darkgrey" : "rgb(217 217 217)"
      },
      borderWidth: {
        "3": "3px",
        "1" : "1px"
      },
      gridTemplateColumns: {
        "cols3auto" : "auto auto auto",
        "cols2auto" : "auto auto",
        "footer" : "auto auto",
        "cols5auto" : "auto auto auto auto auto auto"
      },
      gridTemplateRows: {
        "rows2auto" : "auto auto"
      },
      gridRow: {
        "row1": "1",
        "row2" : "2",
        "row3" : "3"
      },
      gridColumn: {
        "col1": "1",
      },
      fill: {
        "slate500": "#64748b"
      },
    },
  },
  plugins: [],
};
export default config;
