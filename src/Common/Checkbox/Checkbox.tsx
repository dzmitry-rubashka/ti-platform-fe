import React from "react";
import * as S from "./styles";
import { CheckboxProps } from "./types";

const Checkbox: React.FC<CheckboxProps> = ({ type, title }) => (
  <S.CheckboxContainer data-testid="checkbox-container">
    <S.Input
      data-testid="checkbox"
      defaultChecked={type === "active" ? 1 : 0}
      disabled={type === "disabled" ? 1 : 0}
    />
    <S.Label>{title}</S.Label>
  </S.CheckboxContainer>
);

export default Checkbox;
