import { Link } from "react-router-dom";
const EmptyCart = () => {
  return (
    <div className="empty-cart">
      <div className="message-cart">
        <h2 style={{ fontWeight: "300" }}>
          Your cart’s empty, but your stomach doesn’t have to be.
        </h2>
      </div>
      <div className="image-empty-cart">
        <img
          src="https://img.freepik.com/premium-psd/empty-cart-shopping-commerce-3d-illustration_66255-2017.jpg"
          className="empty-cart-img"
          alt="Empty-cart"
          style={{ height: "55vh" }}
        />
      </div>
      <Link to="/">
        <button className="button">Go To Home And Get Some food</button>
      </Link>
    </div>
  );
};

export default EmptyCart;
