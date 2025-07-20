import axios from "axios";
import { useDispatch } from "react-redux";
import { FoodAction } from "../../store/FoodSlice";
import { useState } from "react";
import { useNavigate } from "react-router";

const LoaderButtons = ({ foodLength }) => {
  const navigate = useNavigate();
  const [inPage, setinPage] = useState(0);
  const dispatch = useDispatch();
  const onClickHandler = async (btVal) => {
    setinPage(btVal);
    try {
      const res = await axios.get(
        `http://localhost:1729/food/products/?page=${btVal + 1}`
      );
      const FoodData = {
        data: res.data,
        length: foodLength,
      };
      dispatch(FoodAction.addFood(FoodData));
    } catch (err) {
      navigate("/404");
    }
  };
  return (
    <div className="parent-button-div">
      {Array(Math.ceil(foodLength / 8))
        .fill(0)
        .map((e, i) => (
          <button
            key={i}
            className={`data-loader-button ${inPage === i && `active-button`}`}
            onClick={() => onClickHandler(i)}
          >
            {i + 1}
          </button>
        ))}
    </div>
  );
};

export default LoaderButtons;
