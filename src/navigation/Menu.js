import React, { useState } from "react";
import Union from '../Union.svg'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Menu = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar>
        <NavbarBrand href="/">
          <img
            alt="logo"
            src={Union}
            width={"180"}
            height={"80"}
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="./components/About">Bio</NavLink>
            </NavItem>
            <NavLink href="/components/Skills">Skill Stack</NavLink>
            <NavLink href="/components/Projects">Projects</NavLink>
            <NavLink href="/components/Contact">Contact</NavLink>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Menu;
