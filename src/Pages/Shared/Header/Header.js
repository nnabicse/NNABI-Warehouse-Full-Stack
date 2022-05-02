import React from 'react';
import './Header.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-container'>
            <Navbar collapseOnSelect expand="lg" bg='primary' variant='dark'>
                <Container>
                    <Navbar.Brand as={Link} to="/home"><h2>NNABI</h2><p>Warehouse</p></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">HOME</Nav.Link>
                            <Nav.Link as={Link} to="/manageinventory">INVENTORY</Nav.Link>
                            <Nav.Link as={Link} to="/outgoingorders">ORDERS</Nav.Link>
                            <Nav.Link as={Link} to="/incomingpurchases">PURCHASES</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">BLOGS</Nav.Link>
                            <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/login">LOGIN</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    );
};

export default Header;