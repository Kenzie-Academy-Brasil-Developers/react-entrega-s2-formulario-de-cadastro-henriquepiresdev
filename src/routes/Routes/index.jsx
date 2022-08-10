import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Home from "../../pages/Home";
import { useHistory } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import DivRegisterTech from "../../components/DivRegisterTech/DivRegisterTech";
export default function Routes() {
  const history = useHistory();
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch key={location.pathname} location={location}>
        <Route exact path="/">
          <Login history={history} />
        </Route>

        <Route exact path="/cadastro">
          <Register history={history} />
        </Route>

        <Route exact path="/home">
          <Home history={history} />
        </Route>
      </Switch>
    </AnimatePresence>
  );
}
