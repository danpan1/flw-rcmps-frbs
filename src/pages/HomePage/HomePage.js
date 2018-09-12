// @flow
import React, { Component } from 'react';
import BookingsService from '../../api/BookingsService';
import DateAvailable from '../../components/DateAvailable/DateAvailable';

class HomePage extends Component<{}> {
  componentDidMount() {
    BookingsService.bookings.then(i => {
      console.log(i);
    });
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">Choose date</p>
        <DateAvailable
          startDay={new Date()}
          endTime="20:00"
          startTime="10:00"
        />
      </div>
    );
  }
}

export default HomePage;
