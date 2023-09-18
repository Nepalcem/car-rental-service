import { createSlice } from "@reduxjs/toolkit";



export const favoriteSlice = createSlice({
  name: "favoriteCars",
  initialState: [],
  reducers: {
    addFavoriteCar: (state, action) => {

        console.log(state.favoriteCars);
      const updatedFavorites = [...state.favoriteCars.favoriteCars, action.payload];

      localStorage.setItem("favoriteCars", JSON.stringify(updatedFavorites));
      state.favoriteCars = updatedFavorites;
    },
    removeFavoriteCar: (state, action) => {
      const updatedFavorites = state.favoriteCars.filter(
        (car) => car.id !== action.payload
      );
      localStorage.setItem("favoriteCars", JSON.stringify(updatedFavorites));
      state.favoriteCars = updatedFavorites;
    },
  },
});

export const { addFavoriteCar, removeFavoriteCar } = favoriteSlice.actions;

export default favoriteSlice;
