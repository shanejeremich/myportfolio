import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__items">
        <span className="nav__logo">Logo</span>
        <span className="nav__links">
          <Link to="#work">Work</Link>
          <Link to="#portfolio">Portfolio</Link>
          <Link to="#contact">Contact</Link>
        </span>
      </div>
    </nav>
  );
};

export default Nav;
