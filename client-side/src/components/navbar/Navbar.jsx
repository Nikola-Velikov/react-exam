import { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authContext";

export function Navbar() {
  const { isAuthenticated, username, userId } = useContext(AuthContext);
  return (
    <header className="">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link to={"/"} className="navbar-brand">
            <h2>
              Car<em> Shopy</em>
            </h2>
          </Link>
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
              {isAuthenticated && (
                <li className="nav-item">
                  <Link to={"/blog"} className="nav-link">
                    Blog
                  </Link>
                </li>
              )}

              {isAuthenticated && (
                <li className="nav-item">
                  <Link to={"/profile/"+userId} className="nav-link">
                    Profile
                  </Link>
                </li>
              )}

{isAuthenticated && (
                <li className="nav-item">
                  <Link to={"/meeting/"+userId} className="nav-link">
                    Host meet
                  </Link>
                </li>
              )}

              {!isAuthenticated && (
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>
              )}
              {isAuthenticated && (
                <li className="nav-item">
                  <Link to={"/create"} className="nav-link">
                    Create offer
                  </Link>
                </li>
              )}
              {isAuthenticated && (
                <li className="nav-item">
                  <Link to={"/logout"} className="nav-link">
                    Logout
                  </Link>
                </li>
              )}
            </ul>
            {!isAuthenticated && (
              <Button to={"/register"} className="btn btn-dark ms-2" as={Link}>
                Register
              </Button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
