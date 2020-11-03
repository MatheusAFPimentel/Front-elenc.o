import React, { useState } from 'react';
import logo from '../../assets/images/logo_white.png';
import 'bootstrap/dist/css/bootstrap.min.css'
import './navbar.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';

function NavBar() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
    
    return (
        <div>
        <Navbar id='navbar_container' light>
        <NavbarBrand href='/'>
          <img id='logo' src={logo} alt='logo' />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Perfil</NavLink>
            </NavItem>
            <NavItem >
              <NavLink href="/sobre">Sobre</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/reservas">Reservas</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </div>
    )
}

export default NavBar;