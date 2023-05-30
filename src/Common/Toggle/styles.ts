import styled from "styled-components";
import theme from "theme";
import Cross from "assets/icons/white-cross.svg";
import CheckMark from "assets/icons/white-check-mark.svg";
import { ToggleProps } from "./types";

export const ToggleContainer = styled.div`
  position: relative;
`;

export const CheckBoxLabel = styled.label<ToggleProps>`
  position: absolute;
  left: 0;
  ${(props: { size: string }) =>
    props.size === "regular" &&
    `
    width: 32px;
    height: 16px;
  `}
  ${(props: { size: string }) =>
    props.size === "large" &&
    `
    width: 40px;
    height: 20px;
  `}
  border-radius: 15px;
  background-color: ${theme.colors.slateGray};
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    background: ${theme.colors.white};
    transition: 0.2s;
    ${(props: { size: string }) =>
      props.size === "regular" &&
      `
      width: 11px;
      height: 11px;
      margin: 2.5px;
    `}
    ${(props: { size: string }) =>
      props.size === "large" &&
      `
      width: 15px;
      height: 15px;
      margin: 3px;
    `}
  }
`;

export const CheckBox = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: ${theme.colors.deepSea};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      transition: 0.2s;
      ${(props: { size: string }) =>
        props.size === "regular" &&
        `
        width: 11px;
        height: 11px;
        margin-left: 18px;
      `}
      ${(props: { size: string }) =>
        props.size === "large" &&
        `
        width: 15px;
        height: 15px;
        margin-left: 22px;
      `}
    }
  }
`;

export const CrossImg = styled.label`
  content: url(${Cross});
  position: absolute;
  left: 0;
  ${(props: { size: string }) =>
    props.size === "regular" &&
    `
    margin-left: 20px;
    margin-top: 4px;
    width: 8px;
    height: 8px;
  `}
  ${(props: { size: string }) =>
    props.size === "large" &&
    `
    margin-left: 24px;
    margin-top: 5px;
    width: 10px;
    height: 10px;
  `}
`;

export const CheckMarkImg = styled.label`
  content: url(${CheckMark});
  position: absolute;
  left: 0;
  ${(props: { size: string }) =>
    props.size === "regular" &&
    `
    margin-left: 4.5px;
    margin-top: 4.5px;
    width: 8px;
    height: 7px;
  `}
  ${(props: { size: string }) =>
    props.size === "large" &&
    `
    margin-left: 6px;
    margin-top: 6px;
    width: 10px;
    height: 8px;
  `}
`;
