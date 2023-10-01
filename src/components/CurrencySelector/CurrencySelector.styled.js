import { FormControl, Select, MenuItem, Box } from "@mui/material";
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

export const StyledFormMenuItem = styled(MenuItem)``;

// .MuiSelect-filled.MuiFilledInput-input
