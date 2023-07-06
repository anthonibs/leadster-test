import { styled } from 'styled-components';

export const Container = styled.article`
  display: flex;
  flex-direction: column;

  overflow: hidden;

  height: 280px;
  width: 100%;

  border-radius: 0.625rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  &:hover,
  &:hover figure::before,
  &:hover h2 {
    cursor: pointer;

    opacity: 1;
    visibility: visible;

    color: ${({ theme }) => theme.colors.secondary};
  }

  figure {
    pointer-events: none;
    user-select: none;

    position: relative;

    width: 100%;
    height: 180px;

    &::before {
      content: '';

      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;

      opacity: 0;
      visibility: hidden;

      height: 100%;
      width: 100%;

      background-color: #00aff03b;
      background: #00aff03b center / 80px url('assets/images/play.png') no-repeat;

      transition: all 0.3s linear;
    }

    img {
      display: block;

      width: 100%;
      height: 100%;
    }
  }

  div {
    padding: 1rem;

    height: 100%;
    width: 100%;

    h2 {
      color: ${({ theme }) => theme.colors.third};
      font-size: 1rem;
      font-weight: 600;

      transition: all 0.3s linear;
    }
  }
`;
