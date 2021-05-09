import { Link } from 'react-router-dom';

import { Navbar, Nav } from 'react-bootstrap';

function Navbars() {
  return (
    <Navbar bg="light" expand="lg">
      {/* <Navbar.Brand>React-Bootstrap</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/place">Add Place</Link>
          </Nav.Link>
          {/* <Nav.Link>
            <Link to="/review">Write a Review</Link>
          </Nav.Link> */}
        </Nav>
        <Nav.Link>
          <Link to="/signin">Sign In</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/signup">Sign Up</Link>
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbars;
