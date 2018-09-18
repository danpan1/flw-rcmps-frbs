// @flow
import { auth, firebase } from './firebase';
import { authUserValidator } from '../flow-types';
import type { AuthUserType } from '../flow-types';

type onAuthStateChangedFn = AuthUserType => void;
class AuthService {
  static doCreateUserWithEmailAndPassword = (email: string, password: string) =>
    auth.createUserWithEmailAndPassword(email, password);

  static doSignInWithEmailAndPassword = (email: string, password: string) =>
    auth.signInWithEmailAndPassword(email, password);

  static doPasswordResetemail = (email: string) =>
    auth.sendPasswordResetEmail(email);

  static doPasswordUpdatepassword = (password: string) =>
    auth.currentUser.updatePassword(password);

  static signOut = () => auth.signOut();

  static signInWithGoogle() {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    googleProvider.addScope('profile');
    return auth.signInWithPopup(googleProvider);
  }

  static onAuthStateChanged(cb: onAuthStateChangedFn): void {
    auth.onAuthStateChanged(authUser => {
      //AuthUserType || null
      let user = null;
      if (authUser) {
        user = {
          displayName: authUser.displayName,
          email: authUser.email,
        };
      }
      const validated = authUserValidator(user);
      cb(validated);
    });
  }
}
export default AuthService;
