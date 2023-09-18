import React from "react";
import { CarsListUL } from "../CarsList/CarsList.styled";
import FavoriteListItem from "../FavoritesListItem/FavoriteListItem";

export default function FavoritesList() {
 
  const favoriteCars = JSON.parse(localStorage.getItem('favoriteCars')) || [];

  return (
    <>
      {favoriteCars.length > 0 ? (
        <CarsListUL>
          {favoriteCars.map((car) => {
            return <FavoriteListItem key={car.id} car={car} />;
          })}
        </CarsListUL>
      ) : (
        <div>No items were added to favorites</div>
      )}
    </>
  );
}
