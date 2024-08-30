import browser from "../../assets/images/svg/browser.svg";
import gitHub from "../../assets/images/svg/github.svg";
import "./Project.scss";

const Project = ({ href, imgSrc, imgAlt, name, description, liveLink, repoLink }) => (
  <div className="project">
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={imgSrc} alt={imgAlt} className="project__img" />
    </a>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <h1 className="project__name">{name}</h1>
    </a>
    <p className="project__text text-content">{description}</p>
    <div className="project__icons">
      <a href={liveLink} target="_blank" rel="noopener noreferrer">
        <img src={browser} alt={name} className="icon" />
      </a>
      <a href={repoLink} target="_blank" rel="noopener noreferrer">
        <img src={gitHub} alt="GitHub" className="icon" />
      </a>
    </div>
  </div>
);

export default Project;
