import { coreApi, mockCoreApi } from 'api';

export const getUser = async (id: string) => {
  const { data } = await coreApi.get(`users/${id}`);
  return data;
};

export const mockGetUser = mockCoreApi.get<{}, { id: string }>('users/:id', (req, res, ctx) => {
  const { id } = req.params;
  return res(ctx.json({ name: 'Raul', id }));
});

export const testGetUser = mockCoreApi.get<{}, { id: string }>('users/:id', (req, res, ctx) => {
  const { id } = req.params;
  return res(ctx.json({ name: 'Raul', id }));
});
