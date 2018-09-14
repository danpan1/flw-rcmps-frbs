// @flow
import { Route, Switch, withRouter } from 'react-router-dom';
import React from 'react';
import LoginPage from './pages/LoginPage';
import Calendar from './pages/Calendar';
import NewBookingPage from './pages/NewBookingPage';
import Navigation, { CALENDAR, LOGIN, NEW } from './Navigation';

const App = () => (
  <div>
    <Navigation />
    <Switch>
      <Route exact path={`/${CALENDAR}`} component={Calendar} />
      <Route exact path={`/${LOGIN}`} component={() => <LoginPage />} />
      <Route
        exact
        path={`/${NEW}/:date`}
        component={props => <NewBookingPage {...props} />}
      />
    </Switch>
  </div>
);

export default withRouter(App);
