// src/components/Header.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/">Blog Platform</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/create">Create Post</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Header;
