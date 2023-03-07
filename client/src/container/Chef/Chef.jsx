import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg2 app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.delivery} alt="delv_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="our word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__delv-content">
        <div className="app__delv-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
            we make a platform for all level people to explore the e-commerce and deliver expanded the version
          </p>
        </div>
        <p className="p__opensans">
          {" "}
          easily signup and try to get active for make daily earn from the delivery{" "}
        </p>
      </div>

      <div className="app__delv-sign">
        {/* <p>Kevin Luo</p> */}
        <p className="p__opensans">chef & Founder</p>
        {/* <img src={images.sign} alt="sign_image" /> */}
      </div>
    </div>
  </div>
);

export default Chef;
