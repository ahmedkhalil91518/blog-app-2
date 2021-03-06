import React, { useState } from "react";
import { Navbar, Container, Nav, Button, Form } from "react-bootstrap";
import NavigationCSS from "./Navigation.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchPosts } from "../../reducers/searchReducer";

function Navigation() {
  const [searchOpen, setSearchOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <Navbar
      bg="danger"
      expand="lg"
      variant="dark"
      className="w-100"
      sticky="top"
    >
      <Container className={"d-flex " + NavigationCSS.container}>
        <Navbar.Brand className="flex-grow-1">
          <Link to="/" className={NavigationCSS.brand}>
            Blog App 2
          </Link>
        </Navbar.Brand>
        {!searchOpen && (
          <Form.Control
            type="text"
            placeholder="Search here"
            onChange={(e) => {
              navigate("/");
              dispatch(searchPosts(e.target.value));
            }}
            className={"m-3 " + NavigationCSS.search}
          />
        )}
        {searchOpen && (
          <>
            <Form.Control
              type="text"
              placeholder="Search Here"
              onChange={(e) => {
                navigate("/");
                dispatch(searchPosts(e.target.value));
              }}
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
          <Nav.Link
            as={Link}
            className={NavigationCSS.button}
            to="/signup-login"
          >
            Signup/Login
          </Nav.Link>
        </Button>
      </Container>
    </Navbar>
  );
}

export default Navigation;
