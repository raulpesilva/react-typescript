import { coreApi, mockCoreApi } from 'api';
import { HttpResponse } from 'msw';

export const getUser = async (id: string) => {
  const { data } = await coreApi.get(`users/${id}`);
  return data;
};

export const mockGetUser = mockCoreApi.get('users/:id', ({ params }) => {
  const id = params.id;
  return HttpResponse.json({ name: 'Raul', id });
});

export const testGetUser = mockCoreApi.get('users/:id', ({ params }) => {
  const id = params.id;
  return HttpResponse.json({ name: 'Raul', id });
});
