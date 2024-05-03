// NavBar.js
import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => (
  <nav>
    <NavLink to="/" activeClassName="active" exact>
      Home
    </NavLink>
    <NavLink to="/about" activeClassName="active">
      About
    </NavLink>
    <NavLink to="/login" activeClassName="active">
      Login
    </NavLink>
  </nav>
);

export default NavBar;
