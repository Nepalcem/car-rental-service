import styled from "styled-components";
import {mainOwnerFont} from "../../globalVariables/globalFonts";

export const HeaderNavWrapper = styled.div`
margin: 15px 0;
width: 100%;
display: flex;
align-items: center;
& nav {
    flex-grow: 1;
    text-align: center;
    display: flex;
    justify-content: center;
    gap:20px;
    font-size:18px;
    line-height: 1.2;
    font-family: ${mainOwnerFont}
}
`;