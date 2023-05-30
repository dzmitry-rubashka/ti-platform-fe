import styled from "styled-components";
import theme from "theme";
import { TooltipProps } from "./types";

export const TooltipContainer = styled.div`
  position: relative;
  :hover span {
    visibility: visible;
  }
`;

export const TooltipText = styled.span<TooltipProps>`
  z-index: 1;
  visibility: hidden;
  position: absolute;
  top: 50px;
  left: 20px;
  background-color: ${theme.colors.nileBlue};
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.xsSmall};
  padding: 6px;
  border-radius: 3px;
  display: inline-block;
  ${(props: { maxWidth: TooltipProps }) =>
    props.maxWidth &&
    `
      max-width: ${props.maxWidth}%;
   `}
`;
