import styled from "styled-components";

export const HeartIconWrapper = styled.button`
  position: absolute;
  background: none;
  border: none;
  top: 5%;
  right: 5%;
  cursor: pointer;
  & svg {
    fill: ${({ $addedToLocale }) => $addedToLocale ? '#3470FF' : 'none'}; /* Conditional fill */
    stroke: ${({ $addedToLocale }) => $addedToLocale ? '#3470FF' : '#fff'}; /* Conditional stroke */
  }
  &:hover svg {
    fill: #3470FF;
    stroke: #3470FF;
  }
`;
