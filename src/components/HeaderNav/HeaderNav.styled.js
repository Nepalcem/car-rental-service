import styled from "styled-components";
import { mainOwnerFont } from "../../globalVariables/globalFonts";
import { NavLink } from "react-router-dom";
import { blackColor, greyHover } from "../../globalVariables/globalColors";

export const HeaderNavWrapper = styled.div`
  margin: 15px 0px 0px 0px;
  width: 100%;
  display: flex;
  align-items: center;
  & nav {
    flex-grow: 1;
    text-align: center;
    display: flex;
    justify-content: center;
    gap: 40px;
  }

`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 18px;
  line-height: 1.2;
  font-family: ${mainOwnerFont};
  color: ${blackColor};
  position: relative;
  &:hover {
    color: ${greyHover};
  }
  &::after {
    content: '';
    width: 0%;
    height: 1px;
    position: absolute;
    left: 50%;
    bottom: 0;
    background-color: ${greyHover};
    transform: translateX(-50%);
    transition: all 0.3s ease-in-out;
    opacity: 0;
  }
  &:hover::after {
    width: 100%;
    opacity: 1;
  }
  &.active::after {
    width: 100%;
    opacity: 1;
  }
`;
