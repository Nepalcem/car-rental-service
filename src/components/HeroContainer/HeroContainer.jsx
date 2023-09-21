import React from "react";
import { NavLink } from "react-router-dom";
import { HeroStyled } from "./HeroContainer.styled";

export default function HeroContainer() {
  return (
    <HeroStyled>
      <h1>Rent a car cheaply</h1>
      <p>
        Book a car for hire at a low price and get the next rental with a 25%
        discount!
      </p>
        <button className="home-link">
            <NavLink to="/catalog">Rent a Car</NavLink>
        </button>
    </HeroStyled>
  );
}
