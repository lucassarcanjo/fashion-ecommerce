import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import HomeRoute from "./HomeRoute";
import ProductRoute from "./ProductRoute";
import CartRoute from "./CartRoute";
import ProductsRoute from "./ProductsRoute";

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <HomeRoute />
    </Route>
    <Route exact path="/produtos/:list">
      <ProductsRoute />
    </Route>
    <Route exact path="/produtos/">
      <Redirect to="/produtos/all" />
    </Route>
    <Route path="/produto/:id">
      <ProductRoute />
    </Route>
    <Route path="/carrinho">
      <CartRoute />
    </Route>
  </Switch>
);

export default Routes;
