import React, { CSSProperties } from "react";
import theme from "theme";
import * as S from "./styles";
import { ISpinnerProps } from "./types";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderWidth: "7px",
};

const Spinner: React.FC<ISpinnerProps> = ({ size, color }: ISpinnerProps) => (
  <S.Spinner
    data-testid="spinner"
    cssOverride={override}
    size={size}
    color={color ? theme.colors.white : theme.colors.fiord}
  />
);

export default Spinner;
