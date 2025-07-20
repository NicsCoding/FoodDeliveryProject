import { Link, Form, useActionData } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { IoEyeOffSharp } from "react-icons/io5";
import { useState } from "react";
import Go_To_Home from "../assets/components/Go_To_Home";
export const onClickHandler = (type, setClick_val) => {
  setClick_val(type);
};
const Login_Page = () => {
  const actionData = useActionData();
  const [clicked_Val, setClick_val] = useState("password");
  return (
    <div>
      <div className="login-sign-up-page" style={{ paddingTop: "100px" }}>
        <Go_To_Home />
        <div className="setup-sign-up">
          <Form method="POST" action="/login">
            <center>
              <h1 className="center-title-heading">
                Welcome Back Enjoy Food Again
              </h1>
            </center>
            <div className="main-login-email-password">
              <div className="login-email">
                <input
                  type="text"
                  name="email"
                  className={`login-input ${
                    actionData?.error?.includes("Email") && "error-input"
                  }`}
                  placeholder="Email eg-(iamemail@gmail.com)"
                />
              </div>
              <div className="login-password">
                <div className="input-container">
                  <input
                    type={`${clicked_Val}`}
                    name="password"
                    className={`login-input ${
                      actionData?.error?.includes("PassWord") && "error-input "
                    }`}
                    autoComplete="username new-password"
                    placeholder="Enter Your password (Min-Len:6)"
                  />
                </div>
                {clicked_Val === "password" ? (
                  <span
                    className="toggle_password_eye toggle_password"
                    onClick={() => onClickHandler("text", setClick_val)}
                  >
                    <FaEye color="black" size="25px" />
                  </span>
                ) : (
                  <span
                    className="toggle_password_eye_closed toggle_password"
                    onClick={() => onClickHandler("password", setClick_val)}
                  >
                    <IoEyeOffSharp color="black" size="25px" />
                  </span>
                )}
              </div>
            </div>
            <div className="guideLines each-style">
              <p>
                By signing Up, you agree to our{" "}
                <u style={{ color: "red", cursor: "pointer" }}>Terms Of Use</u>{" "}
                and{" "}
                <u style={{ color: "red", cursor: "pointer" }}>
                  Privacy Policy
                </u>{" "}
              </p>
            </div>
            <div className="submit-button each-style">
              <button type="submit" className="submit-button-style">
                Login Using Email
              </button>
            </div>
            <div className="cond-have-acc each-style">
              <center>
                <p>
                  Create a Account if not?
                  <Link to="/sign-up">
                    <u style={{ color: "red" }}>Sign-Up</u>
                  </Link>
                </p>
              </center>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Login_Page;
