import React from "react";
import * as S from "./styles";
import { ProgressBarType } from "./types";

const ProgressBar: React.FC<ProgressBarType> = ({ progress }) => (
  <div data-testid="progress-bar-container">
    <S.Background />
    <S.Progress data-testid="progress-bar-progress" progress={progress} />
  </div>
);
export default ProgressBar;
