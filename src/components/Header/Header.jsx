import React from "react";
import { NavLink } from "react-router-dom";
import { HeaderTag } from "./Header.styled";

export default function Header() {
  return (
    <HeaderTag>
      <p className="logo">Car Catalog</p>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </nav>
    </HeaderTag>
  );
}
