import { Link } from "react-router-dom";
import logo from "../../images/sj-logo.png";

import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__items">
        <Link to="#top">
          <img src={logo} alt="Shane Jeremich Logo" className="nav__logo" />
        </Link>
        <span className="nav__links">
          <Link to="#work" className="nav__link">
            Work
          </Link>
          <Link to="#portfolio" className="nav__link">
            Portfolio
          </Link>
          <Link to="#contact" className="nav__link">
            Contact
          </Link>
        </span>
      </div>
    </nav>
  );
};

export default Nav;
