import React from "react";
import styled from "styled-components/macro";

const NavContainer = styled.div`
  width: 100%;
  height: 100px;
`;
const CenterAlignmentContainer = styled.div`
  max-width: 1200px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin-right: auto;
  margin-left: auto;
`;
const MenuContainer = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;
const MenuLink = styled.a`
  color: red;
`;

export const Nav = () => {
  return (
    <NavContainer>
      <CenterAlignmentContainer>
          <p>logo placeholder</p>
        <MenuContainer>
          <MenuLink href="">Services</MenuLink>
          <MenuLink href="">Pricing</MenuLink>
          <MenuLink href="">Contact</MenuLink>
        </MenuContainer>
      </CenterAlignmentContainer>
    </NavContainer>
  );
};
