/// <reference types="vitest" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsConfigPaths(), react()],
  envDir: './src/environments',
  envPrefix: 'VITE_',
  json: { namedExports: true },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test.config.ts',
    include: ['./src/**/*.test.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'],
    coverage: { provider: 'v8', exclude: ['./src/_e2e/**'] },
  },
});
