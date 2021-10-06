import React, { Component } from 'react'
import { Navbar, NavDropdown, Container, Nav } from 'react-bootstrap';
import Resume from '../TempResume.pdf'

export default class MyNavbar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">Kenny Luu</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Projects</Nav.Link>
                        <Nav.Link href={Resume} target="_blank">Resume</Nav.Link>
                        <NavDropdown title="Interests" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Books</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2">Games</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.3">Sports</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>   
        )
    }
}
