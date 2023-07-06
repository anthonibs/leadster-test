import { styled } from 'styled-components';

export const Container = styled.footer`
  @media (min-width: 375px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    height: fit-content;
    width: 100%;

    padding: 2rem 0 1.325rem;

    background-color: ${({ theme }) => theme.colors.white};
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    height: fit-content;
    width: 100%;

    padding: 3rem 0 1.325rem;

    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const Box = styled.div`
  border-bottom: 1px solid #e3e5e9;

  padding-bottom: 1rem;
  margin-bottom: 1.325rem;

  width: 100%;

  @media (min-width: 768px) {
    padding-bottom: 3rem;
  }
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

  width: 180px;
  text-align: center;

  margin: 0 auto 2rem;

  p {
    color: ${({ theme }) => theme.colors.fourth};
    font-size: 0.875rem;
    font-weight: 500;
  }

  @media (min-width: 768px) {
    width: fit-content;

    p {
      font-size: 1rem;
    }
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;

  width: 100%;
  padding: 0 2rem;

  text-align: center;

  > div {
    margin-bottom: 2rem;
  }

  h3 {
    color: ${({ theme }) => theme.colors.third};
    font-size: 1.125rem;
    font-weight: 600;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.325rem;

    margin-top: 1rem;
  }

  li {
    a {
      color: ${({ theme }) => theme.colors.fourth};
      font-weight: 500;
      font-size: 0.9rem;

      transition: color 0.3s linear;

      &:hover {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }

  .social-media {
    display: flex;
    justify-content: center;
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
    p {
      color: ${({ theme }) => theme.colors.black};
      font-size: 0.875rem;
    }

    a,
    span {
      color: ${({ theme }) => theme.colors.fourth};
      font-size: 0.875rem;
      font-weight: 500;
    }
  }

  @media (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;

    text-align: left;

    ul {
      gap: 1.325rem;

      margin-top: 2rem;
    }

    li {
      a {
        font-size: 1rem;

        transition: color 0.3s linear;
      }
    }

    .social-media {
      justify-content: start;
    }

    address {
      display: flex;
      flex-direction: column;
      gap: 0.325rem;

      p,
      a,
      span {
        font-size: 1rem;
      }
    }
  }

  @media (min-width: 1200px) {
    padding: 0;

    max-width: 1000px;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.475rem;

  padding: 0 1rem;

  p {
    color: ${({ theme }) => theme.colors.fourth};
    font-size: 0.625rem;
    font-weight: 500;

    a {
      color: ${({ theme }) => theme.colors.fifth};
    }
  }

  @media (min-width: 768px) {
    justify-content: space-evenly;
    flex-direction: row;
    gap: 0.825rem;

    p {
      font-size: 0.825rem;
    }
  }
`;
