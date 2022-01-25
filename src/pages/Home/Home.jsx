import userPic from "../../images/Shane.png";

import "./Home.scss";

const Home = () => {
  return (
    <section className="home">
      <img src={userPic} alt="Shane Jeremich" className="home__user-img" />
      <header className="home__header">
        <h1>Hi there 👋</h1>
        <h1>
          My name is <strong>Shane Jeremich</strong>
        </h1>
      </header>
      <p className="text-content">
        <span className="bar">&nbsp;&nbsp;</span> I'm an aspiring web developer. I have experience working with
        musltiple teams on different projects as a front-end and back-end developer. My previous work experience
        includes working remotely with different teams on several different projects in different roles ranging from
        front-end and back-end. My top skills are React, Javascript, Nodejs, Express. The roles I'm looking for would
        include either an internship, apprenticeship, junior web developer as a front-end or full-stack web developer.
      </p>
      <button className="home__btn btn">Learn What I can do</button>
    </section>
  );
};

export default Home;
