import React, {useState } from "react";
import { Button, Collapse, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Cart_push from './Cart_push'


const AppNavbar = () => {
  const navigate = useNavigate()
  
  const logout = () =>{
    localStorage.setItem("token", "");
    navigate("/login");
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [open, setOpen] = useState(false)

  return (
    <>
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
              <Nav.Link as={Link} to="/purchases">
              Purchases
              </Nav.Link>
              <Nav.Link onClick={handleShow}>Car <i className="bi bi-cart3"></i></Nav.Link>
              <Nav.Link onClick={logout}>Log out</Nav.Link>
            </Nav>


        </Navbar.Collapse>
      </Container>
    </Navbar>


    <Cart_push show={show} handleClose={handleClose} />

  </>
  );
};

export default AppNavbar;
//object-fit: contain