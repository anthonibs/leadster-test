import { ButtonHTMLAttributes, ReactNode } from 'react';

import * as S from './styles';

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const MyButton = ({ children, ...rest }: MyButtonProps) => {
  return <S.Button {...rest}>{children}</S.Button>;
};

export default MyButton;
