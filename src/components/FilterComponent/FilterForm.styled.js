import styled from "styled-components";
import { formGrey, formInputGrey } from "../../globalVariables/globalColors";

export const StyledForm = styled.form`
  display: flex;
  margin: 20px 0;
  justify-content: center;
  & label {
    font-size: 14px;
    line-height: calc(18 / 14);
    font-weight: 500;
    color: ${formGrey};
    display: block;
  }
  & select {
    display: block;
    background-color: ${formInputGrey};
    border: none;
    outline: none;
    border-radius: 14px;
    padding: 14px 18px;
    font-size: 18px;
    font-weight: 500;
    line-height: calc(20 / 18);
    
  }
  & select#brand {
    width: 224px;
  }
`;
