import styled from "styled-components";
import theme from "theme";
import { BannerType } from "./types";

export const Wrapper = styled.div`
  width: 100%;
  padding: 16px 0;

  ${(props: { type: BannerType }) =>
    props.type === "warning" &&
    `
    background-color: ${theme.colors.webOrange};
  `}

  ${(props: { type: BannerType }) =>
    props.type === "error" &&
    `
    background-color: ${theme.colors.cloudBurst};
  `}

  ${(props: { type: BannerType }) =>
    props.type === "info" &&
    `
    background-color: ${theme.colors.fiord};
  `}
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.p`
  padding-left: 6px;
  font-style: ${theme.fontStyle.normal};
  font-weight: ${theme.fontWeight.bold};
  font-size: ${theme.fontSizes.small};
  line-height: ${theme.lineHeight.small};
  ${(props: { type: BannerType }) =>
    props.type !== "warning"
      ? `
      color: ${theme.colors.white};
  `
      : `color: ${theme.colors.cloudBurst};`}
`;
