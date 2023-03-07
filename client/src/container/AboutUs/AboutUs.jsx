import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant" style={{ color: "white" }}>
          About Us
        </h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p
          className="p__opensans"
          style={{
            color: "white",
            size: "initial",
            border: "1px solid",
            borderBlockColor: "black",
          }}
        >famkit is the solution for fast delivery and get every item that near any where to you.
        everyone can easily participate and getting payed as per the delivery
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant" style={{ color: "white" }}>
          Our History
        </h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p
          className="p__opensans"
          style={{
            color: "white",
            size: "initial",
            border: "1px solid",
            borderBlockColor: "black",
          }}
        >
          its a startup mission of college students for making an evolution in e-commerce world
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
