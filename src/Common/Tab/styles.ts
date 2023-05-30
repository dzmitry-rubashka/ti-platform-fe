import styled from "styled-components";
import theme from "theme";

export const TabContainer = styled.div`
  display: flex;
  vertical-align: middle;
  padding-top: 10px;
`;

export const Underline = styled.div`
  background-color: ${theme.colors.athensGray};
  height: 2px;
  width: 90%;
  position: absolute;
  margin-top: -2px;
`;

export const TabItem = styled.button`
  padding: 0;
  position: relative;
  display: flex;
  justify-content: flex-start;
  font-size: ${theme.fontSizes.small};
  z-index: 1;
  margin: 0 8px;
  border: none;
  background-color: ${theme.colors.white};
  align-items: center;
  font-weight: ${theme.fontWeight.bold};
  font-size: ${theme.fontSizes.small};
  line-height: ${theme.lineHeight.xsSmall};
  color: ${theme.colors.scienceBlue};
  cursor: pointer;
  outline: none;
`;

export const TabName = styled.span`
  padding-bottom: 7px;
  text-align: center;
  border-bottom: 2px solid ${theme.colors.scienceBlue};
`;

export const TabNameUnderline = styled.span`
  padding-bottom: 7px;
  color: ${theme.colors.fiord};
  border-bottom: 2px solid ${theme.colors.athensGray};
`;

export const TabComponent = styled.div`
  padding: 10px;
  min-height: 300px;
`;
