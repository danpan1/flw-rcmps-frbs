// @flow
/* eslint-disable no-underscore-dangle */
import type {BookingType} from '../api/BookingsService';
import BookingsService from '../api/BookingsService';
import {FAIL, START, SUCCESS} from '../fetchConstants';
import type {Dispatch, ThunkAction} from './reducks-types';

export const moduleName = 'bookings';
export const LOAD_BOOKINS = `@${moduleName}/LOAD_BOOKINGS`;

type ReduxFetchable = {
  +_fetching: boolean,
  +_error: boolean,
  +_errorMessage: string,
};

type BookingStateType = {
  +data: BookingType[],
  ...$Exact<ReduxFetchable>,
};

type ReduxActionType = {
  type: string,
  payload: mixed,
};

const initialState: BookingStateType = {
  data: [],

  _fetching: false,
  _error: false,
  _errorMessage: '',
};

export default function reducer(
  state: BookingStateType = initialState,
  action: ReduxActionType,
) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_BOOKINS + START:
      return { ...state, _fetching: true, _error: false };

    case LOAD_BOOKINS + SUCCESS:
      return {
        data: payload,
        _fetching: false,
        _error: false,
        _errorMessage: '',
      };

    case LOAD_BOOKINS + FAIL:
      return {
        ...state,
        _fetching: false,
        _error: true,
        _errorMessage: payload.message,
      };

    default:
      return state;
  }
}

// getters

export const getIsLoading = state => state[moduleName]._fetching;
export const getBookings = state => state[moduleName].data;

// action creators

export const loadBookingsFailAC = error => ({
  type: LOAD_BOOKINS + FAIL,
  payload: message,
});

export const loadBookingsThunk: ThunkAction = () => (dispatch: Dispatch) => {
  dispatch({ type: LOAD_BOOKINS + START });
  BookingsService.getBookings()
    .then(payload => dispatch({ type: LOAD_BOOKINS + SUCCESS, payload }))
    .catch(error => {
      dispatch({ type: LOAD_BOOKINS + FAIL, payload: error });
    });
};
