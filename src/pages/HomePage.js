// @flow

import React, { Component } from 'react';
import firebase from 'firebase';
import logo from '../assets/logo.svg';
import './App.css';



var config = {
  apiKey: "AIzaSyAZZRGFnOciwLZsSMjBlilnxfIlPcXXtc4",
  // authDomain: "projectId.firebaseapp.com",
  databaseURL: "https://flw-rcmps-frbs.firebaseio.com",
  // storageBucket: "bucket.appspot.com"
};




firebase.initializeApp(config);
var database = firebase.database();
function writeUserData(userId, name, email, imageUrl) {
  database.ref('rules/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}



let bookings = []
function getII(){
   const rulesRef = database.ref('rules');
  rulesRef.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();
      const item = {id: childKey, ...childData}
      bookings.push(item);
      console.log('bookings', bookings);
    });
  });
}
getII()
class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default HomePage;
