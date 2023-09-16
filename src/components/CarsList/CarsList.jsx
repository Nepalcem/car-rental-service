import React from "react";
import { useSelector } from "react-redux";
import { getCars } from "../../redux/selectors";

import CarListItem from "../CarsListItem/CarListItem";
import { CarsListUL } from "./CarsList.styled";

export default function CarsList() {
  const cars = useSelector(getCars);

  return (
    <>
      <div>CarsList</div>
      <CarsListUL>
        {cars.map(({ id }) => {
          return <CarListItem key={id} id={id} />;
        })}
      </CarsListUL>
    </>
  );
}
