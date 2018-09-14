import { firebase } from '../firebase';
import { authUserAC } from '../reducks/session';

export default function authSessionMiddleware(store) {
  firebase.auth.onAuthStateChanged((authUser = null) => {
    store.dispatch(authUserAC(authUser));
  });
}
