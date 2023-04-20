import { HashLink } from "react-router-hash-link";
import logo from "../../images/sj-logo.png";

import resumeURL from "../../api/routes";

import "./nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__items">
        <HashLink to="/#top">
          <img src={logo} alt="Shane Jeremich Logo" className="nav__logo" />
        </HashLink>
        <span className="nav__links">
          <HashLink to="/#skills" className="nav__link">
            Skills
          </HashLink>
          <HashLink to="/#portfolio" className="nav__link">
            Portfolio
          </HashLink>
          <HashLink to="/#contact" className="nav__link">
            Contact
          </HashLink>
          <a
            href={resumeURL}
            target="_blank"
            rel="noopener noreferrer"
            className="nav__link resume">
            My Resume
          </a>
        </span>
      </div>
    </nav>
  );
};

export default Nav;
