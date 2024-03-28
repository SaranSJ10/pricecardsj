import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';

function NavBar({inCart,SetinCart} ){
  
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container >
          <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <div className='home'><Nav.Link href="#home" >Home</Nav.Link> </div>
              
              <Nav.Link href="#link">About</Nav.Link>
              <NavDropdown title="Shop" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">All products</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Product Items
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  New Arrivals
                </NavDropdown.Item>
              </NavDropdown>
              <button className='cart'><i class="bi bi-cart-fill"></i>  Cart {inCart}   <i class="bi bi-1-circle-fill"></i></button>
              
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    
      )
}
export default NavBar