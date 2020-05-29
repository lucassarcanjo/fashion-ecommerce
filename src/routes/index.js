import React from "react";
import { Route, Switch } from "react-router-dom";

import HomeRoute from './HomeRoute';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <HomeRoute></HomeRoute>
    </Route>
    {/* <Route path="/"></Route> */}
  </Switch>
);

export default Routes;
