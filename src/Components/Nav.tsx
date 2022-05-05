import React from "react";
import styled from "styled-components/macro";
import Logo from "../Assets/logo.png";

const NavContainer = styled.div`
  width: 100%;
  height: 100px;
`;
const CenterAlignmentContainer = styled.div`
  max-width: 1700px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
`;
const MenuContainer = styled.div`
  width: 500px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const MenuLink = styled.a`
  color: black;
  text-decoration: none;
  font-size: 27px;
`;

export const Nav = () => {
  return (
    <NavContainer>
      <CenterAlignmentContainer>
        <img src={Logo} width="auto" height="100px" />
        <MenuContainer>
          <MenuLink href="">Services</MenuLink>
          <MenuLink href="">Pricing</MenuLink>
          <MenuLink href="">Contact</MenuLink>
        </MenuContainer>
      </CenterAlignmentContainer>
    </NavContainer>
  );
};
