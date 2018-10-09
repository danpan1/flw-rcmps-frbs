// @flow

import React, { Component } from 'react';
import {loadBookingsThunk} from 'reducks/bookings';
import type { BookingType } from '../../api/BookingsService';
import { withProps } from 'recompose';

type Props = {
  loadBookings: () => Promise<BookingType[]>,
};
type State = { data: BookingType[] };
export class BookingsList extends Component<Props, State> {
  state = { data: [] };
  componentDidMount() {
    this.props.loadBookingsThunk()
  }

  render() {
    const bookings = this.state.data;
    return (
      <div>
        <h1>BookingsList</h1>
        {bookings.map(book => (
          <div key={book.id}>
            <span>{book.date} / </span>
            <span>{book.name} / </span>
            <span>{book.email} / </span>
          </div>
        ))}
      </div>
    );
  }
}

export default withProps(() => ({
  loadBookingsThunk: () => loadBookingsThunk,
}))(BookingsList);
