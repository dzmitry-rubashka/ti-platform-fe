import React from "react";
import { useTranslation } from "react-i18next";
import Button from "Common/Button";
import * as S from "./styles";

const Localization: React.FC = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language).then();
  };
  return (
    <S.Wrapper data-testid="localization-example">
      <S.Button>
        <Button
          data-testid="en"
          size="small"
          variant="colored"
          onClick={() => changeLanguage("en")}
        >
          EN
        </Button>
      </S.Button>
      <S.Button>
        <Button
          data-testid="ru"
          size="small"
          variant="colored"
          onClick={() => changeLanguage("ru")}
        >
          RU
        </Button>
      </S.Button>
    </S.Wrapper>
  );
};

export default Localization;
