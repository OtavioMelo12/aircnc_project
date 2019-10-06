import React from "react";

import { Container, Content } from "./styles";

import logo from "../../assets/logo.svg";
import background from "../../assets/background.jpg";

function New() {
  return (
    <Container background={background}>
      <img src={logo} alt="Aircnc" />
      <Content>
        <h1>Page New</h1>
      </Content>
    </Container>
  );
}

export default New;
