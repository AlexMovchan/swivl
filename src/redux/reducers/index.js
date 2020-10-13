import { combineReducers } from 'redux';
import usersListReducer from './usersList';

const rootReducer = combineReducers({
  usersListReducer,
});

export default rootReducer;
