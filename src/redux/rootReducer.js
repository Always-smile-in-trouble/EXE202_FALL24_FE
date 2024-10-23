import { combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./features/userSlice";
import { userLoginSlice } from "./features/userLoginSlice";

const rootReducer = combineReducers({
  userRegister: userSlice.reducer,
  userLogin: userLoginSlice,
});

export default rootReducer;
