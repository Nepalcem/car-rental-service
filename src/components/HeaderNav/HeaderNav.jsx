import React from "react";
import HeaderLogo from "./HeaderLogo";
import { HeaderNavWrapper } from "./HeaderNav.styled";
import { NavLinkStyled } from "./HeaderNav.styled";
import CurrencySelector from "../CurrencySelector/CurrencySelector";

export default function HeaderNav() {
  return (
    <HeaderNavWrapper>
      <HeaderLogo />
      <nav>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/catalog">Catalog</NavLinkStyled>
        <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>
      </nav>
      <CurrencySelector/>
    </HeaderNavWrapper>
  );
}
