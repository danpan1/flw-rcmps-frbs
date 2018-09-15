import { createSelector } from 'reselect';

// CONSTATNS
export const moduleName = '@sessionState';
const AUTH_USER_SET = 'AUTH_USER_SET';

// REDUCER

const INITIAL_STATE = {
  authUser: null,
  sessionChecked: false,
};

const applySetAuthUser = (state, action) => ({
  ...state,
  authUser: action.payload,
  sessionChecked: true,
});

export default function sessionReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER_SET: {
      return applySetAuthUser(state, action);
    }
    default:
      return state;
  }
}

// ACTION CREATORS
export const authUserAC = payload => ({
  type: AUTH_USER_SET,
  payload,
});

// SELECTORS

export const getUser = state => state[moduleName].authUser;
export const getSessionChecked = state => state[moduleName].sessionChecked;
export const selectUser = createSelector(getUser, user => user);
export const selectIsAuthorized = createSelector(selectUser, user => !!user);
