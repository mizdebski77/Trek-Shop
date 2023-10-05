import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html {
    box-sizing: border-box;
  }
  
  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }
  
body {
  word-break: break-word;
  background: rgba(173, 173, 173, 0.2);
  font-family: Inter;
}`;
