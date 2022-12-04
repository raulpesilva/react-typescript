import { RestHandler } from 'msw';

export const configureHandlers = async (type: 'test' | 'mock' = 'mock') => {
  const MOCKS = import.meta.glob<any>(['/src/services/**/[\\w[]*.{jsx,ts}']);
  const paths = Object.keys(MOCKS);
  const functions = await Promise.all(
    paths.map(async (path) => {
      const modules = await MOCKS[path]();
      const keys = Object.keys(modules);
      const handlers = keys.filter((k) => k.includes(type));
      return handlers.map((h) => modules[h]);
    })
  );
  const flattenHandlers = functions.flat();
  const handlers = flattenHandlers.filter((h) => h instanceof RestHandler);
  return handlers;
};
