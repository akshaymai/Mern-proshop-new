import React from 'react'
import {Navbar,Nav,NavLink,Container} from 'react-bootstrap';


export default function Header() {
  return (
    <header>
        <Navbar bg='dark' expand="lg" variant='dark' collapseOnSelect>
      <Container>
        <Navbar.Brand href='/'>MERN-PROSHOP</Navbar.Brand>
         <Navbar.Toggle aria-controls='basic-navbar-nav'/>
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='ms-auto'>
            <Nav.Link href="/cart">Cart</Nav.Link>
            <Nav.Link href="/login">Sign In</Nav.Link>
            </Nav>
         </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>

  )
}
