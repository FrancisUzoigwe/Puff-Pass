import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainState: "" || null,
};

const globalState = createSlice({
  name: "state",
  initialState,
  reducers: {
    user: (state, { payload }) => {
      state.mainState = payload;
    },
    logOut: (state) => {
      state.mainState = null;
    },
  },
});

export const {user, logOut} = globalState.actions;

export default globalState.reducer;
