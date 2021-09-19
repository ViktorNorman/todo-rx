import { nameReducer } from '../reducers/nameReducer';
import { todoReducer } from '../reducers/todoReducer';
import { combineReducers } from './combineReducers';
  
export const rootReducer = combineReducers({
    nameReducer,
    todoReducer
});
