import { auth, firebase } from './firebase';
// import type { AuthUserType } from '../flow-types';
import { authUserValidator } from '../flow-types';
import { ValidationError } from 'typed-contracts';

type onAuthStateChangedFn = AuthUserType => void;
// есть ли смысл в папке firebase/auth или тут делать все операции с firebase
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

  static onAuthStateChanged(cb): void {
    auth.onAuthStateChanged(authUser => {
      //AuthUserType || null
      let user = null;
      if (authUser) {
        user = {
          displayName: authUser.displayName,
          email: authUser.email,
        };
      }
      // TODO как использовать контракт и как выводить ValidationError
      const validated = authUserValidator.maybe('onAuthStateChanged', user);
      // if (validated instanceof ValidationError) {
      //   throw new Error(validated.nested);
      // } else {
      cb(authUser);
      // }
    });
  }
}
export default AuthService;
