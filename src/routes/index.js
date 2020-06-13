import React from "react";
import { Route, Switch } from "react-router-dom";

import HomeRoute from "./HomeRoute";
import ProductRoute from "./ProductRoute/ProductRoute";
import CartRoute from "./CartRoute/CartRoute";

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <HomeRoute />
    </Route>
    <Route path="/produtos/:id">
      <ProductRoute />
    </Route>
    <Route path="/carrinho">
      <CartRoute />
    </Route>
  </Switch>
);

export default Routes;
