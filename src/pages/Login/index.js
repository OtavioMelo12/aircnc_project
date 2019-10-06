import React, { useState } from "react";
import api from "../../Services/api";

import logo from "../../assets/logo.svg";
import background from "../../assets/background.jpg";

import { Container, Content } from "./styles";

function Login() {
  const [email, setEmail] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post("/sessions", { email });
  }

  return (
    <Container background={background}>
      <img src={logo} alt="Aircnc" />

      <Content>
        <p>
          Ofereça <strong>spots</strong> parar programadores e encontre{" "}
          <strong>talentos</strong> para sua empresa.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input
            type="email"
            id="email"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <button className="btn" type="submit">
            Entrar
          </button>
        </form>
      </Content>
    </Container>
  );
}

export default Login;
