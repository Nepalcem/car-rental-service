import React from "react";
import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCarById, getFavoriteCarById } from "../../redux/selectors";
import { modelNameTruncate } from "../../utils/modelNameTruncate";
import { rentalConditionSplitter } from "../../utils/rentalConditionSplitter";
import { convertMileage } from "../../utils/convertMileageForUi";
import {
  CarPopupTitle,
  ImageContainer,
  ShortPopupInfo,
  PopupDescription,
  PopupOptions,
} from "./CarModal.styled";

export default function CarModal({ open, handleClose, id }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 541,
    bgcolor: "background.paper",
    borderRadius: 6,
    boxShadow: 24,
    p: 5,
  };

  const location = useLocation();
  const carSelector = location.pathname.includes("catalog")
    ? getCarById
    : getFavoriteCarById;
  const car = useSelector((state) => carSelector(state, id));

  const {
    img,
    photoLink,
    year,
    brand,
    model,
    type,
    description,
    fuelConsumption,
    engineSize,
    options,
    features,
    rentalPrice,
    address,
    rentalConditions,
    mileage,
  } = car;

  const optionsArray = [...options, ...features];
  const conditionsArray = [
    ...rentalConditionSplitter(rentalConditions),
    `Mileage: ${convertMileage(mileage)}`,
    `Price: ${rentalPrice}$`,
  ];

  return (
    <Modal open={open} onClose={handleClose} closeAfterTransition>
      <Box sx={style}>
        <ImageContainer>
          <img src={img || photoLink} alt={`${brand} ${model}`} />
        </ImageContainer>
        <CarPopupTitle>
          {brand} <span className="blue">{modelNameTruncate(model)}</span>,{" "}
          {year}
        </CarPopupTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <ShortPopupInfo>
          {[
            ...address.split(", ").slice(1),
            `ID: ${id}`,
            `Year: ${year}`,
            `Type: ${type}`,
            `Fuel Consumption: ${fuelConsumption}`,
            `Engine Size: ${engineSize}`,
          ].map((el) => {
            return (
              <li className="info-element" key={el}>
                {el}
              </li>
            );
          })}
        </ShortPopupInfo>
        <PopupDescription>
          {description}
        </PopupDescription>
        <PopupOptions>
          <h3>Accessories and functionalities:</h3>
          <ShortPopupInfo>
          {optionsArray.length > 0 && (
            <ul className="options">
              {optionsArray.map((option) => {
                return <li key={option}>{option}</li>;
              })}
            </ul>
          )}
          </ShortPopupInfo>
        </PopupOptions>
        <div className="rental-conditions">
          <h3>Rental conditions:</h3>
          {conditionsArray.length > 0 && (
            <ul className="conditions">
              {conditionsArray.map((option) => {
                return <li key={option}>{option}</li>;
              })}
            </ul>
          )}
        </div>
        <button>
          <a href="tel:+380730000000">Rent a Car</a>
        </button>
      </Box>
    </Modal>
  );
}
