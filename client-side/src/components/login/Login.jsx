import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function Login() {
    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return(
    <>
  <div className="page-heading header-text" style={{backgroundImage:'url(./src/assets/images/blog-image-2-940x460.jpg)'}}>
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
<Form  validated={validated} noValidate>
    <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label style={{textAlign:'center', display:'block'}}>Email address</Form.Label>
        <Form.Control type="email" style={{width:'40rem', margin:'0 auto'}} placeholder="Enter email"  name='email' required/>
        <Form.Control.Feedback type="invalid">
            Please, enter a valid email!
        </Form.Control.Feedback>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{textAlign:'center', display:'block'}}>Password</Form.Label>
        <Form.Control type="password"style={{width:'40rem', margin:'0 auto'}} placeholder="Enter password"  name='password' required/>
        <Form.Control.Feedback type="invalid">
            Please enter a password!
        </Form.Control.Feedback>
    </Form.Group>
    <Button variant="dark" type="submit" style={{display:'flex', margin:'0 auto'}}>
        Login
    </Button>
    
</Form>
<br />
<br />
<br />
</>
  )
}

export default Login;