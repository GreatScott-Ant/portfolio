import React from "react";
import { Link } from "react-router-dom";
import Union from '../Union.svg';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Menu2 = (props) => {
  return (
    <div className="menustyle">
      <Navbar>
        <NavbarBrand tag={Link} to="/" className="menu-text">
          <img
            alt="logo"
            src={Union}
            width={"180"}
            height={"80"}
          />
        </NavbarBrand>
        <Nav pills>
          <NavItem>
            <NavLink tag={Link} to="/bio" className="menu-text">
              Bio
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/skill-stack" className="menu-text">
              Skill Stack  
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/projects" className="menu-text">
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/contact" className="menu-text">
              Contact
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Menu2;

