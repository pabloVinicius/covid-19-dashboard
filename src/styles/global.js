import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100vh;
  }

  body {
    background: white;
    -webkit-font-smoothing: antialiased !important;
  }

  a, body, input, button, html {
    color: ${props => props.theme.colors.primary};
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
  }

  button {
    cursor: pointer;
  }

  /* font resizing */

  @media(max-width: 1366px) {
    html {
      font-size: 12px;
    }
  }

  @media(max-width: 1242px) {
    html {
      font-size: 10px;
    }
  }

  @media(max-width: 908px) {
    html {
      font-size: 8px;
    }
  }

  @media(max-width: 710px) {
    html {
      font-size: 13px;
    }
  }
`;
