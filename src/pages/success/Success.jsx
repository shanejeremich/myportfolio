import { Link } from "react-router-dom";
import Section from "../../layout/section/Section";
import "./success.scss";

function Success() {
  return (
    <Section className="success" title="Thank You" headerBG="#28a745" border="1px solid #000">
      <header>
        <h1>Your form was submitted successfully.</h1>
        <p className="mb">
          I very much appreciate your time and I will respond as soon as I can,{" "}
          <strong>Thank You!</strong>
        </p>
      </header>
      <p aria-invalid="false" className="success__back">
        Go back to{" "}
        <Link to="/" className="success__url">
          https://www.shanejeremich.com
        </Link>
      </p>
    </Section>
  );
}

export default Success;
