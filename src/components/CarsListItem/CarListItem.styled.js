import styled from "styled-components";

export const CarThumbnail = styled.div`
  width: 274px;
  height: 268px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CarItemTitle = styled.h2`
  font-family: Manrope;
  font-weight: 500;
  font-size: 16px;
  line-height: calc(24 / 16);
`;

export const TitleBlock = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;