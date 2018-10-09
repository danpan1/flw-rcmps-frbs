// @flow

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export { db, auth, firebase };
