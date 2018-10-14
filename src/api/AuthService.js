// @flow

import { auth, firebase } from './firebase';
import { validateAuthUser } from 'flow-types/authUserValidator';
import type { AuthUserType } from 'flow-types/authUserValidator';

type onAuthStateChangedFn = (AuthUserType | void) => void;
class AuthService {
  static doCreateUserWithEmailAndPassword = (email: string, password: string) =>
    auth.createUserWithEmailAndPassword(email, password);

  static doSignInWithEmailAndPassword = (email: string, password: string) =>
    auth.signInWithEmailAndPassword(email, password);

  static doPasswordResetemail = (email: string) =>
    auth.sendPasswordResetEmail(email);

  static doPasswordUpdatepassword = (password: string) => {
    if (auth.currentUser) {
      auth.currentUser.updatePassword(password);
    }
  };

  static signOut = (): Promise<mixed> => auth.signOut();

  static signInWithGoogle() {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    googleProvider.addScope('profile');
    return auth.signInWithPopup(googleProvider);
  }

  static onAuthStateChanged(cb: onAuthStateChangedFn): void {
    auth.onAuthStateChanged((authUser: AuthUserType | null | void) => {
      let user;
      if (authUser) {
        user = {
          displayName: authUser.displayName,
          email: authUser.email,
        };
      }
      // TODO если убрать undefined какая-то беда происходит
      const validated = validateAuthUser(user) || undefined;
      cb(validated);
    });
  }
}
export default AuthService;
