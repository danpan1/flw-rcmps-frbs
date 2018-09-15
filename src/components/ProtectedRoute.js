import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSessionChecked, selectIsAuthorized } from '../reducks/session';

// TODO как здесь добавить типы?
class ProtectedRoute extends Component {
  renderRoute = (...args) => {
    const AuthorizedComponent = this.props.component;
    if (this.props.sessionChecked === false) {
      return <div>Checking User authentication data</div>;
    }
    if (this.props.isAuthorized) {
      return <AuthorizedComponent {...args} />;
    }
    return <Redirect to="/login" />;
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
