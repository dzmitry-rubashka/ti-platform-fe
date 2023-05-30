import React from "react";
import * as S from "./styles";
import { IProfileIconProps } from "./types";

const ProfileIcon: React.FC<IProfileIconProps> = ({
  alt,
  src,
  size,
}: IProfileIconProps) => (
  <S.Image alt={alt} src={src} size={size} data-testid="profileIcon" />
);

export default ProfileIcon;
