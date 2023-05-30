import React from "react";
import ErrorIcon from "assets/icons/ErrorIcon";
import SuccessIcon from "assets/icons/SuccessIcon";
import * as S from "./styles";
import { IInputProps } from "./types";

const Input: React.FC<IInputProps> = ({
  icon,
  placeholder,
  disabled,
  error,
  success,
  fieldLabel,
  onChange,
}: IInputProps) => (
  <S.InputWrapper>
    <S.InputWrapperWithIcon>
      <S.Input
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        error={error}
        success={success}
        data-testid="input"
      />
      <S.InputIcon>{icon}</S.InputIcon>
    </S.InputWrapperWithIcon>
    {error && (
      <S.InputLabel error={error}>
        <ErrorIcon fill="#DE350B" />
        This field is required.
      </S.InputLabel>
    )}
    {success && (
      <S.InputLabel success={success}>
        <SuccessIcon fill="#00875A" />
        Field validation is successful.
      </S.InputLabel>
    )}
    <S.InputLabel>{fieldLabel}</S.InputLabel>
  </S.InputWrapper>
);

export default Input;
