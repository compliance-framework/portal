export default {
  "**/*.{ts,tsx}": ["yarn lint", "yarn prettier format:write", "yarn tsc"],
};
