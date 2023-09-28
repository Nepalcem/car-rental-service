import styled from "styled-components";
import HeaderBg from "../../images/home.jpg";
import { mainOwnerFont } from "../../globalVariables/globalFonts";
import { blackColor, greyHover } from "../../globalVariables/globalColors";

export const HeroStyled = styled.div`
  position: relative;
  overflow: hidden;

  & img {
    height: auto;
    position: absolute;
    left: 0;
    z-index: -1;
  }

  & h1 {
    font-size: 64px;
    line-height: 1;
    font-weight: 500;
    font-family: ${mainOwnerFont};
    color: ${blackColor};
  }
  & p {
    font-size: 18px;
    font-family: ${mainOwnerFont};
    line-height: 25.2px;
    color: ${blackColor};
  }
  & .home-link {
    display: block;
    max-width: 223px;
    background-color: ${blackColor};
    border: none;
    cursor: pointer;
    padding: 17px 30px;
    transition: 0.33s all ease;
    color: #fff;
    font-family: ${mainOwnerFont};
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
    text-align: center;
    &:hover {
      background-color: ${greyHover};
    }
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  gap: 50px;
  min-height: 66vh;
  margin: 200px 0px 0px 370px;
`;
