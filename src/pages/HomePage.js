// @flow

import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './App.css';
import BookingsService from "../api/bookings-service";



class HomePage extends Component {
  componentDidMount() {
    BookingsService.bookings.then(i=>{
      console.log(i)
    })
  }

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
