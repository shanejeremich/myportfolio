import userPic from "../../assets/images/profile/portfolio.webp";
import { Button } from "../../components";
import { navigateToSection } from "../../constants";
import { paragraphs } from "../../data";
import "./AboutMe.scss";

const AboutMe = () => {
  const handleClick = () => {
    navigateToSection("skills");
  };

  return (
    <section className="about-me">
      <img src={userPic} alt="Shane Jeremich" className="about-me__user-img" />

      <header className="about-me__header">
        <h1 className="about-me_title">Hi there 👋</h1>
        <h2 className="about-me_subtitle">
          My name is <strong>Shane Jeremich</strong>
        </h2>
      </header>

      {paragraphs.map((text, index) => (
        <p key={index} className="text-content">
          <span className="bar" aria-hidden="true">
            &nbsp;&nbsp;
          </span>
          {text}
        </p>
      ))}

      <Button className="about-me" onClick={handleClick}>
        Learn What I can do &rarr;
      </Button>
    </section>
  );
};

export default AboutMe;
