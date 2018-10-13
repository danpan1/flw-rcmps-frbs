// @flow

import type { AppStateType } from 'flow-types/storesTypes';
import { Link } from 'react-router-dom';
import * as React from 'react';
import { connect } from 'react-redux';
import AuthService from './api/AuthService';
import { selectIsAuthorized } from './reducks/session';
import { CALENDAR, LOGIN } from './routes';

const mapStateToProps = (state: AppStateType) => ({
  isAuthorized: selectIsAuthorized(state),
});
type mapDataToProps = $Exact<$Call<typeof mapStateToProps, AppStateType>>;
type Props = {
  ...mapDataToProps,
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

type PropsFromParent = $Exact<$Diff<Props, mapDataToProps>>;
export default (connect(mapStateToProps)(Navigation): React.ComponentType<
  PropsFromParent,
>);
