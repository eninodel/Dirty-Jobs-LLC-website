import React from "react";
import styled from "styled-components/macro";

const ServicesContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const ServicesAlignmentContainer = styled.div`
  max-width: 1200px;
  height: 100%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
`;

const ServicesList = styled.ul`
  list-style-type: "- ";
`;
const ServicesListItem = styled.li`
  font-size: 50px;
`;

export const ServicesProvided = () => {
  return (
    <ServicesContainer>
      <ServicesAlignmentContainer>
        <ServicesList>
          <ServicesListItem>Pressure Washing</ServicesListItem>
          <ServicesListItem>Dog Poop Pick up</ServicesListItem>
          <ServicesListItem>Fence and Deck Cleaning</ServicesListItem>
          <ServicesListItem>Leaf Pick Up</ServicesListItem>
        </ServicesList>
        <ServicesList>
          <ServicesListItem>Junk Removal</ServicesListItem>
          <ServicesListItem>Small Engine Repairs</ServicesListItem>
          <ServicesListItem>Parking Lot Cleanups</ServicesListItem>
          <ServicesListItem>Weed Control and more!</ServicesListItem>
        </ServicesList>
      </ServicesAlignmentContainer>
    </ServicesContainer>
  );
};
