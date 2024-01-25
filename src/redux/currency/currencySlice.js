import { createSlice } from "@reduxjs/toolkit";

const persistedCurrency = localStorage.getItem("currency");

export const currencySlice = createSlice({
  name: "currency",
  initialState: persistedCurrency || "USD",
  reducers: {
    changeCurrency: (state, action) => {
      const currentCurrency = action.payload;
      return currentCurrency;
    },
  },
});

export const { changeCurrency } = currencySlice.actions;
export default currencySlice;
