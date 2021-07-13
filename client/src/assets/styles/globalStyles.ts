import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: #000;
  }
  html {
    font-size: 16px;
    width: 100%;
    height:100%;
  }

  body {
    width: 100%;
    height:100%;
    font-family: "Noto Sans KR", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &.side-open {
      overflow-y: hidden;
    }

    &.scroll {
      overflow-y: scroll;

      #root {
        overflow: hidden;
        height: 100%;
      }
    }
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
