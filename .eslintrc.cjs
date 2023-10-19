module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "@typescript-eslint/no-explicit-any": ["warn"],
    "@typescript-eslint/ban-ts-comment": ["error"],
    "@typescript-eslint/no-namespace": ["warn"],
    "@typescript-eslint/no-empty-function": 0,
    "react-hooks/exhaustive-deps": ["error"],
    "react/react-in-jsx-scope": 0,
  },
};
