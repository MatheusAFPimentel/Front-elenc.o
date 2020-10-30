import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './navBar.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
  } from 'reactstrap';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    
    return (
        <div>
        <Navbar className="NavBar" light expand="md">
        <img src="../../../public/logo.svg"></img>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem  >
              <a className="NavItemPerfil" href="/components/">Perfil</a>
            </NavItem>
            <NavItem >
              <a className="NavItemSobre" href="/sobre">Sobre</a>
            </NavItem>
            <NavItem>
              <a className="NavItemReservas" href="/reservas">Reservas</a>
            </NavItem>
          </Nav>
          <NavbarText></NavbarText>
        </Collapse>
      </Navbar>
      </div>
    )
}

export default NavBar