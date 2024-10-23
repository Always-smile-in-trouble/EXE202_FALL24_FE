import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  accessToken: "",
};
export const userLoginSlice = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
    login: (state, actions) => {
      state = actions.payload;
      state.accessToken = actions.payload.accessToken;
      state.email = actions.payload.email;
      return state;
    },
  },
});
