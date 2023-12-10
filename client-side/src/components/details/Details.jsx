import { Link, useNavigate, useParams } from "react-router-dom";
import * as carService from "../../services/carService";
import AuthContext from "../../context/authContext";
import useForm from "../../hooks/useForm";

import { Pencil, Trash } from "react-bootstrap-icons";
import { useContext, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Comment } from "./comment/Comment";

export function Details() {
  const user = useContext(AuthContext);
  const { id } = useParams();
  const [offer, setOffer] = useState({ comments: [] });
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

  const commentSubmitHandler = async (values) => {
    try {
      const comment = await carService.createComment(id, values);

      setOffer((current) => ({
        ...current,
        comments: [...current.comments, comment],
      }));
    } catch (err) {
      console.log(err.message);
    }
  };
  console.log(offer);
  const { values, onChange, onSubmit, validated } = useForm(
    commentSubmitHandler,
    {
      content: "",
    }
  );
  const commentDeleteHandler = async (id) => {
    try {
      await carService.deleteComment(id);

      setOffer((current) => ({
        ...current,
        comments: current.comments.filter((el) => el._id != id),
      }));
    } catch (err) {
      console.log(err.message);
    }
  };
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
        style={{
          backgroundImage: `url('http://localhost:3000/uploads/${offer.carImage}')`,
        }}
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
      <div className="callback-form contact-us">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>
                  Leave a <em>comment</em>
                </h2>
                <section className="comment-section ms-3 mb-3 pt-3">
                  <Form
                    className="mb-3"
                    onSubmit={onSubmit}
                    validated={validated}
                    noValidate
                  >
                    <Form.Group className="mb-3">
                      <Form.Control
                        style={{ width: "40rem", margin: "0 auto" }}
                        as="textarea"
                        rows={3}
                        placeholder="Place your comment.... "
                        name="content"
                        onChange={onChange}
                        value={values.content}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please fill out this field.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Button
                      variant="dark"
                      type="submit"
                      style={{ display: "flex", margin: "0 auto" }}
                    >
                      Comment
                    </Button>
                  </Form>
                  {offer.comments.length === 0 ? (
                    <i>
                      <h3>No comments yet. Be the first one!</h3>
                    </i>
                  ) : (
                    ""
                  )}
                  {offer.comments.map((comment) => (
                    <Comment
                      comment={comment}
                      commentDeleteHandler={commentDeleteHandler}
                      userId={user.userId}
                      key={comment._id}
                    />
                  ))}
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure? All the data for this offer will be permanently deleted!
          There is no going back!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deleteOfferHandler}>
            <Trash className="me-2" />
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
