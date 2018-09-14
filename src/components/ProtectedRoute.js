// import React, {Component} from 'react';
// import {Route} from 'react-router-dom';
// import {compose} from 'recompose';
// import withCheckAuthorization from './withCheckAuthorization';
// // import AccessDeniedPage from '../shared/components/AccessDeniedPage';
// // import { getRole, isLoggedIn } from './auth.redux';
//
// class ProtectedRoute extends Component {
//   renderRoute = (...args) => {
//     const AuthorizedComponent = this.props.component;
//     return <AuthorizedComponent {...args} />;
//   };
//
//   render() {
//     const { component, ...rest } = this.props;
//     return <Route {...rest} render={this.renderRoute} />;
//   }
// }
//
// export default withCheckAuthorization(a => !!a)(ProtectedRoute);

// import {compose} from "recompose";
// import {withRouter} from "react-router-dom";
// import connect from "react-redux/es/connect/connect";
//
// const mapStateToProps = state => ({
//   authUser: state.sessionState.authUser,
// });
//
// return compose(
//   withRouter,
//   connect(mapStateToProps),
// )(WithAuthorization);
