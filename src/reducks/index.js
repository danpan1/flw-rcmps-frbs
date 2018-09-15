import { combineReducers } from 'redux';
import sessionReducer, {moduleName} from './session';

const rootReducer = combineReducers({
  [moduleName]: sessionReducer,
});

export default rootReducer;
