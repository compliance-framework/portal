import { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
      fontFamily: {
        'sans': ['Ropa Sans', 'sans-serif']
      },
      extend: {
          colors: {
              'default-text-color': '#333',
              dim: '#B1B1B1',
              bright: '#FDFDFD',
              high: '#FF248E',
              medium: '#FFA653',
              low: '#00E794',
              neutral: '#B7A0FF'
          }
      }
  },
  plugins: [require("@tailwindcss/forms"), require("daisyui")],
} satisfies Config;
