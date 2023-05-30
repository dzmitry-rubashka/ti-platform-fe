import React, { useState } from "react";
import theme from "theme";
import InfoIcon from "assets/icons/InfoIcon";
import ErrorIcon from "assets/icons/ErrorIcon";
import WarningIcon from "assets/icons/WarningIcon";
import SuccessIcon from "assets/icons/SuccessIcon";
import CrossIcon from "assets/icons/CrossIcon";
import NotificationArrowIcon from "assets/icons/NotificationArrowIcon";
import Button from "Common/Button";
import { NotificationProps } from "./types";
import * as S from "./styles";

const Notification: React.FC<NotificationProps> = ({
  title,
  description,
  variant,
  type,
  confirmButtonTitle,
  rejectButtonTitle,
  confirmButtonHandleClick,
  rejectButtonHandleClick,
}) => {
  const infoIconColor =
    variant === "colored" ? theme.colors.white : theme.colors.fuchsiaBlue;

  const errorIconColor =
    variant === "colored" ? theme.colors.white : theme.colors.outrageousOrange;

  const warningIconColor =
    variant === "colored" ? theme.colors.cloudBurst : theme.colors.webOrange;

  const successIconColor =
    variant === "colored" ? theme.colors.white : theme.colors.oceanGreen;

  const notificationArrowIconColor =
    type === "warning" ? theme.colors.cloudBurst : theme.colors.white;

  const [isHidden, setIsHidden] = useState<boolean>(variant === "colored");

  const toggleToHide = () => {
    setIsHidden(!isHidden);
  };

  return (
    <S.Wrapper type={type} variant={variant}>
      {type === "info" && <InfoIcon fill={infoIconColor} />}
      {type === "error" && <ErrorIcon fill={errorIconColor} />}
      {type === "warning" && <WarningIcon fill={warningIconColor} />}
      {type === "success" && <SuccessIcon fill={successIconColor} />}
      <S.Content variant={variant} type={type}>
        <S.Title>{title}</S.Title>
        <S.HiddenContent isHidden={isHidden}>
          <S.Description>{description}</S.Description>
          <S.ButtonsWrapper>
            <Button
              size="small"
              variant={variant}
              onClick={confirmButtonHandleClick}
            >
              {confirmButtonTitle}
            </Button>
            {variant === "light" && <S.SeparatorLight />}
            {variant === "colored" && <S.SeparatorColored />}
            <Button
              size="small"
              variant={variant}
              onClick={rejectButtonHandleClick}
            >
              {rejectButtonTitle}
            </Button>
          </S.ButtonsWrapper>
        </S.HiddenContent>
      </S.Content>
      {variant === "light" && <CrossIcon />}
      {variant === "colored" && (
        <NotificationArrowIcon
          fill={notificationArrowIconColor}
          isHidden={isHidden}
          handleClick={toggleToHide}
        />
      )}
    </S.Wrapper>
  );
};

export default Notification;
