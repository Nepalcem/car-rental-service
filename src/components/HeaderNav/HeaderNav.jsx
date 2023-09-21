import React from "react";
import { NavLink } from "react-router-dom";
import HeaderLogo from "./HeaderLogo";
import { HeaderNavWrapper } from "./HeaderNav.styled";

export default function HeaderNav() {
  return (
    <HeaderNavWrapper>
      <HeaderLogo />
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </nav>
    </HeaderNavWrapper>
  );
}
