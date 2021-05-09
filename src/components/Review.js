import React from 'react';
import './Review.css';

import { Container, Card, Button, CardDeck, Form } from 'react-bootstrap';

function Review() {
  return (
    <Container className="review-container">
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Add a new review:</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="secondary">Submit</Button>
      </Form>
      <hr />
      <h2>Hot Businesses</h2>
      <br />
      <CardDeck>
        <Card>
          <Card.Img variant="top" src="../images/coffeeshop.jpeg" alt="Coffee Shop" />
          <Card.Body>
            <Card.Title>Coffee Shop ($$$)</Card.Title>
            <Card.Text className="card-type">Coffee, Tea, Bakeries</Card.Text>
            <Card.Text className="card-review">"This coffee shop is so awesome!"</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="../images/food-truck.jpeg" alt="Food Truck" />
          <Card.Body>
            <Card.Title>Food Truck ($$)</Card.Title>
            <Card.Text className="card-type">Food Truck, Pop-Up Restaurants</Card.Text>
            <Card.Text className="card-review">"This food truck is so awesome!"</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="../images/starbucks.jpeg" alt="Starbucks" />
          <Card.Body>
            <Card.Title>Starbucks ($)</Card.Title>
            <Card.Text className="card-type">Coffee, Bakeries</Card.Text>
            <Card.Text className="card-review">"This Starbucks is so awesome!"</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </Container>
  );
}

export default Review;
