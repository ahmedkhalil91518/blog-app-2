import React, { useState } from "react";
import { Navbar, Container, Nav, Button, Form } from "react-bootstrap";
import NavigationCSS from "./Navigation.module.css";

function Navigation() {
  const [searchOpen, setSearchOpen] = useState(false);
  const handleClick = () => {
    setSearchOpen(!searchOpen);
    console.log("hi");
  };
  return (
    <Navbar bg="danger" expand="lg" variant="dark">
      <Container className={"d-flex " + NavigationCSS.container}>
        <Navbar.Brand href="#home" className="flex-grow-1">
          Blog App 2
        </Navbar.Brand>
        <Form.Control
          type="text"
          placeholder="Search Here"
          className={"m-3 " + NavigationCSS.search}
        />
        <Button
          variant="light"
          size="sm"
          className={
            "me-3 " + NavigationCSS.searchButton + " " + NavigationCSS.button
          }
          onClick={handleClick}
        >
          <i className="fa-solid fa-magnifying-glass"></i>{" "}
        </Button>
        <Button variant="light" size="sm">
          <Nav.Link href="#home" className={NavigationCSS.button}>
            Signup/Login
          </Nav.Link>
        </Button>
      </Container>
    </Navbar>
  );
}

export default Navigation;
