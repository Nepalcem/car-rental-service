import React, { useState } from "react";
import { getCarById, getFavoriteCars } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { addFavoriteCar, removeFavoriteCar } from "../../redux/favorites/favoriteSlice";

import { HeartIconWrapper } from "./FavoriteHeart.styled";
import FavoriteHeartIcon from "./FavoriteHeartIcon";
import { toast } from "react-toastify";

export default function FavoriteHeart({ id }) {

const favoriteCars = useSelector(getFavoriteCars);


  const [addedToLocale, setAddedToLocale] = useState(() => {
    return favoriteCars.some(car => car.id === id);
  });

  const car = useSelector((state) => getCarById(state, id));
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
  
  // const addCarToLocale = (car) => {
  //   const favoriteCars = JSON.parse(localStorage.getItem("favoriteCars")) || [];

  //   if (addedToLocale) {
  //     const updatedFavorites = favoriteCars.filter(el => el.id !== car.id);
  //     localStorage.setItem("favoriteCars", JSON.stringify(updatedFavorites));
  //     setAddedToLocale(false);
  //     toast.warning('Car was removed from your Favorites');
  //     return
  //   }
    

  //   favoriteCars.push(car);
  //   localStorage.setItem("favoriteCars", JSON.stringify(favoriteCars));
  //   setAddedToLocale(true);
  //   toast.success('Car was added to your Favorites');
  // };

  return (
    <HeartIconWrapper onClick={handleToggleFavorite} $addedToLocale={addedToLocale} >
      <FavoriteHeartIcon />
    </HeartIconWrapper>
  );
}
