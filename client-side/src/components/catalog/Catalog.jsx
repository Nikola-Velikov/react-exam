import { useEffect, useState } from "react";
import * as carService from "../../services/carService";
import { CarOffer } from "./carOffer/carOffer";

export function Catalog() {
  const [cars, setCars] = useState([]);

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
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </div>
        </div>
      </div>
      {cars.length === 0 && (
            <h3 className="fst-italic text-secondary fs-5" style={{textAlign:'center'}}>No offers avaliable</h3>
        )}
      <div className="services">
        <div className="container">
          <div className="row">
            {cars.map(car => (
              <CarOffer key={car._id} {...car}></CarOffer>
            ))}
          
          </div>
        </div>
      </div>
    </>
  );
}
