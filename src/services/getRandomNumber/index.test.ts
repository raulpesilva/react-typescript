import { getRandomNumber } from './index';

describe('getRandomNumber', async () => {
  it('should return the random number', async () => {
    const randomNumber = await getRandomNumber();
    expect(randomNumber).toHaveProperty('random');
  });
});
