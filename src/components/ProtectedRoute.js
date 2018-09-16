import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSessionChecked, selectIsAuthorized } from '../reducks/session';
import { CALENDAR, LOGIN } from '../routes';

// TODO как здесь добавить типы?
class ProtectedRoute extends Component {
  renderRoute = (...args) => {
    const Component = this.props.component;
    if (this.props.sessionChecked === false) {
      return <div>Checking User authentication data</div>;
    }
    if (
      (this.props.isAuthRoute && !this.props.isAuthorized) ||
      (!this.props.isAuthRoute && this.props.isAuthorized)
    ) {
      // TODO после ввода логин происходит редирект. этот редирект не совсем очевиден. асинхронно получаетсяч. искать надо почему произошел редирект
      return <Component {...args} />;
    }

    return <Redirect to={this.props.isAuthRoute ? CALENDAR : LOGIN} />;
  };

  render() {
    const { component, ...rest } = this.props;
    return <Route {...rest} render={this.renderRoute} />;
  }
}

// TODO  как flow понимает что authUser приходит или надо дублировать руками?
const mapStateToProps = state => ({
  isAuthorized: selectIsAuthorized(state),
  sessionChecked: getSessionChecked(state),
});
export default connect(mapStateToProps)(ProtectedRoute);
