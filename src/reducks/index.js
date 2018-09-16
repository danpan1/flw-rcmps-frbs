import { combineReducers } from 'redux';
import sessionReducer, { moduleName } from './session';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  [moduleName]: sessionReducer,
  form: formReducer,
});

export default rootReducer;
