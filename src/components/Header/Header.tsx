import React from "react";
import { useTranslation } from "react-i18next";
import ProfileIcon from "Common/ProfileIcon";
import DefaultProfileIcon from "assets/images/DeafaultProfileIcon.jpg";
import Localization from "localization";
import * as S from "./styles";

const Header: React.FC = () => {
  const { t } = useTranslation();
  return (
    <S.HeaderWrapper data-testid="header">
      <S.NavLinkWrapper to="./">{t("header.title")}</S.NavLinkWrapper>
      <S.RightSideOfHeader>
        <S.Title to="./">{t("header.userProfile")}</S.Title>
        <ProfileIcon
          alt="Profile Photo"
          src={DefaultProfileIcon}
          size="large"
        />
        <Localization />
      </S.RightSideOfHeader>
    </S.HeaderWrapper>
  );
};
export default Header;
