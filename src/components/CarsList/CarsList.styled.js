import styled from "styled-components";
import { ProgressBar } from "react-loader-spinner";

export const CarsListUL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 29px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const ProgressBarStyled = styled(ProgressBar)`
  height: 80px;
  width: 80px;

  border-color: #f4442e;
  .progress-bar-wrapper {
    background-color: #3f51b5;
    border-color: #f4442e;
  }
`;

export const ProgressBarDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;
