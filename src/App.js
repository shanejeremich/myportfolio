import { Routes, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import Nav from "./layout/nav/nav";
import Home from "./home/home";
import Success from "./components/success/success";
import NoMatch from "./components/nomatch/nomatch";
import Footer from "./layout/footer/footer";

import "./sass/style.scss";

function App() {
  return (
    <ParallaxProvider>
      <div className="container">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;
