import { useLocation, useNavigate } from "react-router-dom";
import AllfoodGroup from "./AllfoodGroup";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ChoiceAction } from "../../store/ChoiceByCategorySlice";

const ChoiceHolder = () => {
  const navigate = useNavigate();
  const data = useLocation();
  const val = data.state;
  const dispatch = useDispatch();
  const calllingByCat = async () => {
    try {
      const res = await axios.get(
        `http://localhost:1729/food/byCategory?cat=${val.category}`
      );
      dispatch(ChoiceAction.addData(res.data));
    } catch (err) {
      navigate("/404");
    }
  };
  const item = useSelector((store) => store.choice_category);
  useEffect(() => {
    calllingByCat();
  }, [val.category, dispatch]);
  return (
    <>
      <div className="for-Home-All">
        <h1>{val.category.charAt(0).toUpperCase() + val.category.slice(1)}</h1>
        <div className="holderFoods">
          {item.map((item) => (
            <AllfoodGroup key={item._id} item={item}></AllfoodGroup>
          ))}
        </div>
      </div>
    </>
  );
};
export default ChoiceHolder;
