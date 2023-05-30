import styled from "styled-components";
import theme from "theme";

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input.attrs({ type: "checkbox" })`
  width: 16px;
  margin: 5px;
`;

export const Label = styled.span`
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.nileBlue};
`;
