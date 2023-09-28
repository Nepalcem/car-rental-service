import React from "react";
import HeaderBg from "../../images/home.jpg";

export default function HeroBackground() {
  return (
    <div className="hero-image">
      <img src={HeaderBg} alt="rental background" />
    </div>
  );
}
