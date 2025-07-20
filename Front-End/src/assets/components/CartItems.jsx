import { useSelector } from "react-redux";
import DataShowCart from "./DataShowCart";
import CartPriceSide from "./CartPriceSide";
import EmptyCart from "./EmptyCart";
import { useMemo } from "react";
const CartItems = () => {
  const items = useSelector((store) => store.userCart);
  const renderedItems = useMemo(
    () => items.map((item) => <DataShowCart key={item._id} item={item} />),
    [items]
  );
  return (
    <div className="parent-div-cart">
      {items.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <div className="left-item-holder">{renderedItems}</div>
          <div className="right-price-holder">
            <CartPriceSide items={items} />
          </div>
        </>
      )}
    </div>
  );
};

export default CartItems;
