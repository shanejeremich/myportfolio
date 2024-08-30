import { Hero } from "..";
import { AboutMe, Contact, Portfolio, Skills } from "../../pages";
import "./MainLayout.scss";

function MainLayout() {
  return (
    <>
      <Hero />

      <div className="row-about-me">
        <AboutMe />
      </div>

      <div className="row-skills">
        <Skills />
      </div>

      <div className="row-portfolio">
        <Portfolio />
      </div>

      <div className="row-contact">
        <Contact />
      </div>
    </>
  );
}

export default MainLayout;
