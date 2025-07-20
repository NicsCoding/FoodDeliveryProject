import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Searching_Element from "./assets/components/Searching_Element.jsx";
import Calling_All_Foods from "./store/Calling_All_Foods.jsx";
import HomeFood from "./store/HomeFood.jsx";
import Login_Page from "./store/Login_Page.jsx";
import ChoiceHolder from "./assets/components/ChoiceHolder.jsx";
import Login_SignUpPage from "./store/SignUpPage.jsx";
import CartItems from "./assets/components/CartItems.jsx";
import ServerError from "./assets/Errors/ServerError.jsx";
import PageNotFound from "./assets/Errors/PageNotFound.jsx";
import { sendServerData, createLoginData } from "./Hooks/LoginSignUpData.jsx";

const Routing = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/search-box",
        element: (
          <>
            <Searching_Element />
            <Calling_All_Foods />
          </>
        ),
      },
      { path: "/", element: <HomeFood /> },
      { path: "/choice-holder", element: <ChoiceHolder /> },
      { path: "cart-Items", element: <CartItems /> },
    ],
  },
  {
    path: "/sign-up",
    element: <Login_SignUpPage />,
    action: sendServerData,
  },
  {
    path: "/login",
    element: <Login_Page />,
    action: createLoginData,
  },
  { path: "/404", element: <PageNotFound /> },
  { path: "/500", element: <ServerError /> },
  // Catch all unmatched routes
  { path: "*", element: <PageNotFound /> },
]);

export default Routing;
