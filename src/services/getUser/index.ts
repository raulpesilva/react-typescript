import { coreApi, mockCoreApi } from 'api';

export const getUser = async (id: string) => {
  const { data } = await coreApi.get(`users/${id}`);
  return data;
};

export const mockGetUser = mockCoreApi.get('users/:id', (_req, res, ctx) => {
  return res(ctx.json({ name: 'Raul', id: 0 }));
});

export const testGetUser = mockCoreApi.get('users/:id', (_req, res, ctx) => {
  return res(ctx.json({ name: 'Raul', id: 1 }));
});
