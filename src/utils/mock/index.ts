import { http } from 'msw';

type mockCoreApi = Omit<typeof http, 'all'>;

export const createMockApi = ({ baseURL = '' }: { baseURL?: string } = {}) => {
  const mockCoreApi: mockCoreApi = {
    head(path, resolver) {
      return http.head(`${baseURL}${path}`, resolver);
    },
    get(path, resolver) {
      return http.get(`${baseURL}${path}`, resolver);
    },
    post(path, resolver) {
      return http.post(`${baseURL}${path}`, resolver);
    },
    put(path, resolver) {
      return http.put(`${baseURL}${path}`, resolver);
    },
    delete(path, resolver) {
      return http.delete(`${baseURL}${path}`, resolver);
    },
    patch(path, resolver) {
      return http.patch(`${baseURL}${path}`, resolver);
    },
    options(path, resolver) {
      return http.options(`${baseURL}${path}`, resolver);
    },
  };
  return mockCoreApi;
};
