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
        <li>
          <NavLink to="/hits" activeClassName="active">
            Hits-axios
          </NavLink>
        </li>
        <li>
          <NavLink to="/recursive" activeClassName="active">
            recursive
          </NavLink>
        </li>
        <li>
          <NavLink to="/hooks" activeClassName="active">
            hooks
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
