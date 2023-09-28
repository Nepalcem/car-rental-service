import styled from "styled-components";

export const HeaderTag = styled.header`
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 111%;
    left: -31.8%;
    width: 100vw;
    height: 1px;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
      rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
      rgba(0, 0, 0, 0.07) 0px 16px 16px;
  }
`;
