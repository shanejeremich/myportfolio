import "./SocialMediaLink.scss";

const SocialMediaLink = ({ href, ariaLabel, svgClass, viewBox, pathData }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
    <svg className={svgClass} viewBox={viewBox}>
      <path d={pathData} fill="#fff"></path>
    </svg>
  </a>
);

export default SocialMediaLink;
