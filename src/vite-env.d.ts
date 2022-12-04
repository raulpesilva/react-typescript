/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly BASE_URL: string;
  readonly DEV: boolean;
  readonly TEST: boolean;
  readonly PROD: boolean;
  readonly SSR: boolean;
  readonly MODE: 'test' | 'development' | 'staging' | 'production' | 'mock' | 'e2e';
  readonly VITE_RUNTIME_ENV: 'test' | 'development' | 'staging' | 'production' | 'mock' | 'e2e';
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
