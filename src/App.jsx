import { useLocation } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import { paths } from "./constants";
import { Footer, Navbar } from "./layout";
import AppRoutes from "./routes";
import "./sass/style.scss";

function App() {
  const location = useLocation();
  const isMainLayout = paths.includes(location.pathname);

  return (
    <ParallaxProvider>
      <div className={`container ${isMainLayout ? "with-rows" : ""}`}>
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;
