import React from "react";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCarById, getFavoriteCarById } from "../../redux/selectors";
import { modelNameTruncate } from "../../utils/modelNameTruncate";
import { addresSplitter } from "../../utils/addressSplitter";
import { rentalConditionSplitter } from "../../utils/rentalConditionSplitter";
import { convertMileage } from "../../utils/convertMileageForUi";

export default function CarModal({ open, handleClose, id }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
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
        <div className="car-full-image">
          <img src={img || photoLink} alt={`${brand} ${model}`} />
        </div>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {brand} <span className="blue">{modelNameTruncate(model)}</span>,{" "}
          {year}
        </Typography>
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
        <div className="technical-info">
          <p className="info-element">{addresSplitter(address)}</p>
          <p className="info-element">Id: {id}</p>
          <p className="info-element">Year: {year}</p>
          <p className="info-element">Type: {type}</p>
          <p className="info-element">Fuel Consumption: {fuelConsumption}</p>
          <p className="info-element">Engine Size: {engineSize}</p>
        </div>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {description}
        </Typography>
        <div className="accessories">
          <h3>Accessories and functionalities:</h3>
          {optionsArray.length > 0 && (
            <ul className="options">
              {optionsArray.map((option) => {
                return <li key={option}>{option}</li>;
              })}
            </ul>
          )}
        </div>
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
