import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
  foodLength: 0,
};
const FoodSlice = createSlice({
  name: "food_slice",
  initialState,
  reducers: {
    addFood: (state, action) => {
      state.foodLength = action.payload.length;
      state.data = action.payload.data;
    },
  },
});
export const FoodAction = FoodSlice.actions;
export default FoodSlice;
