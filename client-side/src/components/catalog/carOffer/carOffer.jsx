import { Link } from "react-router-dom";

export function CarOffer({
    _id,
    carImage,
    color,
    description,
    fuel,
    mileage,
    model,
    owner,
    price,
    seats,
    telephone
}){
    
    return(
        <div className="col-md-4">
              <div className="service-item">
                <img src={carImage} alt="" style={{height:'400px'}} />
                <div className="down-content">
                  <h4>{model}</h4>
                  <div style={{ marginBottom: 10 }}>
                    <span>
                      <del>
                        <sup>$</sup>{1.25*price}{" "}
                      </del>{" "}
                      &nbsp; <sup>$</sup>{price}
                    </span>
                  </div>
                  <p>
                    <i className="fa fa-dashboard" /> {1.6*mileage}km
                    &nbsp;&nbsp;&nbsp;
                    
                  </p>
                  <Link to={'/catalog/'+_id}  className="filled-button">
                    View More
                  </Link>
                </div>
              </div>
              <br />
            </div>
    )
}