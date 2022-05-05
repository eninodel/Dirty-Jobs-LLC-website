import React from "react";
import styled from "styled-components/macro";

const ServicesContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const LargerHeading = styled.div`
  font-size: 80px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  max-width: 1200px;
`;

const ServicesAlignmentContainer = styled.div`
  max-width: 1200px;
  height: 100%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
`;

const ServicesList = styled.ul`
  list-style-type: "- ";
`;
const ServicesListItem = styled.li`
  font-size: 40px;
`;

export const ServicesProvided = () => {
  return (
    <ServicesContainer>
      <LargerHeading>Services We Provide</LargerHeading>
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
      <LargerHeading>
        If you don&apos;t see a service here that you&apos;d like, contact us and request
        it!
      </LargerHeading>
    </ServicesContainer>
  );
};
