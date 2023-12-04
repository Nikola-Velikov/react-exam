import { Link, useNavigate, useParams } from "react-router-dom";
import * as carService from "../../services/carService";
import { useContext, useEffect, useState } from "react";
import { Pencil, Trash } from "react-bootstrap-icons";
import AuthContext from "../../context/authContext";
import { Button, Modal } from "react-bootstrap";
export function Details() {
  const user = useContext(AuthContext);
  const { id } = useParams();
  const [offer, setOffer] = useState({});
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    carService
      .getOne(id)
      .then((result) => {
        setOffer(result);
      })
      .catch((err) => {});
  }, []);

  const deleteOfferHandler = () => {
    carService
      .deleteOffer(id)
      .then((result) => navigate("/catalog"))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div
        className="page-heading header-text"
        style={{ backgroundImage: `url(${offer.carImage})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>
                <small>
                  <del>
                    <sup>$</sup>
                    {offer.price * 1.25}{" "}
                  </del>
                </small>{" "}
                &nbsp; <sup>$</sup>
                {offer.price}
              </h1>
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="services">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h1>Specifications</h1>

              <form action="#" method="post" className="form">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <div className="clearfix">
                      <span className="pull-left"> Model</span>
                      <strong className="pull-right">{offer.model}</strong>
                    </div>
                  </li>

                  <li className="list-group-item">
                    <div className="clearfix">
                      <span className="pull-left">Mileage</span>
                      <strong className="pull-right">
                        {offer.mileage * 1.6} km
                      </strong>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="clearfix">
                      <span className="pull-left">Fuel</span>
                      <strong className="pull-right">{offer.fuel}</strong>
                    </div>
                  </li>

                  <li className="list-group-item">
                    <div className="clearfix">
                      <span className="pull-left">Number of seats</span>
                      <strong className="pull-right">{offer.seats}</strong>
                    </div>
                  </li>

                  <li className="list-group-item">
                    <div className="clearfix">
                      <span className="pull-left">Color</span>
                      <strong className="pull-right">{offer.color}</strong>
                    </div>
                  </li>
                </ul>
              </form>
              {user.userId === offer.owner ? (
                <div className="d-flex justify-content-around mb-3 mt-2">
                  <Button
                    variant="warning"
                    to={"/catalog/" + id + "/edit"}
                    as={Link}
                  >
                    <Pencil className="me-2" />
                    Edit
                  </Button>
                  <Button variant="danger" onClick={handleShow}>
                    <Trash className="me-2" />
                    Delete
                  </Button>
                </div>
              ) : (
                ""
              )}
              <br />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-8">
              <div className="tabs-content">
                <h4>Vehicle Description</h4>
                <p>{offer.description}</p>
                <br />
              </div>
            </div>
            <div className="col-md-4">
              <div className="tabs-content">
                <h4>Contact Details</h4>

                <p>
                  <span>Mobile phone</span>
                  <br />
                  <strong>
                    <a href="tel:456789123">{offer.telephone}</a>
                  </strong>
                </p>
              </div>
              <br />
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure? All the data for this board game will be permanently deleted! There is no going back!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={deleteOfferHandler}><Trash className="me-2" />Delete</Button>
                </Modal.Footer>
            </Modal>
    </>
  );
}
