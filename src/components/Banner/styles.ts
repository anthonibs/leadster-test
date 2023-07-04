import { styled } from 'styled-components';

const threeLines = 'assets/images/asset-header.png';

export const Container = styled.section`
  display: flex;
  align-items: center;
  height: 530px;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Wrapper = styled.div`
  max-width: 640px;
  width: 100%;

  margin: 0 auto;

  text-align: center;

  h1 {
    font-size: 2.8rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.third};

    & strong {
      display: block;

      position: relative;

      font-size: 4.6rem;

      background: linear-gradient(45deg, #2c83fb, #1f76f0);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;

      &::after {
        content: '';

        position: absolute;
        right: 17px;
        top: 7px;

        height: 40px;
        width: 40px;

        background: url(${threeLines}) no-repeat center;
        background-size: contain;
      }
    }

    &::after {
      content: '';
      display: block;

      margin: 1rem 0;

      border-bottom: 1px solid #e3e5e9;
    }
  }

  p {
    color: ${({ theme }) => theme.colors.third};
    font-weight: 500;
    font-size: 1rem;
  }
`;
