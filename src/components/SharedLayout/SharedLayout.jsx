import { Outlet } from "react-router-dom";
// import { Container, Header, Logo, Link } from './SharedLayout.styled';
import { Suspense } from "react";

import Header from "../Header/Header";
import { Container } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
