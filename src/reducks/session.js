// @flow
import { createSelector } from 'reselect';
import type { AuthUserType } from '../flow-types/authUserValidator';
import type { AppStateType } from './index';

// CONSTATNS
export const moduleName = '@sessionState';
const AUTH_USER_SET = 'AUTH_USER_SET';

// REDUCER
export type State = {
  authUser: AuthUserType | null,
  sessionChecked: boolean,
};
const INITIAL_STATE: State = {
  authUser: null,
  sessionChecked: false,
};

// ACTION CREATORS
// TODO нельзя подставить type : AUTH_USER_SET . а если брать typeof то это бесмысслено. нам не надо просто string
export type AuthUserAction = {
  type: typeof AUTH_USER_SET,
  payload: AuthUserType,
};
export const authUserAC = (payload: AuthUserType): AuthUserAction => ({
  type: AUTH_USER_SET,
  payload,
});

// REDUCER

const applySetAuthUser = (state: State, action: AuthUserAction) => ({
  ...state,
  authUser: action.payload,
  sessionChecked: true,
});

export default function sessionReducer(
  state: State = INITIAL_STATE,
  action: AuthUserAction,
) {
  switch (action.type) {
    case AUTH_USER_SET: {
      return applySetAuthUser(state, action);
    }
    default:
      return state;
  }
}

// SELECTORS

export const getUser = (state: AppStateType) => state[moduleName].authUser;
export const getSessionChecked = (state: AppStateType) =>
  state[moduleName].sessionChecked;
export const selectUser = createSelector(getUser, user => user);
export const selectIsAuthorized = createSelector(selectUser, user => !!user);
