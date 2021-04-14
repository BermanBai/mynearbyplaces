import React from 'react';

import { Button, Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';

const Place = ({ place, remove, addReview }) => {
	
    const handleRemove = () => {
        remove(place);
    }

    const handleAddReview = () => {
        let review = document.getElementById("review-input").value;
		
        console.log("Review in Place: ");
		
        console.log(review);
		
        addReview(place, review);
    }

    return (
        <div>
            <Container>
                <Row>
				
                    <Col>
					
                        <h3>{place.name}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {place.name} is a {place.category} in {place.city}, {place.state}
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={4}><Button onClick={handleRemove}>Remove</Button></Col>
                </Row>
                <Row>
                    <Col sm={12} md={9}>
					
                        <input id="review-input" type="text" />
						
                    </Col>
                    <Col sm={12} md={3}>
                        <Button onClick={handleAddReview}>Add a Review</Button>
                    </Col>
					
                </Row>
                {place.reviews.map((review) => (
				
                    <Row>
					
                        <Col>
                            <p>"{review}"</p>
							
                        </Col>
						
                    </Row>
                ))}
				
				
            </Container>
        </div>
    );
}

export default Place;