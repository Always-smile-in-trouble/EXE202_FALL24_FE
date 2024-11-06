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
      state.email = actions.payload.email;
      state.accessToken = actions.payload.accessToken;
      return state;
    },
    logout: () => {
      return null;
    },
  },
});

export const { login, logout } = userLoginSlice.actions;
