import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/icons/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        lg: "1150px",
      },
      fontFamily: {
        Inter: ["var(--font-inter)"],
      },
      colors: {
        primary: "#34CAA5",
        secondary: "#3A3F51",
        success: "#66C87B",
        error: "#ED544E",
        purple: "#6160DC",
        blue: "#54C5EB",
        yellow: "#FFB74A",
        red: "#FF4A55",
      },
      backgroundImage: {
        "gradient-new":
          "linear-gradient(180deg, #34CAA5 0%, rgba(52, 202, 165, 0.00) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
