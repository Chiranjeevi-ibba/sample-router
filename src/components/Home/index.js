import { Link } from "react-router-dom";
import "./index.css";

const Home = () => {
  return (
    <div className="home-container">
      <img
        className="home-image"
        src="https://assets.ccbp.in/frontend/react-js/home-blog-img.png"
        alt="Home"
      />
      <h1 className="home-text">Home</h1>
    </div>
  );
};
export default Home;
