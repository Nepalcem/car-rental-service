import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { carsSlice } from './cars/carsSlice';
// import { filterSlice } from './slices/filterSlice';




const rootReducer = combineReducers({
  cars: carsSlice.reducer,
//   filter: filterSlice.reducer,
});



export const store = configureStore({
  reducer: rootReducer,
});