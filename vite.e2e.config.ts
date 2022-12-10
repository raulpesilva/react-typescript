/// <reference types="vitest" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsConfigPaths()],
  envDir: './src/environments',
  envPrefix: 'VITE_',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test.config.ts',
    include: ['./src/**/*.spec.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'],
    coverage: {
      exclude: ['./src/_e2e/**'],
    },
  },
});
