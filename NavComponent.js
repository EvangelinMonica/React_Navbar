import React from 'react'
import logo from '../logo.svg';
import { Nav, NavLink, Navbar, NavbarBrand } from 'react-bootstrap'
import { BrowserRouter as Router,
        Link,
        Routes,
        Route,
     } from 'react-router-dom'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import Home from '../Component/Home';
import About from '../Component/About';
import Contact from '../Component/Contact';

function NavComponent() {
  return (
    <div>
      <Router>
        <Navbar bg='dark' variant='dark' expand='md'>
            <NavbarBrand>
                <img src={logo} height={50} width={50}></img>
                Nurture InfoTech
            </NavbarBrand>
            <NavbarToggle></NavbarToggle>
            <NavbarCollapse>
                <Nav>
                    <NavLink as={Link} to='/'>Home</NavLink>
                    <NavLink as={Link} to='/about'>About</NavLink>
                    <NavLink as={Link} to='/contact'>Contact</NavLink>
                </Nav>
            </NavbarCollapse>
            </Navbar>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/about' element={<About></About>}></Route>
                <Route path='/contact' element={<Contact></Contact>}></Route>
            </Routes>
      </Router>
    </div>
  )
}
export default NavComponent
