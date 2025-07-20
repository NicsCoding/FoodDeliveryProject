import { createSlice } from "@reduxjs/toolkit";
const categorySlice = createSlice({
  name: "category",
  initialState: [],
  reducers: {
    addItems: (state, action) => {
      return action.payload;
    },
    clearItems: () => {
      return [];
    },
  },
});
export const categoryAction = categorySlice.actions;
export default categorySlice;
