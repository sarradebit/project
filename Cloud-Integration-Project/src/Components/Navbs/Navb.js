import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Navb = () => {
  return (
    <div>
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
    </div>
  )
}

export default Navb
