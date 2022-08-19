import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Home  from "../../pages/Home";
import { AnimatePresence } from "framer-motion";

export default function Routes() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch key={location.pathname} location={location}>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/cadastro">
          <Register />
        </Route>
        <Route exact path="/home">
          <Home/>
        </Route>
      </Switch>
    </AnimatePresence>
  );
}
