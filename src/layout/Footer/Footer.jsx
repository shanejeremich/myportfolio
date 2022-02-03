import "./footer.scss";
import logo from "../../images/b&wShane.png";
import gitHub from "../../images/svg/github-square.svg";
import linkedin from "../../images/svg/linkedin-square.svg";
import facebook from "../../images/svg/facebook-square.svg";
import twitter from "../../images/svg/twitter-square.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__social"></div>
      <img src={gitHub} alt="GitHub" />
      <img src={linkedin} alt="LinkedIn" />
      <img src={facebook} alt="Facebook" />
      <img src={twitter} alt="Twitter" />
      <img src={logo} alt="Shane Jeremich | Web Developer" />
      <p>
        <small> &copy; 2022 Shane Jeremich. All rights reserved. </small>
      </p>
    </footer>
  );
}

export default Footer;
