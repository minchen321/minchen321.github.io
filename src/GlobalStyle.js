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
  a:focus-visible,
  [role='button']:focus-visible {
    outline: 3px solid currentColor;
    outline-offset: 4px;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
    border: 0;
  }

  .skip-link {
    position: fixed;
    top: 0.5rem;
    left: 0.5rem;
    z-index: 2000;
    padding: 0.75rem 1rem;
    background: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.primaryBlack};
    transform: translateY(-200%);
  }
  .skip-link:focus {
    transform: translateY(0);
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-delay: 0ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default GlobalStyle;
