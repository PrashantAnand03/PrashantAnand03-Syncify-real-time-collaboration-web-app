import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import './Navbar.css';  

const NavigationBar = () => {
    const navigate = useNavigate();
    const userString = localStorage.getItem('user');
    const user = userString ? JSON.parse(userString) : null;

    const handleLogout = () => {
        // Remove user data from local storage
        localStorage.removeItem('user');
        // Redirect to landing page
        navigate('/');
    };

    return (
        <Navbar expand="lg" className="bg-dark text-dark">
            <Container className="navbar-custom">
            <Navbar.Brand className="brand text-white ml-auto">Syncify</Navbar.Brand>


                {/* Hamburger icon */}
                <Navbar.Toggle aria-controls="navbar-nav" />

                {/* Centered links: Home, Dashboard, About */}
                <Navbar.Collapse id="navbar-nav" className="navbar-center">
                    <Nav className="navbar-links">
                        <Nav.Link as={Link} to="/" className="nav-hov navbar-link text-white mx-3">Home</Nav.Link>
                        <Nav.Link as={Link} to="/dashboard" className="nav-hov navbar-link text-white mx-3">Dashboard</Nav.Link>
                        <Nav.Link as={Link} to="/about" className=" nav-hov navbar-link text-white mx-3">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                {/* Right-aligned buttons: Login, Register, and Logout */}
                <Navbar.Collapse className="navbar-right">
                    <Nav>
                        {user ? (
                            <Nav.Link onClick={handleLogout}>
                                <Button variant="outline-danger" className="text-white">{user.username} Logout</Button>
                            </Nav.Link>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/login">
                                    <Button variant="outline-success" className="Login-button text-white">Login</Button>
                                </Nav.Link>
                                <Nav.Link as={Link} to="/register">
                                    <Button variant="outline-primary" className="Register-button text-white">Register</Button>
                                </Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
