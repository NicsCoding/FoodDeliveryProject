import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import FoodSlice from "./FoodSlice";
import LoaderSlice from "./LoaderSlice";
import ChoiceSlice from "./ChoiceByCategorySlice";
import UserCartSlice from "./UserCartSlice";
const foodDeliveryReducer = configureStore({
  reducer: {
    category: categorySlice.reducer,
    food_slice: FoodSlice.reducer,
    loader_sl: LoaderSlice.reducer,
    choice_category: ChoiceSlice.reducer,
    userCart: UserCartSlice.reducer,
  },
});
export default foodDeliveryReducer;
