import axios from "axios";
import { redirect } from "react-router";

export const sendServerData = async (data) => {
  try {
    const FormData = await data.request.formData();
    const value = Object.fromEntries(FormData.entries());
    await axios.post("http://localhost:1729/user/signUp", value);
    alert(
      "Your account has been created succesfully! Now Login And enjoy your food"
    );
    return redirect("/login");
  } catch (err) {
    if (err) {
      console.log("There is a error while doing this");
      alert(err.response.data.message);
      const errorMessage =
        err.response?.data?.message || "Sign-up failed. Please try again.";
      return {
        error:
          err.response?.data?.message || "Sign-up failed. Please try again.",
      };
      // return redirect("/sign-up", { error: "I am the error" });
    }
  }
};
export const createLoginData = async (data) => {
  try {
    const FormData = await data.request.formData();
    const value = Object.fromEntries(FormData.entries());
    const res = await axios.post("http://localhost:1729/user/login", value);
    localStorage.setItem("loginToken", res.data.createdToken);
    return redirect("/");
  } catch (err) {
    if (err.response.data.message) {
      alert(`${err.response.data.message}`);
      return {
        error:
          err.response?.data?.message || "Login-up failed. Please try again.",
      };
    }
  }
  return redirect("/login");
};
