import React, { useState } from "react";
import api from "../../Services/api";

import { Container, Content } from "./styles";

import logo from "../../assets/logo.svg";
import background from "../../assets/background.jpg";

function Login({ history }) {
  const [email, setEmail] = useState("");

  function setLoading(loading = true) {
    if (loading) {
      console.log("LOADING");
      let buttonEl = document.getElementById("btn");
      let strongEl = document.getElementById("str");

      let loadingEL = document.createElement("strong");
      loadingEL.appendChild(document.createTextNode("  LOADING"));
      loadingEL.setAttribute("id", "loading");

      buttonEl.removeChild(strongEl);
      buttonEl.appendChild(loadingEL);
    } else {
      console.log("LOADED");
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!email) {
      let formEl = document.getElementById("login-form");

      let alreadyExists = document.getElementById("no-email");

      if (alreadyExists) {
        return;
      } else {
        let noEmailEL = document.createElement("label");
        noEmailEL.appendChild(document.createTextNode("Insira algum E-MAIL"));
        noEmailEL.setAttribute("id", "no-email");

        formEl.appendChild(noEmailEL);

        return console.log("SEM EMAIL");
      }
    }

    setLoading();

    const response = await api.post("/sessions", { email });

    setLoading(false);

    const { _id } = response.data;
    localStorage.setItem("user", _id);

    history.push("/dashboard");
  }

  return (
    <Container background={background}>
      <img src={logo} alt="Aircnc" />
      <Content>
        <p>
          Ofereça <strong>spots</strong> parar programadores e encontre{" "}
          <strong>talentos</strong> para sua empresa.
        </p>

        <form id="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input
            type="email"
            id="email"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <button className="btn" type="submit" id="btn">
            <strong id="str">Entrar</strong>
          </button>
        </form>
      </Content>
    </Container>
  );
}

export default Login;
