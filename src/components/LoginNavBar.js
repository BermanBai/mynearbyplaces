import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

const LoginNavBar = () => {
    return (
        <div>
            <Navbar>
                <Nav className="mx-auto">
				
                    <Link to="/mynearbyplaces">
					
                        <Navbar.Brand>mynearbyplaces</Navbar.Brand>
                    </Link>
                </Nav>
            </Navbar>
        </div>
    );
}

export default LoginNavBar;
