// @flow
import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CalendarPage from './pages/CalendarPage';
import NewBookingPage from './pages/NewBookingPage';
import Navigation from './Navigation';
import ProtectedRoute from './components/ProtectedRoute';
import {CALENDAR, LOGIN, NEW, WIZARD} from './routes';
import WizardForm from "./wizard-form/WizardForm";

const App = () => (
  <div className="App">
    <Navigation />
    <Switch>
      <ProtectedRoute exact path={CALENDAR} component={CalendarPage} />
      <ProtectedRoute exact path={LOGIN} component={LoginPage} isAuthRoute />
      <ProtectedRoute exact path={WIZARD} component={WizardForm} isAuthRoute />
      <Route exact path={`${NEW}/:date`} component={NewBookingPage} />
    </Switch>
  </div>
);

export default withRouter(App);
