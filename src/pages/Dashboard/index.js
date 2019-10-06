import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../Services/api";

import { Container, Content } from "./styles";

import logo from "../../assets/logo.svg";
import background from "../../assets/background.jpg";

function Dashboard() {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    async function loadSpots() {
      const user_id = localStorage.getItem("user");
      const response = await api.get("/dashboard", {
        headers: { user_id }
      });

      setSpots(response.data);
    }

    loadSpots();
  }, []);

  return (
    <Container background={background}>
      <div className="header">
        <img src={logo} alt="Aircnc" />
      </div>
      <Content>
        <ul className="spot-list">
          {spots.map(spot => (
            <li key={spot._id}>
              {/* <header
                style={{ backgroundImage: `url(${spot.thumbnail_url})` }}
              /> */}
              <img className="thumbnail" src={spot.thumbnail_url} alt="img" />
              <strong>{spot.company}</strong>
              <span>{spot.price ? `R$${spot.price}/dia` : "GRATUITO"}</span>
            </li>
          ))}
        </ul>

        <Link to="/new">
          <button className="btn">Cadastrar novo spot</button>
        </Link>
        <Link to="/">
          <button className="btn">Home</button>
        </Link>
      </Content>
    </Container>
  );
}

export default Dashboard;
