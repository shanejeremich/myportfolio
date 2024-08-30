import { HashLink } from "react-router-hash-link";
import logo from "../../assets/images/b&wShane.webp";
import { SocialMediaLink } from "../../components";
import { socialLinks } from "../../data";
import "./Footer.scss";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__social">
        {socialLinks.map(link => (
          <SocialMediaLink
            key={`${link.name}-${link.href}`}
            href={link.href}
            ariaLabel={link.ariaLabel}
            svgClass={link.svgClass}
            viewBox={link.viewBox}
            pathData={link.pathData}
          />
        ))}
      </div>
      <HashLink to="/#top">
        <img src={logo} alt="Shane Jeremich | Web Developer" className="footer__logo" />
      </HashLink>
      <p>
        <small className="footer__copyright">
          &copy; {currentYear} Shane Jeremich. All rights reserved.
        </small>
      </p>
    </footer>
  );
}

export default Footer;
