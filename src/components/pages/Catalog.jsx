import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchCars } from "../../api-functions/api";
import { getIsLoading, getError, getCars } from "../../redux/selectors";

export default function Catalog() {
  const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  // const errorMessage = useSelector(getError);
  const cars = useSelector(getCars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  console.log(cars);

  return <div>Catalog</div>;
}
