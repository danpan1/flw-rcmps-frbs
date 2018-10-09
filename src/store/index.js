// @flow

import Raven from 'raven-js';
import {applyMiddleware, createStore} from 'redux';
import createRavenMiddleware from 'raven-for-redux';
import rootReducer from '../reducks';
import authSessionWatcher from './authSessionWatcher';

//TODO не отлавливает почему-то ошибку с typed-contract
Raven.config(process.env.REACT_APP_sentry_DSN).install();

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(createRavenMiddleware(Raven, {})),
);
// init auth session watcher
authSessionWatcher(store);

export default store;
