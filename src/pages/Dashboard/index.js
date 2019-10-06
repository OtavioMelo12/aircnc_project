import React, { useEffect, useState } from "react";
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
      <img src={logo} alt="Aircnc" />
      <Content>
        <ul className="spot-list">
          {spots.map(spot => (
            <li key={spot._id}>
              <header />
              <strong>{spot.company}</strong>
              <span>{spot.price}</span>
            </li>
          ))}
        </ul>
      </Content>
    </Container>
  );
}

export default Dashboard;
