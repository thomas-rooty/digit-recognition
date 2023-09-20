import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    min-height: 100vh;
    background-color: #C850C0;
    background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
  }

`;

export default GlobalStyle;