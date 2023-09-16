import React from "react";
import { useSelector } from "react-redux";
import { getCarById } from "../../redux/selectors";
import { addresSplitter } from "../../utils/addressSplitter";

import { CarThumbnail } from "./CarListItem.styled";

export default function CarListItem({ id }) {
  const {
    year,
    brand,
    model,
    type,
    img,
    rentalPrice,
    rentalCompany,
    address,
    mileage,
  } = useSelector((state) => getCarById(state, id));

  return (
    <li>
      <CarThumbnail>
        <img src={img} alt={`${brand} ${model}`} />
      </CarThumbnail>
      <div className="title-block">
        <div className="title-year">
          <h2>
            {brand} <span className="blue">{model}</span>, {year}
          </h2>
        </div>
        <div className="price">
          <p>{rentalPrice}</p>
        </div>
      </div>
      <div className="short-info">
        <p className="info-element">{addresSplitter(address)}</p>
        <p className="info-element">{rentalCompany}</p>
        <p className="info-element">{type}</p>
        <p className="info-element">{mileage}km</p>
      </div>
      <button className="more">Learn More</button>
    </li>
  );
}
