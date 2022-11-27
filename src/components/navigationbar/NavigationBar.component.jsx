import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./NavigationBar.styles.scss";

const NavigationBar = () => {
  const activeStyle = {
    color: "white",
    fontWeight: "bolder",
    textDecoration: "underline",
  };

  return (
    <Navbar bg="primary" variant="dark" expand="md">
      <Container>
        <NavLink to="/" className="navigation-link">
          Home
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink
              className="navigation-link"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/side-projects"
            >
              Side Projects
            </NavLink>
            <NavLink
              className="navigation-link"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/blog"
            >
              Blog
            </NavLink>
            <NavLink
              className="navigation-link"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/about-me"
            >
              About Me
            </NavLink>
          </Nav>
          <Button className="d-flex">Login</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
