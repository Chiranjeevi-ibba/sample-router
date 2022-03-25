import { Link } from "react-router-dom";
import "./index.css";

const About = () => {
  return (
    <div className="home-container">
      <img
        className="home-image"
        src="https://assets.ccbp.in/frontend/react-js/about-blog-img.png"
        alt="Home"
      />
      <h1 className="home-text">About</h1>
    </div>
  );
};
export default About;
