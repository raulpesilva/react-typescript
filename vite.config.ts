/// <reference types="vitest" />

import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    define: { __APP_ENV__: env.APP_ENV },
    plugins: [tsConfigPaths(), react()],
    envDir: './src/environments',
    envPrefix: 'VITE_',
    json: { namedExports: true },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/test.config.ts',
      include: ['./src/**/*.test.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'],
      coverage: {
        exclude: ['./src/_e2e/**'],
      },
    },
  };
});
