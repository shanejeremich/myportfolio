import userPic from "../../images/Shane.png";

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
        <span className="bar">&nbsp;&nbsp;</span> I'm an aspiring web developer. I have experience working with multiple
        teams on different projects as a front-end and back-end developer. My previous work experience includes working
        remotely with different teams on several different projects in different roles ranging from front-end and
        back-end. My top skills are React, Javascript, Nodejs, Express. The roles I'm looking for would include either
        an internship, apprenticeship, junior web developer as a front-end or full-stack web developer.
      </p>
      <a href="#skills">
        <div className="about-me__btn btn">Learn What I can do &rarr;</div>
      </a>
    </section>
  );
};

export default AboutMe;
