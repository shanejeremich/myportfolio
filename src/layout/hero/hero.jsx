import React from "react";
import { Parallax } from "react-scroll-parallax";
import heroImg from "../../images/sj-high-res.png";

import "./hero.scss";

function Hero() {
  return (
    <section className="hero-img">
      <Parallax translateY={[-40, 40]}>
        <img src={heroImg} alt="Shane Jeremich Hero" className="hero-img__img" />
      </Parallax>
    </section>
  );
}

export default Hero;
