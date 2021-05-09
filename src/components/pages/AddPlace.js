import React, { useState } from 'react';
import './Signup.css';
import { Form, Button, Container } from 'react-bootstrap';
import Http from '../../Http';

function AddPlace(props) {
  const [info, setInfo] = useState({ name: '', street: '', city: '', state: '', postalcode: '' });

  const handleSubmit = async () => {
    await Http.postApi('/place', info);
    alert('add success');
    setInfo({ name: '', street: '', city: '', state: '', postalcode: '' });
  };
  const handleChange = (field, e) => {
    const tmp = { ...info };
    tmp[field] = e.target.value.trim();
    setInfo(tmp);
  };
  return (
    <Container className="signup-container">
      <h1>Add Place</h1>
      <br />
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Place name</Form.Label>
          <Form.Control type="text" placeholder="place name" value={info.name} onChange={(e) => handleChange('name', e)} />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Street</Form.Label>
          <Form.Control type="text" placeholder="enter street" value={info.street} onChange={(e) => handleChange('street', e)} />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>city</Form.Label>
          <Form.Control type="text" placeholder="enter city" value={info.city} onChange={(e) => handleChange('city', e)} />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="enter state" value={info.state} onChange={(e) => handleChange('state', e)} />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Postalcode</Form.Label>
          <Form.Control type="text" placeholder="enter postalcode" value={info.postalcode} onChange={(e) => handleChange('postalcode', e)} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Place
        </Button>
      </Form>
    </Container>
  );
}

export default AddPlace;
