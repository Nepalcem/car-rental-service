import React from "react";
import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCarById, getCurrency, getFavoriteCarById } from "../../redux/selectors";
import { modelNameTruncate } from "../../utils/modelNameTruncate";
import { rentalConditionSplitter } from "../../utils/rentalConditionSplitter";
import { convertMileage } from "../../utils/convertMileageForUi";
import {
  CarPopupTitle,
  ImageContainer,
  ShortPopupInfo,
  PopupDescription,
  PopupOptions,
  RentalConditions,
  ConditionElement,
} from "./CarModal.styled";
import { CarLearnMore } from "../CarsListItem/CarListItem.styled";
import { callPhoneNumber } from "../../utils/callPhoneNumber";
import { calculateCurrency } from "../../utils/currencyCalculator";

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
  const currency = useSelector(getCurrency);

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
    `Price: ${calculateCurrency(rentalPrice, currency)}`,
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
            color: '#121417',
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
        <PopupDescription>{description}</PopupDescription>
        <PopupOptions>
          <h3>Accessories and functionalities:</h3>
          {optionsArray.length > 0 && (
            <ShortPopupInfo>
              {optionsArray.map((option) => {
                return <li key={option}>{option}</li>;
              })}
            </ShortPopupInfo>
          )}
        </PopupOptions>
        <RentalConditions>
          <h3>Rental conditions:</h3>
          {conditionsArray.length > 0 && (
            <ul className="conditions">
              {conditionsArray.map((option) =>
                option.includes(":") ? (
                  <ConditionElement key={option}>
                    {option.split(":")[0]} :{" "}
                    <span className="blue">{option.split(":")[1]}</span>
                  </ConditionElement>
                ) : (
                  <ConditionElement key={option}>{option}</ConditionElement>
                )
              )}
            </ul>
          )}
        </RentalConditions>
        <CarLearnMore onClick={callPhoneNumber}>
          Rent a Car
        </CarLearnMore>
      </Box>
    </Modal>
  );
}
