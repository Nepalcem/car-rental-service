import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getCarById } from "../../redux/selectors";
import { modelNameTruncate } from "../../utils/modelNameTruncate";
import FavoriteHeart from "../FavoriteHeart/FavoriteHeart";
import {
  CarThumbnail,
  CarItemTitle,
  TitleBlock,
  CartListItemWrapper,
  ShortInfo,
  CarLearnMore,
} from "./CarListItem.styled";
import CarModal from "../CarModal/CarModal";

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
    photoLink,
    options,
  } = useSelector((state) => getCarById(state, id));

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
          <p>${rentalPrice}</p>
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
