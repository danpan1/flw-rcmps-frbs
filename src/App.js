// @flow

import React from 'react';
import Loadable from 'react-loadable';
import { Route, Switch, withRouter } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { CALENDAR, LOGIN, NEW } from './routes';
import RoutesLoader from "components/RoutesLoader";

const AsyncCalendarPage = Loadable({
  loader: () => import('./pages/CalendarPage'),
  loading: RoutesLoader,
});
const LoginPage = Loadable({
  loader: () => import('./pages/LoginPage'),
  loading: RoutesLoader,
});
const NewBookingPage = Loadable({
  loader: () => import('./pages/NewBookingPage'),
  loading: RoutesLoader,
});
const Navigation = Loadable({
  loader: () => import('./Navigation'),
  loading: RoutesLoader,
});
const App = () => (
  <div className="App">
    <Navigation />
    <Switch>
      <ProtectedRoute exact path={CALENDAR} component={AsyncCalendarPage} />
      <ProtectedRoute exact path={LOGIN} component={LoginPage} isAuthRoute />
      <Route exact path={`${NEW}/:date`} component={NewBookingPage} />
    </Switch>
  </div>
);

export default withRouter(App);
