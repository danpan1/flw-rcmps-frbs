// @flow
import Raven from 'raven-js';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducks';
import authSessionWatcher from './authSessionWatcher';
import createRavenMiddleware from 'raven-for-redux';

Raven.config(
  'https://da10d178ba254b0fabcf782c6ab4f979@sentry.io/1283524',
).install();

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(createRavenMiddleware(Raven, {})),
);
// init auth session watcher
authSessionWatcher(store);

export default store;
