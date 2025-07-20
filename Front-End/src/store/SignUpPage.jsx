import { Link, Form, useActionData } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { IoEyeOffSharp } from "react-icons/io5";
import { useState } from "react";
import { onClickHandler } from "./Login_Page";
import Go_To_Home from "../assets/components/Go_To_Home";
const SignUpPage = () => {
  const actionData = useActionData();
  const [clicked_Val, setClick_val] = useState("password");
  return (
    <>
      <div className="login-sign-up-page">
        <Go_To_Home />
        <div className="setup-sign-up">
          <Form method="POST" action="/sign-up">
            <center>
              <h1 className="center-title-heading">
                Let's Enjoy Food Together
              </h1>
            </center>
            <div className="name-user-name each-style">
              <input
                type="text"
                name="name"
                autoComplete="username"
                placeholder="Name"
              />
              <input
                type="text"
                className={`${
                  actionData?.error?.includes("User-name") && `error-input`
                }`}
                placeholder={"User-Name eg-(name01,drew011)"}
                name="userName"
              />
            </div>
            <div className="mobile-no each-style ">
              <input
                type="text"
                placeholder="Mobile-Number"
                name="mobileNo"
                className={`${
                  actionData?.error?.includes("mobileNo") && "error-input"
                }`}
              />
              <input type="text" placeholder="Pin-Code (230412)" />
            </div>
            <div className="location-div each-style">
              <input
                style={{ width: "100%" }}
                type="text"
                placeholder="Location (Receiving-Adress perm.)"
                name="location"
              />
            </div>
            <div className="email-password each-style main-login-email-password">
              <div className="login-email">
                <input
                  type="text"
                  name="email"
                  // className="login-input"
                  placeholder="Email eg-(iamemail@gmail.com)"
                  className={`login-input ${
                    actionData?.error?.includes("Email") && "error-input"
                  }`}
                />
              </div>
              <div className="login-password">
                <div className="input-container">
                  <input
                    type={`${clicked_Val}`}
                    name="password"
                    autoComplete="current-password username new-password"
                    className={`login-input ${
                      actionData?.error?.includes("password") && "error-input"
                    }`}
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
                Continue With Email
              </button>
            </div>
            <div className="cond-have-acc each-style">
              <center>
                <p>
                  Already Have An Account?{" "}
                  <Link to="/login">
                    <u style={{ color: "red" }}>Login</u>
                  </Link>
                </p>
              </center>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};
export default SignUpPage;
