import React from "react";
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/index" activeClassName="active">
            Index
          </NavLink>
        </li>
        <li>
          <NavLink to="/list" activeClassName="active">
            List
          </NavLink>
        </li>
        <li>
          <NavLink to="/queryDemo" activeClassName="active">
            QueryDemo
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
