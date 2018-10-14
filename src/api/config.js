if(!process.env.REACT_APP_apiKey) {
  throw new Error('Missing REACT_APP_apiKey');
}
if(!process.env.REACT_APP_authDomain) {
  throw new Error('Missing REACT_APP_authDomain');
}
if(!process.env.REACT_APP_databaseURL) {
  throw new Error('Missing REACT_APP_databaseURL');
}
if(!process.env.REACT_APP_projectId) {
  throw new Error('Missing REACT_APP_projectId');
}
if(!process.env.REACT_APP_storageBucket) {
  throw new Error('Missing REACT_APP_storageBucket');
}
if(!process.env.REACT_APP_messagingSenderId) {
  throw new Error('Missing REACT_APP_messagingSenderId');
}
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
};