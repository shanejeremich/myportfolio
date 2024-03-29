import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

import Home from "./home/home";
import Footer from "./layout/footer/footer";
import Nav from "./layout/nav/nav";

import "./sass/style.scss";

const Success = lazy(() => import("./components/success/success"));
const NoMatch = lazy(() => import("./components/nomatch/nomatch"));

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
