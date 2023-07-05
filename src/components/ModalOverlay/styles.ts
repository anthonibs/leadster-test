import { styled } from 'styled-components';

interface ModalProps {
  openModal: boolean;
}

export const Container = styled.div<ModalProps>`
  display: ${({ openModal }) => (openModal ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;

  position: fixed;

  height: 100vh;
  width: 100%;
  background-color: rgb(12 100 165 / 20%);
  z-index: 1000;
  top: 0;

  > dialog {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    border-radius: 0.8rem;
    overflow: hidden;

    > .dialog-header {
      display: flex;
      align-items: center;
      justify-content: center;
      border-top: 4px solid ${({ theme }) => theme.colors.secondary};
      text-align: center;
      height: 100px;
      padding: 0.325rem 1rem;

      > h2 {
        width: 28ch;
        font-size: 1.125rem;
        color: ${({ theme }) => theme.colors.third};

        > span {
          color: ${({ theme }) => theme.colors.secondary};
        }
      }

      > .close-modal {
        cursor: pointer;
        background-color: transparent;
        position: absolute;
        top: 10px;
        line-height: 1rem;
        font-size: 1.3rem;
        right: 15px;
        padding: 0.325rem;

        transition: color 0.3s linear;

        &:hover,
        &:focus {
          color: ${({ theme }) => theme.colors.secondary};
        }
      }
    }

    > .dialog-video {
      height: 300px;
      width: 100%;
    }

    > .dialog-content {
      padding: 0.325rem 1rem;

      > h3 {
        font-size: 0.9rem;
        color: ${({ theme }) => theme.colors.third};
        padding-bottom: 0.475rem;
        border-bottom: 1px solid #e3e5e9;
        margin-bottom: 0.325rem;
      }

      > p {
        font-size: 0.9rem;
        color: ${({ theme }) => theme.colors.third};
      }
    }

    > .dialog-footer {
      padding: 1rem;

      > h3 {
        font-size: 0.9rem;
        color: ${({ theme }) => theme.colors.third};
        padding-bottom: 0.475rem;
        border-bottom: 1px solid #e3e5e9;
        margin-bottom: 0.325rem;
      }

      > div {
        display: flex;
        gap: 0.325rem;
      }
    }
  }

  > .more-files {
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 0.625rem;

    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
