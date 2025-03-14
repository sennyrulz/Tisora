import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer"; // Import your reducers

const store = configureStore({
  reducer: rootReducer,
});

export default store;
