// @flow
import React, { Component } from 'react';
import BookingsService from '../../api/BookingsService';
import type { IBooking } from '../../api/BookingsService';
import { withProps } from 'recompose';

type Props = {
  loadBookings: () => Promise<IBooking[]>,
};
type State = { data: IBooking[] };
export class BookingsList extends Component<Props, State> {
  state = { data: [] };
  componentDidMount() {
    this.props.loadBookings().then(data => {
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
  loadBookings: () => BookingsService.bookings,
}))(BookingsList);
