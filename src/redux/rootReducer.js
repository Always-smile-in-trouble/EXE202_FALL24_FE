import { combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./features/userSlice";

const rootReducer = combineReducers({
  user: userSlice.reducer,
});

export default rootReducer;
