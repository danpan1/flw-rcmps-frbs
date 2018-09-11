import {Link, Route, Switch} from "react-router-dom";
import React from "react";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

export default () => (
  <div>
    <nav>
      <Link to="/login">login</Link>
      <Link to="/">Home</Link>
    </nav>
    <Switch>
      <Route path="/login" component={LoginPage}/>
      <Route path="/" component={HomePage}/>
    </Switch>
  </div>
);