import { Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import AuthService from './api/AuthService';
import { selectIsAuthorized } from './reducks/session';
import { CALENDAR, LOGIN } from './routes';

const Navigation = ({ isAuthorized }) => (
  <div>{isAuthorized ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);

const NavigationAuth = () => (
  <nav>
    <Link to={CALENDAR}>CALENDAR</Link>
    <br />
    <Link to={LOGIN}>Authorized (go to login)</Link>
    <br />
    <button onClick={AuthService.signOut}>Sign Out Google</button>
  </nav>
);

const NavigationNonAuth = () => <nav />;

export default connect(state => ({
  isAuthorized: selectIsAuthorized(state),
}))(Navigation);
