import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 16px;
    margin: 0;
    font-weight: 400;
    line-height: 1.33;
    text-align: left;
    font-family:  ${({ theme }) => theme.primaryFont};
  }

  *,
  ::after,
  ::before {
    box-sizing: border-box
  }

  article,
  aside,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  nav,
  section {
    display: block
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul {
    margin: 0;
  }

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  button:focus-visible,
  a:focus-visible {
    outline: 3px solid ${({ theme }) => theme.primaryBlue};
    outline-offset: 4px;
  }
`;

export default GlobalStyle;
