import { combineReducers } from "redux";
import todoReducer from './todo/todo.reducer';
import filterReducer from './filter/filter-reducer';
import userReducer from './user/user.reducer';
export default combineReducers({
    todo:todoReducer,
    filter:filterReducer,
    userState:userReducer
})