import { coreApi, mockCoreApi } from 'api';

export const getRandomNumber = async () => {
  try {
    const { data } = await coreApi.get(`random/number`);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const mockGetRandomNumber = mockCoreApi.get('random/number', (_req, res, ctx) => {
  return res(ctx.json({ random: `Raul mock ${Math.random()}` }));
});

export const testGetRandomNumber = mockCoreApi.get('random/number', (_req, res, ctx) => {
  return res(ctx.json({ random: `Raul test ${Math.random()}` }));
});
