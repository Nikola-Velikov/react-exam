import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useForm from "../../hooks/useForm";
import AuthContext from "../../context/authContext";

function Login() {
  const { loginSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit, validated } = useForm(
    loginSubmitHandler,
    {
      email: "",
      password: "",
    }
  );
  return (
    <>
      <div
        className="page-heading header-text"
        style={{
          backgroundImage: "url(./src/assets/images/blog-image-2-940x460.jpg)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Login</h1>
              <span>Your personal data is in safe place!</span>
            </div>
          </div>
        </div>
      </div>
      <br />

      <br />
      <Form validated={validated} noValidate onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ textAlign: "center", display: "block" }}>
            Email address
          </Form.Label>
          <Form.Control
            type="email"
            style={{ width: "40rem", margin: "0 auto" }}
            placeholder="Enter email"
            value={values.email}
            onChange={onChange}
            name="email"
            required
          />
          <Form.Control.Feedback style={{ textAlign: "center" }} type="invalid">
            Please enter a valid email!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ textAlign: "center", display: "block" }}>
            Password
          </Form.Label>
          <Form.Control
            type="password"
            style={{ width: "40rem", margin: "0 auto" }}
            placeholder="Enter password"
            value={values.password}
            onChange={onChange}
            name="password"
            required
          />
          <Form.Control.Feedback style={{ textAlign: "center" }} type="invalid">
            Please enter a password!
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          variant="dark"
          type="submit"
          style={{ display: "flex", margin: "0 auto" }}
        >
          Login
        </Button>
      </Form>
      <br />
      <br />
    </>
  );
}

export default Login;
