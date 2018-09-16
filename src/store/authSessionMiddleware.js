// @flow

import { authUserAC } from '../reducks/session';
import AuthService from '../api/AuthService';
import { Store } from 'redux';

export default function authSessionMiddleware(store: Store) {
  // TODO add router.push. changing location from this middleware. We can import BrowserHistory and make push
  AuthService.onAuthStateChanged((authUser = null) => {
    store.dispatch(authUserAC(authUser));
  });
}
