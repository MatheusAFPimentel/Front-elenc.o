import React, { useState } from "react";
import logo from "../../assets/images/logo_white.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { getLogin } from "../../assets/fakedata/api";

function NavBar() {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  // const handleLogout = () => {
  //   login 
  //   password
  //   localStorage.clear();
  // };

  return (
    <div>
      <Navbar id="navbar_container" light>
        <NavbarBrand href="/">
          <img id="logo" src={logo} alt="logo" />
        </NavbarBrand>
        <NavbarToggler id="hamburger" onClick={toggleNavbar} />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Perfil</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/sobre">Sobre</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/reservas">Reservas</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/home" 
              // onClick={handleLogout}
              >Logout</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <div className="navfake">
          <NavItem>
            <NavLink href="/components/">Perfil</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/sobre">Sobre</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/reservas">Reservas</NavLink>
          </NavItem>
        </div>
      </Navbar>
    </div>
  );
}

export default NavBar;
