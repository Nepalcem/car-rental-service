import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchCars } from "../../redux/cars/carsApiOperations";
import { getCars } from "../../redux/selectors";

import CarListItem from "../CarsListItem/CarListItem";
import LoadMoreBtn from "../LoadMoreButton/LoadMoreButton";
import { CarsListUL } from "./CarsList.styled";


export default function CarsList() {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const cars = useSelector(getCars);

  useEffect(() => {
    dispatch(fetchCars({ page: currentPage }));
  }, [dispatch,currentPage]);


  const loadMore = async () => {
    // setLoading(true);
    // try {
    //   const apiResponse = await fetchImagesWithQuery(formInput, pageId);
    //   const { hits, totalHits } = apiResponse;

    //   if (totalHits <= pageId * 12) {
    //     setShowLoadMore(false);
    //     toast.info(`You've reached the end of the collection!`);
    //   }

    //   setImages(prev => [...prev, ...hits]);
    //   setLoading(false);
    //   setPageId(prev => prev + 1);
    // } catch (error) {
    //   toast.error(error);
    // }
  };

  return (
    <>
      <CarsListUL>
        {cars.map(({ id }) => {
          return <CarListItem key={id} id={id} />;
        })}
      </CarsListUL>
      <LoadMoreBtn onloadMore={loadMore}/>
    </>
  );
}
