import React from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const HomeNavBar = () => {
    return (
        <div>
            <Navbar className="w-75 mx-auto" bg="transparent">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
				
                <Navbar.Collapse id="responsive-navbar-nav"> 
                    <Nav>
                        <NavItem href="/">Write a Review</NavItem>
						
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link href="/login">Login</Nav.Link>
						
                        <Nav.Link href="signup">Sign Up</Nav.Link>
                    </Nav>
					
                </Navbar.Collapse>
				
            </Navbar>
			
        </div>
    );
}

export default HomeNavBar;
