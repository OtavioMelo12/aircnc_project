import React from "react";

import logo from "../../assets/logo.svg";
import background from "../../assets/background.jpg";

import { Container, Content } from "./styles";

const Login = () => (
  <Container background={background}>
    <img src={logo} alt="Aircnc" />

    <Content>
      <p>
        Ofereça <strong>spots</strong> parar programadores e encontre{" "}
        <strong>talentos</strong> para sua empresa.
      </p>

      <form>
        <label htmlFor="email">E-MAIL *</label>
        <input type="email" id="email" placeholder="Seu melhor e-mail" />
      </form>

      <button className="btn" type="submit">
        Entrar
      </button>
    </Content>
  </Container>
);
export default Login;
