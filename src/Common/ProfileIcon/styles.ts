import styled from "styled-components";
import { IProfileIconProps } from "./types";

export const Image = styled.img<IProfileIconProps>`
  border-radius: 64px;
  ${(props: { size: string }) =>
    props.size === "xxlarge" &&
    `
    width: 128px;
    height: 128px;
  `}
  ${(props: { size: string }) =>
    props.size === "xlarge" &&
    `
    width: 96px;
    height: 96px;
  `}
  ${(props: { size: string }) =>
    props.size === "large" &&
    `
    width: 40px;
    height: 40px;
  `}
  ${(props: { size: string }) =>
    props.size === "normal" &&
    `
    width: 32px;
    height: 32px;
  `}
  ${(props: { size: string }) =>
    props.size === "small" &&
    `
    width: 16px;
    height: 16px;
  `}
`;
