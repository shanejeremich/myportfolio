import userPic from "../../images/profile/portfolio.webp";
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
        As an ambitious web developer, I bring a problem-solving approach and a strong technology skill set to the web development process. With a solid
        foundation from Bloom Institute of Technology and a continued pursuit of a Bachelor of Science Degree in Web Development at Full Sail University, I am
        passionate about contributing to the success of dynamic teams.
      </p>

      <p className="text-content">
        During my certification program, I spearheaded diverse projects, collaborating with multiple teams, and working on everything from front-end to back-end
        development. I have a proven track record of effectively communicating with teams to understand web marketing needs and crafting interfaces that
        precisely meet specifications.
      </p>

      <p className="text-content">
        I am currently seeking opportunities as an intern, apprentice, or junior web developer, with a focus on front-end or full-stack development. I am
        excited to discuss how I can bring my skills and enthusiasm to contribute to your company's success. Please feel free to reach out to me for further
        discussions.
      </p>

      <a href="#skills">
        <div className="about-me__btn btn">Learn What I can do &rarr;</div>
      </a>
    </section>
  );
};

export default AboutMe;
