import React, { useState } from "react";
import { modelNameTruncate } from "../../utils/modelNameTruncate";

import FavoriteHeart from "../FavoriteHeart/FavoriteHeart";
import {
  CarThumbnail,
  CarItemTitle,
  TitleBlock,
  CartListItemWrapper,
  ShortInfo,
  CarLearnMore,
} from "../CarsListItem/CarListItem.styled";
import CarModal from "../CarModal/CarModal";
import { useSelector } from "react-redux";
import { getCurrency } from "../../redux/selectors";
import { calculateCurrency } from "../../utils/currencyCalculator";

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
    options,
  } = car;
  const currency = useSelector(getCurrency);
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
          <p>${calculateCurrency(rentalPrice, currency)}</p>
        </div>
      </TitleBlock>
      <ShortInfo>
        {[
          ...address.split(", ").slice(1),
          rentalCompany,
          brand,
          type,
          id,
          modelNameTruncate(options[0]),
        ].map((el) => {
          return (
            <li className="info-element" key={el}>
              {el}
            </li>
          );
        })}
      </ShortInfo>
      <CarLearnMore onClick={handleOpenModal}>Learn More</CarLearnMore>
      <CarModal open={openModal} handleClose={handleCloseModal} id={id} />
    </CartListItemWrapper>
  );
}
