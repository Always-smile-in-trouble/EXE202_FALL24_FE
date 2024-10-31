import { combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./features/userSlice";
import { userLoginSlice } from "./features/userLoginSlice";
import { paymentSlice } from "./features/billPayment";

const rootReducer = combineReducers({
  userRegister: userSlice.reducer,
  userLogin: userLoginSlice.reducer,
  payment: paymentSlice.reducer,
});

export default rootReducer;
