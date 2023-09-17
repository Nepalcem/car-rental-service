import React from "react";
import { LoadMoreBtnStyled } from "./LoadMoreButton.styled";

export default function LoadMoreBtn({ onClick }) {
  return <LoadMoreBtnStyled onClick={onClick}>Load More</LoadMoreBtnStyled>;
}
