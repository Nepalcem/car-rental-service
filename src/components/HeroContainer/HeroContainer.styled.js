import styled from "styled-components";
import HeaderBg from "../../images/home.jpg";
import { mainOwnerFont } from "../../globalVariables/globalFonts";
import { blackColor, greyHover } from "../../globalVariables/globalColors";

export const HeroStyled = styled.div`
  position: relative;
  overflow: hidden;
  /* box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset; */

  & img {
    height: auto;
    position: absolute;
    left: 0;
    z-index: -1;
  }
  /* padding: 250px 0; */
  /* background-image: url(${HeaderBg});
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  height: 100vh; */

  /* &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 87.5vh;
    background-image: url(${HeaderBg});
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
    overflow: hidden;
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  } */
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
