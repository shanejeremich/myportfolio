import { HashLink } from "react-router-hash-link";
import logo from "../../assets/images/sj-logo.png";
import { resumeURL } from "../../constants";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__items">
        <HashLink to="/#top" className="nav__logo">
          <img src={logo} alt="Logo" />
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
          <a href={resumeURL} target="_blank" className="nav__resume" rel="noopener noreferrer">
            My Resume
          </a>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
