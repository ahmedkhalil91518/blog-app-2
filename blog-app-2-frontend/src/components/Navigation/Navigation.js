import React, { useState } from "react";
import { Navbar, Container, Nav, Button, Form } from "react-bootstrap";
import NavigationCSS from "./Navigation.module.css";

function Navigation() {
  const [searchOpen, setSearchOpen] = useState(false);
  const handleClick = () => {
    setSearchOpen(!searchOpen);
  };
  return (
    <Navbar bg="danger" expand="lg" variant="dark" className="w-100">
      <Container className={"d-flex " + NavigationCSS.container}>
        <Navbar.Brand href="#home" className="flex-grow-1">
          Blog App 2
        </Navbar.Brand>
        {!searchOpen && (
          <Form.Control
            type="text"
            placeholder="Search Here"
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
