import { createGlobalStyle } from "styled-components";
import background from "../assets/background.jpg";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  body {
    background: #000 url('${background}') no-repeat;
    background-size: cover;
    -webkit-font-smoothing: antialiased !important;
  }

  body input button p h1 strong {
    font-size: 14px;
  }

  ul{
    list-style: none;
  }
`;
