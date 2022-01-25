import Home from "./pages/Home/Home";
import Nav from "./layout/Nav/Nav";
import HeroImage from "./layout/HeroImage/HeroImage";

import "./sass/style.scss";

function App() {
  return (
    <div className="container">
      <Nav />
      <HeroImage />
      <Home />
    </div>
  );
}

export default App;
