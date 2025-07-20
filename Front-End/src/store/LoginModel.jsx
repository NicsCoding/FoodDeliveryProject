import { Link } from "react-router-dom";
const headinStyles = {
  fontWeight: "400",
};
const LoginModel = ({ show, onClose, onLogin }) => {
  if (!show) return null;
  return (
    <>
      <div className="model-parent-div">
        <div className="model-data">
          <h3 style={headinStyles}>Uh-oh! Hungry but not signed in?</h3>
          <h4 style={headinStyles}>
            To add delicious treats to your cart, please log in or sign up!
          </h4>
          <Link to="login">
            <button className="btn btn-success">Login</button>
          </Link>
          <button
            onClick={onLogin}
            style={{ marginLeft: "30px" }}
            className="btn btn-danger"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
    // document.getElementById("portal")
  );
};
export default LoginModel;
