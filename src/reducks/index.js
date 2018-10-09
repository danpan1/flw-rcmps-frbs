// @flow

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import type { AppStateType } from '../flow-types/storesTypes';
import bookingsReducer from './bookings';
import sessionReducer from './session';

const reducers = {
  '@sessionState': sessionReducer,
  bookings: bookingsReducer,
  form: formReducer,
};
const rootReducer = combineReducers(reducers);

export default rootReducer;
