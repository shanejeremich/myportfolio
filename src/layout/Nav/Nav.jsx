import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <span className="header-title">
        <button>SJ</button>
      </span>
      <span>
        <Link className="header-link" to="#work">
          Work
        </Link>
        <Link className="header-link" to="#portfolio">
          Portfolio
        </Link>
        <Link className="header-link" to="#contact">
          Contact
        </Link>
      </span>
    </nav>
  );
};

export default Nav;
