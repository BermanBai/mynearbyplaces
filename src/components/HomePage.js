import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HomePage = () => {
    return (
        <div>
            <h1 className="mx-auto my-3 text-center">mynearbyplaces</h1>
            <Container>
                <Row>
                    <Col xs="5">
					
                        Find <input className="w-100" type="text" placeholder="plumbers, delivery, takeout..." />
                    </Col>
					
                    <Col xs="5">
                        Near <input className="w-100" type="text" placeholder="Tucson, AZ" />
						
                    </Col>
                    <Col xs="2">
					
                        <Button className="w-100">Search</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HomePage;
