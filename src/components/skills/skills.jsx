import "./skills.scss";
import googleNinja from "../../images/google-ninja.webp";
import resume from "../../images/svg/resume.svg";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills__card">
        <div className="skills__header text-bg">skills</div>
        <div className="skills__card-content">
          <div className="badges-wrap">
            <img
              alt="HTML5"
              src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"
            />
            <img
              alt="CSS3"
              src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"
            />
            <img
              alt="JavaScript"
              src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logoWidth=40&logo=javascript&logoColor=%23F7DF1E"
            />
            <img
              alt="SASS"
              src="https://img.shields.io/badge/SASS%20-hotpink.svg?&style=for-the-badge&logo=SASS&logoColor=white"
            />
            <img
              alt="React"
              src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"
            />
            <img
              alt="Webpack"
              src="https://img.shields.io/badge/webpack%20-%238DD6F9.svg?&style=for-the-badge&logo=webpack&logoColor=black"
            />
            <img alt="Express.js" src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge" />
            <img
              alt="NodeJS"
              src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"
            />
            <img
              alt="GitHub"
              src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"
            />
            <img
              alt="VS Code"
              src="https://img.shields.io/badge/-VS%20Code-007ACC?style=for-the-badge&logo=visual%20studio%20code&logoColor=white"
            />
            <img
              alt="Adobe Photoshop"
              src="https://img.shields.io/badge/adobe%20photoshop%20-%2331A8FF.svg?&style=for-the-badge&logo=adobe%20photoshop&logoColor=white"
            />
            <img
              alt="Heroku"
              src="https://img.shields.io/badge/heroku%20-%23430098.svg?&style=for-the-badge&logo=heroku&logoColor=white"
            />
            <img
              alt="Vercel"
              src="https://img.shields.io/badge/vercel%20-%23000000.svg?&style=for-the-badge&logo=vercel&logoColor=white"
            />
            <img alt="Google Ninja" src={googleNinja} />
          </div>

          <a
            href="https://drive.google.com/file/d/1-MhCMtd7B6qRTgQGaRrEXqA5MZUI1UYV/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="skills__resume">
            <img src={resume} alt="Resume" />
            <span className="skills__resume--text">My Resume</span>
          </a>

          <a href="#portfolio">
            <div className="skills__btn btn">See Some of my recent work &rarr;</div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Skills;
