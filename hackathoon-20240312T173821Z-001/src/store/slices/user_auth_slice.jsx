import { createSlice } from "@reduxjs/toolkit";

const initial_state = {
  auth_check_loading: true,
  user_auth: false,
  user_data: {
    role: "seller",
  },
};

const user_auth_slice = createSlice({
  name: "user-auth",
  initialState: initial_state,
  reducers: {
    set_user_auth: (state, actions) => {
      const { payload } = actions;
      // console.log('payload',payload);
      state.user_auth = payload.auth;
      state.auth_check_loading = false;
    },
  },
});

export const { set_user_auth } = user_auth_slice.actions;
export default user_auth_slice.reducer;
