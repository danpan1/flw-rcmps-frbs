const INITIAL_STATE = {
  authUser: null,
};
const AUTH_USER_SET = 'AUTH_USER_SET';
const applySetAuthUser = (state, action) => ({
  ...state,
  authUser: action.authUser,
});

function sessionReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER_SET: {
      return applySetAuthUser(state, action);
    }
    default:
      return state;
  }
}
export const authUserAC = authUser => ({
  type: 'AUTH_USER_SET',
  authUser,
});
export default sessionReducer;
