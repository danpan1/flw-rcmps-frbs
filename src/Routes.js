import { Link, Route, Switch } from 'react-router-dom';
import React from 'react';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import NewBookingPage from './pages/NewBookingPage';

export default () => (
  <div>
    <nav>
      <Link to="/home">Home</Link>
      <br />
      <Link to="/login">login</Link>
      <br />
      <Link to="/new/1536677723366">NewBookingPage</Link>
      <br />
    </nav>
    <Switch>
      <Route path="/home" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/new/:date" component={NewBookingPage} />
    </Switch>
  </div>
);
