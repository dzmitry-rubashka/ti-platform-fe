import styled from "styled-components";
import theme from "theme";
import { MentionType } from "./types";

export const Wrapper = styled.div`
  padding: 0 4px;
  border-radius: 10px;
  width: fit-content;
  font-size: ${theme.fontSizes.small};
  line-height: ${theme.lineHeight.small};
  ${(props: { type: MentionType }) =>
    props.type === "primary" &&
    `
    color: ${theme.colors.white};
    background-color: ${theme.colors.scienceBlue};
  `}
  ${(props: { type: MentionType }) =>
    props.type === "secondary" &&
    `
    color: ${theme.colors.fiord};
    background-color: ${theme.colors.downriver08};
  `}
`;
