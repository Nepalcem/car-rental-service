import React, { useState } from "react";
import { getCarById } from "../../redux/selectors";
import { useSelector } from "react-redux";

import { HeartIconWrapper } from "./FavoriteHeart.styled";
import FavoriteHeartIcon from "./FavoriteHeartIcon";
import { toast } from "react-toastify";

export default function FavoriteHeart({ id }) {
  const [addedToLocale, setAddedToLocale] = useState(
    () => {
      const storedValue = localStorage.getItem(`addedToLocale_${id}`);
      return storedValue ? JSON.parse(storedValue) : false;
    }
  );
  const car = useSelector((state) => getCarById(state, id));

  const addCarToLocale = (car) => {
    const favoriteCars = JSON.parse(localStorage.getItem("favoriteCars")) || [];

    if (addedToLocale) {
      localStorage.removeItem(`addedToLocale_${id}`);
      const updatedFavorites = favoriteCars.filter(el => el.id !== car.id);
      localStorage.setItem("favoriteCars", JSON.stringify(updatedFavorites));
      setAddedToLocale(false);
      toast.warning('Car was removed from your Favorites');
      return
    }
    

    favoriteCars.push(car);
    localStorage.setItem("favoriteCars", JSON.stringify(favoriteCars));
    setAddedToLocale(true);
    localStorage.setItem(`addedToLocale_${id}`, JSON.stringify(true));
    toast.success('Car was added to your Favorites');
  };

  return (
    <HeartIconWrapper onClick={() => {addCarToLocale(car)}} $addedToLocale={addedToLocale} >
      <FavoriteHeartIcon />
    </HeartIconWrapper>
  );
}
