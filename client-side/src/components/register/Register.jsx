import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useForm from "../../hooks/useForm";
import AuthContext from "../../context/authContext";

function Register() {
  const { registerSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit, validated } = useForm(
    registerSubmitHandler,
    {
      email: "",
      password: "",
      username: "",
      repeatPassword: "",
    }
  );

  return (
    <>
      <div
        className="page-heading header-text"
        style={{
          backgroundImage:
            "url(./src/assets/images/about-fullscreen-image-1-1920x600.jpg)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Register</h1>
              <span>Your personal data is in safe place!</span>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div id="register-component">
        <Form
          onSubmit={onSubmit}
          noValidate
          validated={validated}
          encType="multipart/form-data"
        >
          <Form.Group className="mb-3">
            <Form.Label style={{ textAlign: "center", display: "block" }}>
              Username
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              name="username"
              onChange={onChange}
              value={values.username}
              required
              style={{ width: "40rem", margin: "0 auto" }}
            />
            <Form.Control.Feedback type="invalid">
              Please write a valid username
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ textAlign: "center", display: "block" }}>
              {" "}
              Email address
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={onChange}
              value={values.email}
              style={{ width: "40rem", margin: "0 auto" }}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please write a valid email address
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ textAlign: "center", display: "block" }}>
              Password
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={onChange}
              value={values.password}
              style={{ width: "40rem", margin: "0 auto" }}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please write a valid password
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ textAlign: "center", display: "block" }}>
              Repeat Password
            </Form.Label>
            <Form.Control
              style={{ width: "40rem", margin: "0 auto" }}
              type="password"
              placeholder="Repeat password"
              name="repeatPassword"
              onChange={onChange}
              value={values.repeatPassword}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please write a valid password
            </Form.Control.Feedback>
          </Form.Group>

          <Button
            variant="dark"
            type="submit"
            style={{ display: "flex", margin: "0 auto" }}
          >
            Register
          </Button>
        </Form>
      </div>
      <br />
      <br />
    </>
  );
}
export default Register;
