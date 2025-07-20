import { LuSquareAsterisk } from "react-icons/lu";
import { useSelector } from "react-redux";
import AllfoodGroup from "../assets/components/AllfoodGroup";

import LoaderButtons from "../assets/components/LoaderButtons";
const Calling_All_Foods = () => {
  const items = useSelector((store) => store.food_slice);
  const length = items.foodLength;
  return (
    <div className="food-div-all">
      <div className="food-heading">
        <h2>Food That Hugs Your Soul-Taste The Goodness</h2>
        <h5 style={{ float: "right" }}>
          <span style={{ marginRight: "10px" }}>
            Veg-
            <LuSquareAsterisk style={{ color: "green" }} />
          </span>
          <span>
            Non-Veg
            <LuSquareAsterisk style={{ color: "red" }} />
          </span>
        </h5>
      </div>
      <div className="holderFoods">
        {items.data.map((item) => (
          <AllfoodGroup
            key={item._id}
            item={item}
            allItem={items}
          ></AllfoodGroup>
        ))}
      </div>

      <div className="buttons-group-div">
        <div className="text-to-know">More cravings? We got you covered!</div>
        <LoaderButtons foodLength={length} />
      </div>
    </div>
  );
};
export default Calling_All_Foods;
