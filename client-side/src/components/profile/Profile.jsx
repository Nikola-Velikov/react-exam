import { useContext, useEffect, useState } from "react";
import * as carService from "../../services/carService";
import AuthContext from "../../context/authContext";
import * as authService from "../../services/authService";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Pencil, Trash } from "react-bootstrap-icons";
import { CarOffer } from "../catalog/carOffer/carOffer";
import { BlogCard } from "../blog/blogCard";
import { Link, useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

export function Profile() {
  const [data, setData] = useState({ offers: [], blogs: [] });
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const user = useContext(AuthContext);
  const deleteUserHandler = () => {
    authService
      .deleteUser(user.userId)
      .then((result) =>{
        user.logoutHandler()
navigate('/')
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    carService
      .getAllByUserId(user.userId)
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  console.log(user);

  console.log(data.blogs[0]);
  return (
    <>
      <div
        className="page-heading header-text"
        style={{
          backgroundImage:
            "url(../src/assets/images/slider-image-1-1920x900.jpg)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Profile</h1>
              <span>Your personal data is in safe place!</span>
            </div>
          </div>
        </div>
      </div>
      <br />

      <br />

      <section className="vh-100" style={{ backgroundColor: "#f4f5f7" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="6" className="mb-4 mb-lg-0">
              <MDBCard className="mb-3" style={{ borderRadius: ".5rem" }}>
                <MDBRow className="g-0">
                  <MDBCol
                    md="4"
                    className="gradient-custom text-center text-white"
                    style={{
                      borderTopLeftRadius: ".5rem",
                      borderBottomLeftRadius: ".5rem",
                    }}
                  >
                    <MDBCardImage
                      src="../src/assets/images/guest.png"
                      alt="Avatar"
                      className="my-3"
                      style={{ width: "105px" }}
                      fluid
                    />
                    <MDBTypography tag="h5" style={{ color: "black" }}>
                      {user.username}
                    </MDBTypography>
                  </MDBCol>
                  <MDBCol md="8">
                    <MDBCardBody className="p-4">
                      <MDBTypography tag="h6">Information</MDBTypography>
                      <hr className="mt-0 mb-4" />
                      <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-4">
                          <MDBTypography tag="h6">Email</MDBTypography>
                          <MDBCardText
                            style={{ marginBottom: "10px" }}
                            className="text-muted"
                          >
                            {user.email}
                          </MDBCardText>
                          <Link to={"/profile/edit"}>
                            
                            <Pencil
                              className="me-1"
                              style={{ color: "green" }}
                            />
                            <span
                              style={{
                                color: "black",
                                marginLeft: "5px",
                                paddingRight: "10px",
                              }}
                            >
                              Edit
                            </span>
                         
                          </Link>
                          <div onClick={handleShow}>
                            
                          <Trash className="me-1" style={{ color: "red" }} />
                          <span style={{ color: "black", marginLeft: "5px" }}>
                            Delete
                          </span>
                          </div>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <h2 className="mt-3 mb-5 text-center">Offers added by you</h2>
      <div className="d-flex justify-content-center flex-wrap">
        {data.offers.map((car) => (
          <CarOffer key={car._id} {...car} />
        ))}
      </div>
      {data.offers.length === 0 && (
        <i>
        <h3 style={{textAlign:"center"}}>No offers yet. Create your first one!</h3>
      </i>
      )}

      <h2 className="mt-3 mb-5 text-center">Blogs added by you</h2>
      <div className="d-flex justify-content-center flex-wrap">
        {data.blogs.map((blog) => (
          <BlogCard key={blog._id} {...blog} />
        ))}
      </div>
      {data.blogs.length === 0 && (
        <i>
        <h3 style={{textAlign:"center"}}>No blogs yet. Create your first one!</h3>
      </i>
      )}

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure? All the data for this account will be permanently
          deleted! There is no going back!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deleteUserHandler}>
            <Trash className="me-2" />
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
