import { styled } from 'styled-components';

const mountain = 'assets/svgs/mountain-illustration.svg';
const noCard = 'assets/images/no-card-dark.webp';

export const Container = styled.section`
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.primary};

  height: fit-content;
  width: 100%;

  position: relative;

  &::before {
    content: '';

    height: 100%;
    width: 100%;

    position: absolute;

    background: url(${mountain});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: -550px 60px;
  }

  @media (min-width: 1024px) {
    height: 530px;

    &::before {
      background-position: -450px 60px;
    }
  }

  @media (min-width: 1300px) {
    &::before {
      background-position: -450px 60px;
    }
  }

  @media (min-width: 1600px) {
    &::before {
      background-position: -600px 20px;
    }
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;

  margin: 0 auto;

  z-index: 100;

  @media (min-width: 768px) {
    flex-direction: row;

    max-width: 1200px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;
  width: 100%;

  padding: 2rem 1rem;

  @media (min-width: 768px) {
    width: 50%;

    padding: 2rem;
  }
`;

export const Figure = styled.figure`
  height: 80%;
  width: 100%;

  > img {
    display: block;

    padding: 2rem;

    height: 100%;
    width: 100%;
  }

  @media (min-width: 768px) {
    position: relative;
    top: 20px;

    height: 100%;

    > img {
      padding: 0;

      object-fit: contain;
      object-position: right;

      height: 100%;
      width: 100%;
    }
  }
`;

export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.325rem;

  border-bottom: 1px solid #e3e5e9;
  padding-bottom: 1rem;
  margin-bottom: 1rem;

  text-align: center;

  > h2 {
    font-size: 1.325rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.third};

    > strong {
      display: block;
    }
  }

  > p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.third};
    font-weight: 500;
  }

  @media (min-width: 768px) {
    text-align: left;

    > h2 {
      font-size: 1.825rem;
    }

    > p {
      font-size: 1rem;
    }
  }
`;

export const ControlCTA = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.675rem;

  > div {
    display: flex;
    gap: 1rem;
  }

  figure {
    height: 50px;

    > img {
      display: block;

      height: 100%;
      width: 100%;
    }
  }

  > p {
    color: ${({ theme }) => theme.colors.third};
    font-size: 0.875rem;
    font-weight: 500;
    text-align: center;
  }

  .card-icon {
    position: relative;

    &:before {
      content: '';

      display: inline-block;

      position: relative;

      margin-right: 0.3rem;

      height: 0.875rem;
      width: 0.875rem;

      background: url(${noCard});
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

  @media (min-width: 768px) {
    > p {
      text-align: left;
    }

    .card-icon {
      &:before {
        height: 1rem;
        width: 1rem;
      }
    }
  }
`;

export const MyButton = styled.button`
  cursor: pointer;

  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  padding: 0 1rem;

  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-size: 1rem;
  text-transform: uppercase;

  background-color: ${({ theme }) => theme.colors.secondary};

  transition: all 0.3s linear;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};

    background-color: transparent;
  }
`;
