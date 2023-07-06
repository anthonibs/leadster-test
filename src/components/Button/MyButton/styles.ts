import { styled } from 'styled-components';

export const Button = styled.button`
  appearance: none;

  display: inline-block;
  flex-grow: 1;

  cursor: pointer;

  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.colors.third};
  padding: 0.6rem 1rem;
  background-color: transparent;

  color: ${({ theme }) => theme.colors.third};
  text-transform: capitalize;
  white-space: nowrap;

  width: fit-content;

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
