import { Link } from "react-router-dom";
import Section from "../../layout/section/Section";
import "./NoMatch.scss";

function NoMatch() {
  return (
    <Section className="nomatch" title="404 - Not Found" headerBG="#dc3545" border="1px solid #000">
      <header>
        <h1>Oops. 😢 Page Not Found</h1>
        <p className="mb">
          The requested page was <strong>Not Found</strong>
        </p>
      </header>
      <p aria-invalid="false" className="nomatch__back">
        Go back to&nbsp;
        <Link to="/" className="nomatch__url">
          https://www.shanejeremich.com
        </Link>
      </p>
    </Section>
  );
}

export default NoMatch;
