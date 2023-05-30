import React from "react";
import { useTranslation } from "react-i18next";
import Header from "components/Header";
import * as S from "./styles";

const Fallback: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <S.Message>{t("fallback.errorMessage")}</S.Message>
    </>
  );
};

export default Fallback;
