// @flow
import React, { Component } from 'react';
import { doSignInWithPopupGoogle, doSignOut } from '../firebase/auth';

class LoginPage extends Component<{}> {
  handleLogin = () => {
    console.log('handleLogin');
    doSignInWithPopupGoogle();
  };
  render() {
    return (
      <div>
        LoginPage
        <button onClick={this.handleLogin}>Sign in Google</button>
        <button onClick={doSignOut}>Sign Out Google</button>
      </div>
    );
  }
}

export default LoginPage;
