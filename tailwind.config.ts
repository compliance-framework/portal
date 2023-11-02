import { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Ropa Sans", "sans-serif"],
    },
    colors: {
      indigo: {
        600: "#303465",
        800: "#4C5190",
      },
      risk: {
        low: "#FFFF50",
        medium: "#FFA653",
        high: "#FF258E",
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
          "neutral-content": "#B1B1B1",
          info: "#3abff8",
          success: "#00E794",
          warning: "#FFA653",
          error: "#FF5353",
        },
      },
    ],
  },
} satisfies Config;
