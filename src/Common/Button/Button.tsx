import React from "react";
import * as S from "./styles";
import { IButtonProps } from "./types";

const Button: React.FC<IButtonProps> = ({
  size,
  variant,
  disabled,
  onClick,
  children,
}: IButtonProps) => (
  <S.ButtonWrapper
    size={size}
    variant={variant}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </S.ButtonWrapper>
);

export default Button;
