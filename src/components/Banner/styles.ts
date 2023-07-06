import { styled } from 'styled-components';

const threeLines = 'assets/images/asset-header.png';

export const Container = styled.section`
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.primary};

  width: 100%;

  @media (min-width: 375px) {
    height: 430px;
  }

  @media (min-width: 768px) {
    height: 530px;
  }
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 1rem;

  width: 100%;

  text-align: center;

  @media (min-width: 375px) {
    max-width: fit-content;

    > h1 {
      color: ${({ theme }) => theme.colors.third};
      font-size: 1.8rem;
      font-weight: 500;

      & > strong {
        display: block;

        position: relative;

        font-size: 2.6rem;

        background: linear-gradient(45deg, #2c83fb, #1f76f0);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;

        &::after {
          content: '';

          position: absolute;
          right: 0px;
          top: 0px;

          height: 26px;
          width: 26px;

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

    > p {
      color: ${({ theme }) => theme.colors.third};
      font-weight: 500;
      font-size: 0.8rem;
    }
  }

  @media (min-width: 400px) {
    > h1 > strong {
      &::after {
        right: 15px;
        top: 0px;
      }
    }
  }

  @media (min-width: 450px) {
    > h1 > strong {
      &::after {
        right: 35px;
        top: 0px;
      }
    }
  }

  @media (min-width: 500px) {
    > h1 > strong {
      &::after {
        right: 60px;
        top: 0px;
      }
    }
  }

  @media (min-width: 768px) {
    max-width: 640px;

    > h1 {
      font-size: 2.8rem;

      & > strong {
        font-size: 4.6rem;

        &::after {
          right: 5px;
          top: 7px;

          height: 40px;
          width: 40px;
        }
      }
    }

    > p {
      font-size: 1rem;
    }
  }
`;
