import React from "react";
import { addresSplitter } from "../../utils/addressSplitter";
import { modelNameTruncate } from "../../utils/modelNameTruncate";

import FavoriteHeart from "../FavoriteHeart/FavoriteHeart";
import {
  CarThumbnail,
  CarItemTitle,
  TitleBlock,
  CartListItemWrapper,
} from "../CarsListItem/CarListItem.styled";

export default function FavoriteListItem({ car }) {
  const {
    id,
    year,
    brand,
    model,
    type,
    img,
    rentalPrice,
    rentalCompany,
    address,
    mileage,
    photoLink,
  } = car;

  return (
    <CartListItemWrapper>
      <CarThumbnail>
        <img src={img || photoLink} alt={`${brand} ${model}`} />
      </CarThumbnail>
      <FavoriteHeart id={id} />
      <TitleBlock>
        <div className="title-year">
          <CarItemTitle>
            {brand} <span className="blue">{modelNameTruncate(model)}</span>,{" "}
            {year}
          </CarItemTitle>
        </div>
        <div className="price">
          <p>{rentalPrice}</p>
        </div>
      </TitleBlock>
      <div className="short-info">
        <p className="info-element">{addresSplitter(address)}</p>
        <p className="info-element">{rentalCompany}</p>
        <p className="info-element">{type}</p>
        <p className="info-element">{mileage}km</p>
      </div>
      <button className="more">Learn More</button>
    </CartListItemWrapper>
  );
}
