import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "./Navigation.module.css";
function Navigation() {
  return (
    <Navbar bg="danger" expand="lg" variant="dark">
      <Container className="d-flex">
        <Navbar.Brand href="#home" className="flex-grow-1">
          Blog App 2
        </Navbar.Brand>
        <Button variant="light" size="sm" className="mx-2">
          <i className="fa-solid fa-magnifying-glass"></i>{" "}
        </Button>
        <Button variant="light" size="sm">
          <Nav.Link href="#home">Signup/Login</Nav.Link>
        </Button>
      </Container>
    </Navbar>
  );
}

export default Navigation;
