import React, { useState } from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default  function NavBars(){

  return (
    <div>
    <Navbar bg="light" expand="lg">
		<Link to = "/" > 
  <Navbar.Brand href="/">Dark Life</Navbar.Brand>
  		</Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
		<Link to = "/landing"> 
      <Nav.Link href="/landing">Home</Nav.Link>
	  </Link>
      <NavDropdown title="Products" id="basic-nav-dropdown">
	  <Link to = "/men"> 
        <NavDropdown.Item href="/men">Men</NavDropdown.Item>
		</Link>
		<Link to = "/women" > 
        <NavDropdown.Item href="/women">Women</NavDropdown.Item>
		</Link>
		<Link to = "/landing">
        <NavDropdown.Item href="/landing">All</NavDropdown.Item>
		</Link> 
        <NavDropdown.Divider />
      </NavDropdown>
    </Nav>
    <Form inline>
		<Link to ="/cart"> 
      <Button variant="outline-dark">Cart</Button>
		</Link>
    </Form>
  </Navbar.Collapse>
</Navbar>
    </div>
  );
}

