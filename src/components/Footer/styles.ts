import { styled } from 'styled-components';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: fit-content;
  width: 100%;

  padding: 3rem 0 1.325rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const Box = styled.div`
  border-bottom: 1px solid #e3e5e9;

  padding-bottom: 4rem;
  margin-bottom: 1.325rem;

  width: 100%;
`;

export const Wrapper = styled.div`
  margin: 0 auto;

  max-width: 1200px;
  width: 100%;
`;

export const ContainerBrand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.36rem;

  width: fit-content;

  margin: 0 auto;
  margin-bottom: 2rem;

  p {
    color: ${({ theme }) => theme.colors.fourth};
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-evenly;

  margin: 0 auto;

  width: 100%;

  h3 {
    color: ${({ theme }) => theme.colors.third};
    font-size: 1.125rem;
    font-weight: 600;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.325rem;

    margin-top: 2rem;
  }

  li {
    a {
      color: ${({ theme }) => theme.colors.fourth};
      font-weight: 500;
      font-size: 1rem;

      transition: color 0.3s linear;

      &:hover {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }

  .social-media {
    display: flex;
    gap: 0.625rem;

    margin: 1.325rem 0;

    a {
      border-radius: 50%;
      outline: none;

      &:focus span {
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.fifth};
      }
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 46px;
      height: 46px;

      border-radius: 50%;

      font-size: 1.2rem;
      color: ${({ theme }) => theme.colors.fourth};

      background-color: #ebeef5;

      transition: all 0.3s linear;

      &:hover {
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.fifth};
      }
    }
  }

  address {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;

    p {
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.black};
    }

    a,
    span {
      color: ${({ theme }) => theme.colors.fourth};
      font-weight: 500;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  gap: 0.825rem;
  justify-content: space-evenly;

  p {
    color: ${({ theme }) => theme.colors.fourth};
    font-size: 0.825rem;
    font-weight: 500;

    a {
      color: ${({ theme }) => theme.colors.fifth};
    }
  }
`;
