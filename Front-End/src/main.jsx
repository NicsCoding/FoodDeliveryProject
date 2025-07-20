import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import RoutingMain from "./RoutingMain.jsx";
import foodDeliveryReducer from "./store/foodDeliveryReducer.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={foodDeliveryReducer}>
      <RouterProvider router={RoutingMain}>
        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>
);
