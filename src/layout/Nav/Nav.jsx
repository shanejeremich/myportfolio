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
        </span>
      </div>
    </nav>
  );
};

export default Nav;
