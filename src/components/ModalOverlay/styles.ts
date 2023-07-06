import { keyframes, styled } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: none;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;

  height: 100vh;
  width: 100%;

  background-color: rgb(12 100 165 / 20%);

  z-index: 1000;

  &.active {
    display: flex;

    animation: ${fadeIn} 0.3s linear;
  }

  > dialog {
    width: 100%;
    max-width: 500px;

    border-radius: 0.8rem;

    margin: 0 auto;

    overflow: hidden;

    @media (min-width: 375px) {
      width: 90%;
    }

    > .dialog-header {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 80px;

      text-align: center;

      border-top: 4px solid ${({ theme }) => theme.colors.secondary};
      padding: 0.325rem 1rem;

      > h2 {
        color: ${({ theme }) => theme.colors.third};
        font-size: 1rem;

        width: 25ch;

        > span {
          color: ${({ theme }) => theme.colors.secondary};
        }
      }

      > .close-modal {
        cursor: pointer;

        background-color: transparent;

        position: absolute;
        right: 5px;
        top: 5px;

        padding: 0.125rem;

        line-height: 1rem;
        font-size: 1.3rem;

        transition: color 0.3s linear;

        &:hover,
        &:focus {
          color: ${({ theme }) => theme.colors.secondary};
        }
      }

      @media (min-width: 768px) {
        height: 100px;

        padding: 0.325rem 1rem;

        > h2 {
          font-size: 1.125rem;

          width: 28ch;
        }

        > .close-modal {
          right: 15px;
          top: 10px;

          padding: 0.325rem;
        }
      }
    }

    > .dialog-video {
      height: 160px;
      width: 100%;

      @media (min-width: 500px) {
        height: 260px;
        width: 100%;
      }

      @media (min-width: 768px) {
        height: 300px;
        width: 100%;
      }
    }

    > .dialog-content {
      padding: 0.325rem 1rem;

      > h3 {
        font-size: 0.9rem;
        color: ${({ theme }) => theme.colors.third};

        border-bottom: 1px solid #e3e5e9;

        padding-bottom: 0.475rem;
        margin-bottom: 0.325rem;
      }

      > p {
        color: ${({ theme }) => theme.colors.third};
        font-size: 0.875rem;
      }

      @media (min-width: 768px) {
        > p {
          font-size: 0.9rem;
        }
      }
    }

    > .dialog-footer {
      padding: 1rem;

      > h3 {
        color: ${({ theme }) => theme.colors.third};
        font-size: 0.9rem;

        border-bottom: 1px solid #e3e5e9;

        padding-bottom: 0.475rem;
        margin-bottom: 0.325rem;
      }

      > div {
        display: flex;
        flex-wrap: wrap;
        gap: 0.325rem;
      }

      @media (min-width: 768px) {
        > div {
          display: flex;
          flex-wrap: nowrap;
        }
      }
    }
  }

  > .more-files {
    display: none;

    @media (min-width: 768px) {
      position: fixed;
      bottom: 0;
      left: 0;

      width: 380px;

      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 0.325rem;

      padding: 1rem;

      background-color: ${({ theme }) => theme.colors.white};
    }

    @media (min-width: 1024px) {
      gap: 0.625rem;
    }

    @media (min-width: 1200px) {
      flex-direction: column;
      gap: 0.625rem;

      width: fit-content;
    }
  }
`;
