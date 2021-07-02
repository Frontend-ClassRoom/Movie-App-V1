import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    width: 100vw;
    height:100vh;
  }
`;
