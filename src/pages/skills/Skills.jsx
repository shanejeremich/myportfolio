import resume from "../../assets/images/svg/resume.svg";
import { Button } from "../../components";
import { navigateToSection, resumeURL } from "../../constants";
import { badges } from "../../data";
import { Section } from "../../layout";
import "./skills.scss";

function Skills() {
  const handleClick = () => {
    navigateToSection("portfolio");
  };

  return (
    <Section className="skills" title="skills">
      <div className="skills__badges-wrap">
        {badges.map((badge, index) => (
          <img key={index} alt={badge.alt} src={badge.src} />
        ))}
      </div>

      <a href={resumeURL} target="_blank" rel="noopener noreferrer" className="skills__resume">
        <img src={resume} alt="Resume" />
        <span className="skills__resume--text">My Resume</span>
      </a>

      <Button className="skills" onClick={handleClick}>
        My recent work &rarr;
      </Button>
    </Section>
  );
}

export default Skills;
