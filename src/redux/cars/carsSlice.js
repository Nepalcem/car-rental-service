import { createSlice } from "@reduxjs/toolkit";
import {  fetchCars } from "./carsApiOperations";


const carsInitialState = {
  items: [],
  isLoading: false,
  error: null,
  filteredItems:[],
};

export const carsSlice = createSlice({
  name: "cars",
  initialState: carsInitialState,
  reducers: {
    // Add your additional action here
    setCars: (state, action) => {
      state.filteredItems = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  },
});

export const { setCars } = carsSlice.actions;
