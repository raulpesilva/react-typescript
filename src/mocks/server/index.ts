import { setupServer } from 'msw/node';
import { configureHandlers } from 'utils';

export const configureServer = async (type: Parameters<typeof configureHandlers>[0]) => {
  const handlers = await configureHandlers(type);
  if (!handlers.length) return;
  const server = setupServer(...handlers);

  return server;
};
