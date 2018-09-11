// @flow
import React, { Component } from 'react';
import BookingsService from '../api/BookingsService';
import type { IBooking } from '../api/BookingsService';

class BookingsList extends Component<{}, { data: IBooking[] }> {
  state = { data: [] };
  componentDidMount() {
    BookingsService.bookings.then(data => {
      console.log(data);
      this.setState({ data });
    });
  }

  render() {
    const bookings = this.state.data;
    return (
      <div>
        <h1>BookingsList</h1>
        {bookings.map(book => (
          <div>
            <span>{book.date} / </span>
            <span>{book.name} / </span>
            <span>{book.email} / </span>
          </div>
        ))}
      </div>
    );
  }
}

export default BookingsList;
