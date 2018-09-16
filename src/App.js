// @flow
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import React from 'react';
import LoginPage from './pages/LoginPage';
import Calendar from './pages/Calendar';
import NewBookingPage from './pages/NewBookingPage';
import Navigation from './Navigation';
import ProtectedRoute from './components/ProtectedRoute';
import { CALENDAR, LOGIN, NEW } from './routes';

const App = () => (
  <div className="App">
    <Navigation />
    <Switch>
      <ProtectedRoute exact path={CALENDAR} component={Calendar} />
      <ProtectedRoute exact path={LOGIN} component={LoginPage} isAuthRoute />
      <Route exact path={`${NEW}/:date`} component={NewBookingPage} />
    </Switch>
  </div>
);

export default withRouter(App);
