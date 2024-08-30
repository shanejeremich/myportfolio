import React from "react";
import { Parallax } from "react-scroll-parallax";
import { parallaxHeroConfig } from "../../../config/parallaxConfig";
import heroImg from "../../assets/images/sj-high-res.png";
import "./Hero.scss";

function Hero() {
  return (
    <section className="row-hero">
      <div className="hero">
        <Parallax {...parallaxHeroConfig}>
          {heroImg ? (
            <img src={heroImg} alt="Shane Jeremich Hero" className="hero__img" />
          ) : (
            <div className="loading-indicator">Loading...</div>
          )}
        </Parallax>
      </div>
    </section>
  );
}

export default Hero;
