export default {
  "**/*.{ts,tsx}": ["pnpm run organize-imports", "pnpm run lint", "pnpm run format:write"],
};
