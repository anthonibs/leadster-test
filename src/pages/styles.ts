import { styled } from 'styled-components';

export const ContainerSection = styled.section`
  width: 100%;
  max-width: 1200px;

  margin: 0 auto;
  padding: 4rem 0;

  > .filter-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    width: 100%;

    border-bottom: 2px solid #e3e5e9;

    margin-bottom: 3.375rem;
    padding-bottom: 1.6rem;
  }

  > .pages-footer {
    width: 100%;

    border-top: 2px solid #e3e5e9;

    margin-top: 3.375rem;
    padding-top: 1.6rem;

    div {
      display: flex;
      align-items: center;
      gap: 1rem;

      margin: 0 auto;
      width: fit-content;

      p {
        color: ${({ theme }) => theme.colors.third};
        font-weight: 600;
      }

      ul {
        display: flex;
        gap: 1rem;
      }

      li {
        button {
          cursor: pointer;
          border-radius: 0.3rem;
          padding: 0.4rem 0.625rem;
          font-weight: 500;
          background-color: transparent;
          border: 2px solid transparent;

          transition: all 0.3s linear;

          &:hover {
            color: ${({ theme }) => theme.colors.secondary};
          }

          &:active,
          &.active {
            color: ${({ theme }) => theme.colors.secondary};
            font-weight: 600;
            border: 2px solid ${({ theme }) => theme.colors.secondary};
          }
        }
      }
    }
  }
`;



export const SortGroup = styled.div`
  width: fit-content;

  > span {
    display: inline-block;
    margin-right: 0.6rem;
    font-size: 0.9rem;
    font-weight: 600;
  }

  > select {
    background-color: transparent;
    padding: 0.4rem 0.8rem;
    line-height: 24px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.third};
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 2rem 1.6rem;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
`;
