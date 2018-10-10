// @flow

import Raven from 'raven-js';
import { applyMiddleware, createStore } from 'redux';
import createRavenMiddleware from 'raven-for-redux';
import rootReducer from '../reducks';
import authSessionWatcher from './authSessionWatcher';

const sentryUrl = process.env.REACT_APP_sentry_DSN;
if (!sentryUrl) {
  throw new Error('no sentry url');
}
Raven.config(sentryUrl).install();

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  // TODO error no more than 2 args expected
  applyMiddleware(createRavenMiddleware(Raven, {})),
);
// init auth session watcher
authSessionWatcher(store);

export default store;
