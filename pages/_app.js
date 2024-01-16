import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.scss";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
//TODO remove this when published
const theme = "light";

function MyApp({ Component, pageProps }) {
  return (
    <div data-bs-theme={theme}>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#home">Bolt Components</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav z-3">
            <Nav className="me-auto">
              <NavDropdown
                className="z-10"
                title="Components"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Input</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Button</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Modal</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Tooltip</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
