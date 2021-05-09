import React, { useState } from 'react';
import './Signin.css';
import { Form, Button, Container } from 'react-bootstrap';
import Http from '../../Http';

function Signin(props) {
  const [user, setUser] = useState({ email: '', password: '' });
  const handleSubmit = async () => {
    const { email, password } = user;
    if (!email || !password) {
      return;
    }
    console.log('------submit---');
    const info = await Http.postApi('/signin', { email, password });
    Http.save('userInfo', info);
    console.log(info);
    props.history.push('/');
  };

  return (
    <Container className="signin-container">
      <h1>Welcome back!</h1>
      <br />
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
              console.log(e.target.value.trim());
            }}
          />
          <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
              console.log(e.target.value.trim());
            }}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Signin;
