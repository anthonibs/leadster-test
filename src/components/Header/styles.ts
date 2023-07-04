import { styled } from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 90px;
  width: 100%;

  background-color: ${(props) => props.theme.colors.white};
`;
