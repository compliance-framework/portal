import { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
      fontFamily: {
        'sans': ['Ropa Sans', 'sans-serif']
      },
      extend: {
          colors: {
              'cloud-burst': {
                  "50": "#e9eaed",
                  "100": "#d3d4db",
                  "200": "#a8a9b7",
                  "300": "#7c7e92",
                  "400": "#51536e",
                  "500": "#25284a",
                  "600": "#1e203b",
                  "700": "#16182c",
                  "800": "#0f101e",
                  "900": "#07080f"
              },
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
