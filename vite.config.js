import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      provider: "v8",
      reporter: ["text"],
      reportsDirectory: "./src/spec/coverage",
      exclude: ["**/*config*.*"],
    },
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/spec/setupTest.js",
    testMatch: ["./src/spec/**/*.spec.jsx"],
  },
});
