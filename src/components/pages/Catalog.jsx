import React from "react";



// import { getIsLoading, getError } from "../../redux/selectors";

import FilterBlock from "../FilterBlock/FilterBlock";
import CarsList from "../CarsList/CarsList";

export default function Catalog() {

  // const isLoading = useSelector(getIsLoading);
  // const errorMessage = useSelector(getError);

  return (
    <>
      <div>Catalog</div>
      <FilterBlock />
      <CarsList />
    </>
  );
}
