import { Link } from "react-router-dom";
const Go_To_Home = () => {
  return (
    <div className="go-to-home">
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <center>
          <img
            className="going-to-home"
            src="https://tse1.mm.bing.net/th?id=OIG2.42CSS4ZFJKCKe83CpUAx&pid=ImgGn"
            alt="Home-Image"
            style={{ height: "40px", borderRadius: "50%" }}
          />
        </center>
        <p>Home</p>
      </Link>
    </div>
  );
};

export default Go_To_Home;
