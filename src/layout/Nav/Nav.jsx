import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-items">
        <span className="nav-cta">
          <button>SJ</button>
        </span>
        <span className="links">
          <Link to="#work">Work</Link>
          <Link to="#portfolio">Portfolio</Link>
          <Link to="#contact">Contact</Link>
        </span>
      </div>
    </nav>
  );
};

export default Nav;
