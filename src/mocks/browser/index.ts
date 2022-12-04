import { setupWorker } from 'msw';
import { configureHandlers } from 'utils';

export const configureWorker = async (type: Parameters<typeof configureHandlers>[0]) => {
  const handlers = await configureHandlers(type);
  if (!handlers.length) return;
  const worker = setupWorker(...handlers);
  worker.start();
};
