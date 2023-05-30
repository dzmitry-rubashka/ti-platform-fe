import styled from "styled-components";
import ArrowDown from "assets/icons/arrow-down.svg";
import theme from "theme";

export const Wrapper = styled.div`
  position: absolute;
  z-index: 1;
  background-color: ${theme.colors.white};
  border-radius: 3px;
  box-shadow: 0 3px 5px ${theme.colors.downriver20},
    0 0 1px ${theme.colors.downriver31};
  margin-top: 50px;
`;

export const Button = styled.button`
  position: relative;
  display: flex;
  justify-content: flex-start;
  width: 135px;
  height: 32px;
  font-size: ${theme.fontSizes.small};
  padding-left: 12px;
  border-radius: 3px;
  border: none;
  background-color: ${theme.colors.cloudBurst};
  color: ${theme.colors.white};
  align-items: center;
  cursor: pointer;
  margin: 10px 10px 10px 0;
`;

export const Choices = styled.span`
  color: ${theme.colors.white};
`;
export const List = styled.ul`
  font-size: ${theme.fontSizes.small};
`;
export const Item = styled.li`
  display: flex;
  height: 32px;
  padding: 3px 18px 0;
  align-items: center;
`;
export const ItemsList = styled.div`
  display: block;
`;
export const Input = styled.input.attrs({ type: "checkbox" })`
  width: 16px;
  margin: 5px;
`;
export const InputRound = styled.input.attrs({ type: "checkbox" })`
  margin-right: 14px;
  width: 12px;
  height: 12px;
  background-color: ${theme.colors.downriver13};
  border-radius: 50%;
  -webkit-appearance: none;
  :checked {
    background-color: ${theme.colors.gray};
  }
`;
export const Description = styled.div`
  height: 100%;
  border-radius: 3px;
  padding: 2px;
  display: flex;
  align-items: center;
`;
export const Arrow = styled.img`
  height: 8px;
  margin-left: 10px;
`;
export const ArrowImg = styled.label`
  content: url(${ArrowDown});
  width: 12%;
`;

export const InputClear = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  margin-left: -20px;
  &:checked + ${Description} {
    background-color: ${theme.colors.cloudBurst};
    color: ${theme.colors.white};
  }
`;
