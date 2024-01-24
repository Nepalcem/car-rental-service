import React from "react";
import HeaderLogo from "./HeaderLogo";
import { HeaderNavWrapper } from "./HeaderNav.styled";
import { NavLinkStyled } from "./HeaderNav.styled";
import CurrencySelector from "../CurrencySelector/CurrencySelector";
import { useLocation } from "react-router-dom";
import showCurrency from "./currencyDisplay";
import BlankCurrencyComponent from "./BlankCurrencyComponent";

export default function HeaderNav() {
  const location = useLocation();
  const shouldShowCurrency = showCurrency(location.pathname);

  return (
    <HeaderNavWrapper>
      <HeaderLogo />
      <nav>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/catalog">Catalog</NavLinkStyled>
        <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>
      </nav>
      {shouldShowCurrency ? <CurrencySelector /> : <BlankCurrencyComponent></BlankCurrencyComponent>}
    </HeaderNavWrapper>
  );
}
