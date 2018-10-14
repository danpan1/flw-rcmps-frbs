// @flow

import type { AppStateType } from 'flow-types/storesTypes';
import { Link } from 'react-router-dom';
import * as React from 'react';
import { connect } from 'react-redux';
import AuthService from './api/AuthService';
import { selectIsAuthorized } from './reducks/session';
import { CALENDAR, LOGIN } from './routes';
import type {
  ConnectedComponentType,
  DataFromReduxType,
} from 'flow-types/reducks-types';

const mapStateToProps = (state: AppStateType) => ({
  isAuthorized: selectIsAuthorized(state),
});
type DataFromRedux = DataFromReduxType<typeof mapStateToProps>;
type Props = {
  ...DataFromRedux,
};
const Navigation: React.StatelessFunctionalComponent<Props> = ({
  isAuthorized,
}) => <div>{isAuthorized ? <NavigationAuth /> : <NavigationNonAuth />}</div>;

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

export default (connect(mapStateToProps)(Navigation): ConnectedComponentType<
  Props,
  DataFromRedux,
  {},
>);
