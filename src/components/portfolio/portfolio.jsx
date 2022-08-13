import "./portfolio.scss";
import trillo from "../../images/projects/trillo.webp";
import crwnClothing from "../../images/projects/crwnclothing.webp";
import cityspire from "../../images/projects/cityspire.webp";
import shoppies from "../../images/projects/shoppies.webp";
import monstersRolodex from "../../images/projects/monstersrolodex.webp";
import landingPage from "../../images/projects/landingpage.webp";
import browser from "../../images/svg/browser.svg";
import gitHub from "../../images/svg/github.svg";

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__card">
        <div className="portfolio__header text-bg">Portfolio</div>
        <div className="portfolio__card-content">
          <div className="projects">
            <div className="project">
              <img src={crwnClothing} alt="CRWN-Clothing" className="project__img" />
              <a href="https://crwn-clothing-v1.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <h1 className="project__name">CRWN-Clothing</h1>
              </a>
              <p className="project__text text-content">
                This application is a react app that demostrates a demo build of a clothing store called Crown Clothing.
                Crown Clothing uses Firebase as its database and user authentication and for payments, we are using
                Stripe. For state management we are using Redux. This application is hosted on Heroku.
              </p>
              <div className="project__icons">
                <a href="https://crwn-clothing-v1.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                  <img src={browser} alt="CRWN-Clothing" className="icon" />
                </a>
                <a href="https://github.com/sjeremich23/crwn-clothing" target="_blank" rel="noopener noreferrer">
                  <img src={gitHub} alt="GitHub" className="icon" />
                </a>
              </div>
            </div>

            <div className="project">
              <img src={trillo} alt="Trillo" className="project__img" />
              <a href="https://sjeremich23.github.io/Trillo/" target="_blank" rel="noopener noreferrer">
                <h1 className="project__name">Trillo</h1>
              </a>
              <p className="project__text text-content">
                This is a template layout of a hotel, flight, car rental, and tour search. This template shows examples
                of users ratings, hotel images, descriptions, showing off various CSS/SASS styles. This was built with
                html and CSS/SASS.
              </p>
              <div className="project__icons">
                <a href="https://sjeremich23.github.io/Trillo/" target="_blank" rel="noopener noreferrer">
                  <img src={browser} alt="CRWN-Clothing" className="icon" />
                </a>
                <a href="https://github.com/sjeremich23/Trillo" target="_blank" rel="noopener noreferrer">
                  <img src={gitHub} alt="GitHub" className="icon" />
                </a>
              </div>
            </div>

            <div className="project">
              <img src={shoppies} alt="The Shoppies" className="project__img" />
              <a href="https://sjeremich23.github.io/movie-search/" target="_blank" rel="noopener noreferrer">
                <h1 className="project__name">The Shoppies</h1>
              </a>
              <p className="project__text text-content">
                This was my submission for the Web Developer Intern Challenge in the Fall of 2021. This application
                makes a API call to OMDBapi and pulls information based on the search parameters.
              </p>
              <div className="project__icons">
                <a href="https://sjeremich23.github.io/movie-search/" target="_blank" rel="noopener noreferrer">
                  <img src={browser} alt="CRWN-Clothing" className="icon" />
                </a>
                <a href="https://github.com/sjeremich23/movie-search" target="_blank" rel="noopener noreferrer">
                  <img src={gitHub} alt="GitHub" className="icon" />
                </a>
              </div>
            </div>

            <div className="project">
              <img src={landingPage} alt="Landing Page" className="project__img" />
              <a
                href="https://www.frontendmentor.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="project__link">
                <h1 className="project__name">Landing-Page</h1>
              </a>
              <p className="project__text text-content">
                This was a challenge from&nbsp;
                <a
                  href="https://www.frontendmentor.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project__link">
                  Frontend Mentor
                </a>
                . The challenge is to test my skills to replicate this landing page and get it looking as close to the
                design as possible that was provided to me.
              </p>
              <div className="project__icons">
                <a href="https://landing-page-shanejeremich.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <img src={browser} alt="CRWN-Clothing" className="icon" />
                </a>
                <a href="https://github.com/sjeremich23/Landing-Page" target="_blank" rel="noopener noreferrer">
                  <img src={gitHub} alt="GitHub" className="icon" />
                </a>
              </div>
            </div>

            <div className="project">
              <img src={monstersRolodex} alt="Monsters Rolodex" className="project__img" />
              <a href="https://sjeremich23.github.io/Monsters-Rolodex/" target="_blank" rel="noopener noreferrer">
                <h1 className="project__name">Monsters Rolodex</h1>
              </a>
              <p className="project__text text-content">
                This project is just a simple fetch to an API containing users, attached to each user is a monster image
                coming from another API, and using a search bar to automatically display search results based on users
                input in the search bar as they type.
              </p>
              <div className="project__icons">
                <a href="https://sjeremich23.github.io/Monsters-Rolodex/" target="_blank" rel="noopener noreferrer">
                  <img src={browser} alt="CRWN-Clothing" className="icon" />
                </a>
                <a href="https://github.com/sjeremich23/Monsters-Rolodex" target="_blank" rel="noopener noreferrer">
                  <img src={gitHub} alt="GitHub" className="icon" />
                </a>
              </div>
            </div>

            <div className="project">
              <img src={cityspire} alt="Cityspire" className="project__img" />
              <a href="https://cityspire.shanejeremich.com/" target="_blank" rel="noopener noreferrer">
                <h1 className="project__name">Cityspire</h1>
              </a>
              <p className="project__text text-content">
                This was a class project from my labs in Bloom Tech (f.k.a. Lambda School). Future of this app will have
                more features. Right now this just shows the implementation of Mapbox GL and Okta for authentication.
              </p>
              <div className="project__icons">
                <a href="https://cityspire.shanejeremich.com/" target="_blank" rel="noopener noreferrer">
                  <img src={browser} alt="CRWN-Clothing" className="icon" />
                </a>
                <a href="https://github.com/sjeremich23/cityspire-d-fe" target="_blank" rel="noopener noreferrer">
                  <img src={gitHub} alt="GitHub" className="icon" />
                </a>
              </div>
            </div>
          </div>
          <a href="#contact">
            <div className="portfolio__btn btn">Get in touch with me &rarr;</div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
