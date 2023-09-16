// import { createSelector } from '@reduxjs/toolkit';

export const getCars = state => state.cars.items;
export const getIsLoading = state => state.cars.isLoading;
export const getError = state => state.cars.error;
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