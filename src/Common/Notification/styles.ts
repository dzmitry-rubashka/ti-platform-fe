import styled from "styled-components";
import theme from "theme";
import { NotificationVariant, NotificationType } from "./types";
import { getColorByType, getBackgroundColorByType } from "./utils";

interface Props {
  variant: NotificationVariant;
  type: NotificationType;
}

export const Wrapper = styled.div<Props>`
  position: relative;
  padding: 20px 16px;
  display: flex;
  border-radius: 3px;
  box-shadow: 0px 8px 12px rgba(9, 30, 66, 0.15),
    0px 0px 1px rgba(9, 30, 66, 0.31);

  ${({ variant, type }: Props) =>
    variant === "colored"
      ? `
    background-color: ${getBackgroundColorByType(type)};
  `
      : `
    background-color: ${theme.colors.white};
  `}
`;

export const Content = styled.div<Props>`
  padding-left: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${({ variant, type }: Props) =>
    variant === "colored"
      ? `
    color: ${getColorByType(type)};
  `
      : `
    color: ${theme.colors.fiord};
  `}
`;

export const Title = styled.p`
  font-style: ${theme.fontStyle.normal};
  font-weight: ${theme.fontWeight.bold};
  font-size: ${theme.fontSizes.small};
  line-height: ${theme.lineHeight.small};
  text-align: left;
`;

export const Description = styled.p`
  padding-top: 4px;
  font-style: ${theme.fontStyle.normal};
  font-weight: ${theme.fontWeight.regular};
  font-size: ${theme.fontSizes.small};
  line-height: ${theme.lineHeight.small};
  text-align: left;
`;

export const SeparatorLight = styled.div`
  margin: 0 8px;
  border-radius: 50%;
  width: 3px;
  height: 3px;
  background-color: ${theme.colors.fiord};
`;

export const SeparatorColored = styled.div`
  margin: 0 4px;
`;

export const ButtonsWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

export const HiddenContent = styled.div`
  ${(props: { isHidden: boolean }) =>
    props.isHidden
      ? `
      visibility: hidden;
      opacity: 0;
      height: 0;
  `
      : `
      opacity: 1;
      height: auto;
  `}
`;
