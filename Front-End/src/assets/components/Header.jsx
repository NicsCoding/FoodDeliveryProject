import { Link } from "react-router-dom";
import delivery_logo from "../../../public/assets/logo-delivery.jpeg";
import { CiLogout } from "react-icons/ci";
import { AiTwotoneLike } from "react-icons/ai";
import { CiLogin } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { userCartAction } from "../../store/UserCartSlice";
const Header = () => {
  const items = useSelector((store) => store.userCart);
  const dispatch = useDispatch();

  const clickHandler = () => {
    localStorage.removeItem("loginToken");
    dispatch(userCartAction.emptyCart());
  };
  return (
    <header className="header-ele">
      <div>
        <div className="header-div">
          <Link to="/" style={{ marginLeft: "10%" }}>
            <img
              src={delivery_logo}
              alt="can't load"
              className="delivery-logo"
            />
          </Link>
          <div className="ul-items">
            <ul className="nav-ul">
              <li className="nav-ul-items">
                {/* <img
                  src={search_logo}
                  alt="can't load"
                  className="search-logo"
                /> */}
                <Link to="/search-box">
                  <button className="sign-up">
                    <CiSearch size={25} />
                    <span className="search-text">Search</span>
                  </button>
                </Link>
              </li>
            </ul>
            {localStorage.getItem("loginToken") ? (
              <div>
                <ul className="nav-ul">
                  <li className="cart">
                    <Link to="/cart-Items">
                      <button type="button" className="sign-up">
                        Cart <span className="data-text">{items.length}</span>
                      </button>
                    </Link>
                  </li>
                  <li className="cart">
                    <Link to="/login">
                      <button className="sign-up" onClick={clickHandler}>
                        <CiLogout />
                        <span className="search-text">Log Out</span>
                      </button>
                    </Link>
                    {/* </li> */}
                  </li>
                </ul>
              </div>
            ) : (
              <div>
                <ul className="nav-ul">
                  <li className="nav-ul-items">
                    <Link to="/login">
                      <button className="sign-up">
                        <CiLogin />
                        <span className="search-text">Login</span>
                      </button>
                    </Link>
                  </li>
                  <li className="nav-ul-items">
                    <Link to="/sign-up">
                      <button className="sign-up">
                        <AiTwotoneLike />
                        <span className="search-text">SignUp</span>
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
{
  /* <header>
        <div className="header_main">
          <div className="subDiv">
            <img src={logo_black} alt="" className="logo" />
            <ul className="list items">
              <li className="content-list">Home</li>
              <li className="content-list">About</li>
              <li className="content-list">Contact</li>
              <li className="content-list">Checking</li>
            </ul>
            <div className="search-box">
              <input type="text" placeholder="search an item" />
              <img src={search_w} alt="" className="search-logo" />
            </div>
            <div>
              <img src={night} alt="" />
            </div>
          </div>
        </div>
      </header> */
}
