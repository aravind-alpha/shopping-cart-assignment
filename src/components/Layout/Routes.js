import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Product from "../../pages/Product";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/products" exact component={Product} />
    </Switch>
  );
};

export default Routes;
