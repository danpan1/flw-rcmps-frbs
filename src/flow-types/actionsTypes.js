// @flow

import type {BookingType} from 'api/BookingsService';
import {LOAD_BOOKINGS_FAIL, LOAD_BOOKINGS_START, LOAD_BOOKINGS_SUCCESS} from 'reducks/bookings';
import type {AuthUserType} from 'flow-types/authUserValidator';
import {AUTH_USER_SET} from 'reducks/session';

// ACTION CREATORS
export type AuthUserAction = {
  type: typeof AUTH_USER_SET,
  payload: AuthUserType,
};
//TODO сделать тип LOAD_BOOKINS + SUCCESS
export type LoadBookingsFailAction = {
  type: typeof LOAD_BOOKINGS_FAIL,
  // TODO typeof Error
  payload: mixed,
};
export type LoadBookingsSuccessAction = {
  type: typeof LOAD_BOOKINGS_SUCCESS,
  payload: BookingType[],
};

export type LoadBookingsStartAction = {|
  type: typeof LOAD_BOOKINGS_START,
|};
