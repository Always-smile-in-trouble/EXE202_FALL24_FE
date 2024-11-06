import { createSlice } from "@reduxjs/toolkit";

export const paymentSlice = createSlice({
  name: "payment",
  initialState: null,
  reducers: {
    payment: (state, actions) => {
      state = actions.payload;
      return state;
    },
  },
});

export const { payment } = paymentSlice.actions;
