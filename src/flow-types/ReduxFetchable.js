// @flow

export type ReduxFetchable = {
  +_fetching: boolean,
  +_error: boolean,
  +_errorMessage: string,
};
