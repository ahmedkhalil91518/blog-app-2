import React, { useState } from "react";
import { Navbar, Container, Nav, Button,Form } from "react-bootstrap";
import "./Navigation.module.css";

function Navigation() {
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <Navbar bg="danger" expand="lg" variant="dark">
      <Container className="d-flex">
        <Navbar.Brand href="#home" className="flex-grow-1">
          Blog App 2
        </Navbar.Brand>
        <Form.Control type="text" placeholder="Search Here" className="m-3"/>
        <Button variant="light" size="sm" className="me-3">
          <i className="fa-solid fa-magnifying-glass"></i>{" "}
        </Button>
        <Button variant="light" size="sm">
          <Nav.Link href="#home" className="p-0">Signup/Login</Nav.Link>
        </Button>
      </Container>
    </Navbar>
  );
}

export default Navigation;
