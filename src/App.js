import Nav from "./layout/Nav/Nav";
import HeroImage from "./layout/HeroImage/HeroImage";
import Home from "./pages/Home/Home";
import Footer from "./layout/Footer/Footer";

import { ParallaxProvider } from "react-scroll-parallax";
import "./sass/style.scss";

function App() {
  return (
    <ParallaxProvider>
      <div className="container">
        <Nav />
        <div className="hero-bg"></div>
        <HeroImage />
        <div className="row-1"></div>
        <Home />
        <div className="row-2"></div>
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;
