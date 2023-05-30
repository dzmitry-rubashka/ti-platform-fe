import styled from "styled-components";
import theme from "theme";

export const Message = styled.p`
  padding-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${theme.fontWeight.normal};
  font-style: ${theme.fontStyle.normal};
  line-height: ${theme.lineHeight.large};
`;
