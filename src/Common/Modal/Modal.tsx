import React from "react";
import { useTranslation } from "react-i18next";
import ErrorIcon from "assets/icons/ErrorIcon";
import WarningIcon from "assets/icons/WarningIcon";
import Button from "Common/Button";
import theme from "theme";
import * as S from "./styles";
import { IModalProps } from "./types";

const Modal: React.FC<IModalProps> = ({
  title,
  type,
  size,
  text,
  textButton,
}: IModalProps) => {
  const { t } = useTranslation();
  return (
    <S.Wrapper size={size}>
      <S.TitleWrapper>
        {type === "warning" && <WarningIcon fill={theme.colors.webOrange} />}
        {type === "danger" && (
          <ErrorIcon fill={theme.colors.outrageousOrange} />
        )}
        <S.Title type={type}>{title}</S.Title>
      </S.TitleWrapper>
      <S.Text type={type}>{text}</S.Text>
      <S.ButtonWrapper data-testid="warning-button">
        <Button size="small" variant="subtle">
          {t("modal.cancel")}
        </Button>
        <S.ButtonRight>
          {type === "warning" && (
            <Button size="small" variant="warning">
              {textButton}
            </Button>
          )}
          {type === "danger" && (
            <Button size="small" variant="danger">
              {textButton}
            </Button>
          )}
          {(type === "default" || type === "scrollable") && (
            <Button size="small" variant="primary">
              {textButton}
            </Button>
          )}
        </S.ButtonRight>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

export default Modal;
