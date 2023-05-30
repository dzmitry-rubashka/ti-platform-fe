import styled from "styled-components";
import { NavLink } from "react-router-dom";
import theme from "theme";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  font-style: ${theme.fontStyle.normal};
  font-weight: ${theme.fontWeight.normal};
  font-size: ${theme.fontSizes.normal};
  line-height: ${theme.lineHeight.normal};
  background-color: ${theme.colors.scienceBlue};
  color: ${theme.colors.white};
`;

export const NavLinkWrapper = styled(NavLink)`
  text-decoration: none;
  color: ${theme.colors.white};
`;

export const RightSideOfHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled(NavLink)`
  margin-right: 10px;
  text-decoration: none;
  color: ${theme.colors.white};
`;
