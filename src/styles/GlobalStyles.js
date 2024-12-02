import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
    ${css`
      /* :root {

      } */

      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      html {
        font-size: 65.5%;
      }

      body {
        overflow: hidden;
        font-family: "Rubik", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
        font-weight: 500;
        font-size: 2rem;
        height: 100vh;
        width: 100%;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: "Rubik Bubbles", system-ui;
        font-weight: 400;
        font-style: normal;
      }

      button {
        cursor: pointer;
        border-radius: 8px;
        border: none;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        transition: border-color 0.25s;
      }
      button:hover {
        border-color: #646cff;
      }
      button:focus,
      button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
      }
    `}

`;

export default GlobalStyles;
