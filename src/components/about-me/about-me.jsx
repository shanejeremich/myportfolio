import userPic from "../../images/profile/profile.webp";
import "./about-me.scss";

const AboutMe = () => {
  return (
    <section className="about-me">
      <img src={userPic} alt="Shane Jeremich" className="about-me__user-img" />

      <header className="about-me__header">
        <h1>Hi there 👋</h1>
        <h1>
          My name is <strong>Shane Jeremich</strong>
        </h1>
      </header>
      <p className="text-content">
        <span className="bar" aria-hidden="true">
          &nbsp;&nbsp;
        </span>
        I'm an aspiring web developer. As a full stack web developer, I have experience working with
        multiple teams on different projects. My previous work experience includes working remotely
        with other teams on diverse projects ranging from front-end to back-end. My top skills are
        React, Javascript, Nodejs, and Express. I'm seeking an internship, apprenticeship, or junior
        web developer as a front-end or full-stack web developer.
      </p>
      <a href="#skills">
        <div className="about-me__btn btn">Learn What I can do &rarr;</div>
      </a>
    </section>
  );
};

export default AboutMe;
