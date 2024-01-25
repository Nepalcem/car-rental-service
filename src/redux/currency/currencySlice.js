import { createSlice } from "@reduxjs/toolkit";

export const currencySlice = createSlice({
  name: "currency",
  initialState: JSON.parse(localStorage.getItem("currency")) || "USD",
  reducers: {
    changeCurrency: (state, action) => {
      const currentCurrency = action.payload;
      return currentCurrency;
    },
  },
});

export const { changeCurrency } = currencySlice.actions;
export default currencySlice;
