import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, NavLink, useHistory } from 'react-router-dom'
import React, { useState } from "react";
//import Container from './Container';
import { useAuth } from '../context/AuthContext'



export default function NavBar(){

    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError("")
        try {
        await logout()
        history.push("/")
        } catch {
        setError("Failed to log out")
        }
    }

    return(  
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={NavLink} to='/home'>Spinoza</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to='/home'>Home</Nav.Link>
                    <Nav.Link as={NavLink} to='/ide'>Python IDE</Nav.Link>
                    <button onClick={handleLogout}>Log out</button>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}