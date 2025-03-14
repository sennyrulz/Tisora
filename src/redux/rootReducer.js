import { combineReducers } from "redux";
import counterReducer from "./counterSlice"; // Your slice file

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
