import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../logo.svg';
import {Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap'

export default function Header() {
const expand = "md"
  return (
    <div>
    
            <Navbar bg="dark" variant="dark" key={expand} expand={expand}>
                <Container fluid>
                    <Navbar.Brand href="#">
                        <Container>
                            <img 
                            alt='logo'
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            />{' '}
                            React Bootstrap App
                        </Container>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offCanvassNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas id={`offCanvassNavbar-expand-${expand}`} 
                    aria-labelledby={`offCanvassNavbarLabel-expand-${expand}`}
                    placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offCanvassNavbarLabel-expand-${expand}`}>
                                React App
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                        <Nav 
                        className="justify-content-end flex-grow-1 pe-3"
                        >
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#">Link</Nav.Link>
                            <NavDropdown title="Link" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                <NavDropdown.Item href="#">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#">Action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">Some Action</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled></Nav.Link>
                        </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        
    </div>
  )
}
