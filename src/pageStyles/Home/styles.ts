import { styled } from 'styled-components';

export const ContainerSection = styled.section`
  width: 90%;

  margin: 0 auto;
  padding: 4rem 0;

  @media (min-width: 1200px) {
    width: 100%;
    max-width: 1200px;
  }

  > .filter-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    border-bottom: 2px solid #e3e5e9;

    margin-bottom: 3.375rem;
    padding-bottom: 1.6rem;

    @media (min-width: 375px) {
      flex-direction: column;
      gap: 1.6rem;
    }

    @media (min-width: 1200px) {
      flex-direction: row;
      gap: 1rem;
    }
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
          border: 2px solid transparent;

          padding: 0.4rem 0.625rem;

          font-weight: 500;

          background-color: transparent;

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
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.third};

    padding: 0.4rem 0.8rem;

    line-height: 24px;
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 2rem 1.6rem;

  @media (min-width: 375px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }
`;
