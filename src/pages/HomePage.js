import React, { Component } from 'react';
import BookingsService from '../api/bookings-service';
import DateAvailable from '../components/DateAvailable/DateAvailable';
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
        <p className="App-intro">
          Choose date
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
