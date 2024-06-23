import { HttpHandler } from 'msw';

export const configureHandlers = async (type: 'test' | 'mock' = 'mock') => {
  const MOCKS = import.meta.glob<any>(['/src/services/**/*[^test].ts']);
  const paths = Object.keys(MOCKS).filter((k) => k === '/src/services/index.ts');
  const functions = await Promise.all(
    paths.map(async (path) => {
      const modules = await MOCKS[path]();
      const keys = Object.keys(modules);
      const handlers = keys.filter((k) => k.includes(type));
      return handlers.map((h) => modules[h]);
    })
  );
  const flattenHandlers = functions.flat();
  const handlers = flattenHandlers.filter((h) => h instanceof HttpHandler);
  return handlers;
};
