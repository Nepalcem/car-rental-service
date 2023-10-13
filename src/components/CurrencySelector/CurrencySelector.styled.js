import { FormControl, Select, MenuItem } from "@mui/material";
import styled from "styled-components";

export const StyledFormControl = styled(FormControl)`
  .MuiInputBase-root {
    border-radius: 14px;
    &::before {
      content: none;
    }
  }
`;

export const StyledFormSelect = styled(Select)`
  .MuiInputBase-input {
    font-size: 16px;
    line-height: 1.2;
    font-family: "DM Sans", Arial, sans-serif;
    color: #212126;
    padding: 10px 32px 10px 14px;
    &::before {
      content: none;
    }
  }
  .MuiSelect-select {
    display: flex;
    gap: 4px;
    align-items: center;
  }


`;
export const CurrencyTitle = styled.p`
  margin-right: 15px;
`;
export const StyledFormMenuItem = styled(MenuItem)`
  background-color: #f0f0f0;
  color: #333;
`;

// .MuiSelect-filled.MuiFilledInput-input
