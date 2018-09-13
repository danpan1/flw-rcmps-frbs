// // @flow
// // Идентификатор веб-клиента
// //
// // 985894078085-24gfvnghhpkjqbj8ppabmcb8pgluooq9.apps.googleusercontent.com
// // Секрет веб-клиента
// //
// // E9ZP0B4mv-CVIT7Bf_t6qWMG
//
// import firebaseInstance from './firebaseInstance';
//
//
// class AuthService {
//   static signIn():Promise<> {
//     return firebaseInstance
//       .auth()
//       .signInWithPopup(provider)
//       .then(function(result) {
//         const token = result.credential.accessToken;
//         var user = result.user;
//       })
//       .catch(function(error) {
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         var email = error.email;
//         // The firebaseInstance.auth.AuthCredential type that was used.
//         var credential = error.credential;
//         // [START_EXCLUDE]
//         if (errorCode === 'auth/account-exists-with-different-credential') {
//           alert(
//             'You have already signed up with a different auth provider for that email.',
//           );
//           // If you are using multiple auth providers on your app you should handle linking
//           // the user's accounts here.
//         } else {
//           console.error(error);
//         }
//       });
//   }
//   static signOut() {
//     return firebaseInstance.auth().signOut();
//   }
// }
// export default AuthService;
