import styled from "styled-components";
import { buttonsBlue, shortInfoColor, buttonsBlueHover } from "../../globalVariables/globalColors";


export const CartListItemWrapper = styled.li`
  position: relative;
`;

export const CarThumbnail = styled.div`
  width: 274px;
  height: 268px;
  margin-bottom: 14px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 14px;
  }
  
`;

export const CarItemTitle = styled.h2`
  font-family: Manrope;
  font-weight: 500;
  font-size: 16px;
  line-height: calc(24 / 16);
  & .blue {
    color: ${buttonsBlue}
  }
`;

export const TitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  & .price {
    font-family: Manrope;
  font-weight: 500;
  font-size: 16px;
  line-height: calc(24 / 16);
  }
`;

export const ShortInfo = styled.ul`
display: flex;
flex-wrap: wrap;
font-size:12px;
line-height: calc(18/12);
color: ${shortInfoColor};
max-width: 274px;
margin-bottom: 24px;
& > * {
  margin-bottom: 4px;
}
& li:not(:last-of-type):after {
    content: "";
    border-right: 1px solid rgba(18, 20, 23, 0.1);
    margin:0 5px;
}
`;

export const CarLearnMore = styled.button`
background-color: ${buttonsBlue};
border: none;
outline: none;
color: #fff;
border-radius: 12px;
font-size: 14px;
font-weight:600;
line-height: calc(20/14);
width:100%;
cursor: pointer;
padding: 12px 99px;
transition: 0.33s all ease;
&:hover {
background-color: ${buttonsBlueHover};
}
`;