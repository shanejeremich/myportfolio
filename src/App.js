import Home from "./pages/Home/Home";
import Nav from "./layout/Nav/Nav";
import "./sass/style.scss";

function App() {
  return (
    <div className="container">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
