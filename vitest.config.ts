import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom", // Ensure jsdom is set as the test environment for React tests
    setupFiles: "./src/setupTests.ts", // Adjust the path if needed
    coverage: {
      reporter: ['text', 'lcov'], // Enables coverage reporting
    },
  },
});
