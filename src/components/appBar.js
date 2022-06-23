import { Link } from "react-router-dom";
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
function AppBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Navbar.Brand href="">HH4DEV</Navbar.Brand>
        </Link>
        <Nav className="">
          <Link to="/" className="ms-5 btn btn-primary">
            {" "}
            Home
          </Link>
          <Link to="/search" className="ms-5 btn btn-primary">
            {" "}
            Search
          </Link>
          <Link to="/favorites" className="ms-5 btn btn-primary">
            {" "}
            Favorites
          </Link>
          <Link to="/about" className="ms-5 btn btn-primary">
            {" "}
            About
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default AppBar;
