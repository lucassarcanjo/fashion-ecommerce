import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Topbar } from "../../components";

import Routes from "../../routes";

import "../../global.scss";

const App = () => (
  <BrowserRouter>
    <Topbar />

    <Routes />
  </BrowserRouter>
);

export default App;
