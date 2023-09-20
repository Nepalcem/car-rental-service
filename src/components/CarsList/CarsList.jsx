import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import { fetchCars } from "../../redux/cars/carsApiOperations";
import { getCars, getIsLoading } from "../../redux/selectors";

import CarListItem from "../CarsListItem/CarListItem";
import LoadMoreBtn from "../LoadMoreButton/LoadMoreButton";
import { CarsListUL } from "./CarsList.styled";
import { ProgressBarStyled, ProgressBarDiv } from "./CarsList.styled";

export default function CarsList() {
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [visibleCars, setVisibleCars] = useState(8);

  const dispatch = useDispatch();
  const cars = useSelector(getCars);
  const loading = useSelector(getIsLoading);

  useEffect(() => {
    if (cars.length > 0) {
      return
    }
    dispatch(fetchCars());
    setShowLoadMore(true);
  }, [dispatch, cars.length]);


  const loadMore = () => {
    setVisibleCars((prev) => prev + 8);
    if (visibleCars + 8 >= cars.length) {
      setShowLoadMore(false)
      toast.info(`You've reached the end of the collection!`);
    }
  };

  return (
    <>
      {cars.length > 0 && (
        <CarsListUL>
          {cars.slice(0,visibleCars).map(({ id }) => {
            return <CarListItem key={id} id={id} />;
          })}
        </CarsListUL>
      )}
      {loading && (
        <ProgressBarDiv>
          <ProgressBarStyled ariaLabel="progress-bar-loading" />
        </ProgressBarDiv>
      )}
      {showLoadMore && <LoadMoreBtn onClick={loadMore} />}
    </>
  );
}
