import React from "react";
import * as S from "./styles";
import { TooltipProps } from "./types";

const Tooltip: React.FC<TooltipProps> = ({
  children,
  tooltipText,
  maxWidth,
}) => (
  <S.TooltipContainer data-testid="tooltip">
    {children}
    <S.TooltipText maxWidth={maxWidth}>{tooltipText}</S.TooltipText>
  </S.TooltipContainer>
);
export default Tooltip;
