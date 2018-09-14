import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// const prodConfig = {
//   apiKey: YOUR_API_KEY,
//   authDomain: YOUR_AUTH_DOMAIN,
//   databaseURL: YOUR_DATABASE_URL,
//   projectId: YOUR_PROJECT_ID,
//   storageBucket: '',
//   messagingSenderId: YOUR_MESSAGING_SENDER_ID,
// };
const config = {
  apiKey: 'AIzaSyAZZRGFnOciwLZsSMjBlilnxfIlPcXXtc4',
  authDomain: 'flw-rcmps-frbs.firebaseapp.com',
  databaseURL: 'https://flw-rcmps-frbs.firebaseio.com',
  projectId: 'flw-rcmps-frbs',
  storageBucket: 'flw-rcmps-frbs.appspot.com',
  messagingSenderId: '985894078085',
};
// const devConfig = {
//   apiKey: YOUR_API_KEY,
//   authDomain: YOUR_AUTH_DOMAIN,
//   databaseURL: YOUR_DATABASE_URL,
//   projectId: YOUR_PROJECT_ID,
//   storageBucket: '',
//   messagingSenderId: YOUR_MESSAGING_SENDER_ID,
// };

// const config = process.env.NODE_ENV === 'production'
//   ? prodConfig
//   : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export { db, auth };
