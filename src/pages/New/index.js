import React, { useState, useMemo } from "react";
import api from "../../Services/api";

import { Link } from "react-router-dom";

import { Container, Content } from "./styles";

import logo from "../../assets/logo.svg";
import background from "../../assets/background.jpg";
import camera from "../../assets/camera.svg";

function New({ history }) {
  const [thumbnail, setThumbnail] = useState(null);
  const [company, setCompany] = useState("");
  const [techs, setTechs] = useState("");
  const [price, setPrice] = useState("");

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

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

    const data = new FormData();
    const user_id = localStorage.getItem("user");

    data.append("thumbnail", thumbnail);
    data.append("company", company);
    data.append("techs", techs);
    data.append("price", price);

    if (!thumbnail || !company || !techs) {
      let formEl = document.getElementById("new-form");

      let alreadyExists = document.getElementById("no-infomations");

      if (alreadyExists) {
        return;
      } else {
        let noInformationsEl = document.createElement("label");
        noInformationsEl.appendChild(
          document.createTextNode("Insira todas informações necessárias !")
        );
        noInformationsEl.setAttribute("id", "no-infomations");

        formEl.appendChild(noInformationsEl);
      }
      return console.log("SEM INFORMAÇOES");
    }

    setLoading();

    await api.post("/spots", data, {
      headers: { user_id }
    });

    setLoading(false);

    history.push("/dashboard");
  }

  return (
    <Container background={background}>
      <img src={logo} alt="Aircnc" />
      <Content>
        <form id="new-form" onSubmit={handleSubmit}>
          <label
            id="thumbnail"
            style={{ backgroundImage: `url(${preview})` }}
            className={thumbnail ? "has-thumbnail" : ""}
          >
            <input
              type="file"
              onChange={event => setThumbnail(event.target.files[0])}
            />
            <img src={camera} alt="Select img" />
          </label>

          <label htmlFor="company">EMPRESA *</label>
          <input
            id="company"
            placeholder="Sua empresa incrível"
            value={company}
            onChange={event => setCompany(event.target.value)}
          />

          <label htmlFor="techs">
            TECNOLOGIAS * <span>(separadas por vírgula)</span>
          </label>
          <input
            id="techs"
            placeholder="Quais tecnologias usam?"
            value={techs}
            onChange={event => setTechs(event.target.value)}
          />

          <label htmlFor="price">
            VALOR DA DIÁRIA * <span>(em branco para GRATUITO)</span>
          </label>
          <input
            id="price"
            placeholder="Valor cobrado por dia"
            value={price}
            onChange={event => setPrice(event.target.value)}
          />

          <button type="submit" className="btn" id="btn">
            <strong id="str">Cadastrar </strong>
          </button>
          <Link to="/dashboard">
            <button className="btn">Voltar</button>
          </Link>
        </form>
      </Content>
    </Container>
  );
}

export default New;
