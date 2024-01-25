// import { createSelector } from '@reduxjs/toolkit';

export const getCars = state => state.cars.items;
export const getCarById = (state, carId) => {
    return state.cars.items.find(car => car.id === carId);
  };
export const getIsLoading = state => state.cars.isLoading;
export const getError = state => state.cars.error;
export const getFavoriteCars = state => state.favoriteCars;
export const getFavoriteCarById = (state, carId) => {
  return state.favoriteCars.find(car => car.id === carId);
};
export const getFilteredCars = state => state.cars.filteredItems;
export const getCurrency = state => state.currency;
// export const getFilter = state => state.filter;
// export const getIsAddContactPending = state => state.contacts.isAddContactPending;

// export const getVisibleContacts = createSelector(
//   [getContacts, getFilter],
//   (contacts, filterValue) => {
//     const lowerCaseFilterValue = filterValue.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(lowerCaseFilterValue)
//     );
//   }
// );