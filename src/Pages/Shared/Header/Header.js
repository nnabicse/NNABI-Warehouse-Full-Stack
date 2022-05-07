import React from 'react';
import './Header.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
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
                            {
                                user ?
                                    <button className='btn btn-primary border-0' onClick={handleSignOut}><Nav.Link as={Link} to="">
                                        <span className='navbar-item'>
                                            SIGN OUT
                                        </span>
                                    </Nav.Link></button>
                                    :
                                    <button className='btn btn-primary border-0'><Nav.Link as={Link} to="/login">
                                        <span className='navbar-item'>
                                            LOGIN
                                        </span>
                                    </Nav.Link></button>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    );
};

export default Header;