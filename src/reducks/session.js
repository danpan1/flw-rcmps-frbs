// @flow

import type { AuthUserAction } from 'flow-types/actionsTypes';
import type { AuthUserType } from 'flow-types/authUserValidator';
import type { AppStateType, SessionState } from 'flow-types/storesTypes';
import { createSelector } from 'reselect';

// CONSTATNS
export const moduleName: '@sessionState' = '@sessionState';
export const AUTH_USER_SET: 'AUTH_USER_SET' = 'AUTH_USER_SET';

const INITIAL_STATE: SessionState = {
  authUser: null,
  sessionChecked: false,
};

export const authUserAC = (payload: AuthUserType): AuthUserAction => ({
  type: AUTH_USER_SET,
  payload,
});

// REDUCER

const applySetAuthUser = (state: SessionState, action: AuthUserAction) => ({
  ...state,
  authUser: action.payload,
  sessionChecked: true,
});

export default function sessionReducer(
  state: SessionState = INITIAL_STATE,
  action: AuthUserAction,
) {
  switch (action.type) {
    case AUTH_USER_SET: {
      return applySetAuthUser(state, action);
    }
    default:
      (action: empty);
      return state;
  }
}

// SELECTORS

export const getUser = (state: AppStateType) => state[moduleName].authUser;
export const getSessionChecked = (state: AppStateType) =>
  state[moduleName].sessionChecked;
export const selectUser = createSelector(getUser, user => user);
export const selectIsAuthorized = createSelector(selectUser, user => !!user);
