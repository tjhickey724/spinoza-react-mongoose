import { Navbar, Nav, Container } from 'react-bootstrap';
import {  NavLink } from 'react-router-dom'



export default function NavBar(){
 

    return(  
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={NavLink} to='/'>Spinoza</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
                    <Nav.Link as={NavLink} to='/about'>About</Nav.Link>
                    <Nav.Link as={NavLink} to='/login'>Login</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}