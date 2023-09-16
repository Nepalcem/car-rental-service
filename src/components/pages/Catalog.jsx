import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchCars } from "../../redux/cars/carsApiOperations";
import { getIsLoading, getError } from "../../redux/selectors";

import FilterBlock from "../FilterBlock/FilterBlock";
import CarsList from "../CarsList/CarsList";

export default function Catalog() {
  const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  // const errorMessage = useSelector(getError);

  useEffect(() => {
    dispatch(fetchCars({ page: 1 }));
  }, [dispatch]);

  return (
    <>
      <div>Catalog</div>
      <FilterBlock />
      <CarsList />
    </>
  );
}
