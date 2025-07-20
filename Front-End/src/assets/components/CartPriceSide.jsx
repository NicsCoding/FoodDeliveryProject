import { MdCurrencyRupee } from "react-icons/md";

const CartPriceSide = ({ items }) => {
  const totalPrice = items.reduce(
    (adding, item) => adding + item.price * item.cartQuantity,
    0
  );
  const discount = 40;
  const deliveryCharges = 60;
  const gstFee = 99.99;
  const total = totalPrice - discount + deliveryCharges + gstFee;

  return (
    <div className="right-price-holder-child">
      <h3
        className="heading-thank-order"
        style={{ textAlign: "center", marginBottom: "10%" }}
      >
        On The Last-Step let's Go
      </h3>
      <div className="content-Holder">
        <div className="child-content-l-r">
          <span className="left-side-content">Price</span>
          <span className="right-side-content">
            <MdCurrencyRupee /> {totalPrice}
          </span>
        </div>
        <div className="child-content-l-r">
          <span className="left-side-content">Discount-For-You</span>
          <span className="right-side-content">
            <MdCurrencyRupee /> -{discount}
          </span>
        </div>
        <div className="child-content-l-r">
          <span className="left-side-content">Delivery-Charges</span>
          <span className="right-side-content">
            <MdCurrencyRupee /> {deliveryCharges}
          </span>
        </div>
        <hr className="hr-tag-thin" />
        <div className="child-content-l-r">
          <span className="left-side-content">GST-Fee And Hotel Charges:</span>
          <span className="right-side-content">
            <MdCurrencyRupee /> {gstFee}
          </span>
        </div>
        <div className="child-content-l-r">
          <span className="left-side-content">TOTAL RUPPES:</span>
          <span className="right-side-content">
            <MdCurrencyRupee /> {total}
          </span>
        </div>
        <div className="btn-place-div" style={{ width: "100%" }}>
          <button
            className="btn btn-info"
            style={{ width: "100%", marginTop: "40px" }}
          >
            Place Your Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPriceSide;
