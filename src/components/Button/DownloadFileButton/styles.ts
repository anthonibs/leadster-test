import { styled } from 'styled-components';
import { darken } from 'polished';

interface ButtonProps {
  color: string;
}

export const Button = styled.button<ButtonProps>`
  appearance: none;
  cursor: pointer;
  width: fit-content;

  display: flex;
  overflow: hidden;
  border-radius: 0.475rem;

  &:hover > span {
    background-color: ${({ color }) => darken(0.15, color)};
  }

  &:hover > p {
    background-color: ${({ color }) => darken(0.03, color)};
  }

  > span {
    display: flex;
    background-color: ${({ color }) => darken(0.1, color)};
    height: 100%;
    width: 100%;
    padding: 0.525rem;
    transition: all 2.3s linear;

    > svg {
      color: ${({ color }) => darken(0.6, color)};
    }
  }

  > p {
    padding: 0.525rem;
    font-size: 0.875rem;
    font-weight: 600;
    transition: all 2.3s linear;

    background-color: ${({ color }) => color};
    color: ${({ color }) => darken(0.6, color)};
  }
`;
