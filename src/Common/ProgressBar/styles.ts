import styled from "styled-components";
import theme from "theme";
import { ProgressBarType } from "./types";

export const ProgressBar = styled.div`
  height: 6px;
  border-radius: 3px;
  background-color: ${theme.colors.fiord};
  position: absolute;
`;

export const Background = styled(ProgressBar)`
  background-color: ${theme.colors.mischka};
  width: 100%;
`;

export const Progress = styled(ProgressBar)`
  background-color: ${theme.colors.fiord};
  width: ${(props: { progress: ProgressBarType }) => props.progress}%;
`;
