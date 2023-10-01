import React, { useState } from "react";
import {   Box } from "@mui/material";
import { FlagIcon } from "react-flag-kit";
import {
  StyledFormControl,
  StyledFormSelect,
  StyledFormMenuItem,
} from "./CurrencySelector.styled";

export default function CurrencySelector() {
  const currencies = [
    { code: "USD", symbol: "$", flag: "US" },
    { code: "EUR", symbol: "€", flag: "EU" },
    { code: "UAH", symbol: "₴", flag: "UA" },
    // Add more currencies as needed
  ];
  
    const [selectedCurrency, setSelectedCurrency] = useState(
      currencies[0].code
    );

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
    console.log("Current Currency:", event.target.value);
  };
    

  return (
    <>
      <p>Currency</p>
      <Box>
        <StyledFormControl variant="filled" hiddenLabel={true}>
          <StyledFormSelect
            // label="Currency"
            value={selectedCurrency}
            onChange={handleCurrencyChange}
          >
            {currencies.map((currency) => (
              <StyledFormMenuItem key={currency.code} value={currency.code}>
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
