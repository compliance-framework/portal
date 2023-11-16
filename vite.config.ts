import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "happy-dom",
    globals: true,
    setupFiles: "./tests/setup.ts",
  },
  preview: {
    cors: false,
    host: "0.0.0.0",
    port: 8081,
    strictPort: true,
  },
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
          state: ["mobx", "mobx-react-lite", "mobx-state-tree"],
          charts: ["recharts", "react-gauge-chart-es"],
          i18n: ["i18next", "react-i18next"],
        },
      },
    },
  },
});
