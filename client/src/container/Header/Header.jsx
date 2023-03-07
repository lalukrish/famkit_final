import React from "react";

import SubHeading from "../../components/SubHeading/SubHeading";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      {/* this side subhead with fig */}
      <SubHeading title="your kit is near to you" />
      <h1 className="app__header-h1">The key to order your kit</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}></p>
      <a href="/explore">
        {" "}
        <button type="button" className="custom__button">
          explore menu.
        </button>
      </a>

    </div>
    <div className="app__wrapper_img">
      {" "}
      <img src={images.welcome} alt="" />
    </div>
  </div>
);

export default Header;
