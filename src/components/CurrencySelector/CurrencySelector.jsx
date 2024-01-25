import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { FlagIcon } from "react-flag-kit";
import {
  StyledFormControl,
  StyledFormSelect,
  StyledFormMenuItem,
  CurrencyTitle,
} from "./CurrencySelector.styled";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrency } from "../../redux/currency/currencySlice";
import { currencies } from "../../utils/currencyCalculator";
import { getCurrency } from "../../redux/selectors";

export default function CurrencySelector() {
  const dispatch = useDispatch();
  const storedCurrency = useSelector(getCurrency);

  const [selectedCurrency, setSelectedCurrency] = useState(
    storedCurrency
  );

  useEffect(() => {
    setSelectedCurrency(storedCurrency);
  }, [storedCurrency]);

  const handleCurrencyChange = (event) => {
    const newCurrency = event.target.value;
    setSelectedCurrency(newCurrency);
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
