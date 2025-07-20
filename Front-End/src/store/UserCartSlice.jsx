import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const UserCartSlice = createSlice({
  name: "userCart",
  initialState: [],
  reducers: {
    addInCart: (state, action) => {
      return action.payload;
    },
    addByCall: (state, action) => {
      const data = { ...action.payload, cartQuantity: 1 };
      state.push(data);
      toast.success(`${action.payload.name} added to cart`, {
        position: "bottom-right",
      });
    },
    deleteFromCart: (state, action) => {
      toast.error(`${action.payload.name} removed from cart`, {
        position: "bottom-right",
      });
      return state.filter((item) => item._id != action.payload._id);
    },
    addingQuantityCart: (state, action) => {
      return state.map((item) =>
        item._id === action.payload._id
          ? {
              ...item,
              cartQuantity: action.payload.quantity,
            }
          : item
      );
    },
    emptyCart: () => {
      return [];
    },
  },
});
export const userCartAction = UserCartSlice.actions;
export default UserCartSlice;