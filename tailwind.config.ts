import { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Abel", "sans-serif"],
    },
    colors: {
      risk: {
        low: "#FFFF50",
        medium: "#FFA653",
        high: "#FF258E",
      },
      compliance: {
        unknown: "#BFBFBF",
        bad: "#FF5353",
        medium: "#FFA653",
        good: "#00E794",
      },
    },
    extend: {
      fontSize: {
        xs: "11px",
        sm: "12px",
        base: "14px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "30px",
        "4xl": "36px",
        "5xl": "48px",
      },
      colors: {
        indigo: {
          600: "#303465",
          800: "#4C5190",
        },
        neutral: {
          350: "#B1B1B1",
          180: "#E8E8E8",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("daisyui")],
  daisyui: {
    themes: [
      {
        cf: {
          primary: "#693CFA",
          secondary: "#FF248E",
          accent: "#0FB5AE",
          neutral: "#222545",
          "base-100": "red",
          "base-200": "#26284A",
          "base-300": "#222545",
          "base-content": "#FDFDFD",
          info: "#3abff8",
          success: "#00E794",
          warning: "#FFA653",
          error: "#FF5353",
        },
      },
    ],
  },
} satisfies Config;
