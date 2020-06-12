import React from "react";
import { Route, Switch } from "react-router-dom";

import HomeRoute from "./HomeRoute";
import ProductRoute from "./ProductRoute/ProductRoute";

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <HomeRoute />
    </Route>
    <Route path="/produto">
      <ProductRoute />
    </Route>
  </Switch>
);

export default Routes;
