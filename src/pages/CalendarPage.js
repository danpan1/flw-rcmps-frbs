// @flow
import React, { Component } from 'react';
import DateAvailable from '../components/DateAvailable/DateAvailable';
import BookingsList from '../components/BookingsList/BookingsList';

class CalendarPage extends React.Component<{}> {
  render() {
    return (
      <div className="App">
        <p className="App-intro">Choose date</p>
        <DateAvailable
          startDay={new Date()}
          endTime="20:00"
          startTime="10:00"
        />
        <div>
          <BookingsList />
        </div>
      </div>
    );
  }
}

export default CalendarPage;
