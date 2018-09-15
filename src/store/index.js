// @flow

import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducks';
import authSessionMiddleware from './authSessionMiddleware';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(),
);
// init auth session watcher
authSessionMiddleware(store);

export default store;
