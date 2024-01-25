import React, { useState } from "react";
import { Box } from "@mui/material";
import { FlagIcon } from "react-flag-kit";
import {
  StyledFormControl,
  StyledFormSelect,
  StyledFormMenuItem,
  CurrencyTitle,
} from "./CurrencySelector.styled";
import { useDispatch } from "react-redux";
import { changeCurrency } from "../../redux/currency/currencySlice";

export default function CurrencySelector() {
  const currencies = [
    { code: "USD", symbol: "$", flag: "US" },
    { code: "EUR", symbol: "€", flag: "EU" },
    { code: "UAH", symbol: "₴", flag: "UA" },
    // Add more currencies as needed
  ];

  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0].code);

  const dispatch = useDispatch();

  const handleCurrencyChange = (event) => {
    const newCurrency = event.target.value;
    setSelectedCurrency(newCurrency)
    dispatch(changeCurrency(newCurrency));
  };

  return (
    <>
      <CurrencyTitle>Currency</CurrencyTitle>
      <Box>
        <StyledFormControl variant="filled" hiddenLabel={true}>
          <StyledFormSelect
            // label="Currency"
            value={selectedCurrency}
            onChange={handleCurrencyChange}
          >
            {currencies.map((currency) => (
              <StyledFormMenuItem
                key={currency.code}
                value={currency.code}
                style={{ gap: "5px" }}
              >
                {currency.symbol}
                <FlagIcon code={currency.flag} size={14} />
              </StyledFormMenuItem>
            ))}
          </StyledFormSelect>
        </StyledFormControl>
      </Box>
    </>
  );
}
