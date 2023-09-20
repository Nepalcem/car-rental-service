import React, { useState } from "react";
import { addresSplitter } from "../../utils/addressSplitter";
import { modelNameTruncate } from "../../utils/modelNameTruncate";

import FavoriteHeart from "../FavoriteHeart/FavoriteHeart";
import {
  CarThumbnail,
  CarItemTitle,
  TitleBlock,
  CartListItemWrapper,
} from "../CarsListItem/CarListItem.styled";
import CarModal from "../CarModal/CarModal";

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
    photoLink,
  } = car;

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };


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
        <p className="info-element">{id}</p>
      </div>
      <button className="more" onClick={handleOpenModal}>
        Learn More
      </button>
      <CarModal open={openModal} handleClose={handleCloseModal} id={id} />
    </CartListItemWrapper>
  );
}
