import styled from "styled-components";
import { NavLink } from "react-router-dom";
import theme from "theme";

export const StepsWrapper = styled.ul`
  display: flex;
`;

export const StepItemWrapper = styled.li`
  display: flex;
`;

export const Link = styled(NavLink)`
  font-size: ${theme.fontSizes.small};
  line-height: ${theme.lineHeight.small};
  color: ${theme.colors.slateGray};
  text-decoration: none;
  transition: color 0.6s ease-in-out;
  &:hover {
    color: ${theme.colors.fiord};
  }
`;

export const Separator = styled.span`
  color: ${theme.colors.slateGray};
  padding: 0 8px;
`;
