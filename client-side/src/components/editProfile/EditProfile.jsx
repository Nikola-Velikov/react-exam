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
        try{
            const formData = new FormData();
            formData.append('username', values.username);
            formData.append('email', values.email);

            const result = await authService.updateUser(user.userId, formData);
            console.log(result);
            user.setAuth(result);
            
           
            navigate("/profile/"+user.userId);
        }catch(err){
           console.log(err.message);
        }
    }

    const changePasswordHandler = async (values) => {
        try {
            if (values.newPassword !== values.repeatPassword) {
                throw new Error("Passwords don't match!")
            }
            const result = await authService.changePassword(user.userId, { oldPassword: values.oldPassword, newPassword: values.newPassword });
           
            navigate("/profile/"+user.userId);
        } catch (error) {
            alert(error.message)
        }
    }

    const editUserForm = useForm(editProfileHandler, user, true);
    const changePasswordForm = useForm(changePasswordHandler, { oldPassword: '', newPassword: '', repeatPassword: '' });


    return (
        <>
            <h1 className="text-center mb-3">Edit Your Profile</h1>

            <Form onSubmit={editUserForm.onSubmit} noValidate validated={editUserForm.validated} encType='multipart/form-data'>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" name='username' onChange={editUserForm.onChange} value={editUserForm.values.username} required  />
                    <Form.Control.Feedback type="invalid">
                        Please choose a valid username.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Email" name='email' onChange={editUserForm.onChange} value={editUserForm.values.email} required  />
                    <Form.Control.Feedback type="invalid">
                        Please choose a valid email.
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant="dark" type="submit">
                    Update
                </Button>
            </Form>
            <Form onSubmit={changePasswordForm.onSubmit} noValidate validated={changePasswordForm.validated} className='mt-3'>
                <Form.Group className="mb-3">
                    <Form.Label>Old Password</Form.Label>
                    <Form.Control type="password" placeholder="Old Password" name='oldPassword' onChange={changePasswordForm.onChange} value={changePasswordForm.values.oldPassword} required/>
                    <Form.Control.Feedback type="invalid">
                        Please enter your old password!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type="password" placeholder="New password" name='newPassword' onChange={changePasswordForm.onChange} value={changePasswordForm.values.newPassword} required />
                    <Form.Control.Feedback type="invalid">
                        Choose a valid new password!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Repeat Password</Form.Label>
                    <Form.Control type="password" placeholder="Repeat password" name='repeatPassword' onChange={changePasswordForm.onChange} value={changePasswordForm.values.repeatPassword} required />
                    <Form.Control.Feedback type="invalid">
                        Repeat your password!
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant="dark" type="submit">
                    Change Password
                </Button>
            </Form>

          
        </>
    )
}