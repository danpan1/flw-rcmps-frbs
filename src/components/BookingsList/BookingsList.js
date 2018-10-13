// @flow

import type {Dispatch} from 'flow-types/reducks-types';
import * as React from 'react';
import connect from 'react-redux/es/connect/connect';
import { loadBookingsThunk } from 'reducks/bookings';
import type { BookingType } from '../../api/BookingsService';

const mapDispatchToProps = (dispatch:Dispatch) => ({
  loadBookingsThunk : () => dispatch(loadBookingsThunk()),
});
type MethodsFromRedux = $Exact<$Call<typeof mapDispatchToProps, Dispatch>>;
type Props = {
  ...MethodsFromRedux,
};
type State = { data: BookingType[] };
export class BookingsList extends React.Component<Props, State> {
  state = { data: [] };
  componentDidMount() {
    this.props.loadBookingsThunk();
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

type PropsFromParent = $Exact<$Diff<Props, MethodsFromRedux>>;
export default (connect(
  () => ({}),
  mapDispatchToProps,
)(BookingsList): React.ComponentType<PropsFromParent>);
