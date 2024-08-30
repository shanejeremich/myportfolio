import { Button, Project } from "../../components/";
import { navigateToSection } from "../../constants";
import { projects } from "../../data";
import { Section } from "../../layout";
import "./portfolio.scss";

function Portfolio() {
  const handleClick = () => {
    navigateToSection("contact");
  };

  return (
    <Section className="portfolio" title="portfolio">
      <div className="projects">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>

      <Button className="portfolio__btn btn" onClick={handleClick}>
        Get in touch with me &rarr;
      </Button>
    </Section>
  );
}

export default Portfolio;
