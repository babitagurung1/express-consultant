import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo  from "../../Images/expressLogo.png"
import "./header.css"
const Header = () => {
  return (
  
    <Navbar expand="lg" className="bg-body-tertiary navbar_wrapper">
      <Container fluid  className='navbar_outer paddingLeftRight'>
        <Navbar.Brand>
            <div className='d-flex gap-1 align-items-center'>
            <img src={logo} height="70px" width="78px"/>
            <h3 className='express_heading'>
                Express
                <span className='consultant_heading'>Consultants</span>
            </h3>
                        
            </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="nav_items">
            <Nav.Link href="#home">Services</Nav.Link>
            <Nav.Link href="#link">Technology</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#link">Testimonals</Nav.Link>
            <Nav.Link href="#link">Blogs</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
            <button className='cmn_btn'>Request Quote</button>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


  


export default Header