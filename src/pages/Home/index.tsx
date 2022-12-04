import { Button } from 'components';
import { useEffectOnce } from 'hooks';
import { getRandomNumber, getUser } from 'services';
import { dispatchCount, useCountSelect } from 'states';

import * as S from './styles';

interface HomeProps {}
export const Home = ({}: HomeProps) => {
  const count = useCountSelect();

  useEffectOnce(() => {
    getUser('1').then(console.log);
    getRandomNumber().then(console.log);
  });

  return (
    <S.Container>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank'></a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <Button onClick={() => dispatchCount((count) => count + 1)}>count is {count}</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </S.Container>
  );
};
