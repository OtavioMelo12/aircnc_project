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
    background: #333 url('${background}') repeat;
    background-size: cover;
    -webkit-font-smoothing: antialiased !important;
  }

  body input button p h1 strong {
    font-size: 14px;
  }

  ul{
    list-style: none;
  }

  button.btn {
    border: 0;
    border-radius: 3px;
    width: 100%;
    height: 42px;
    padding: 0 20px;
    font-size: 16px;
    font-weight: bold;
    background: #f05a5b;
    color: #fff;
    cursor: pointer;
    margin-bottom: 5px;

    :hover {
      background: #e14f50;
    }
  }
`;
