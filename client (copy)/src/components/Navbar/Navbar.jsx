import { GiHamburgerMenu } from "react-icons/gi";
import {
  MdImageSearch,
  MdOutlineRestaurant,
  mdOutlineRestaurentMenu,
} from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import images from "../../constants/images";
import "./Navbar.css";
import "../../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app logog" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">about</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">awards</a>
        </li>
        <li className="p__opensans">
          <a href="#contacts">contacts</a>
        </li>
      </ul>
      {/* <div className="app__navbar-login"> */}
      <a href="Signup" className="p__opensans">
        {" "}
        signin/signup
      </a>
      {/* <Link to="/Signup">signin/signup</Link> */}
      {/* </div> */}
      <div className="app__navbar-login">
        <a href="Login" className="p__opensans">
          <p>Login</p>
        </a>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          className="overlay__close"
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <AiOutlineShoppingCart
              color="#fff"
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <a href="#home">Home</a>
              </li>
              <li className="p__opensans">
                <a href="#about">about</a>
              </li>
              <li className="p__opensans">
                <a href="#awards">awards</a>
              </li>
              <li className="p__opensans">
                <a href="#contacts">contacts</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
