import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    width: 100vw;
    height:100vh;
  }

  body {
    width: 100vw;
    height:100vh;
    font-family: "Noto Sans KR", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Noto Sans KR", sans-serif;
    font-weight: normal;
  }
  ol,
  ul,
  li {
    list-style: none;
  }
  img {
    max-width: 100%;
    vertical-align: top;
  }
  input,
  button,
  select,
  textarea {
    font-size: inherit;
    line-height: inherit;
    font-family: inherit;
  }
  textarea {
    overflow: auto;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
