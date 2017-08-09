import { combineReducers } from 'redux';
import usersReducer from './users';
import authenticationReducer from './authentication';

const rootReducer = combineReducers({
  users: usersReducer,
  authenticated: authenticationReducer
});

export default rootReducer;
