import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="main-banner header-text" id="top">
        <div className="Modern-Slider">
          <div className="item item-1">
            <div className="img-fill">
              <div className="text-content">
                <h6>Car dealers website</h6>
                <h4>Car Shopy</h4>
                <p>
                  Car Shopy, your premier destination for quality cars and
                  exceptional service, where experience meets reliability in
                  every vehicle.
                </p>
                <Link to={"/catalog"} className="filled-button">
                  Cars
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
