export default {
  "**/*.{ts,tsx}": ["organize-imports-cli", "pnpm run lint", "pnpm run format:write"],
};
