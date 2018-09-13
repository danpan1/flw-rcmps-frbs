// @flow
import { Route, Switch, withRouter } from 'react-router-dom';
import React from 'react';
import { compose } from 'recompose';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import NewBookingPage from './pages/NewBookingPage';
import Navigation, { HOME, LOGIN, NEW } from './Navigation';
import withAuthentication from './components/withAuthentication';

const App = () => (
  <div>
    <Navigation />
    <Switch>
      <Route exact path={'/' + HOME} component={() => <HomePage />} />
      <Route exact path={'/' + LOGIN} component={() => <LoginPage />} />
      <Route
        exact
        path={'/' + NEW + '/:date'}
        component={props => <NewBookingPage {...props} />}
      />
    </Switch>
  </div>
);
const enhance = compose(
  withRouter,
  withAuthentication,
);
export default enhance(App);
