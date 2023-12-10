import { useContext } from "react";
import useForm from "../../hooks/useForm";
import AuthContext from "../../context/authContext.jsx";
import { Form, Button, Modal } from "react-bootstrap";
import * as authService from "../../services/authService";

import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const user = useContext(AuthContext);
  const navigate = useNavigate();

  const editProfileHandler = async (values) => {
    try {
      const formData = new FormData();
      formData.append("username", values.username);
      formData.append("email", values.email);

      const result = await authService.updateUser(user.userId, formData);
      console.log(result);
      user.setAuth(result);

      navigate("/profile/" + user.userId);
    } catch (err) {
      console.log(err.message);
    }
  };

  const changePasswordHandler = async (values) => {
    try {
      if (values.newPassword !== values.repeatPassword) {
        throw new Error("Passwords don't match!");
      }
      const result = await authService.changePassword(user.userId, {
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
      });

      navigate("/profile/" + user.userId);
    } catch (error) {
      alert(error.message);
    }
  };

  const editUserForm = useForm(editProfileHandler, user, true);
  const changePasswordForm = useForm(changePasswordHandler, {
    oldPassword: "",
    newPassword: "",
    repeatPassword: "",
  });

  return (
    <>
      <div
        className="page-heading header-text"
        style={{
          backgroundImage: "url(../src/assets/images/blog-image-2-940x460.jpg)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Edit your profile</h1>
              <span>Your personal data is in safe place!</span>
            </div>
          </div>
        </div>
      </div>
      <br />

      <br />
      <h1 className="text-center mb-3">Edit Your Profile</h1>

      <Form
        onSubmit={editUserForm.onSubmit}
        noValidate
        validated={editUserForm.validated}
        encType="multipart/form-data"
      >
        <Form.Group className="mb-3">
          <Form.Label style={{ textAlign: "center", display: "block" }}>
            Username
          </Form.Label>
          <Form.Control
            style={{ width: "40rem", margin: "0 auto" }}
            type="text"
            placeholder="Username"
            name="username"
            onChange={editUserForm.onChange}
            value={editUserForm.values.username}
            required
          />
          <Form.Control.Feedback style={{ textAlign: "center" }} type="invalid">
            Please choose a valid username.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label style={{ textAlign: "center", display: "block" }}>
            Email
          </Form.Label>
          <Form.Control
            style={{ width: "40rem", margin: "0 auto" }}
            type="text"
            placeholder="Email"
            name="email"
            onChange={editUserForm.onChange}
            value={editUserForm.values.email}
            required
          />
          <Form.Control.Feedback style={{ textAlign: "center" }} type="invalid">
            Please choose a valid email.
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          variant="dark"
          type="submit"
          style={{ display: "flex", margin: "0 auto" }}
        >
          Update
        </Button>
      </Form>
      <Form
        onSubmit={changePasswordForm.onSubmit}
        noValidate
        validated={changePasswordForm.validated}
        className="mt-3"
      >
        <Form.Group className="mb-3">
          <Form.Label style={{ textAlign: "center", display: "block" }}>
            Old Password
          </Form.Label>
          <Form.Control
            style={{ width: "40rem", margin: "0 auto" }}
            type="password"
            placeholder="Old Password"
            name="oldPassword"
            onChange={changePasswordForm.onChange}
            value={changePasswordForm.values.oldPassword}
            required
          />
          <Form.Control.Feedback style={{ textAlign: "center" }} type="invalid">
            Please enter your old password!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label style={{ textAlign: "center", display: "block" }}>
            New Password
          </Form.Label>
          <Form.Control
            style={{ width: "40rem", margin: "0 auto" }}
            type="password"
            placeholder="New password"
            name="newPassword"
            onChange={changePasswordForm.onChange}
            value={changePasswordForm.values.newPassword}
            required
          />
          <Form.Control.Feedback style={{ textAlign: "center" }} type="invalid">
            Choose a valid new password!
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
            onChange={changePasswordForm.onChange}
            value={changePasswordForm.values.repeatPassword}
            required
          />
          <Form.Control.Feedback style={{ textAlign: "center" }} type="invalid">
            Repeat your password!
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          variant="dark"
          type="submit"
          style={{ display: "flex", margin: "0 auto" }}
        >
          Change Password
        </Button>
      </Form>
    </>
  );
}
