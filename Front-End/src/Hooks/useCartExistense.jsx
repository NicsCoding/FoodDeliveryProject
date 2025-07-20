import { useSelector } from "react-redux";
import { useMemo } from "react";

const useCartExistense = (itemId) => {
  const allItem = useSelector((store) => store.userCart);
  const isInCart = useMemo(
    () => allItem.some((item) => item._id === itemId),
    [allItem, itemId]
  );
  return isInCart;
};

export default useCartExistense;
