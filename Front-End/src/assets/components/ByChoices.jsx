import { useNavigate } from "react-router";
const ByChoices = ({ item }) => {
  const navigate = useNavigate();

  const handleChoiceClick = () => {
    navigate("choice-holder", { state: item });
  };
  return (
    <div className="inner-choice-div" onClick={handleChoiceClick}>
      <div className="image-name">
        <div style={{ cursor: "pointer" }}>
          <img src={item.image} alt="" className="choice-pick" />
          <div className="choice-name">{item.name}</div>
        </div>
      </div>
    </div>
  );
};
export default ByChoices;
