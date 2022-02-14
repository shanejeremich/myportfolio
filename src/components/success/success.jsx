import { Link } from "react-router-dom";
import "./success.scss";

function Success() {
  return (
    <section className="success">
      <div className="success__card">
        <div className="success__header text-bg--green">
          <span>Thank You</span>
        </div>
        <div className="success__card-content">
          <header>
            <h1>Your form was submitted successfully.</h1>
            <p className="mb">
              I very much appreciate your time and I will respond as soon as I can, <strong>Thank You!</strong>
            </p>
          </header>
          <span aria-invalid="false">
            Go back to <Link to="/">https://www.shanejeremich.com</Link>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Success;
