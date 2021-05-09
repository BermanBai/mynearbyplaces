import React, { useState } from 'react';
import './Signup.css';
import { Form, Button, Container } from 'react-bootstrap';
import Http from '../../Http';

function Signup(props) {
  const [user, setUser] = useState({ email: '', password: '', confirmPwd: '' });

  console.log(props);
  const handleSubmit = async () => {
    const { email, password, confirmPwd } = user;
    if (!email) {
      alert('email cannot be empty');
      return;
    }
    if (!password) {
      alert('password cannot be empty');
      return;
    }
    if (password !== confirmPwd) {
      alert('Wrong password input twice');
      return;
    }
    const info = await Http.postApi('/signup', user);
    console.log(info);
    props.history.push('/signin');
  };
  return (
    <Container className="signup-container">
      <h1>Sign Up for New User</h1>
      <br />
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e) => setUser({ ...user, email: e.target.value.trim() })} />
          <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value.trim() })} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setUser({ ...user, confirmPwd: e.target.value.trim() })} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </Container>
  );
}

export default Signup;
