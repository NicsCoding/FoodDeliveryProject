import axios from "axios";
import { userCartAction } from "../store/UserCartSlice";

export const addingButtonHandler = async (dispatch, item, setShow) => {
  const productId = item._id;
  const token = localStorage.getItem("loginToken");
  if (!token) {
    setShow(true);
  } else {
    try {
      await axios.post(
        "http://localhost:1729/user/addToCart/",
        { productId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(userCartAction.addByCall(item));
    } catch (err) {
      alert("Failed to add item in cart ! Please Try Again Later");
    }
  }
};
export const deleteHandler = async (dispatch, item, setShow) => {
  const token = localStorage.getItem("loginToken");
  if (!token) {
    setShow(true);
  } else {
    const productId = item._id;
    try {
      await axios.delete("http://localhost:1729/user/deleteCartItem", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { productId },
      });
      const value = {
        name: item.name,
        _id: item._id,
      };
      dispatch(userCartAction.deleteFromCart(value));
    } catch (err) {
      alert("Failed to Remove item from cart ! Please Try Again Later");
    }
  }
};
