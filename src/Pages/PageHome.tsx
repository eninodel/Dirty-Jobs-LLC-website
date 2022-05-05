import React from "react";
import styled from "styled-components/macro";
import { Nav } from "../Components/Nav";

const HomeContainer = styled.div`
  width: 100%;
`;

export const PageHomeBase = () => {
  return (
    <HomeContainer>
      <Nav />
    </HomeContainer>
  );
};
