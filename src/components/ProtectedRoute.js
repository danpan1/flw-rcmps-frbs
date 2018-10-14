// @flow

import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';
import type { LocationShape, ContextRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSessionChecked, selectIsAuthorized } from '../reducks/session';
import { CALENDAR, LOGIN } from '../routes';
import type {
  ConnectedComponentType,
  DataFromReduxType,
} from 'flow-types/reducks-types';

const mapStateToProps = state => ({
  isAuthorized: selectIsAuthorized(state),
  sessionChecked: getSessionChecked(state),
});

type DataFromRedux = DataFromReduxType<typeof mapStateToProps>;

type RouteProps = {|
  component: React.ComponentType<*>,
  children?: React.ComponentType<ContextRouter> | Node,
  path?: string,
  exact?: boolean,
  strict?: boolean,
  location?: LocationShape,
  sensitive?: boolean,
|};

type Props = {
  ...RouteProps,
  ...DataFromRedux,
  isAuthRoute?: boolean,
};

class ProtectedRoute extends React.Component<Props> {
  renderRoute = args => {
    const Component = this.props.component;
    if (this.props.sessionChecked === false) {
      return <div>Checking User authentication data</div>;
    }
    if (
      (this.props.isAuthRoute && !this.props.isAuthorized) ||
      (!this.props.isAuthRoute && this.props.isAuthorized)
    ) {
      // TODO после ввода логин происходит редирект. этот редирект не совсем очевиден. асинхронно получаетсяч. искать надо почему произошел редирект
      // сделать не через редирект компонент, а через ReactRouterPush
      return <Component {...args} />;
    }

    return <Redirect to={this.props.isAuthRoute ? CALENDAR : LOGIN} />;
  };

  render() {
    const { path, exact, strict, location, sensitive } = this.props;
    return (
      <Route
        path={path}
        exact={exact}
        strict={strict}
        location={location}
        sensitive={sensitive}
        render={this.renderRoute}
      />
    );
  }
}

export default (connect(mapStateToProps)(
  ProtectedRoute,
): ConnectedComponentType<Props, DataFromRedux, {}>);
