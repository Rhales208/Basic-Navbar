import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink
            to="/about"
            activestyle="true
"
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            activestyle="true
"
          >
            Services
          </NavLink>
          <NavLink
            to="/contact-us"
            activestyle="true
"
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/sign-up"
            activestyle="true
"
          >
            Sign Up
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign in</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
