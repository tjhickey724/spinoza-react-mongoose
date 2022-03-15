import { Navbar } from 'react-bootstrap';

export default function NavBar(){
    return(
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Spinoza</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Login</Nav.Link>
        <Nav.Link href="#link">Python IDE</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
     </Container>
    </Navbar>
    )
}