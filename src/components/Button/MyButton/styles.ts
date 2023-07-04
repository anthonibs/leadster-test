import { styled } from 'styled-components';

export const Button = styled.button`
  appearance: none;
  cursor: pointer;
  display: inline-block;

  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.colors.third};

  color: ${({ theme }) => theme.colors.third};
  text-transform: capitalize;

  width: fit-content;
  padding: 0.6rem 1rem;
  background-color: transparent;

  transition: all 0.3s linear;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.secondary};

    color: ${({ theme }) => theme.colors.secondary};
  }

  &:active,
  &.active {
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.secondary};

    color: ${({ theme }) => theme.colors.white};
  }
`;
