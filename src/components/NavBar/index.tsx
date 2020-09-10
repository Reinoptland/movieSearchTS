import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <NavLink
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
        to="/"
        exact
      >
        Home
      </NavLink>
      <NavLink
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
        to="/discover"
      >
        Discover
      </NavLink>
    </nav>
  );
}
