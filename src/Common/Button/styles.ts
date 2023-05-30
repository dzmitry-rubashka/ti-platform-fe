import styled from "styled-components";
import theme from "theme";
import { IButtonProps } from "./types";

export const ButtonWrapper = styled.button<IButtonProps>`
  border-radius: 3px;
  font-style: ${theme.fontStyle.normal};
  font-weight: ${theme.fontWeight.normal};
  border: none;
  cursor: pointer;
  transition: ${theme.transition.primary};
  padding: ${(props: { size: string }) =>
    props.size === "large" ? "12px 24px" : "6px 12px"};
  font-size: ${(props: { size: string }) =>
    props.size === "large" ? theme.fontSizes.large : theme.fontSizes.small};
  line-height: ${(props: { size: string }) =>
    props.size === "large" ? theme.lineHeight.large : theme.lineHeight.small};
  ${(props: { variant: string; disabled: boolean }) =>
    props.variant === "secondary" &&
    `
      background: ${props.disabled && theme.colors.downriver04};
      color: ${props.disabled ? theme.colors.hitGray : theme.colors.fiord};
      &:hover {
        background: ${theme.colors.downriver08};
        color: ${theme.colors.fiord};
      }
  `}
  ${(props: { variant: string; disabled: boolean }) =>
    props.variant === "primary" &&
    `
      background: ${
        props.disabled ? theme.colors.downriver04 : theme.colors.scienceBlue
      };
      color: ${theme.colors.white};
      &:hover {
        background: ${theme.colors.blueRibbon};
      }
  `}
  ${(props: { variant: string; disabled: boolean }) =>
    props.variant === "subtle" &&
    `
      background: ${theme.colors.white001};
      color: ${props.disabled ? theme.colors.hitGray : theme.colors.fiord};
      &:hover {
        background: ${theme.colors.downriver08};
      }
  `}

  ${(props: { variant: string; disabled: boolean }) =>
    props.variant === "warning" &&
    `
      background: ${
        props.disabled ? theme.colors.downriver04 : theme.colors.webOrange
      };
      color: ${props.disabled ? theme.colors.hitGray : theme.colors.nileBlue};
      &:hover {
        background: ${theme.colors.amber};
      }
  `}
  ${(props: { variant: string; disabled: boolean }) =>
    props.variant === "danger" &&
    `
      background: ${
        props.disabled ? theme.colors.downriver04 : theme.colors.cloudBurst
      };
      color: ${props.disabled ? theme.colors.hitGray : theme.colors.white};
      &:hover {
        background: ${theme.colors.outrageousOrange};
      }
  `}
`;
