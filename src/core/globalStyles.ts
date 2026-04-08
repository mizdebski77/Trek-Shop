import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;500&display=swap');

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  *, ::after, ::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    word-break: break-word;
    background: #F5F2EC;
    font-family: 'Inter', sans-serif;
    color: #1C1C1C;
    -webkit-font-smoothing: antialiased;
  }

  img {
    display: block;
  }
`;
