export function Catalog() {
  return (
    <>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Cars</h1>
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="services">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="service-item">
                <img src="./src/assets/images/product-1-720x480.jpg" alt="" />
                <div className="down-content">
                  <h4>Lorem ipsum dolor sit amet</h4>
                  <div style={{ marginBottom: 10 }}>
                    <span>
                      <del>
                        <sup>$</sup>11999{" "}
                      </del>{" "}
                      &nbsp; <sup>$</sup>11779
                    </span>
                  </div>
                  <p>
                    <i className="fa fa-dashboard" /> 130 000km
                    &nbsp;&nbsp;&nbsp;
                    <i className="fa fa-cube" /> 1800 cc &nbsp;&nbsp;&nbsp;
                    <i className="fa fa-cog" /> Manual &nbsp;&nbsp;&nbsp;
                  </p>
                  <a href="car-details.html" className="filled-button">
                    View More
                  </a>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
