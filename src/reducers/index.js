import { combineReducers } from 'redux';
import logReducer from './logReducer';
import techReducer from './techReducer';

//Key = name of state
export default combineReducers({
  log: logReducer,
  tech: techReducer,
});
