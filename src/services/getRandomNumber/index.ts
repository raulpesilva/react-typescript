import { coreApi, mockCoreApi } from 'api';
import { HttpResponse } from 'msw';

export const getRandomNumber = async () => {
  try {
    const { data } = await coreApi.get(`random/number`);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const mockGetRandomNumber = mockCoreApi.get('random/number', () => {
  return HttpResponse.json({ random: `Raul mock ${Math.random()}` });
});

export const testGetRandomNumber = mockCoreApi.get('random/number', () => {
  return HttpResponse.json({ random: `Raul mock ${Math.random()}` });
});
