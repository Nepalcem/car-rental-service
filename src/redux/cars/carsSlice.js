import { createSlice } from "@reduxjs/toolkit";
import { fetchAdditionalCars, fetchCars } from "./carsApiOperations";

const carsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const carsSlice = createSlice({
  name: "cars",
  initialState: carsInitialState,
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
      .addCase(fetchAdditionalCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAdditionalCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = [...state.items, ...action.payload];
      })
      .addCase(fetchAdditionalCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
