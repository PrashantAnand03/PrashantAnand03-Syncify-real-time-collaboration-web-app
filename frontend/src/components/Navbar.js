// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Navbar = () => {
//     const navigate = useNavigate();
//     const userString = localStorage.getItem('user');
//     const user = userString?JSON.parse(userString):null;
//     console.log(user)

//     const handleLogout = () => {
//         // Remove user data from local storage
//         localStorage.removeItem('user');
//         // Redirect to landing page
//         navigate('/');
//     };

//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <div className="container-fluid">
//                 <Link className="navbar-brand" to="/dashboard">CollabTool</Link>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarNav">
//                     <ul className="navbar-nav me-auto">
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/dashboard">Dashboard</Link>
//                         </li>
//                     </ul>
//                     {user ? (
//                         <ul className="navbar-nav">
//                             <li className="nav-item">
//                                 <button className="btn btn-link nav-link" onClick={handleLogout}>{user.username}  Logout</button>
//                             </li>
//                         </ul>
//                     ) : (
//                         <ul className="navbar-nav">
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/login">Login</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/register">Register</Link>
//                             </li>
//                         </ul>
//                     )}
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Button, Container, Dropdown } from 'react-bootstrap';
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
            <Navbar.Brand className="brand text-white ml-auto">
            <span className="badge" style={{ backgroundColor: '#FF0000', fontSize: '20px' }}>Syncify</span>
            </Navbar.Brand>

                {/* Hamburger icon */}
                <Navbar.Toggle aria-controls="navbar-nav" />

                {/* Centered links: Home, Dashboard, About */}
                <Navbar.Collapse id="navbar-nav" className="navbar-center">
                    <Nav className="navbar-links">
                        <Nav.Item>
                            <Link className="nav-link fs-5 me-4" to="/" style={{ cursor: "pointer" }}>
                                <span className="badge nav-hov">Home</span>
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="nav-link fs-5 me-4" to="/dashboard" style={{ cursor: "pointer" }}>
                                <span className="badge nav-hov">Dashboard</span>
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="nav-link fs-5 me-4" to="/live-chat" style={{ cursor: "pointer" }}>
                                <span className="badge nav-hov">Live Chat</span>
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="nav-link fs-5 me-4" to="/about" style={{ cursor: "pointer" }}>
                                <span className="badge nav-hov">About</span>
                            </Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>

                {/* Right-aligned buttons: Login, Register, and Logout */}
                <Navbar.Collapse className="navbar-right">
                    <Nav>
                        {user ? (
                            <Dropdown align="end">
                                <Dropdown.Toggle
                                    as="div"
                                    className="user-avatar-container"
                                    id="user-avatar-dropdown"
                                >
                                    <img
                                        src={`${process.env.PUBLIC_URL}/Assets/avatar.png`} 
                                        alt="User Avatar"
                                        className="user-avatar"
                                    />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/account">Account</Dropdown.Item>
                                    <Dropdown.Item href="/settings">Settings</Dropdown.Item>
                                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
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
