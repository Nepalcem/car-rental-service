import React from "react";
import HeaderBar from "../HeaderBar/HeaderBar";
import { HeaderTag } from "./Header.styled";
import HeaderNav from "../HeaderNav/HeaderNav";

export default function Header() {
  return (
    <HeaderTag>
      <HeaderBar/>
      <HeaderNav/>
    </HeaderTag>
  );
}
