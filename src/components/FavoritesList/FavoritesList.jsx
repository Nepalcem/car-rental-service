import React from "react";
import { CarsListUL } from "../CarsList/CarsList.styled";
import FavoriteListItem from "../FavoritesListItem/FavoriteListItem";
import { useSelector } from "react-redux";
import { getFavoriteCars } from "../../redux/selectors";
import { FavoritesWrapper } from "./FavoritesList.styled";

export default function FavoritesList() {

  const favoriteCars = useSelector(getFavoriteCars);
 
  return (
    <FavoritesWrapper>
      {favoriteCars.length > 0 ? (
        <CarsListUL>
          {favoriteCars.map((car) => {
            return <FavoriteListItem key={car.id} car={car} />;
          })}
        </CarsListUL>
      ) : (
        <div>No items were added to favorites</div>
      )}
    </FavoritesWrapper>
  );
}
