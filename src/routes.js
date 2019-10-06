import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import GlobalStyle from "./styles/global";

import Login from "./pages/Login";
// import Main from "./pages/Main";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
    </Switch>
    <GlobalStyle />
  </BrowserRouter>
);

export default Routes;
