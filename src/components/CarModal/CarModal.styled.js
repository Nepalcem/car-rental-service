import styled from "styled-components";
import {
  buttonsBlue,
  shortInfoColor,
  ConditionGrey
} from "../../globalVariables/globalColors";

export const ImageContainer = styled.div`
  margin-bottom: 14px;
  & img {
    border-radius: 14px;
  }
`;

export const CarPopupTitle = styled.h2`
  font-family: Manrope;
  font-weight: 500;
  font-size: 18px;
  line-height: calc(24 / 16);
  & .blue {
    color: ${buttonsBlue};
  }
  margin-bottom: 8px;
`;

export const ShortPopupInfo = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  line-height: calc(18 / 12);
  color: ${shortInfoColor};
  margin-bottom: 14px;
  & > * {
    margin-bottom: 4px;
  }
  & li:not(:last-of-type):after {
    content: "";
    border-right: 1px solid rgba(18, 20, 23, 0.1);
    margin: 0 5px;
  }
`;

export const PopupDescription = styled.p`
  font-size: 14px;
  line-height: calc(20 / 14);
  margin-bottom: 24px;
`;

export const PopupOptions = styled.div`
  & h3 {
    font-weight: 500;
    font-size: 14px;
    line-height: calc(20 / 14);
    margin-bottom: 8px;
  }
`;

export const RentalConditions = styled.div`
margin-bottom: 24px;
& h3 {
    font-weight: 500;
    font-size: 14px;
    line-height: calc(20 / 14);
    margin-bottom: 8px;
  }
  & ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
  }
  & + button {
    max-width: 172px;
    padding: 12px 50px;
  }
`;

export const ConditionElement = styled.li`
 background-color: ${ConditionGrey};
 font-size: 12px;
 line-height: calc(18/12);
 padding: 7px 14px;
 border-radius: 35px;
 & .blue {
    color: ${buttonsBlue};
    font-weight: 600;
  }
`;