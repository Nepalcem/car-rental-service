import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import { fetchCars,fetchAdditionalCars } from "../../redux/cars/carsApiOperations";
import { getCars, getIsLoading } from "../../redux/selectors";

import CarListItem from "../CarsListItem/CarListItem";
import LoadMoreBtn from "../LoadMoreButton/LoadMoreButton";
import { CarsListUL } from "./CarsList.styled";
import { ProgressBarStyled, ProgressBarDiv } from "./CarsList.styled";

export default function CarsList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(false);

  const dispatch = useDispatch();
  const cars = useSelector(getCars);
  const loading = useSelector(getIsLoading);

  useEffect(() => {
    if (cars.length > 0) {
      return
    }
    dispatch(fetchCars({ page: currentPage })).then((response) => {
      if (response.payload.length === 8) {
        setShowLoadMore(true);
      }
    });
  }, [dispatch, currentPage,cars.length]);

  const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    dispatch(fetchAdditionalCars({ page: currentPage + 1 })).then((response) => {
      if (response.payload.length < 8) {
        setShowLoadMore(false);
        toast.info(`You've reached the end of the collection!`);
      }
    });
  };

  return (
    <>
      {cars.length > 0 && (
        <CarsListUL>
          {cars.map(({ id }) => {
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
      {/* <ToastContainer autoClose={4000} theme="colored" /> */}
    </>
  );
}
