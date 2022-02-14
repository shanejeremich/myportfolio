import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import "./sass/style.scss";

const Nav = lazy(() => import("./layout/nav/nav"));
const Home = lazy(() => import("./home/home"));
const Success = lazy(() => import("./components/success/success"));
const NoMatch = lazy(() => import("./components/nomatch/nomatch"));
const Footer = lazy(() => import("./layout/footer/footer"));

function App() {
  return (
    <ParallaxProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="container">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/success" element={<Success />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
          <Footer />
        </div>
      </Suspense>
    </ParallaxProvider>
  );
}

export default App;
