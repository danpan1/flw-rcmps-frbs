// @flow

import type {
  LoadBookingsFailAction,
  LoadBookingsStartAction,
  LoadBookingsSuccessAction,
} from 'flow-types/actionsTypes';
import type { AppStateType, BookingState } from 'flow-types/storesTypes';
import type { BookingType } from '../api/BookingsService';
/* eslint-disable no-underscore-dangle */
import BookingsService from '../api/BookingsService';
import type { Dispatch, ThunkAction } from '../flow-types/reducks-types';

// export const moduleName: 'bookings' = 'bookings';
export const LOAD_BOOKINGS_FAIL: 'bookings/LOAD_BOOKINS_FAIL' = `bookings/LOAD_BOOKINS_FAIL`;
export const LOAD_BOOKINGS_SUCCESS: 'bookings/LOAD_BOOKINS_SUCCESS' = `bookings/LOAD_BOOKINS_SUCCESS`;
export const LOAD_BOOKINGS_START: 'bookings/LOAD_BOOKINS_START' = `bookings/LOAD_BOOKINS_START`;

const initialState: BookingState = {
  data: [],
  _fetching: false,
  _error: false,
  _errorMessage: '',
};

export default function reducer(
  state: BookingState = initialState,
  action: LoadBookingsFailAction | LoadBookingsSuccessAction,
) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_BOOKINGS_START:
      return { ...state, _fetching: true, _error: false };

    case LOAD_BOOKINGS_SUCCESS:
      return {
        data: payload,
        _fetching: false,
        _error: false,
        _errorMessage: '',
      };

    case LOAD_BOOKINGS_FAIL:
      return {
        ...state,
        _fetching: false,
        _error: true,
        _errorMessage: payload,
      };

    default:
      return state;
  }
}

// getters
export const getBookings = (state: AppStateType) => state.bookings.data;

// action creators
export const loadBookingsStartAC = (): LoadBookingsStartAction => ({
  type: LOAD_BOOKINGS_START,
});
export const loadBookingsFailAC = (payload: mixed): LoadBookingsFailAction => ({
  type: LOAD_BOOKINGS_FAIL,
  payload,
});
export const loadBookingsSuccessAC = (
  payload: BookingType[],
): LoadBookingsSuccessAction => ({
  type: LOAD_BOOKINGS_SUCCESS,
  payload,
});

export const loadBookingsThunk: () => ThunkAction = () => (
  dispatch: Dispatch,
) => {
  dispatch(loadBookingsStartAC());
  BookingsService.getBookings()
    .then(payload => dispatch(loadBookingsSuccessAC(payload)))
    .catch(error => {
      dispatch(loadBookingsFailAC(error));
    });
};

export const bookThunk: (values: BookingType) => ThunkAction = values => () => {
  return BookingsService.book(values);
};
