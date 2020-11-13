import React, { useState } from "react";
import logo from "../../assets/images/logo_white.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

import { NavLink } from "react-router-dom";

import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

function NavBar() {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  function handleLogout() {
    localStorage.removeItem("currentUser");
  }

  return (
    <div>
      <Navbar id="navbar_container" light>
        <NavLink
          className="nav-item"
          to={
            JSON.parse(localStorage.getItem("currentUser")).role === "producer"
              ? "/producer/profile"
              : "/actor/profile"
          }
        >
          <img id="logo" src={logo} alt="logo" />
        </NavLink>
        <NavbarToggler id="hamburger" onClick={toggleNavbar} />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink
                className="nav-item"
                to={
                  JSON.parse(localStorage.getItem("currentUser")).role ===
                  "producer"
                    ? "/producer/profile"
                    : "/actor/profile"
                }
              >
                Perfil
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-item" to="/sobre">
                Sobre
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-item" to="/reservas">
                Reservas
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-item" to="/" onClick={handleLogout}>
                Sair
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <div className="navfake">
          <NavItem>
            <NavLink
              className="nav-item"
              to={
                JSON.parse(localStorage.getItem("currentUser")).role ===
                "producer"
                  ? "/producer/profile"
                  : "/actor/profile"
              }
            >
              Perfil
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-item" to="/sobre">
              Sobre
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-item" to="/reservas">
              Reservas
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-item" to="/" onClick={handleLogout}>
              Sair
            </NavLink>
          </NavItem>
        </div>
      </Navbar>
    </div>
  );
}

export default NavBar;
