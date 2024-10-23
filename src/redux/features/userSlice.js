import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
};

export const userSlice = createSlice({
  name: "userRegister",
  initialState,
  reducers: {
    register: (state, action) => {
      state = action.payload;
      state.email = action.payload.email;
      state.password = action.payload.password;
      return state;
    },
    clear: () => {
      localStorage.removeItem("token");
      return null;
    },
  },
});

export const { register, clear, login } = userSlice.actions;
export default userSlice.reducer;
