import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  name: "favoriteCars",
  initialState: JSON.parse(localStorage.getItem("favoriteCars")) || [],
  reducers: {
    addFavoriteCar: (state, action) => {
      const updatedFavorites = [...state, action.payload];
      return updatedFavorites;
    },
    removeFavoriteCar: (state, action) => {
      const updatedFavorites = state.filter((car) => car.id !== action.payload);
      return updatedFavorites;
    },
  },
});

export const { addFavoriteCar, removeFavoriteCar } = favoriteSlice.actions;
export default favoriteSlice;
