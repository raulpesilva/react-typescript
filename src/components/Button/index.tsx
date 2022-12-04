import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

interface ButtonProp extends ButtonHTMLAttributes<HTMLButtonElement> {}
export const Button = ({ children, ...rest }: ButtonProp) => {
  return <S.Container {...rest}>{children}</S.Container>;
};
