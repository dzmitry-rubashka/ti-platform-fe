import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { DropdownProps } from "./types";
import * as S from "./styles";

const Dropdown: React.FC<DropdownProps> = ({
  title,
  type,
  options,
  selectedItems,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const onClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setIsActive(!isActive);
  };
  const { t } = useTranslation();
  return (
    <>
      <S.Button onClick={onClick} data-testid="dropdown-button">
        {title ? (
          <S.Choices>{title}</S.Choices>
        ) : (
          <S.Choices>{t("dropdown.choices")}</S.Choices>
        )}{" "}
        <S.Arrow />
        <S.ArrowImg />
      </S.Button>
      <S.Wrapper data-testid="dropdown-container">
        {options.map((item) => (
          <S.ItemsList key={item} data-testid="items-list">
            {isActive && (
              <S.List>
                <label htmlFor={item}>
                  <S.Item>
                    {type === "general select" && (
                      <S.InputClear
                        value={item}
                        data-testid={item}
                        defaultChecked={selectedItems?.includes(item)}
                      />
                    )}
                    {type === "checkbox" && (
                      <S.Input
                        value={item}
                        data-testid={item}
                        defaultChecked={selectedItems?.includes(item)}
                      />
                    )}
                    {type === "radio" && (
                      <S.InputRound
                        value={item}
                        data-testid={item}
                        defaultChecked={selectedItems?.includes(item)}
                      />
                    )}
                    <S.Description>{item}</S.Description>
                  </S.Item>
                </label>
              </S.List>
            )}
          </S.ItemsList>
        ))}
      </S.Wrapper>
    </>
  );
};
export default Dropdown;
