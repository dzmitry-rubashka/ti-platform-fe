import styled from "styled-components";
import theme from "theme";
import { IModalProps } from "./types";

export const Wrapper = styled.div<IModalProps>`
  width: 100%;
  padding: 24px 0;
  text-align: left;
  background: ${theme.colors.white};
  box-shadow: 0px 3px 5px rgba(9, 30, 66, 0.2),
    0px 0px 1px rgba(9, 30, 66, 0.31);
  border-radius: 3px;
  font-size: ${theme.fontSizes.small};
  font-style: ${theme.fontStyle.normal};
  font-weight: ${theme.fontWeight.regular};
  line-height: ${theme.lineHeight.small};
  color: ${theme.colors.downriver};
  ${(props: { size: string }) =>
    props.size === "medium" &&
    `
    width: 600px;
    height: 236px;
  `}
  ${(props: { size: string }) =>
    props.size === "small" &&
    `
    width: 400px;
    height: 256px;
  `}
  ${(props: { size: string }) =>
    props.size === "large" &&
    `
    width: 752px;
    height: 216px;
  `}
  ${(props: { size: string }) =>
    props.size === "xLarge" &&
    `
    width: 968px;
    height: 196px;
  `}
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-bottom: 16px;
  padding: 0 24px;
`;

export const Title = styled.p<IModalProps>`
  font-weight: ${theme.fontWeight.normal};
  font-size: ${theme.fontSizes.normal};
  line-height: ${theme.lineHeight.medium};
  ${(props: { type: string }) =>
    (props.type === "warning" || props.type === "danger") &&
    `
    padding-left: 9px;
  `}
`;

export const Text = styled.p<IModalProps>`
  margin-bottom: 16px;
  max-height: 100px;
  padding: 0 24px;
  ${(props: { type: string }) =>
    props.type === "scrollable" &&
    `
    overflow-y: scroll;
    padding: 4px 24px;
    border-top: 2px solid ${theme.colors.downriver08};
    border-bottom: 2px solid ${theme.colors.downriver08};
    cursor: pointer;
    ::-webkit-scrollbar {
      width: 7px;
    }
    ::-webkit-scrollbar-thumb {
      height: 40px;
      background: ${theme.colors.gray};
      border-radius: 100px;
      width: 7px;
    }
  `}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  padding: 0 24px;
`;

export const ButtonRight = styled.div`
  margin-left: 8px;
`;
