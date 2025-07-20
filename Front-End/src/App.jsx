import "./App.css";
import Fetching_Data_Server from "./store/Fetching_Data_Server";
import { Outlet } from "react-router-dom";
import Header from "./assets/components/Header";
import { useSelector } from "react-redux";
import Loader from "./assets/components/Loader";
import "react-toastify/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function App() {
  const Data = useSelector((store) => store.loader_sl);
  return (
    <>
      <ToastContainer />
      <div>
        <Fetching_Data_Server />
        <div className="header-app-component">
          <Header />
        </div>
        <div className="body-components">
          {Data ? <Outlet></Outlet> : <Loader />}
        </div>
      </div>
    </>
  );
}

export default App;
