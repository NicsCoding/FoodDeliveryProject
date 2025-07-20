import { useEffect } from "react";
import ByChoices from "../assets/components/ByChoices";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { categoryAction } from "./categorySlice";
const CallingChoice = () => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.category);
  const callingCateogry = async () => {
    try {
      const res = await axios.get("http://localhost:1729/food/category");
      dispatch(categoryAction.addItems(res.data));
    } catch (err) {
      console.error("error while fetching categories");
    }
  };
  useEffect(() => {
    callingCateogry();
  }, []);
  return (
    <div className="for-Home-All">
      <div className="heading">
        <h2>What's You Craving For</h2>
      </div>
      <div className="choices-div">
        {items.map((item) => (
          <ByChoices key={item._id} item={item}></ByChoices>
        ))}
        <hr />
      </div>
    </div>
  );
};

export default CallingChoice;
