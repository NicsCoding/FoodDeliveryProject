import { useEffect } from "react";
import { FoodAction } from "./FoodSlice";
import axios from "axios";
import { useDispatch } from "react-redux";
import { categoryAction } from "./categorySlice";
import { LoaderAction } from "./LoaderSlice";
import { userCartAction } from "./UserCartSlice";
const Fetching_Data_Server = () => {
  const dispatch = useDispatch();
  const fetchingData = async () => {
    try {
      const res = await axios.get("http://localhost:1729/food/products");
      const FoodItems = {
        data: res.data.data,
        length: res.data.foodLength,
      };
      dispatch(FoodAction.addFood(FoodItems));
      const res1 = await axios.get("http://localhost:1729/food/category");
      dispatch(categoryAction.addItems(res1.data));
      dispatch(LoaderAction.CurrentState(true));
    } catch (err) {
      console.error("error while loading the food", err);
      dispatch(LoaderAction.CurrentState(false));
    }
  };
  const fetchingUserCart = async () => {
    try {
      const token = localStorage.getItem("loginToken");
      const res = await axios.get("http://localhost:1729/user/userCart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const cartItems = res.data.map((item) => ({
        ...item,
        cartQuantity: 1,
      }));
      // console.log(cartItems);
      dispatch(userCartAction.addInCart(cartItems));
    } catch (err) {
      console.error("having error while loading your cart:", err);
      alert("Can't load your cart right now");
    }
  };
  useEffect(() => {
    fetchingData();
    if (localStorage.getItem("loginToken")) {
      fetchingUserCart();
    }
  }, [dispatch]);
  return null;
};
export default Fetching_Data_Server;
