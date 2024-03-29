import { useContext, useEffect, useState } from "react";
import * as carService from "../../services/carService";
import { CarOffer } from "./carOffer/carOffer";
import AuthContext from "../../context/authContext";

export function Catalog() {
  const [cars, setCars] = useState([]);
  const { isAuthenticated, username, userId } = useContext(AuthContext);

  useEffect(() => {
    const getAll = async () => {
      try {
        setCars(await carService.getAll());
      } catch (err) {
        console.log(err.message);
      }
    };
    getAll();
  }, []);
  console.log(cars);
  return (
    <>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Cars</h1>
           
            </div>
          </div>
        </div>
      </div>
      {cars.length === 0 && (
        <i>
          <h3 style={{ textAlign: "center" }}>
            No offers avaliable. Be the first to create!
          </h3>
        </i>
      )}
      <div className="services">
        <div className="container">
          <div className="row">
            {cars.map((car) => (
              <CarOffer key={car._id} {...car}></CarOffer>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
