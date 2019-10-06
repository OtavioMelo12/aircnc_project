import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import GlobalStyle from "./styles/global";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import New from "./pages/New";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/new" exact component={New} />
    </Switch>
    <GlobalStyle />
  </BrowserRouter>
);

export default Routes;
