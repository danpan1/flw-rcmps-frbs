// @flow
import { auth, firebase } from './firebase';
// import type { AuthUserType } from '../flow-types';
import { validateAuthUser } from '../flow-types/authUserValidator';
import type { AuthUserType } from '../flow-types/authUserValidator';

type onAuthStateChangedFn = (AuthUserType | null | void) => void;
class AuthService {
  static doCreateUserWithEmailAndPassword = (email: string, password: string) =>
    auth.createUserWithEmailAndPassword(email, password);

  static doSignInWithEmailAndPassword = (email: string, password: string) =>
    auth.signInWithEmailAndPassword(email, password);

  static doPasswordResetemail = (email: string) =>
    auth.sendPasswordResetEmail(email);

  static doPasswordUpdatepassword = (password: string) =>
    auth.currentUser.updatePassword(password);

  static signOut = (): void => auth.signOut();

  static signInWithGoogle() {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    googleProvider.addScope('profile');
    return auth.signInWithPopup(googleProvider);
  }

  static onAuthStateChanged(cb: onAuthStateChangedFn): void {
    auth.onAuthStateChanged((authUser: AuthUserType | null | void) => {
      let user = null;
      if (authUser) {
        user = {
          displayName: authUser.displayName,
          email: authUser.email,
        };
      }
      const validated = validateAuthUser(user);
      cb(validated);
    });
  }
}
export default AuthService;
