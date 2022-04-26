import React, { useState } from "react";
import { Navbar, Container, Nav, Button, Form } from "react-bootstrap";
import NavigationCSS from "./Navigation.module.css";
import { Link } from "react-router-dom";

function Navigation() {
  const [searchOpen, setSearchOpen] = useState(false);
  const handleClick = () => {
    setSearchOpen(!searchOpen);
  };
  return (
    <Navbar bg="danger" expand="lg" variant="dark" className="w-100" sticky="top">
      <Container className={"d-flex " + NavigationCSS.container}>
        <Navbar.Brand className="flex-grow-1">
          <Link to="/" className={NavigationCSS.brand}>Blog App 2</Link>
        </Navbar.Brand>
        {!searchOpen && (
          <Form.Control
            type="text"
            placeholder="Search here"
            className={"m-3 " + NavigationCSS.search}
          />
        )}
        {searchOpen && (
          <>
            <Form.Control
              type="text"
              placeholder="Search Here"
              className={NavigationCSS.search + " " + NavigationCSS.searchPopup}
            />
            <div className={NavigationCSS.overlay}></div>
            <Button
              variant="light"
              size="sm"
              className={
                NavigationCSS.searchButton +
                " " +
                NavigationCSS.button +
                " " +
                NavigationCSS.cancel
              }
              onClick={handleClick}
            >
              <i className="fa-solid fa-xmark"></i>{" "}
            </Button>
          </>
        )}
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
        <Button variant="light" size="sm" className={NavigationCSS.button}>
          <Nav.Link as={Link} className={NavigationCSS.button} to="/signup-login">
            Signup/Login
          </Nav.Link>
        </Button>
      </Container>
    </Navbar>
  );
}

export default Navigation;
