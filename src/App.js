import { ParallaxProvider } from "react-scroll-parallax";
import Nav from "./layout/nav/nav";
import Hero from "./layout/hero/hero";
import AboutMe from "./components/about-me/about-me";
import Skills from "./components/skills/skills";
import Contact from "./components/contact/contact";
import Portfolio from "./components/portfolio/portfolio";
import Footer from "./layout/footer/footer";

import "./sass/style.scss";

function App() {
  return (
    <ParallaxProvider>
      <div className="container">
        <Nav />
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
        <div className="row-footer"></div>
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;
