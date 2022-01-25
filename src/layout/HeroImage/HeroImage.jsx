import React from "react";
import heroImg from "../../images/sj-high-res.png";

import "./HeroImage.scss";

function HeroImage() {
  return (
    <div className="hero-img">
      <img src={heroImg} alt="Shane Jeremich Hero" className="hero-img__img" />
    </div>
  );
}

export default HeroImage;
