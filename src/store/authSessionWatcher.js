// @flow

import type { Dispatch } from 'flow-types/reducks-types';
import { authUserAC } from '../reducks/session';
import AuthService from '../api/AuthService';

export default function authSessionMiddleware(store: { dispatch: Dispatch }) {
  AuthService.onAuthStateChanged(authUser => {
    store.dispatch(authUserAC(authUser));
  });
}
