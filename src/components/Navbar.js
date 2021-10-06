import React, { Component } from 'react'
import { Navbar, NavDropdown, Container, Nav } from 'react-bootstrap';
import Resume from '../TempResume.pdf'
import { colors } from '../data';

export default class MyNavbar extends Component {
    render() {
        return (
            <Navbar style={{backgroundColor: colors.c2, color: colors.c1}} expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">LUU</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link style={{color: colors.c5}} href="#home">Home</Nav.Link>
                        <Nav.Link style={{color: colors.c3}} href="#link">Projects</Nav.Link>
                        <Nav.Link style={{color: colors.c4}} href={Resume} target="_blank">Resume</Nav.Link>
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
