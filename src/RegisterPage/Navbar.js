
import React from 'react'
// import {Nav,Container} from 'react-bootstrap';
import './Navbar.css';
import { Container, Form,NavDropdown, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Topbar = () => {
  return (
    
    <>
       <Navbar fixed="top" expand="lg" style={{backgroundColor:'black'}}>
       <Container style={{minHeight:'50px'}}>
       <Link to="/">
          <div className="homeheaderimg">
            <img style={{minHeight:'35px',width:'auto'}}
              src="https://media-exp1.licdn.com/dms/image/C510BAQE16x5t0uDm4Q/company-logo_200_200/0/1568468276035?e=2159024400&v=beta&t=Kno3pclqtMRNpav1Lx1hQ4YGsuWKSFHpIISiogua5wc"
              alt="SInC Logo"
            />
          </div>
        </Link>
    <Link id="NavbarBrand" to="/"><b>Student Incubation Cell </b></Link>
    <Navbar.Toggle style={{minHeight:'35px',width:'auto'}} aria-controls="responsive-navbar-nav" id="toggelButton"/>
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav style={{marginLeft:'auto'}} >
      <Link id="navLink"  style={{color:'white'}} to='/'>Home</Link>
      <NavDropdown id="navLink" title="Initiatives" id="collasible-nav-dropdown">
        <Link style={{marginBottom: '10px', color:'black', textDecoration:'none',}} to='/entrepreneurshipkickstart'>Entrepreneurship<br></br>Kickstart<br></br><br></br></Link>
        <Link style={{marginBottom: '10px', color:'black', textDecoration:'none',}} to='/iitdangelnetwork'>IITD Angel <br></br> Network <br></br><br></br></Link>
        <Link  style={{marginBottom: '10px', color:'black', textDecoration:'none',}} to='/preincubationplan'>PreIncubation <br></br> Plan<br></br></Link>
      </NavDropdown>
      <Link id="navLink" to="/startupinsight">Startup Insight</Link>
      <Link id="navLink"  to="/team">Team</Link>
      <Link id="navLink" to="/contactus" >Contact Us</Link>
      <Link id="navLink" to="/faqs">FAQs</Link>
      <Link id="navLink" style={{ color: 'yellow' }} to="/registerpage">Register</Link>
      <Link id="navLink" to="/login">Login</Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
</Navbar>
  </>
  )
}

export default Topbar;
