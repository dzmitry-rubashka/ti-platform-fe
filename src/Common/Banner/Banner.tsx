import React from "react";
import WarningIcon from "assets/icons/WarningIcon";
import InfoIcon from "assets/icons/InfoIcon";
import ErrorIcon from "assets/icons/ErrorIcon";
import { BannerProps } from "./types";
import * as S from "./styles";

const Banner: React.FC<BannerProps> = ({ title, type }) => (
  <S.Wrapper type={type}>
    <S.TitleWrapper>
      {type === "warning" && <WarningIcon />}
      {type === "info" && <InfoIcon />}
      {type === "error" && <ErrorIcon />}
      <S.Title type={type}>{title}</S.Title>
    </S.TitleWrapper>
  </S.Wrapper>
);

export default Banner;
