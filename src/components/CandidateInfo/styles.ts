import styled from "styled-components";
import theme from "theme";

export const Wrapper = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid ${theme.colors.downriver13};
  box-shadow: 0px 3px 5px rgba(9, 30, 66, 0.2),
    0px 0px 1px rgba(9, 30, 66, 0.31);
  background-color: ${theme.colors.white};
`;

export const Title = styled.h3`
  padding-bottom: 5px;
  font-family: ${theme.fonts.SFProText};
  font-weight: ${theme.fontWeight.bold};
  font-size: ${theme.fontSizes.normal};
  line-height: ${theme.lineHeight.medium};
  color: ${theme.colors.downriver};
  text-align: left;
`;

export const Subtitle = styled.h5`
  padding: 5px 0;
  font-family: ${theme.fonts.SFProText};
  font-weight: ${theme.fontWeight.bold};
  font-size: ${theme.fontSizes.small};
  line-height: ${theme.lineHeight.small};
  color: ${theme.colors.downriver};
  text-align: left;

  span {
    font-weight: ${theme.fontWeight.regular};
    color: ${theme.colors.downriver};
  }
`;
