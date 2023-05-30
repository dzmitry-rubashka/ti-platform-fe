import React, { useState } from "react";
import * as S from "./styles";
import { TabProps } from "./types";

const Tab: React.FC<TabProps> = ({ options }) => {
  const initialTabItemIndex = -1;
  const [activeTabItemIndex, setActiveTabItemIndex] =
    useState(initialTabItemIndex);
  return (
    <>
      <S.TabContainer data-testid="tab-container">
        {options.map((component, indexOfComponent) => (
          <S.TabItem
            key={component.name}
            data-testid="tab-item"
            onClick={() => {
              setActiveTabItemIndex(
                activeTabItemIndex === indexOfComponent
                  ? initialTabItemIndex
                  : indexOfComponent
              );
            }}
          >
            {activeTabItemIndex === options.indexOf(component) ? (
              <S.TabName>{component.name}</S.TabName>
            ) : (
              <S.TabNameUnderline>{component.name}</S.TabNameUnderline>
            )}
          </S.TabItem>
        ))}
      </S.TabContainer>
      <S.Underline />
      <S.TabComponent>
        {activeTabItemIndex !== initialTabItemIndex && (
          <div>{options[activeTabItemIndex].component}</div>
        )}
      </S.TabComponent>
    </>
  );
};
export default Tab;
