import React, { useState } from "react";
import { getCarById, getFavoriteCarById, getFavoriteCars } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { addFavoriteCar, removeFavoriteCar } from "../../redux/favorites/favoriteSlice";

import { HeartIconWrapper } from "./FavoriteHeart.styled";
import FavoriteHeartIcon from "./FavoriteHeartIcon";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

export default function FavoriteHeart({ id }) {

const favoriteCars = useSelector(getFavoriteCars);

//return true*false if the car with such id was added to favorites
  const [addedToLocale, setAddedToLocale] = useState(() => {
    return favoriteCars.some(car => car.id === id);
  });

  //get different car Selector to take store values depending on the current page
  const location = useLocation();
  const carSelector = location.pathname.includes('catalog') ? getCarById : getFavoriteCarById;
  const car = useSelector((state) => carSelector(state, id));

  const dispatch = useDispatch();


  const handleToggleFavorite = () => {

    if (addedToLocale) {
      dispatch(removeFavoriteCar(car.id));
      setAddedToLocale(false);
      toast.warning('Car was removed from your Favorites');
    } else {
      dispatch(addFavoriteCar(car));
      setAddedToLocale(true);
      toast.success('Car was added to your Favorites');
    }
  };
  
  return (
    <HeartIconWrapper onClick={handleToggleFavorite} $addedToLocale={addedToLocale} >
      <FavoriteHeartIcon />
    </HeartIconWrapper>
  );
}
