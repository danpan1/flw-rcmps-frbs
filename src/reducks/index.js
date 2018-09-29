// @flow
import { combineReducers } from 'redux';
import sessionReducer, { moduleName as seessionName } from './session';
import bookingsReducer, { moduleName as bookingsName } from './bookings';
import { reducer as formReducer } from 'redux-form';
import type {State} from "./session";

// TODO [seessionName] не подствляется
export type AppStateType = {
  +[seessionName]: string,
  +[bookingsName]: string,
  // ...
};
const state:AppStateType = {
  [seessionName]: sessionReducer,
  [bookingsName]: bookingsReducer,
  form: formReducer,
}
const rootReducer = combineReducers(state);

export default rootReducer;
