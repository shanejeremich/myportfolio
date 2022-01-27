import React from "react";
import { Parallax } from "react-scroll-parallax";
import heroImg from "../../images/sj-high-res.png";

import "./HeroImage.scss";

function HeroImage() {
  return (
    <div className="hero-img">
      <Parallax translateY={[-40, 40]}>
        <img src={heroImg} alt="Shane Jeremich Hero" className="hero-img__img" />
      </Parallax>
    </div>
  );
}

export default HeroImage;
