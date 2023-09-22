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
& h3 {
    font-weight: 500;
    font-size: 14px;
    line-height: calc(20 / 14);
    margin-bottom: 8px;
  }
  & ul {
    display: flex;
  }
`;

export const ConditionElement = styled.li`
 background-color: ${ConditionGrey};
`;