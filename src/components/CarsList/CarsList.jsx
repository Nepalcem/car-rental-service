import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { fetchCars } from "../../redux/cars/carsApiOperations";
import { getCars, getFilteredCars, getIsLoading } from "../../redux/selectors";

import CarListItem from "../CarsListItem/CarListItem";
import LoadMoreBtn from "../LoadMoreButton/LoadMoreButton";
import { CarsListUL } from "./CarsList.styled";
import { ProgressBarStyled, ProgressBarDiv } from "./CarsList.styled";

export default function CarsList() {
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [visibleCars, setVisibleCars] = useState(8);

  const dispatch = useDispatch();
  const cars = useSelector(getCars);
  const filteredCars = useSelector(getFilteredCars);
  const loading = useSelector(getIsLoading);

  useEffect(() => {
    if (cars.length > 0) {
      return;
    }
    dispatch(fetchCars()).then(() => {
      setShowLoadMore(true);
    });
  }, [dispatch, cars.length]);

  useEffect(() => {
    if (filteredCars.length === 0 && cars.length > 8) {
      setShowLoadMore(true);
    } else if (filteredCars.length <= 8) {
      setShowLoadMore(false);
    } else {
      setShowLoadMore(true);
    }
  }, [cars.length, filteredCars.length]);

  const loadMore = () => {

    

    setVisibleCars((prev) => prev + 8);
    if (filteredCars.length === 0 && visibleCars + 8 >= cars.length) {
      setShowLoadMore(false);
      toast.info(`You've reached the end of the collection!`);
    } else if (filteredCars.length > 8 && visibleCars + 8 >= filteredCars.length) {
      setShowLoadMore(false);
      toast.info(`You've reached the end of the collection!`);
    }

  };


  return (
    <>
      <CarsListUL>
        {(filteredCars.length > 0 ? filteredCars : cars)
          .slice(0, visibleCars)
          .map(({ id }) => (
            <CarListItem key={id} id={id} />
          ))}
      </CarsListUL>
      {loading && (
        <ProgressBarDiv>
          <ProgressBarStyled ariaLabel="progress-bar-loading" />
        </ProgressBarDiv>
      )}
      {showLoadMore && <LoadMoreBtn onClick={loadMore} />}
    </>
  );
}
