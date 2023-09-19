/** @type {import("prettier").Config} */
const config = {
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  printWidth: 120,
  trailingComma: "all",
  bracketSpacing: true,
  bracketSameLine: true,
  arrowParens: "avoid",
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
