import React from "react";
import styled from "styled-components/macro";
import { Nav } from "../Components/Nav";
import { Hero } from "../Components/Hero";
import { ServicesProvided } from "../Components/ServicesProvided";

const HomeContainer = styled.div`
  width: 100%;
`;

export const PageHomeBase = () => {
  return (
    <HomeContainer>
      <Nav />
      <Hero />
      <ServicesProvided />
    </HomeContainer>
  );
};
