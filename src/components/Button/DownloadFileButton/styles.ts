import { styled } from 'styled-components';
import { darken } from 'polished';

interface ButtonProps {
  color: string;
}

export const Button = styled.button<ButtonProps>`
  appearance: none;

  display: flex;

  overflow: hidden;

  cursor: pointer;

  border-radius: 0.475rem;

  width: fit-content;

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
    width: auto;

    padding: 0.525rem;

    transition: all 2.3s linear;

    > svg {
      color: ${({ color }) => darken(0.6, color)};
    }
  }

  > p {
    padding: 0.525rem;

    color: ${({ color }) => darken(0.6, color)};
    font-size: 0.875rem;
    font-weight: 600;

    background-color: ${({ color }) => color};

    transition: all 2.3s linear;
  }
`;
