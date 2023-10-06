import { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
      fontFamily: {
        'sans': ['Ropa Sans', 'sans-serif']
      }
  },
  plugins: [require("@tailwindcss/forms"), require("daisyui")],
} satisfies Config;
