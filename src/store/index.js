// @flow

import Raven from 'raven-js';
import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import createRavenMiddleware from 'raven-for-redux';
import rootReducer from '../reducks';
import authSessionWatcher from './authSessionWatcher';

if(process.env === 'production'){
  const sentryUrl = process.env.REACT_APP_sentry_DSN;
  if (!sentryUrl ) {
    throw new Error('no sentry url');
  }
  Raven.config(sentryUrl).install();
}


const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer: any = composeEnhancers(
  applyMiddleware(createRavenMiddleware(Raven, {}), thunk),
);
// TODO error no more than 2 args expected???? перегрузка функции не работает?
const store = (createStore: any)(rootReducer, {}, enhancer);

// init auth session watcher
authSessionWatcher(store);

export default store;
