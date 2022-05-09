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
            <Navbar collapseOnSelect expand="lg" bg='white'>
                <Container>
                    <Navbar.Brand as={Link} to="/home"><div className='logo'><h1>NNABI</h1><p>WAREHOUSE</p></div></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home"><span className='navitem'>HOME</span></Nav.Link>
                            <Nav.Link as={Link} to="/manageinventory"><span className='navitem'>INVENTORY</span></Nav.Link>
                            <Nav.Link as={Link} to="/outgoingorders"><span className='navitem'>ORDERS</span></Nav.Link>
                            <Nav.Link as={Link} to="/incomingpurchases"><span className='navitem'>PURCHASES</span></Nav.Link>
                            <Nav.Link as={Link} to="/blogs"><span className='navitem'>BLOGS</span></Nav.Link>
                            {
                                user ?
                                    <Nav.Link as={Link} to="/additem"><span className='navitem'>ADD ITEM</span></Nav.Link> : ''
                            }
                            {
                                user ?
                                    <Nav.Link as={Link} to="/myitems"><span className='navitem'>MY ITEMS</span></Nav.Link> : ''
                            }
                            {
                                user ?
                                    <Nav.Link as={Link} to="/manageitems"><span className='navitem'>MANAGE ITEMS</span></Nav.Link> : ''
                            }
                            <Nav.Link as={Link} to="/about"><span className='navitem'>ABOUT</span></Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <button className='btn btn-primary border-0' onClick={handleSignOut}><Nav.Link as={Link} to="">
                                        <span className='navitem'>
                                            SIGN OUT
                                        </span>
                                    </Nav.Link></button>
                                    :
                                    <button className='btn btn-primary border-0'><Nav.Link as={Link} to="/login">
                                        <span className='navitem'>
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