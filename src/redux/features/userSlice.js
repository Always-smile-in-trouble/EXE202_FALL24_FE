import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register: (state, action) => {
      state = action.payload;
      state.email = action.payload.email;
      state.password = action.payload.password;
      return state;
    },
    clear: () => {
      return null;
    },
  },
});

export const { register, clear } = userSlice.actions;
export default userSlice.reducer;
