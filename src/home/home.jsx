import Hero from "../layout/hero/hero";
import AboutMe from "../components/about-me/about-me";
import Skills from "../components/skills/skills";
import Contact from "../components/contact/contact";
import Portfolio from "../components/portfolio/portfolio";

function Home() {
  return (
    <>
      <div className="row-hero"></div>
      <Hero />
      <div className="row-about-me"></div>
      <AboutMe />
      <div className="row-skills"></div>
      <Skills />
      <div className="row-portfolio"></div>
      <Portfolio />
      <div className="row-contact"></div>
      <Contact />
    </>
  );
}

export default Home;
