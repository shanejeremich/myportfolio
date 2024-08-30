import cityspire from "../assets/images/projects/cityspire.webp";
import crwnClothing from "../assets/images/projects/crwnclothing.webp";
import landingPage from "../assets/images/projects/landingpage.webp";
import monstersRolodex from "../assets/images/projects/monstersrolodex.webp";
import shoppies from "../assets/images/projects/shoppies.webp";
import trillo from "../assets/images/projects/trillo.webp";

export const projects = [
  {
    href: "https://crwn-clothing-v1.herokuapp.com/",
    imgSrc: crwnClothing,
    imgAlt: "CRWN-Clothing",
    name: "CRWN-Clothing",
    description: `This application is a react app that demonstrates a demo build of a clothing store called Crown Clothing. Crown Clothing uses Firebase as its database and user authentication and for payments, we are using Stripe. For state management we are using Redux. This application is hosted on Heroku.`,
    liveLink: "https://crwn-clothing-v1.herokuapp.com/",
    repoLink: "https://github.com/sjeremich23/crwn-clothing",
  },
  {
    href: "https://sjeremich23.github.io/Trillo/",
    imgSrc: trillo,
    imgAlt: "Trillo",
    name: "Trillo",
    description: `This is a template layout of a hotel, flight, car rental, and tour search. This template shows examples of users ratings, hotel images, descriptions, showing off various CSS/SASS styles. This was built with html and CSS/SASS.`,
    liveLink: "https://sjeremich23.github.io/Trillo/",
    repoLink: "https://github.com/sjeremich23/Trillo",
  },
  {
    href: "https://sjeremich23.github.io/movie-search/",
    imgSrc: shoppies,
    imgAlt: "The Shoppies",
    name: "The Shoppies",
    description: `This was my submission for the Web Developer Intern Challenge in the Fall of 2021. This application makes a API call to OMDBapi and pulls information based on the search parameters.`,
    liveLink: "https://sjeremich23.github.io/movie-search/",
    repoLink: "https://github.com/sjeremich23/movie-search",
  },
  {
    href: "https://landing-page-shanejeremich.vercel.app/",
    imgSrc: landingPage,
    imgAlt: "Landing Page",
    name: "Landing-Page",
    description: `This was a challenge from Frontend Mentor. The challenge is to test my skills to replicate this landing page and get it looking as close to the design as possible that was provided to me.`,
    liveLink: "https://landing-page-shanejeremich.vercel.app/",
    repoLink: "https://github.com/sjeremich23/Landing-Page",
  },
  {
    href: "https://sjeremich23.github.io/Monsters-Rolodex/",
    imgSrc: monstersRolodex,
    imgAlt: "Monsters Rolodex",
    name: "Monsters Rolodex",
    description: `This project is just a simple fetch to an API containing users, attached to each user is a monster image coming from another API, and using a search bar to automatically display search results based on users input in the search bar as they type.`,
    liveLink: "https://sjeremich23.github.io/Monsters-Rolodex/",
    repoLink: "https://github.com/sjeremich23/Monsters-Rolodex",
  },
  {
    href: "https://cityspire.shanejeremich.com/",
    imgSrc: cityspire,
    imgAlt: "Cityspire",
    name: "Cityspire",
    description: `This was a class project from my labs in Bloom Tech (f.k.a. Lambda School). Future of this app will have more features. Right now this just shows the implementation of Mapbox GL and Okta for authentication.`,
    liveLink: "https://cityspire.shanejeremich.com/",
    repoLink: "https://github.com/sjeremich23/cityspire-d-fe",
  },
];
