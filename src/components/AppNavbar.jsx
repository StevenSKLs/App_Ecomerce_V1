import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const AppNavbar = () => {
  const navigate = useNavigate()
  
  const logout = () =>{
    localStorage.setItem('token', ''),
    navigate('/login')
  }


  return (
    <Navbar expand="lg" variant="dark" bg="primary" size="lg" style={{ position: 'fixed',
      width: '100%', zIndex: '300',top: '0'}}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          News App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/favorites">
              Favorites
            </Nav.Link>
            <Nav.Link onClick={logout}>Favorites (Log out)</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
//object-fit: contain