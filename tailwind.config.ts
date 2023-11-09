import tailwindForms from "@tailwindcss/forms";
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Ropa Sans", "sans-serif"],
    },
    fontSize: {
      xs: "11px",
      sm: "12px",
      base: "14px",
      lg: "16px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "30px",
      "4xl": "36px",
      "5xl": "48px",
    },
    extend: {
      colors: {
        "cloud-burst": {
          "50": "#e9eaed",
          "100": "#d3d4db",
          "200": "#a8a9b7",
          "300": "#7c7e92",
          "400": "#51536e",
          "500": "#25284a",
          "600": "#1e203b",
          "700": "#16182c",
          "800": "#0f101e",
          "900": "#07080f",
        },
        indigo: {
          850: "#303465",
          550: "#4C5190",
        },
        dim: "#B1B1B1",
        bright: "#FDFDFD",
        high: "#FF248E",
        medium: "#FFA653",
        low: "#00E794",
        compliance: {
          unknown: "#BFBFBF",
          bad: "#FF5353",
          medium: "#FFA653",
          good: "#00E794",
        },
      },
    },
  },
  plugins: [daisyui, tailwindForms],
  daisyui: {
    themes: [
      {
        cf: {
          primary: "#693CFA",
          secondary: "#FF248E",
          accent: "#0FB5AE",
          neutral: "#B7A0FF",
          "base-100": "red",
          "base-200": "#26284A",
          "base-300": "#222545",
          "base-content": "#AAA",
          info: "#3abff8",
          success: "#00E794",
          warning: "#FFA653",
          error: "#FF5353",
        },
      },
    ],
  },
} satisfies Config;
