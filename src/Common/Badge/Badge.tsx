import React from "react";
import { BadgeProps } from "./types";
import * as S from "./styles";

const Badge: React.FC<BadgeProps> = ({ count }) => (
  <S.Wrapper>{count}</S.Wrapper>
);

export default Badge;
