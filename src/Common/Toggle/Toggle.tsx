import React, { useState } from "react";
import * as S from "./styles";
import { ToggleProps } from "./types";

const Toggle: React.FC<ToggleProps> = ({ size }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleChangeState = () => setIsChecked(!isChecked);
  return (
    <S.ToggleContainer data-testid="toggle-container">
      <S.CheckBox
        id="checkbox"
        data-testid="checkbox"
        size={size}
        onChange={handleChangeState}
      />
      <S.CheckBoxLabel htmlFor="checkbox" size={size} />
      <S.CrossImg htmlFor="checkbox" size={size} />
      <S.CheckMarkImg htmlFor="checkbox" size={size} />
    </S.ToggleContainer>
  );
};
export default Toggle;
