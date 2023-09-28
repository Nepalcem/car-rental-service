import React from "react";
import { NavLink } from "react-router-dom";
import HeroBackground from "./HeroBackground";
import { HeroStyled, HeroContent } from "./HeroContainer.styled";

export default function HeroContainer() {
  return (
    <HeroStyled>
      <HeroBackground/>
      <HeroContent>
        <h1>Rent a car cheaply</h1>
        <p>
          Book a car for hire at a low price and get the next rental with a 25%
          discount!
          You don't need to be a UI/UX designer to create cool layouts in
          Frontend!
        </p>
        <NavLink className="home-link" to="/catalog">
          Rent a Car
        </NavLink>
      </HeroContent>
    </HeroStyled>
  );
}
