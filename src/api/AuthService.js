// @flow

import { auth, firebase } from './firebase';

type IAuthUser = {
  credential: { accessToken: string },
  // TODO какой объект юзера
  user: mixed,
};

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
    googleProvider.addScope(
      'https://www.googleapis.com/auth/contacts.readonly',
    );
    return auth.signInWithPopup(googleProvider);
  }

  static onAuthStateChanged(cb: IAuthUser => void): void {
    return auth.onAuthStateChanged(cb);
  }
}
export default AuthService;

//   .then(function(result) {
//     const token = result.credential.accessToken;
//     var user = result.user;
//   })
//   .catch(function(error) {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     var email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     var credential = error.credential;
//     // [START_EXCLUDE]
//     if (errorCode === 'auth/account-exists-with-different-credential') {
//       alert(
//         'You have already signed up with a different auth provider for that email.',
//       );
//       // If you are using multiple auth providers on your app you should handle linking
//       // the user's accounts here.
//     } else {
//       console.error(error);
//     }
//   });
