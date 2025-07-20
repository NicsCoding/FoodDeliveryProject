import { MdCurrencyRupee } from "react-icons/md";
import { LuSquareAsterisk } from "react-icons/lu";
import { MdOutlineStars } from "react-icons/md";
import LoginModel from "../../store/LoginModel";
import useCartExistense from "../../Hooks/useCartExistense";
import useCartHandlers from "../../Hooks/useCartHandler";
const AllfoodGroup = ({ item }) => {
  const { show, setShow, handleAddClick, handleRemoveClick } =
    useCartHandlers(item);
  const isInCartCheck = useCartExistense(item._id);
  return (
    <div className="food-chain-div">
      <div className="data-storage">
        <div className="country-tag">
          {item.category === "non-veg" ? (
            <LuSquareAsterisk style={{ color: "red" }} />
          ) : (
            <LuSquareAsterisk style={{ color: "green" }} />
          )}{" "}
          {item.cuisine}
        </div>
        <div className="storing-image">
          <img src={item.image} alt="sorry" className="food-image" />
        </div>
        <div className="info-food">
          <div className="name-of-dish text-all">{item.name}</div>
          <div className="infos">
            <span className="price-" style={{ display: "inline" }}>
              <MdCurrencyRupee />
              {item.price}
            </span>
            <MdOutlineStars />
            Rating-
            {item.rating}
          </div>
          <span className="time-duration">
            {item.prepTimeMinutes}-{item.cookTimeMinutes} Mins
          </span>
          <span className="button-for-cart">
            {isInCartCheck ? (
              <button
                className="add-cart-button"
                style={{ backgroundColor: "red", padding: "10px 10px" }}
                onClick={handleRemoveClick}
              >
                Remove From Cart
              </button>
            ) : (
              <>
                <button className="add-cart-button" onClick={handleAddClick}>
                  Add to Cart
                </button>
                <LoginModel
                  show={show}
                  onClose={() => setShow(false)}
                  onLogin={() => setShow(false)}
                />
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AllfoodGroup;
