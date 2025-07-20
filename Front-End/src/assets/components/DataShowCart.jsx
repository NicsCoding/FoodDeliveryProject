import { MdCurrencyRupee } from "react-icons/md";
import { FcRating } from "react-icons/fc";
import { FcDeleteRow } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { userCartAction } from "../../store/UserCartSlice";
import { deleteHandler } from "../../Hooks/AddingDeleteMethod";
const DataShowCart = ({ item }) => {
  const dispatch = useDispatch();
  const quantityHandler = (e) => {
    let value = {
      _id: item._id,
      quantity: e.target.value,
    };
    dispatch(userCartAction.addingQuantityCart(value));
  };
  const onDeleteHandler = () => {
    deleteHandler(dispatch, item, null);
  };
  return (
    <div className="child-data-viewer">
      <img src={item.image} alt="can't load" className="image-cart-data" />
      <div className="values-for-product">
        <span className="item-name">
          <b>{item.name}</b>
        </span>
        <span
          className="item-cuisine"
          style={{ color: item.category === "veg-food" ? "green" : "red" }}
        >
          {item.cuisine}
        </span>
        <span className="rating-product">
          <FcRating /> {item.rating}
        </span>
        <select
          name="quantityCheck"
          id="checkingQuantityProductsSelector"
          className="quantityCheck"
          onChange={quantityHandler}
        >
          {Array.from({ length: 8 }, (_, index) => (
            <option value={index + 1} key={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
        <span className="price">
          <MdCurrencyRupee />
          {item.price * item.cartQuantity}
        </span>
      </div>
      <span className="cutProdut" onClick={onDeleteHandler}>
        <FcDeleteRow size={25} />
      </span>
    </div>
  );
};

export default DataShowCart;
