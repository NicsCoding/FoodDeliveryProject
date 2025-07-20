import { createSlice } from "@reduxjs/toolkit";
const ChoiceSlice = createSlice({
  name: "choice_category",
  initialState: [],
  reducers: {
    addData: (state, action) => {
      return action.payload;
    },
  },
});
export const ChoiceAction = ChoiceSlice.actions;
export default ChoiceSlice;
