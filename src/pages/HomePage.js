import React, { Component } from 'react';
import BookingsService from '../api/bookings-service';
import DateAvailable from '../components/DateAvailable/DateAvailable';
import logo from '../assets/logo.svg';
import './App.css';

class HomePage extends Component {
  componentDidMount() {
    BookingsService.bookings.then(i => {
      console.log(i);
    });
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
        <DateAvailable
          startDay={new Date()}
          endTime={'20:00'}
          startTime={'10:00'}
        />
      </div>
    );
  }
}

export default HomePage;
