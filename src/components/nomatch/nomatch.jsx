import { Link } from "react-router-dom";

import "./nomatch.scss";

function NoMatch() {
  return (
    <section className="nomatch">
      <div className="nomatch__card">
        <div className="nomatch__header text-bg--red">
          <span>404 Error</span>
        </div>
        <div className="nomatch__card-content">
          <header>
            <h1>Oops. 😢 Page Not Found</h1>
            <p className="mb">
              The requested page was <strong>Not Found</strong>
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

export default NoMatch;
