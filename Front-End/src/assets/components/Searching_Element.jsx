import { useState } from "react";
import axios from "axios";
import Searched_Elements from "./Searched_Elements";
import { useNavigate } from "react-router";
const Searching_Element = () => {
  let [searched_Data, setSearch_Data] = useState([]);
  const searchHandler = async (e) => {
    if (e.target.value) {
      try {
        const res = await axios.get(
          `http://localhost:1729/food/byCategory?search=${e.target.value}`
        );
        console.log(res);
        setSearch_Data(res.data);
      } catch (err) {
        alert("food can't searched right now ! try again later");
      }
    } else {
      setSearch_Data([]);
    }
  };
  return (
    <div className="for-Home-All" style={{ margin: "0" }}>
      <div
        id="carouselExampleControls"
        className="carousel slide slider-div"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100 "
              style={{ height: "450px" }}
              src="https://th.bing.com/th/id/OIP.kXNNes41mkMVI_-46ATvLgHaE8?rs=1&pid=ImgDetMain"
              alt="Second slide"
            />
          </div>
        </div>

        <input
          type="text"
          className="search-products"
          placeholder="Search your products:"
          onChange={(e) => searchHandler(e)}
        />
      </div>

      {searched_Data.length > 0 && (
        <div className="parent-search">
          {searched_Data.map((item) => (
            <Searched_Elements key={item._id} item={item} />
          ))}{" "}
        </div>
      )}
    </div>
  );
};

export default Searching_Element;
