import { getUser } from 'services';

describe('getUser', () => {
  it('should return the user', async () => {
    const user = await getUser('1');
    expect(user).toEqual({ name: 'Raul', id: '1' });
  });
});
