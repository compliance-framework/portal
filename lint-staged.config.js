module.exports = {
  "**/*.{ts,tsx}": ["yarn lint", "yarn prettier format:write", "yarn tsc"],
};
