import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom', // for React tests
    coverage: {
      reporter: ['text', 'lcov'], // Enables coverage reporting
    },
  },
});
