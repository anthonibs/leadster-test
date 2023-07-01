import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    box-sizing: border-box;
    vertical-align: baseline;

    &::selection {
      background: #17c895;
      color: ${({ theme }) => theme.colors.white};
      -webkit-text-fill-color: ${({ theme }) => theme.colors.white};
    }
  }

  body {
    font-size: 16px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-style: normal;
    background-color: ${({ theme }) => theme.colors.white};
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  ol,
  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

`;

export default GlobalStyles;
