import { Link } from "react-router-dom";

export function About() {
  return (
    <header className="">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <h2>
              Car<em> Shopy</em>
            </h2>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"catalog"} className="nav-link">
                  Cars
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"aboutus"} className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link">Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}