import { Button, Container, Nav, Navbar } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <LinkContainer to="/"><Navbar.Brand >News App</Navbar.Brand></LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
        <LinkContainer to="/"><Nav.Link >Home</Nav.Link></LinkContainer>
        </Nav>
        <Link to="/admin"><Button variant="success">Admin</Button></Link>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header