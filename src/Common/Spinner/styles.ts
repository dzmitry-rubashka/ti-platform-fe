import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";
import { ISpinnerProps } from "./types";

export const Spinner = styled(ClipLoader)<ISpinnerProps>`
  ${(props: { size: string }) =>
    props.size === "xlarge" &&
    `
    width: 96px;
    height: 96px;
  `}
  ${(props: { size: string }) =>
    props.size === "large" &&
    `
    width: 48px;
    height: 48px;
  `}
  ${(props: { size: string }) =>
    props.size === "medium" &&
    `
    width: 24px;
    height: 24px;
  `}
  ${(props: { size: string }) =>
    props.size === "small" &&
    `
    width: 16px;
    height: 16px;
  `}
  ${(props: { size: string }) =>
    props.size === "xsmall" &&
    `
    width: 8px;
    height: 8px;
  `}
`;
