import { createSlice } from "@reduxjs/toolkit";
const LoaderSlice = createSlice({
  name: "loader_sl",
  initialState: false,
  reducers: {
    CurrentState: (state, action) => {
      return action.payload;
    },
  },
});
export const LoaderAction = LoaderSlice.actions;
export default LoaderSlice;
