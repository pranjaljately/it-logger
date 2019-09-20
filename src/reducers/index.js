import { combineReducers } from 'redux';
import logReducer from './logReducer';

//Key = name of state
export default combineReducers({
  log: logReducer,
});
