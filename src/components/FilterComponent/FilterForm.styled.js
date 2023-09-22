import styled from "styled-components";
import { buttonsBlue, buttonsBlueHover, formGrey, formInputGrey } from "../../globalVariables/globalColors";

export const StyledForm = styled.form`
  display: flex;
  margin: 30px 0 50px 0;
  justify-content: center;
  gap: 18px;
  & label {
    font-size: 14px;
    line-height: calc(18 / 14);
    font-weight: 500;
    color: ${formGrey};
    display: block;
    margin-bottom: 8px;
  }
  & select {
    display: block;
    background-color: ${formInputGrey};
    border: none;
    outline: none;
    border-radius: 14px;
    padding: 14px 50px 14px 18px;
    font-size: 18px;
    font-weight: 500;
    line-height: calc(20 / 18);
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: 90% 55%;
    background-size: 1em;
  }
  & select#brand {
    width: 224px;
  }
  & select#price {
    width: 125px;
  }
  & button {
    border-radius: 12px;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    line-height: calc(20/14);
    color: #fff;
    padding: 14px 44px;
    background-color: ${buttonsBlue};
    height: 48px;
    align-self: end;
    transition: 0.33s all ease;
  }
  & button:hover {
    background-color: ${buttonsBlueHover};
  }
`;

export const MileageInputs = styled.div`
display: flex;
position: relative;
align-items: end;
& input {
  border: none;
  outline: none;
  background-color: ${formInputGrey};
  width: 160px;
  height: 48px;
  padding: 14px 24px;
}
& input::placeholder {
  font-size: 18px;
    font-weight: 500;
    color: #121417;
}
& input#mileageFrom {
    border-right: 1px solid rgba(138, 138, 137, 0.2);
    border-top-left-radius: 14px;
    border-bottom-left-radius: 14px;
  }
  & input#mileageTo {
    border-top-right-radius: 14px;
    border-bottom-right-radius: 14px;
  }
& #mileagelabel {
  position: absolute;
  top: 0;
}
`;
