import logo from "../../images/sj-logo.png";

import "./nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__items">
        <a href="#top">
          <img src={logo} alt="Shane Jeremich Logo" className="nav__logo" />
        </a>
        <span className="nav__links">
          <a href="#skills" className="nav__link">
            Skills
          </a>
          <a href="#portfolio" className="nav__link">
            Portfolio
          </a>
          <a href="#contact" className="nav__link">
            Contact
          </a>
          <a
            href="https://drive.google.com/file/d/1-MhCMtd7B6qRTgQGaRrEXqA5MZUI1UYV/view?usp=sharing"
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
